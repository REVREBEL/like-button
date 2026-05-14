import React, { useState, useEffect, useCallback } from 'react';
import { DevLinkProvider } from '../site-components/DevLinkProvider';
import { Liked as DevLinkLiked } from '../site-components/Liked';
import { baseUrl } from '../lib/base-url';

export interface LikedWrapperProps {
  /** Slug/ID for tracking this specific item (REQUIRED) */
  slug: string;
  /** Initial like count */
  initialLikes?: number;
  /** Initial view count */
  initialViews?: number;
  /** Text to show when not liked */
  unlikedText?: string;
  /** Text to show when liked */
  likedText?: string;
  /** Auto-track view on mount */
  autoTrackView?: boolean;
  /** Color variant */
  optionsColorVariants?: 'Primary' | 'Light' | 'Color 2' | 'Color 7';
  /** Position variant */
  optionsPositionVariant?: string;
  /** Size variant */
  optionsSizeVariant?: string;
  /** Show icon */
  optionsIconVisibility?: boolean;
  /** Show count */
  optionsLikesCountVisibility?: boolean;
  /** Show label */
  optionsLikesLabelVisibility?: boolean;
}

export function LikedWrapper({
  slug,
  initialLikes = 0,
  initialViews = 0,
  unlikedText = 'Like',
  likedText = 'Liked',
  autoTrackView = true,
  optionsColorVariants = 'Primary',
  optionsPositionVariant = 'Primary',
  optionsSizeVariant = 'Primary',
  optionsIconVisibility = true,
  optionsLikesCountVisibility = true,
  optionsLikesLabelVisibility = true
}: LikedWrapperProps) {
  // State
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [viewsCount, setViewsCount] = useState(initialViews);
  const [isLoading, setIsLoading] = useState(false);

  // Load initial state from localStorage
  useEffect(() => {
    console.log('[LikedWrapper] Component mounted for slug:', slug);
    try {
      const storedLiked = localStorage.getItem(`liked_${slug}`);
      console.log('[LikedWrapper] Stored liked state:', storedLiked);
      if (storedLiked === 'true') {
        setIsLiked(true);
      }
    } catch (error) {
      console.error('[LikedWrapper] Error reading localStorage:', error);
    }
  }, [slug]);

  // Track view on mount
  useEffect(() => {
    if (!autoTrackView) return;

    const trackView = async () => {
      console.log('[LikedWrapper] Tracking view for slug:', slug);
      try {
        const response = await fetch(`${baseUrl}/api/views/increment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug })
        });

        console.log('[LikedWrapper] View tracking response:', response.status);

        if (response.ok) {
          const data = await response.json();
          console.log('[LikedWrapper] View tracking data:', data);
          if (data.success) {
            setLikesCount(data.likes);
            setViewsCount(data.views);
          }
        }
      } catch (error) {
        console.error('[LikedWrapper] Error tracking view:', error);
      }
    };

    trackView();
  }, [slug, autoTrackView]);

  // Handle like toggle
  const handleLikeToggle = useCallback(async (e: React.MouseEvent) => {
    console.log('[LikedWrapper] Click handler fired!', { isLoading, isLiked });
    
    // Prevent event bubbling
    e.preventDefault();
    e.stopPropagation();
    
    if (isLoading) {
      console.log('[LikedWrapper] Already loading, ignoring click');
      return;
    }

    console.log('[LikedWrapper] Processing like toggle for slug:', slug);
    setIsLoading(true);
    const newLikedState = !isLiked;

    try {
      const endpoint = newLikedState 
        ? `${baseUrl}/api/likes/increment`
        : `${baseUrl}/api/likes/decrement`;

      console.log('[LikedWrapper] Making request to:', endpoint);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug })
      });

      console.log('[LikedWrapper] Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('[LikedWrapper] Response data:', data);
        
        if (data.success && typeof data.likes === 'number') {
          // Update state
          console.log('[LikedWrapper] Updating state - liked:', newLikedState, 'likes:', data.likes);
          setIsLiked(newLikedState);
          setLikesCount(data.likes);
          if (data.views !== undefined) {
            setViewsCount(data.views);
          }

          // Save to localStorage
          try {
            localStorage.setItem(`liked_${slug}`, newLikedState.toString());
            console.log('[LikedWrapper] Saved to localStorage');
          } catch (error) {
            console.error('[LikedWrapper] Error saving to localStorage:', error);
          }

          // Emit custom event
          window.dispatchEvent(new CustomEvent('likes:updated', {
            detail: {
              slug,
              likes: data.likes,
              views: data.views,
              liked: newLikedState
            }
          }));
        }
      } else {
        console.error('[LikedWrapper] API error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('[LikedWrapper] Error toggling like:', error);
    } finally {
      setIsLoading(false);
      console.log('[LikedWrapper] Loading complete');
    }
  }, [slug, isLiked, isLoading]);

  // Determine the current display text based on liked state
  const currentButtonText = isLiked ? likedText : unlikedText;

  console.log('[LikedWrapper] Rendering with state:', { isLiked, likesCount, currentButtonText });

  return (
    <DevLinkProvider>
      <div 
        onClick={handleLikeToggle}
        style={{ 
          cursor: isLoading ? 'wait' : 'pointer',
          userSelect: 'none'
        }}
      >
        <DevLinkLiked
          dataDataSlug={slug}
          optionsIsActive={isLiked}
          likesLikeCountsText={likesCount.toString()}
          likesLikesLabelText={currentButtonText}
          likesLikedButtonLabelText={likedText}
          likesUnlikedButtonLabelText={unlikedText}
          optionsColorVariants={optionsColorVariants}
          optionsPositionVariant={optionsPositionVariant}
          optionsSizeVariant={optionsSizeVariant}
          optionsIconVisibility={optionsIconVisibility}
          optionsLikesCountVisibility={optionsLikesCountVisibility}
          optionsLikesLabelVisibility={optionsLikesLabelVisibility}
        />
      </div>
    </DevLinkProvider>
  );
}
