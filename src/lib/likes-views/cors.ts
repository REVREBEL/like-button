/**
 * CORS utilities for likes/views API endpoints
 * 
 * These endpoints are designed to be called from external Webflow sites,
 * so we need to handle CORS preflight requests and add appropriate headers.
 */

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400', // 24 hours
};

export const JSON_HEADERS = {
  'Content-Type': 'application/json',
  ...CORS_HEADERS,
};

/**
 * Create a JSON response with CORS headers
 */
export function jsonResponse(
  data: unknown,
  status: number = 200
): Response {
  return new Response(
    JSON.stringify(data),
    {
      status,
      headers: JSON_HEADERS,
    }
  );
}

/**
 * Create an OPTIONS response for CORS preflight
 */
export function optionsResponse(): Response {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

/**
 * Create an error response with CORS headers
 */
export function errorResponse(
  error: string,
  status: number = 500
): Response {
  return jsonResponse(
    {
      success: false,
      error,
    },
    status
  );
}
