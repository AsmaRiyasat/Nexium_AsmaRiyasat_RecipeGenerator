// //app/page.tsx

'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/utils/supabaseClient"
import RecipeForm from "@/components/RecipeForm"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      const session = data.session

      if (!session) {
        router.push("/login") // Redirect to login page if not logged in
      } else {
        setLoading(false) // Show page content
      }
    }

    checkSession()
  }, [router])

  if (loading) return null // Or a spinner

  return (
    <div className="min-h-screen text-black p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Don&apos;t Know What to Cook? Let AI Decide!!!
      </h1>
      <RecipeForm />
    </div>
  )
}
