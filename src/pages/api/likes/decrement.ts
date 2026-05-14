import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const KV = locals?.runtime?.env?.LIKES_VIEWS_KV;
    
    if (!KV) {
      console.error('KV namespace not found');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Storage not configured' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Try to get slug from request body
    let slug = 'global'; // Default fallback
    try {
      const body = await request.json();
      if (body.slug) {
        slug = body.slug;
      }
    } catch {
      // If no body or invalid JSON, use default
    }

    const likesKey = `likes:${slug}`;
    const viewsKey = `views:${slug}`;
    
    // Get current counts
    const [currentLikes, currentViews] = await Promise.all([
      KV.get(likesKey),
      KV.get(viewsKey)
    ]);
    
    const likeCount = currentLikes ? parseInt(currentLikes, 10) : 0;
    const viewCount = currentViews ? parseInt(currentViews, 10) : 0;
    
    // Decrement likes (never below 0)
    const newLikeCount = Math.max(0, likeCount - 1);
    await KV.put(likesKey, newLikeCount.toString());

    return new Response(
      JSON.stringify({ 
        success: true, 
        likes: newLikeCount,
        views: viewCount,
        slug
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error decrementing likes:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to decrement likes' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
