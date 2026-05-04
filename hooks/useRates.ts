import { useState, useEffect } from 'react'
import type { MetalRates } from '@/types'
import { mockRates } from '@/lib/firebase'

export function useRates() {
  const [rates, setRates] = useState<MetalRates | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRates(mockRates as MetalRates)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return { rates, loading }
}
