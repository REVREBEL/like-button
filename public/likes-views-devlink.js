/**
 * Likes & Views Tracking System for Webflow DevLink Components
 * 
 * This script manages likes/views for static Webflow DevLink components.
 * It emits custom events that Webflow Interactions can listen to.
 * 
 * WEBFLOW SETUP:
 * 
 * 1. Add script to your site (before </body>):
 *    <script>window.LIKES_API_BASE = 'YOUR_APP_BASE_URL';</script>
 *    <script src="YOUR_APP_URL/likes-views-devlink.js"></script>
 * 
 * 2. Your DevLink Liked component should have:
 *    - data-action-like="{slug}" on the root element
 *    - data-storage-key="{slug}" on the root element
 * 
 * 3. In Webflow Designer, create an Interaction:
 *    - Trigger: Element Trigger > Custom Event > "like:toggled"
 *    - Action: Toggle class "is-liked" or similar
 * 
 * 4. For counts, add these anywhere:
 *    data-metric-like="{slug}"  ← Shows like count
 *    data-metric-view="{slug}"  ← Shows view count
 */

(function() {
  'use strict';

  const API_BASE = window.LIKES_API_BASE || '';
  const VIEWS_ENDPOINT = `${API_BASE}/api/views/increment`;
  const LIKES_INCREMENT_ENDPOINT = `${API_BASE}/api/likes/increment`;
  const LIKES_DECREMENT_ENDPOINT = `${API_BASE}/api/likes/decrement`;
  
  console.log('[Likes DevLink] API Configuration:', {
    API_BASE: API_BASE,
    VIEWS_ENDPOINT: VIEWS_ENDPOINT,
    LIKES_INCREMENT_ENDPOINT: LIKES_INCREMENT_ENDPOINT,
    LIKES_DECREMENT_ENDPOINT: LIKES_DECREMENT_ENDPOINT
  });
  
  const processedViews = new Set();
  const processedButtons = new Set(); // Track processed buttons to avoid duplicates
  
  // Helper: Get user's liked state from localStorage
  function getUserLikeState(slug) {
    try {
      const key = `liked_${slug}`;
      return localStorage.getItem(key) === 'true';
    } catch (error) {
      console.error('[Likes DevLink] Error reading localStorage:', error);
      return false;
    }
  }
  
  // Helper: Save user's liked state to localStorage
  function setUserLikeState(liked, slug) {
    try {
      const key = `liked_${slug}`;
      localStorage.setItem(key, liked.toString());
    } catch (error) {
      console.error('[Likes DevLink] Error writing to localStorage:', error);
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
  
  // Helper: Sync button visual state with localStorage
  // This adds a custom class that Webflow Interactions can target
  function syncButtonState(button, isLiked) {
    if (isLiked) {
      button.classList.add('is-liked');
      button.setAttribute('data-liked', 'true');
    } else {
      button.classList.remove('is-liked');
      button.setAttribute('data-liked', 'false');
    }
    
    // Dispatch custom event for Webflow Interactions
    button.dispatchEvent(new CustomEvent('like:toggled', {
      bubbles: true,
      detail: { liked: isLiked }
    }));
  }
  
  // Helper: Update button UI for loading state ONLY
  function setLoadingState(button, isLoading) {
    button.setAttribute('data-loading', isLoading);
    
    if (isLoading) {
      button.style.cursor = 'wait';
      button.style.opacity = '0.6';
      button.style.pointerEvents = 'none';
    } else {
      button.style.cursor = '';
      button.style.opacity = '';
      button.style.pointerEvents = '';
    }
  }
  
  // Helper: Call API endpoint
  async function callAPI(endpoint, slug) {
    try {
      console.log(`[Likes DevLink] Calling API: ${endpoint} with slug: ${slug}`);
      
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
      console.log(`[Likes DevLink] API response:`, data);
      return data;
    } catch (error) {
      console.error('[Likes DevLink] API call failed:', error);
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
    
    console.log(`[Views DevLink] Recording view for: ${slug}`);
    
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
      console.error('[Likes DevLink] No slug found on button');
      return;
    }
    
    const currentLiked = getUserLikeState(slug);
    const isLoading = button.getAttribute('data-loading') === 'true';
    
    if (isLoading) return;
    
    console.log(`[Likes DevLink] Toggling like for: ${slug}, current state: ${currentLiked}`);
    
    // Set loading state
    setLoadingState(button, true);
    
    try {
      const newLiked = !currentLiked;
      const endpoint = newLiked ? LIKES_INCREMENT_ENDPOINT : LIKES_DECREMENT_ENDPOINT;
      const data = await callAPI(endpoint, slug);
      
      if (data.success && typeof data.likes === 'number') {
        // Update state in localStorage
        setUserLikeState(newLiked, slug);
        
        // Update visual state
        syncButtonState(button, newLiked);
        
        setLoadingState(button, false);
        
        // Update all metrics for this slug
        updateMetrics(slug, {
          likes: data.likes,
          views: data.views
        });
        
        // Emit global custom event
        window.dispatchEvent(new CustomEvent('likes:updated', {
          detail: {
            slug: slug,
            likes: data.likes,
            views: data.views,
            liked: newLiked
          }
        }));
        
        console.log(`[Likes DevLink] Successfully toggled to: ${newLiked}`);
      } else {
        console.error('[Likes DevLink] Failed to update:', data.error);
        setLoadingState(button, false);
      }
    } catch (error) {
      console.error('[Likes DevLink] Error handling like:', error);
      setLoadingState(button, false);
    }
  }
  
  // Initialize view tracking
  function initializeViewTracking() {
    const viewElements = document.querySelectorAll('[data-action-view]');
    
    viewElements.forEach(function(element) {
      processViewTracking(element);
    });
    
    console.log(`[Views DevLink] Initialized tracking for ${viewElements.length} element(s)`);
  }
  
  // Initialize like buttons
  function initializeLikeButtons() {
    const buttons = document.querySelectorAll('[data-action-like]');
    
    buttons.forEach(function(button) {
      const slug = button.getAttribute('data-action-like') || button.getAttribute('data-storage-key');
      
      if (!slug) {
        console.warn('[Likes DevLink] Button missing slug:', button);
        return;
      }
      
      // Skip if already processed (prevents double initialization)
      const buttonId = button.getAttribute('id') || slug;
      const uniqueKey = `${buttonId}_${slug}`;
      if (processedButtons.has(uniqueKey)) {
        console.log('[Likes DevLink] Button already initialized, skipping:', slug);
        return;
      }
      processedButtons.add(uniqueKey);
      
      console.log('[Likes DevLink] Initializing button for slug:', slug);
      
      // Set initial visual state based on localStorage
      const initialLiked = getUserLikeState(slug);
      syncButtonState(button, initialLiked);
      console.log(`[Likes DevLink] Initial liked state for ${slug}: ${initialLiked}`);
      
      // Add click handler
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        handleLikeClick(button);
      });
      
      // Make it keyboard accessible
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
    
    console.log(`[Likes DevLink] Initialized ${processedButtons.size} like button(s)`);
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
  window.LikesViewsDevLinkSystem = {
    init: initialize,
    trackView: processViewTracking,
    handleLike: handleLikeClick,
    updateMetrics: updateMetrics,
    getUserLikeState: getUserLikeState
  };
})();
