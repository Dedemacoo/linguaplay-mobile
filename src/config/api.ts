/**
 * API base URL configuration.
 * __DEV__ is set to true by Metro bundler in development mode.
 */
export const API_BASE_URL: string = __DEV__
  ? 'http://localhost:3000/api'
  : 'https://api.linguaplay.app/api'; // Production URL placeholder
