import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// Auth API
export const authAPI = {
  login: async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  },
  register: async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      username,
      password,
    });
    return response.data;
  },
};

// Blog API
export const blogAPI = {
  getAllBlogs: async () => {
    const response = await api.get('/blogs/public/all');
    return response.data;
  },
  getBlogById: async (id) => {
    const response = await api.get(`/blogs/public/${id}`);
    return response.data;
  },
  getFeaturedBlogs: async () => {
    const response = await api.get('/blogs/public/featured');
    return response.data;
  },
  getAllBlogsAdmin: async () => {
    const response = await api.get('/blogs/admin/all');
    return response.data;
  },
  createBlog: async (blog) => {
    const response = await api.post('/blogs/admin', blog);
    return response.data;
  },
  updateBlog: async (id, blog) => {
    const response = await api.put(`/blogs/admin/${id}`, blog);
    return response.data;
  },
  deleteBlog: async (id) => {
    const response = await api.delete(`/blogs/admin/${id}`);
    return response.data;
  },
};

// Booking API
export const bookingAPI = {
  submitBooking: async (booking) => {
    // Public endpoint - no auth needed
    const response = await axios.post(`${API_BASE_URL}/bookings`, booking);
    return response.data;
  },
  getAllBookings: async () => {
    const response = await api.get('/bookings/admin/all');
    return response.data;
  },
  getUnreadBookings: async () => {
    const response = await api.get('/bookings/admin/unread');
    return response.data;
  },
  markAsRead: async (id) => {
    const response = await api.put(`/bookings/admin/${id}/mark-read`);
    return response.data;
  },
  deleteBooking: async (id) => {
    const response = await api.delete(`/bookings/admin/${id}`);
    return response.data;
  },
};
