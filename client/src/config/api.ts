// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  BRAND_ANALYSIS: `${API_BASE_URL}/api/analyze-brand`,
  CONTENT_CALENDAR: `${API_BASE_URL}/api/generate-calendar`,
  HEALTH_CHECK: `${API_BASE_URL}/api/health`,
};

export default API_ENDPOINTS; 