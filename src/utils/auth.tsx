import { supabase } from './supabase'

export const signUpWithEmail = async (email: string, password: string, fullName: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    })
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error: (error as Error).message }
  }
}

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error: (error as Error).message }
  }
}

export const signInWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error: (error as Error).message }
  }
}

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { error: null }
  } catch (error) {
    return { error: (error as Error).message }
  }
}

export const updateProfile = async (updates: { [key: string]: any }) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', (await supabase.auth.getUser())?.data?.user?.id || '')
      .select()
      .single()
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error: (error as Error).message }
  }
}

export const getProfile = async () => {
  try {
    const { data: user, error: userError } = await supabase.auth.getUser()
    if (userError) throw userError
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.user.id)
      .single()
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error: (error as Error).message }
  }
}