import api from './index';

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    token: string;
    user: User;
  };
  errors?: any[];
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

// Auth API functions
export const authAPI = {
  // Register user
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  // Login user
  login: async (credentials: LoginData): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Get current user
  getCurrentUser: async (): Promise<{ success: boolean; data?: { user: User }; message?: string }> => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  // Logout user
  logout: async (): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};

// Auth utility functions
export const authUtils = {
  // Store token
  setToken: (token: string) => {
    localStorage.setItem('token', token);
  },

  // Get token
  getToken: (): string | null => {
    return localStorage.getItem('token');
  },

  // Remove token
  removeToken: () => {
    localStorage.removeItem('token');
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('token');
    return !!token;
  },

  // Store user data
  setUser: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
  },

  // Get user data
  getUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Remove user data
  removeUser: () => {
    localStorage.removeItem('user');
  },

  // Clear all auth data
  clearAuth: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};