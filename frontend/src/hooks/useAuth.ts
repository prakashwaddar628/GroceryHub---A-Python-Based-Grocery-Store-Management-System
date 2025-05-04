// hooks/useAuth.ts
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState<{ email: string | null }>({ email: null });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is logged in by checking localStorage or a session store
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    
    // If a user exists in localStorage, assume they are authenticated
    if (storedUser?.email) {
      setUser(storedUser);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Function to handle login
  const login = (email: string, password: string) => {
    // Normally you would perform authentication with an API here.
    // For simplicity, we directly save the email in localStorage.
    const userData = { email };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('user');
    setUser({ email: null });
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
