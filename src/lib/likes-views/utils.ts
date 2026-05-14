/**
 * Utility functions for likes/views system
 */

import type { StatsUpdateDetail } from './types';

/**
 * Get the user's liked state from localStorage
 */
export function getUserLikeState(storageKey: string = 'user_has_liked'): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const value = localStorage.getItem(storageKey);
    return value === 'true';
  } catch {
    return false;
  }
}

/**
 * Set the user's liked state in localStorage
 */
export function setUserLikeState(liked: boolean, storageKey: string = 'user_has_liked'): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(storageKey, String(liked));
  } catch {
    // Silently fail if localStorage is not available
  }
}

/**
 * Trigger a custom event to notify other components that stats have been updated
 */
export function triggerStatsRefresh(detail: StatsUpdateDetail): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent('likes:updated', {
      detail,
      bubbles: true,
    })
  );
}
