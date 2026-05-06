'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)
  const selectedImage = images[active] ?? images[0] ?? '/images/placeholder.jpg'

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-[#e7dcc8]">
        <Image src={selectedImage} alt={name} fill quality={78} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button key={image} onClick={() => setActive(index)} className="relative aspect-square overflow-hidden rounded-[8px]" aria-label={`View ${name} ${index + 1}`}>
            <Image src={image} alt="" fill quality={62} className="object-cover" sizes="120px" />
          </button>
        ))}
      </div>
    </div>
  )
}
