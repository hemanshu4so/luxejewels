'use client'

import dynamic from 'next/dynamic'
import HeroSection from '@/components/website/HeroSection'
import ProductCard from '@/components/website/ProductCard'
import FoundersLegacySection from '@/components/website/FoundersLegacySection'
import { mockProducts } from '@/lib/luxury-data'

const SectionFallback = ({ dark = false }: { dark?: boolean }) => (
  <div className={`${dark ? 'bg-[#15110f]' : 'bg-[#F8F5EF]'} py-24 sm:py-28`}>
    <div className="section-shell">
      <div
        className={`h-40 animate-pulse rounded-[8px] ${
          dark ? 'bg-white/[0.04]' : 'bg-[#2B1810]/[0.04]'
        }`}
      />
    </div>
  </div>
)

const CollectionsStorySection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.CollectionsStorySection
    ),
  {
    loading: () => <SectionFallback />,
  }
)

const AboutSKKLSection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.AboutSKKLSection
    ),
  {
    loading: () => <SectionFallback />,
  }
)

const TrustSection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.TrustSection
    ),
  {
    loading: () => <SectionFallback />,
  }
)

const CustomJewellerySection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.CustomJewellerySection
    ),
  {
    loading: () => <SectionFallback dark />,
  }
)

const CraftSection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.CraftSection
    ),
  {
    loading: () => <SectionFallback dark />,
  }
)

const ShowroomSection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.ShowroomSection
    ),
  {
    loading: () => <SectionFallback />,
  }
)

const PhilosophySection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.PhilosophySection
    ),
  {
    loading: () => <SectionFallback dark />,
  }
)

const FutureVisionSection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.FutureVisionSection
    ),
  {
    loading: () => <SectionFallback />,
  }
)

const FeaturedProductsSection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.FeaturedProductsSection
    ),
  {
    loading: () => <SectionFallback />,
  }
)

const TestimonialsSection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.TestimonialsSection
    ),
  {
    loading: () => <SectionFallback dark />,
  }
)

const SocialShowcaseSection = dynamic(
  () =>
    import('@/components/website/LuxuryStorySections').then(
      (mod) => mod.SocialShowcaseSection
    ),
  {
    loading: () => <SectionFallback />,
  }
)

export default function HomePage() {
  const featured = mockProducts
    .filter((product) => product.featured)
    .slice(0, 4)

  return (
    <div className="bg-[#F8F5EF] text-charcoal">
      <HeroSection />

      <FoundersLegacySection />

      <CollectionsStorySection />

      <AboutSKKLSection />

      <TrustSection />

      <CustomJewellerySection />

      <CraftSection />

      <ShowroomSection />

      <PhilosophySection />

      <FutureVisionSection />

      <FeaturedProductsSection>
        {featured.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </FeaturedProductsSection>

      <TestimonialsSection />

      <SocialShowcaseSection />
    </div>
  )
}