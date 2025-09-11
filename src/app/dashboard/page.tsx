"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export default function Dashboard() {
  const { profile, signOut, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace("/"); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    if (!loading && !profile) {
      router.replace("/auth");
    }
  }, [loading, profile, router]);

  if (loading || (!profile && typeof window !== "undefined")) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="overpass ">
      <div className="flex p-2 items-center bg-yellow-600 justify-between">
        <h1 className="text-xl font-bold">Halo, {profile?.full_name}</h1>

        <button
          onClick={handleLogout}
          className="text-white font-medium rounded-lg transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
