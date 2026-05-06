import { NextResponse } from 'next/server'
import { mockRates } from '@/lib/luxury-data'

export async function GET() {
  return NextResponse.json({ rates: mockRates })
}
