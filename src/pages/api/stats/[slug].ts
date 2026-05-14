import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, locals }) => {
  try {
    const { slug } = params;
    
    if (!slug) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Slug parameter required' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

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

    // Get counts for this specific slug
    const viewsKey = `views:${slug}`;
    const likesKey = `likes:${slug}`;
    
    const [viewsData, likesData] = await Promise.all([
      KV.get(viewsKey),
      KV.get(likesKey)
    ]);
    
    const views = viewsData ? parseInt(viewsData, 10) : 0;
    const likes = likesData ? parseInt(likesData, 10) : 0;

    return new Response(
      JSON.stringify({ 
        success: true, 
        slug,
        views,
        likes
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error fetching stats:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to fetch stats' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
