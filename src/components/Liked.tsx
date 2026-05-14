import React, { useState, useEffect, useCallback } from 'react';
import { baseUrl } from '../lib/base-url';

export interface LikedProps {
  /** Storage key for localStorage (makes each instance independent) */
  storageKey?: string;
  /** Slug/ID for tracking this specific item */
  slug?: string;
  /** Text to show when not liked */
  unlikedText?: string;
  /** Text to show when liked */
  likedText?: string;
  /** Whether to show the like count in the button text */
  showCount?: boolean;
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Auto-track view on mount */
  autoTrackView?: boolean;
  /** Children elements */
  children?: React.ReactNode;
}

export function Liked({
  storageKey = 'user_has_liked',
  slug = 'global',
  unlikedText = 'Like',
  likedText = 'Liked',
  showCount = false,
  className = '',
  style = {},
  autoTrackView = false,
  children
}: LikedProps) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [likeCount, setLikeCount] = useState<number | null>(null);
  const [viewCount, setViewCount] = useState<number | null>(null);

  // Load initial state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === 'true') {
        setLiked(true);
      }
    } catch (error) {
      console.error('Error reading localStorage:', error);
    }
  }, [storageKey]);

  // Auto-track view on mount
  useEffect(() => {
    if (!autoTrackView) return;

    const trackView = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/views/increment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug })
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setViewCount(data.views);
            setLikeCount(data.likes);
          }
        }
      } catch (error) {
        console.error('Error tracking view:', error);
      }
    };

    trackView();
  }, [autoTrackView, slug]);

  const handleClick = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      const newLiked = !liked;
      const endpoint = newLiked
        ? `${baseUrl}/api/likes/increment`
        : `${baseUrl}/api/likes/decrement`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug })
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success && typeof data.likes === 'number') {
          setLiked(newLiked);
          setLikeCount(data.likes);
          if (data.views !== undefined) {
            setViewCount(data.views);
          }

          // Save to localStorage
          try {
            localStorage.setItem(storageKey, newLiked.toString());
          } catch (error) {
            console.error('Error writing to localStorage:', error);
          }

          // Emit custom event for other components
          window.dispatchEvent(
            new CustomEvent('likes:updated', {
              detail: {
                slug,
                likes: data.likes,
                views: data.views,
                liked: newLiked,
                storageKey
              }
            })
          );
        }
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setLoading(false);
    }
  }, [liked, loading, storageKey, slug]);

  const displayText = liked ? likedText : unlikedText;
  const fullText = showCount && likeCount !== null
    ? `${displayText} (${likeCount})`
    : displayText;

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      aria-pressed={liked}
      aria-label={displayText}
      data-liked={liked}
      data-loading={loading}
      data-slug={slug}
      className={`${className} ${liked ? 'is-active' : ''}`}
      style={{
        cursor: loading ? 'wait' : 'pointer',
        opacity: loading ? 0.6 : 1,
        ...style
      }}
    >
      {children || fullText}
    </button>
  );
}
