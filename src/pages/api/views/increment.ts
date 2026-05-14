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

    const viewsKey = `views:${slug}`;
    const likesKey = `likes:${slug}`;
    
    // Atomically increment views
    const newViewCount = await atomicIncrement(KV, viewsKey, 1);
    
    // Get current likes count (non-atomic read is fine here)
    const currentLikes = await KV.get(likesKey);
    const likeCount = currentLikes ? parseInt(currentLikes, 10) : 0;

    return jsonResponse({ 
      success: true, 
      views: newViewCount,
      likes: likeCount,
      slug
    });
  } catch (error) {
    console.error('Error incrementing views:', error);
    return errorResponse('Failed to increment views', 500);
  }
};
