import { useState, useEffect } from 'react'
import type { Product } from '@/types'
import { mockProducts } from '@/lib/firebase'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(mockProducts as Product[])
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return { products, loading, error: null }
}
