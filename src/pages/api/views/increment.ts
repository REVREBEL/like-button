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

    const viewsKey = `views:${slug}`;
    const likesKey = `likes:${slug}`;
    
    // Get current counts
    const [currentViews, currentLikes] = await Promise.all([
      KV.get(viewsKey),
      KV.get(likesKey)
    ]);
    
    const viewCount = currentViews ? parseInt(currentViews, 10) : 0;
    const likeCount = currentLikes ? parseInt(currentLikes, 10) : 0;
    
    // Increment views
    const newViewCount = viewCount + 1;
    await KV.put(viewsKey, newViewCount.toString());

    return new Response(
      JSON.stringify({ 
        success: true, 
        views: newViewCount,
        likes: likeCount,
        slug
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error incrementing views:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to increment views' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
