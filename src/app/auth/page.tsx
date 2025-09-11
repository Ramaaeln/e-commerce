"use client";
import { useState, useEffect } from "react";
import { Suspense } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Handle hydration - prevents SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check for error from callback
  useEffect(() => {
    if (mounted) {
      const error = searchParams.get('error');
      if (error === 'callback_error') {
        setMessage("Terjadi kesalahan saat login. Silakan coba lagi.");
      }
    }
  }, [mounted, searchParams]);

  const { user, profile, loading } = useAuth();

  useEffect(() => {
    if (!mounted || loading) return; // Don't redirect during SSR or loading
    
    if (user) {
      if (!profile?.username && !profile?.full_name) {
        router.push("/auth/username");
      } else {
        router.push("/dashboard");
      }
    }
  }, [user, profile, mounted, loading, router]);

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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
  };

  const handleRegisterSuccess = (successMessage?: string) => {
    setMessage(successMessage || "Registrasi berhasil!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br overpass from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {isLogin ? "Masuk ke Akun" : "Buat Akun Baru"}
          </h1>
          <p className="mt-2 text-gray-600">
            {isLogin
              ? "Selamat datang di Shopifyn! Silakan masuk untuk melanjutkan"
              : "Bergabunglah dengan kami hari ini untuk melakukan pembelian yang mudah dan cepat!"}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {message && (
            <div className={`mb-6 border rounded-lg p-3 ${
              message.includes('kesalahan') || message.includes('error')
                ? 'bg-red-50 border-red-200'
                : 'bg-green-50 border-green-200'
            }`}>
              <p className={`text-sm ${
                message.includes('kesalahan') || message.includes('error')
                  ? 'text-red-600'
                  : 'text-green-600'
              }`}>
                {message}
              </p>
            </div>
          )}

          {isLogin ? (
            <LoginForm
              onSuccess={handleLoginSuccess}
              onSwitchToRegister={() => {
                setIsLogin(false);
                setMessage(""); 
              }}
            />
          ) : (
            <RegisterForm
              onSuccess={handleRegisterSuccess}
              onSwitchToLogin={() => {
                setIsLogin(true);
                setMessage(""); 
              }}
            />
          )}
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Dengan melanjutkan, Anda menyetujui</p>
          <a href="/terms" className="text-yellow-600 hover:text-yellow-800">
            Syarat & Ketentuan
          </a>
          {" dan "}
          <a href="/privacy" className="text-yellow-600 hover:text-yellow-800">
            Kebijakan Privasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;