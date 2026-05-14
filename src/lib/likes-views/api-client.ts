/**
 * Client-side API functions for likes/views
 */

import { baseUrl } from '../base-url';
import type { LikeResponse, ViewResponse, StatsResponse } from './types';

/**
 * Increment the view counter for a specific slug
 */
export async function incrementViews(slug: string): Promise<ViewResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/views/increment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      return {
        success: false,
        error: (error as { error?: string }).error || 'Failed to increment views',
      };
    }

    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

/**
 * Increment the like counter for a specific slug
 */
export async function incrementLikes(slug: string): Promise<LikeResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/likes/increment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      return {
        success: false,
        error: (error as { error?: string }).error || 'Failed to increment likes',
      };
    }

    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

/**
 * Decrement the like counter for a specific slug
 */
export async function decrementLikes(slug: string): Promise<LikeResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/likes/decrement`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      return {
        success: false,
        error: (error as { error?: string }).error || 'Failed to decrement likes',
      };
    }

    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

/**
 * Get current stats (likes and views) for a specific slug
 */
export async function getStats(slug: string): Promise<StatsResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/stats/${encodeURIComponent(slug)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      return {
        success: false,
        error: (error as { error?: string }).error || 'Failed to get stats',
      };
    }

    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}
