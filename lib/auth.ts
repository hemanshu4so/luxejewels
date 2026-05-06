import type { AdminUser } from '@/types'

export const getCurrentAdmin = async (): Promise<AdminUser | null> => null

export const isAdminEmail = (email?: string | null) => {
  if (!email) return false
  const allowed = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '').split(',').map((item) => item.trim().toLowerCase()).filter(Boolean)
  return allowed.length === 0 || allowed.includes(email.toLowerCase())
}
