"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Types
interface User {
  id: string;
  email: string;
  name?: string;
  // Add other user properties as needed
}

interface Profile {
  username?: string;
  avatar?: string;
  // Add other profile properties as needed
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider props
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if user is logged in (check localStorage, cookies, etc.)
        const token = localStorage.getItem('authToken');
        
        if (token) {
          // Verify token and get user data
          // This is where you'd call your API to verify the token
          // For now, we'll just set loading to false
          
          // Example:
          // const userData = await verifyToken(token);
          // setUser(userData.user);
          // setProfile(userData.profile);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid token
        localStorage.removeItem('authToken');
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // Call your login API here
      // const response = await signInWithEmail(email, password);
      
      // For demo purposes, we'll simulate a successful login
      const mockUser: User = {
        id: '1',
        email: email,
        name: 'John Doe'
      };
      
      const mockProfile: Profile = {
        username: 'johndoe'
      };
      
      // Store token (replace with actual token from API)
      localStorage.setItem('authToken', 'mock-token');
      
      setUser(mockUser);
      setProfile(mockProfile);
      
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      
      // Call your register API here
      // const response = await registerWithEmail(email, password, name);
      
      // For demo purposes, we'll simulate a successful registration
      console.log('Registering:', { email, password, name });
      
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setLoading(true);
      
      // Call your logout API here if needed
      // await signOut();
      
      // Clear local state
      localStorage.removeItem('authToken');
      setUser(null);
      setProfile(null);
      
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    profile,
    loading,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}