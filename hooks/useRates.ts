import { useState, useEffect }     from 'react'
import { doc, onSnapshot }         from 'firebase/firestore'
import { db }                      from '@/lib/firebase'
import type { MetalRates }         from '@/types'

export function useRates() {
  const [rates,   setRates]   = useState<MetalRates | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'settings', 'metalRates'), snap => {
      if (snap.exists()) setRates({ id: snap.id, ...snap.data() } as MetalRates)
      setLoading(false)
    })
    return unsub
  }, [])

  return { rates, loading }
}