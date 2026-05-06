import { NextResponse } from 'next/server'
import { mockProducts } from '@/lib/luxury-data'

export async function GET() {
  return NextResponse.json({ products: mockProducts })
}
