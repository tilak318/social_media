// API configuration
// Determine if we're in a production environment
const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

// Use the production URL if in production, otherwise default to local development
const API_BASE_URL = isProduction 
  ? 'https://shadowmind-server.onrender.com'
  : (import.meta.env.VITE_API_URL || 'http://localhost:5000');

export const API_ENDPOINTS = {
  BRAND_ANALYSIS: `${API_BASE_URL}/api/analyze-brand`,
  CONTENT_CALENDAR: `${API_BASE_URL}/api/generate-calendar`,
  HEALTH_CHECK: `${API_BASE_URL}/api/health`,
};

export default API_ENDPOINTS; 