/**
 * Likes & Views Tracking System for Webflow (Simple HTML)
 * 
 * Two-category tracking:
 * 1. Views (passive) - Auto-tracked on page load
 * 2. Likes (active) - User clicks to like, stored in localStorage
 * 
 * WEBFLOW SETUP:
 * 
 * 1. Add script to your site (before </body>):
 *    <script>window.LIKES_API_BASE = 'YOUR_APP_BASE_URL';</script>
 *    <script src="YOUR_APP_URL/likes-views-embed.js"></script>
 * 
 * 2. AUTO-TRACK VIEWS (place on any element):
 *    data-action-view="{slug}"
 * 
 * 3. LIKE BUTTON (clickable element):
 *    data-action-like="{slug}"
 *    data-storage-key="{slug}"
 * 
 * 4. TEXT TO CHANGE (on the text element inside button):
 *    data-unliked-text="Like"
 *    data-liked-text="Liked" (or data-liked-button="Liked")
 * 
 * 5. DISPLAY COUNTS (text elements):
 *    data-metric-view="{slug}"  ← Shows view count
 *    data-metric-like="{slug}"  ← Shows like count
 * 
 * NOTE: This script does NOT modify is-active classes.
 * If you're using Webflow DevLink components, use likes-views-devlink.js instead.
 */

