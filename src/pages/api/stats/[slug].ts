import type { APIRoute } from 'astro';
import { jsonResponse, optionsResponse, errorResponse } from '../../../lib/likes-views/cors';

export const OPTIONS: APIRoute = async () => {
  return optionsResponse();
};

export const GET: APIRoute = async ({ params, locals }) => {
  try {
    const { slug } = params;
    
    if (!slug) {
      return errorResponse('Slug parameter required', 400);
    }

    const KV = locals?.runtime?.env?.LIKES_VIEWS_KV;
    
    if (!KV) {
      console.error('KV namespace not found');
      return errorResponse('Storage not configured', 500);
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

    return jsonResponse({ 
      success: true, 
      slug,
      views,
      likes
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return errorResponse('Failed to fetch stats', 500);
  }
};
