import { useState, useEffect }       from 'react'
import { collection, onSnapshot,
         query, orderBy }            from 'firebase/firestore'
import { db }                        from '@/lib/firebase'
import type { Product }              from '@/types'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState<string | null>(null)

  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q,
      snap => {
        setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() } as Product)))
        setLoading(false)
      },
      err => {
        setError(err.message)
        setLoading(false)
      }
    )

    return unsubscribe
  }, [])

  return { products, loading, error }
}