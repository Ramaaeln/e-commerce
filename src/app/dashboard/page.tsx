'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function Dashboard() {
  const { profile, signOut, loading } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut()
    router.push('/') 
  }

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>Loading...</p>
//       </div>
//     )
//   }

  return (
    <div className='overpass p-2'>
      <div className='flex justify-between'>
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Halo, {profile?.full_name }
        </h1>

        <button
          onClick={handleLogout}
          className=" bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
