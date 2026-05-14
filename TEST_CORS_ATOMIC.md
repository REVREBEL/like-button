# Testing CORS and Atomic Operations

## Quick Verification Checklist

### ✅ Build Status
- [x] Code compiles without errors
- [x] TypeScript types are valid
- [x] All imports resolve correctly

### 🧪 Local Testing

#### Test 1: OPTIONS Requests (CORS Preflight)
```bash
# Test views endpoint
curl -X OPTIONS http://localhost:3000/api/views/increment -v

# Expected: 204 No Content with CORS headers
# Access-Control-Allow-Origin: *
# Access-Control-Allow-Methods: GET, POST, OPTIONS
# Access-Control-Allow-Headers: Content-Type, Authorization
```

#### Test 2: POST with CORS Headers
```bash
# Test likes increment
curl -X POST http://localhost:3000/api/likes/increment \
  -H "Content-Type: application/json" \
  -d '{"slug":"test-article"}' \
  -v

# Expected: 200 OK with CORS headers + JSON response
```

#### Test 3: Concurrent Requests (Atomic Test)
```bash
# Send 10 concurrent requests to same slug
for i in {1..10}; do
  curl -X POST http://localhost:3000/api/likes/increment \
    -H "Content-Type: application/json" \
    -d '{"slug":"atomic-test"}' &
done
wait

# Then check the count
curl http://localhost:3000/api/stats/atomic-test

# Expected: likes should be exactly 10 (not less due to race conditions)
```

### 🌐 Production Testing

#### Test 1: Cross-Origin Request from Browser Console

Open browser console on ANY website and run:

```javascript
// Test from external origin
fetch('https://your-app.webflow.io/api/likes/increment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ slug: 'cross-origin-test' })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);

// Should succeed without CORS errors
```

#### Test 2: Embed Script Test

Create a test HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>CORS Test</title>
</head>
<body>
  <h1>Testing Likes/Views from External Site</h1>
  <div id="result"></div>
  
  <script>
    const API_BASE = 'https://your-app.webflow.io';
    
    async function testAPI() {
      try {
        // Test increment
        const response = await fetch(`${API_BASE}/api/likes/increment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: 'embed-test' })
        });
        
        const data = await response.json();
        document.getElementById('result').innerHTML = 
          `✅ Success! Likes: ${data.likes}, Views: ${data.views}`;
      } catch (error) {
        document.getElementById('result').innerHTML = 
          `❌ Error: ${error.message}`;
      }
    }
    
    testAPI();
  </script>
</body>
</html>
```

Host this on a different domain and verify it works.

#### Test 3: Load Testing (Atomic Operations)

Use a tool like Apache Bench or wrk:

```bash
# Install wrk (if not available, use ab)
# Send 100 requests with 10 concurrent connections
wrk -t10 -c10 -d5s --timeout 10s \
  -s post.lua \
  https://your-app.webflow.io/api/likes/increment

# post.lua content:
# wrk.method = "POST"
# wrk.body = '{"slug":"load-test"}'
# wrk.headers["Content-Type"] = "application/json"

# After test, check count:
curl https://your-app.webflow.io/api/stats/load-test

# Count should match total requests sent
```

## Expected Behavior

### CORS Headers in All Responses:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400
Content-Type: application/json
```

### OPTIONS Response:
- Status: 204 No Content
- No body
- CORS headers present

### POST/GET Responses:
- Status: 200 OK (or appropriate error code)
- JSON body with data
- CORS headers present

### Atomic Operations:
- No lost increments under concurrent load
- Final count matches expected value
- Retry logs may appear for high contention (normal)

## Troubleshooting

### Issue: CORS errors in browser
**Check:**
- OPTIONS handler is present
- CORS headers are in response
- No typos in header names

**Fix:**
- Verify `cors.ts` is imported correctly
- Check response uses `jsonResponse()` helper

### Issue: Lost increments under load
**Check:**
- Using `atomicIncrement()` not direct KV.put()
- Retry logic is working
- No errors in logs

**Fix:**
- Verify `kv-atomic.ts` is imported
- Check KV namespace is available
- Increase MAX_RETRIES if needed

### Issue: Slow responses
**Check:**
- How many retries are happening
- KV latency
- Network conditions

**Fix:**
- Normal: 1-2 retries occasionally
- High contention: Consider rate limiting
- Persistent issues: Check KV health

## Monitoring

### Key Metrics to Watch:
1. **CORS Preflight Cache Hit Rate**
   - Should be high (24hr cache)
   - Low rate = clients not caching

2. **Atomic Operation Retry Rate**
   - Normal: <5% of requests retry
   - High: >20% indicates contention

3. **Error Rate**
   - Should be near 0%
   - Spikes indicate issues

4. **Response Time**
   - Normal: <100ms
   - With retries: <500ms
   - >1s indicates problems

### Logging

Check Cloudflare logs for:
```
"Error incrementing likes" - Application error
"Failed to atomically increment" - Retry exhausted
"KV namespace not found" - Configuration issue
```

## Success Criteria

✅ All tests pass  
✅ No CORS errors from external sites  
✅ Concurrent requests don't lose counts  
✅ Response times acceptable  
✅ No errors in production logs  

## Next Steps After Testing

1. Monitor for 24-48 hours
2. Check retry rates
3. Verify counts are accurate
4. Adjust MAX_RETRIES if needed
5. Consider rate limiting if abuse detected
