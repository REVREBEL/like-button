/**
 * Base URL for the application
 * Used to construct URLs that work in both local development and production
 * In Webflow Cloud, apps run on mount paths like /app or /todo-app
 * Never has a trailing slash
 */
export const baseUrl = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