(function() {
  'use strict';

  const API_BASE = window.LIKES_API_BASE || '';
  const VIEWS_ENDPOINT = `${API_BASE}/api/views/increment`;
  const LIKES_INCREMENT_ENDPOINT = `${API_BASE}/api/likes/increment`;
  const LIKES_DECREMENT_ENDPOINT = `${API_BASE}/api/likes/decrement`;
  
  console.log('[Likes] API Configuration:', {
    API_BASE: API_BASE,
    VIEWS_ENDPOINT: VIEWS_ENDPOINT,
    LIKES_INCREMENT_ENDPOINT: LIKES_INCREMENT_ENDPOINT,
    LIKES_DECREMENT_ENDPOINT: LIKES_DECREMENT_ENDPOINT
  });
  
  const processedViews = new Set();
  
  // Helper: Get user's liked state from localStorage
  function getUserLikeState(slug) {
    try {
      const key = `liked_${slug}`;
      return localStorage.getItem(key) === 'true';
    } catch (error) {
      console.error('[Likes] Error reading localStorage:', error);
      return false;
    }
  }
  
  // Helper: Save user's liked state to localStorage
  function setUserLikeState(liked, slug) {
    try {
      const key = `liked_${slug}`;
      localStorage.setItem(key, liked.toString());
    } catch (error) {
      console.error('[Likes] Error writing to localStorage:', error);
    }
  }
  
  // Helper: Update all metric displays for a slug
  function updateMetrics(slug, data) {
    if (!slug) return;
    
    // Update like counts
    if (data.likes !== null && data.likes !== undefined) {
      const likeElements = document.querySelectorAll(`[data-metric-like="${slug}"]`);
      likeElements.forEach(function(el) {
        el.textContent = data.likes;
      });
    }
    
    // Update view counts
    if (data.views !== null && data.views !== undefined) {
      const viewElements = document.querySelectorAll(`[data-metric-view="${slug}"]`);
      viewElements.forEach(function(el) {
        el.textContent = data.views;
      });
    }
  }
  
  // Helper: Find the text target element within button
  function findTextTarget(button) {
    const textTarget = button.querySelector('[data-unliked-text][data-liked-text], [data-unliked-text][data-liked-button]');
    
    if (textTarget) {
      console.log('[Likes] Found text target with data attributes:', textTarget);
      return textTarget;
    }
    
    console.log('[Likes] No text target found with required data attributes');
    return null;
  }
  
  // Helper: Update button UI
  function updateButtonUI(button, liked, loading) {
    console.log('[Likes] updateButtonUI called:', { liked, loading });
    
    // Find the text target element
    const textTarget = findTextTarget(button);
    
    if (textTarget) {
      const unlikedText = textTarget.getAttribute('data-unliked-text') || 'Like';
      const likedText = textTarget.getAttribute('data-liked-text') || 
                        textTarget.getAttribute('data-liked-button') || 
                        'Liked';
      const newText = liked ? likedText : unlikedText;
      
      console.log('[Likes] Updating text target to:', newText);
      textTarget.textContent = newText;
      
      textTarget.style.position = 'relative';
      textTarget.style.zIndex = '10';
      
      button.setAttribute('aria-label', newText);
    } else {
      const unlikedText = button.getAttribute('data-unliked-text') || 'Like';
      const likedText = button.getAttribute('data-liked-text') || 
                        button.getAttribute('data-liked-button') || 
                        'Liked';
      
      if (button.children.length === 0) {
        const newText = liked ? likedText : unlikedText;
        console.log('[Likes] Button has no children, updating entire text to:', newText);
        button.textContent = newText;
      } else {
        console.log('[Likes] Button has children but no text target found - preserving all content');
      }
      
      button.setAttribute('aria-label', liked ? likedText : unlikedText);
    }
    
    // Update data attributes
    button.setAttribute('data-liked', liked);
    button.setAttribute('data-loading', loading);
    button.setAttribute('aria-pressed', liked);
    
    // Update styles for loading state
    if (loading) {
      button.style.cursor = 'wait';
      button.style.opacity = '0.6';
      button.style.pointerEvents = 'none';
    } else {
      button.style.cursor = '';
      button.style.opacity = '';
      button.style.pointerEvents = '';
    }
    
    // Ensure button stays visible
    const currentPosition = window.getComputedStyle(button).position;
    if (currentPosition === 'static') {
      button.style.position = 'relative';
    }
    button.style.zIndex = '1';
    
    // DO NOT modify is-active class - that's controlled by Webflow component state
    console.log('[Likes] Button UI updated, NOT modifying is-active class');
  }
  
  // Helper: Call API endpoint
  async function callAPI(endpoint, slug) {
    try {
      console.log(`[Likes] Calling API: ${endpoint} with slug: ${slug}`);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug: slug })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`[Likes] API response:`, data);
      return data;
    } catch (error) {
      console.error('[Likes] API call failed:', error);
      return { success: false, error: error.message };
    }
  }
  
  // Process view tracking
  async function processViewTracking(element) {
    const slug = element.getAttribute('data-action-view');
    
    if (!slug || processedViews.has(slug)) {
      return;
    }
    
    processedViews.add(slug);
    
    console.log(`[Views] Recording view for: ${slug}`);
    
    const data = await callAPI(VIEWS_ENDPOINT, slug);
    
    if (data.success) {
      updateMetrics(slug, {
        views: data.views,
        likes: data.likes
      });
      
      window.dispatchEvent(new CustomEvent('views:updated', {
        detail: {
          slug: slug,
          views: data.views,
          likes: data.likes
        }
      }));
    }
  }
  
  // Process like button click
  async function handleLikeClick(button) {
    const slug = button.getAttribute('data-action-like') || button.getAttribute('data-storage-key');
    
    if (!slug) {
      console.error('[Likes] No slug found on button');
      return;
    }
    
    const currentLiked = getUserLikeState(slug);
    const isLoading = button.getAttribute('data-loading') === 'true';
    
    if (isLoading) return;
    
    console.log(`[Likes] Toggling like for: ${slug}, current state: ${currentLiked}`);
    
    // Set loading state
    updateButtonUI(button, currentLiked, true);
    
    try {
      const newLiked = !currentLiked;
      const endpoint = newLiked ? LIKES_INCREMENT_ENDPOINT : LIKES_DECREMENT_ENDPOINT;
      const data = await callAPI(endpoint, slug);
      
      if (data.success && typeof data.likes === 'number') {
        setUserLikeState(newLiked, slug);
        updateButtonUI(button, newLiked, false);
        
        updateMetrics(slug, {
          likes: data.likes,
          views: data.views
        });
        
        window.dispatchEvent(new CustomEvent('likes:updated', {
          detail: {
            slug: slug,
            likes: data.likes,
            views: data.views,
            liked: newLiked
          }
        }));
      } else {
        console.error('[Likes] Failed to update:', data.error);
        updateButtonUI(button, currentLiked, false);
      }
    } catch (error) {
      console.error('[Likes] Error handling like:', error);
      updateButtonUI(button, currentLiked, false);
    }
  }
  
  // Initialize view tracking
  function initializeViewTracking() {
    const viewElements = document.querySelectorAll('[data-action-view]');
    
    viewElements.forEach(function(element) {
      processViewTracking(element);
    });
    
    console.log(`[Views] Initialized tracking for ${viewElements.length} element(s)`);
  }
  
  // Initialize like buttons
  function initializeLikeButtons() {
    const buttons = document.querySelectorAll('[data-action-like]');
    
    buttons.forEach(function(button) {
      const slug = button.getAttribute('data-action-like') || button.getAttribute('data-storage-key');
      
      if (!slug) {
        console.warn('[Likes] Button missing slug:', button);
        return;
      }
      
      console.log('[Likes] Initializing button for slug:', slug);
      
      const initialLiked = getUserLikeState(slug);
      
      // Set initial state
      updateButtonUI(button, initialLiked, false);
      
      // Add click handler
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        handleLikeClick(button);
      });
      
      if (!button.hasAttribute('tabindex')) {
        button.setAttribute('tabindex', '0');
      }
      
      if (!button.hasAttribute('role')) {
        button.setAttribute('role', 'button');
      }
      
      button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLikeClick(button);
        }
      });
    });
    
    console.log(`[Likes] Initialized ${buttons.length} like button(s)`);
  }
  
  // Initialize everything
  function initialize() {
    initializeViewTracking();
    initializeLikeButtons();
  }
  
  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
  // Expose API for manual use
  window.LikesViewsSystem = {
    init: initialize,
    trackView: processViewTracking,
    handleLike: handleLikeClick,
    updateMetrics: updateMetrics
  };
})();
