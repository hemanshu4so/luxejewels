'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow p-3"
    >
      <div className="relative w-full h-[250px]">
        <Image
          src="/images/placeholder.jpg"
          alt="product"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <h3 className="mt-3 text-lg font-semibold">
        {product?.name || "Luxury Jewellery"}
      </h3>

      <div className="flex gap-2 mt-3">
        <Link
          href={`/catalogue/${product?.id || "demo"}`}
          className="flex-1 text-center bg-black text-white py-2 rounded-lg text-sm"
        >
          View
        </Link>

        {/* ✅ IMPORTANT FIX */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-green-500 text-white py-2 rounded-lg text-sm"
        >
          Enquire
        </a>
      </div>
    </motion.div>
  )
}