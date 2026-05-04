import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'luxejewels_wishlist'

export function useWishlist() {
  const [ids, setIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setIds(new Set(JSON.parse(stored)))
    } catch {}
  }, [])

  const persist = (newIds: Set<string>) => {
    setIds(newIds)
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...newIds]))
  }

  const toggle = useCallback((id: string) => {
    setIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      persist(next)
      return next
    })
  }, [])

  return {
    ids,
    count:        ids.size,
    isWishlisted: (id: string) => ids.has(id),
    toggle,
  }
}