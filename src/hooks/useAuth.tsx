'use client'

import { useState, useEffect, useContext, createContext, ReactNode } from 'react'
import { supabase } from '../utils/supabase'
import { getProfile } from '../utils/auth'

// Define tipe data untuk profile
export interface UserProfile {
  id: string
  full_name?: string
  email?: string
  username?: string
  [key: string]: any
}

// Tipe context
interface AuthContextType {
  user: any | null
  profile: UserProfile | null
  loading: boolean
  setProfile: (profile: UserProfile | null) => void
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Props untuk AuthProvider
interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      setUser(session?.user ?? null)

      if (session?.user) {
        const { data } = await getProfile()
        setProfile(data)
      }

      setLoading(false)
    }

    getInitialSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null)

        if (session?.user) {
          const { data } = await getProfile()
          setProfile(data)
        } else {
          setProfile(null)
        }

        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, profile, loading, setProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook untuk menggunakan context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
