const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    contact: '/api/contact/send',
    newsletter: '/api/newsletter/subscribe',
    health: '/api/health'
  },
  defaultHeaders: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

// Fonction utilitaire pour les appels API
export const makeApiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: apiConfig.defaultHeaders,
    ...options
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    return {
      success: response.ok,
      data,
      status: response.status,
      statusText: response.statusText
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      error: error.message,
      data: null
    };
  }
};

// Fonctions spécifiques
export const sendContactMessage = (formData) => 
  makeApiCall(apiConfig.endpoints.contact, {
    method: 'POST',
    body: JSON.stringify(formData)
  });

export const subscribeNewsletter = (email) => 
  makeApiCall(apiConfig.endpoints.newsletter, {
    method: 'POST',
    body: JSON.stringify({ email })
  });

export const checkApiHealth = () => 
  makeApiCall(apiConfig.endpoints.health);