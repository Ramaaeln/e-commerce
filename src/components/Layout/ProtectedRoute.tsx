'use client'
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

const ProtectedRoute = ({ children, requireUsername = false }: { children: ReactNode; requireUsername?: boolean }) => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (requireUsername && (!profile || !profile.username)) {
    return <Navigate to="/auth/username" replace />;
  }

  return children;
};

export default ProtectedRoute;
