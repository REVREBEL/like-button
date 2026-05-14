import type { APIRoute } from 'astro';
import { atomicIncrement } from '../../../lib/likes-views/kv-atomic';
import { jsonResponse, optionsResponse, errorResponse } from '../../../lib/likes-views/cors';

export const OPTIONS: APIRoute = async () => {
  return optionsResponse();
};

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const KV = locals?.runtime?.env?.LIKES_VIEWS_KV;
    
    if (!KV) {
      console.error('KV namespace not found');
      return errorResponse('Storage not configured', 500);
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
    
    // Atomically increment likes
    const newLikeCount = await atomicIncrement(KV, likesKey, 1);
    
    // Get current views count (non-atomic read is fine here)
    const currentViews = await KV.get(viewsKey);
    const viewCount = currentViews ? parseInt(currentViews, 10) : 0;

    return jsonResponse({ 
      success: true, 
      likes: newLikeCount,
      views: viewCount,
      slug
    });
  } catch (error) {
    console.error('Error incrementing likes:', error);
    return errorResponse('Failed to increment likes', 500);
  }
};
