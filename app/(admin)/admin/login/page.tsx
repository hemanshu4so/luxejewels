'use client'

import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await signInWithEmailAndPassword(auth, email, password)
      // Set admin token
      document.cookie = 'admin-token=loggedin; path=/; max-age=86400; SameSite=Strict'
      router.push('/admin/dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-charcoal">
      <div className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-md w-full mx-4 border border-white/50">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl bg-gradient-to-r from-gold-600 to-amber-600 bg-clip-text text-transparent mb-2">
            LuxeAdmin
          </h1>
          <p className="text-muted">Sign in to manage your store</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-200 dark:border-white/20 rounded-2xl bg-white/50 dark:bg-charcoal/30 backdrop-blur-sm focus:ring-4 focus:ring-gold-500/20 focus:border-gold-500 transition-all"
              placeholder="admin@luxejewels.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-200 dark:border-white/20 rounded-2xl bg-white/50 dark:bg-charcoal/30 backdrop-blur-sm focus:ring-4 focus:ring-gold-500/20 focus:border-gold-500 transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full h-14" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center mt-6 text-xs text-muted">
          Demo: admin@luxejewels.com / password
        </p>
      </div>
    </div>
  )
}

