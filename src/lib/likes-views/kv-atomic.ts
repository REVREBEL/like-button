/**
 * Atomic increment/decrement operations for Cloudflare KV
 * 
 * Since KV doesn't support native atomic operations, we implement
 * optimistic locking with retries to prevent race conditions.
 */

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 50;

interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
}

/**
 * Atomically increment a counter in KV with retry logic
 */
export async function atomicIncrement(
  kv: KVNamespace,
  key: string,
  delta: number = 1
): Promise<number> {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      // Read current value
      const current = await kv.get(key);
      const currentValue = current ? parseInt(current, 10) : 0;
      
      // Calculate new value
      const newValue = currentValue + delta;
      
      // Write new value
      await kv.put(key, newValue.toString());
      
      // Verify the write succeeded by reading back
      const verification = await kv.get(key);
      const verifiedValue = verification ? parseInt(verification, 10) : 0;
      
      // If our write was successful, return
      if (verifiedValue >= newValue) {
        return newValue;
      }
      
      // If verification failed, retry
      if (attempt < MAX_RETRIES - 1) {
        await sleep(RETRY_DELAY_MS * (attempt + 1));
      }
    } catch (error) {
      if (attempt === MAX_RETRIES - 1) {
        throw error;
      }
      await sleep(RETRY_DELAY_MS * (attempt + 1));
    }
  }
  
  throw new Error(`Failed to atomically increment ${key} after ${MAX_RETRIES} attempts`);
}

/**
 * Atomically decrement a counter in KV with retry logic
 * Never goes below 0
 */
export async function atomicDecrement(
  kv: KVNamespace,
  key: string,
  delta: number = 1
): Promise<number> {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      // Read current value
      const current = await kv.get(key);
      const currentValue = current ? parseInt(current, 10) : 0;
      
      // Calculate new value (never below 0)
      const newValue = Math.max(0, currentValue - delta);
      
      // Write new value
      await kv.put(key, newValue.toString());
      
      // Verify the write succeeded by reading back
      const verification = await kv.get(key);
      const verifiedValue = verification ? parseInt(verification, 10) : 0;
      
      // If our write was successful, return
      if (verifiedValue === newValue) {
        return newValue;
      }
      
      // If verification failed, retry
      if (attempt < MAX_RETRIES - 1) {
        await sleep(RETRY_DELAY_MS * (attempt + 1));
      }
    } catch (error) {
      if (attempt === MAX_RETRIES - 1) {
        throw error;
      }
      await sleep(RETRY_DELAY_MS * (attempt + 1));
    }
  }
  
  throw new Error(`Failed to atomically decrement ${key} after ${MAX_RETRIES} attempts`);
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
