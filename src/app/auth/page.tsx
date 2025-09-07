"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Changed from react-router-dom
import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false); // Add hydration handling
  const router = useRouter(); // Use Next.js router
  
  // Handle hydration - prevents SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const { user, profile, loading } = useAuth();

  // Handle redirects with useEffect instead of conditional rendering
  useEffect(() => {
    if (!mounted || loading) return; // Don't redirect during SSR or loading
    
    if (user) {
      if (!profile?.username) {
        router.push("/auth/username");
      } else {
        router.push("/dashboard");
      }
    }
  }, [user, profile, mounted, loading, router]);

  // Show loading during SSR, hydration, and auth loading
  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Show loading while redirecting authenticated users (prevents flash)
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Mengalihkan...</p>
        </div>
      </div>
    );
  }

  const handleLoginSuccess = () => {
    setMessage("Login berhasil! Mengalihkan...");
    // The redirect will happen automatically via useEffect when user state changes
  };

  const handleRegisterSuccess = (successMessage?: string) => {
    setMessage(successMessage || "Registrasi berhasil!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {isLogin ? "Masuk ke Akun" : "Buat Akun Baru"}
          </h1>
          <p className="mt-2 text-gray-600">
            {isLogin
              ? "Selamat datang kembali!"
              : "Bergabunglah dengan kami hari ini"}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {message && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-600">{message}</p>
            </div>
          )}

          {isLogin ? (
            <LoginForm
              onSuccess={handleLoginSuccess}
              onSwitchToRegister={() => setIsLogin(false)}
            />
          ) : (
            <RegisterForm
              onSuccess={handleRegisterSuccess}
              onSwitchToLogin={() => setIsLogin(true)}
            />
          )}
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Dengan melanjutkan, Anda menyetujui</p>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Syarat & Ketentuan
          </a>
          {" dan "}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Kebijakan Privasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;