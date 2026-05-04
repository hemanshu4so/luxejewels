'use client'

import { useState }          from 'react'
import { useRouter }         from 'next/navigation'
import { motion }            from 'framer-motion'
import { useDropzone }       from 'react-dropzone'
import { X, Upload, Plus, Loader2, Check } from 'lucide-react'
import Image                 from 'next/image'
import { db, storage }       from '@/lib/firebase'
import { collection, addDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import type { Product }      from '@/types'
import { generateSlug }      from '@/lib/utils'

const CATEGORIES   = ['gold','silver','diamond','bridal','kundan','polki','platinum']
const OCCASIONS    = ['wedding','daily-wear','festive','office','party','gifting']
const COMMON_TAGS  = ['ring','necklace','earrings','bracelet','bangle','pendant','chain','set','anklet']

interface Props {
  product?: Product
  mode:     'create' | 'edit'
}

export default function ProductForm({ product, mode }: Props) {
  const router = useRouter()
  const [saving,  setSaving]  = useState(false)
  const [success, setSuccess] = useState(false)
  const [images,  setImages]  = useState<(string | File)[]>(product?.images || [])
  const [form, setForm] = useState({
    name:        product?.name        || '',
    category:    product?.category    || 'gold',
    subcategory: product?.subcategory || '',
    material:    product?.material    || '',
    purity:      product?.purity      || '',
    weight:      product?.weight      || '',
    price:       product?.price       || '',
    showPrice:   product?.showPrice   ?? true,
    description: product?.description || '',
    tags:        product?.tags        || [] as string[],
    occasion:    product?.occasion    || [] as string[],
    inStock:     product?.inStock     ?? true,
    featured:    product?.featured    ?? false,
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.jpg','.jpeg','.png','.webp'] },
    maxSize: 5 * 1024 * 1024, // 5MB
    onDrop: (files) => setImages(prev => [...prev, ...files].slice(0, 8)),
  })

  const removeImage = (index: number) =>
    setImages(prev => prev.filter((_, i) => i !== index))

  const toggleTag = (tag: string) =>
    setForm(f => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter(t => t !== tag) : [...f.tags, tag],
    }))

  const toggleOccasion = (occ: string) =>
    setForm(f => ({
      ...f,
      occasion: f.occasion.includes(occ) ? f.occasion.filter(o => o !== occ) : [...f.occasion, occ],
    }))

  const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `products/${Date.now()}_${file.name}`)
    await uploadBytes(storageRef, file)
    return getDownloadURL(storageRef)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      // Upload any new File objects to Firebase Storage
      const uploadedUrls = await Promise.all(
        images.map(img => typeof img === 'string' ? Promise.resolve(img) : uploadImage(img))
      )

      const data = {
        ...form,
        images:   uploadedUrls,
        slug:     generateSlug(form.name),
        weight:   Number(form.weight),
        price:    form.price ? Number(form.price) : null,
        updatedAt: serverTimestamp(),
      }

      if (mode === 'create') {
        await addDoc(collection(db, 'products'), {
          ...data,
          views:     0,
          createdAt: serverTimestamp(),
        })
      } else if (product) {
        await updateDoc(doc(db, 'products', product.id), data)
      }

      setSuccess(true)
      setTimeout(() => router.push('/admin/products'), 1200)
    } catch (err) {
      console.error(err)
      alert('Error saving product. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl space-y-8">

      {/* ── Image Uploader ── */}
      <div className="bg-white dark:bg-charcoal/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Upload size={16} className="text-gold-500" />
          Product Images
          <span className="text-xs text-muted font-normal">(max 8, 5MB each)</span>
        </h3>

        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-gold-400 bg-gold-50 dark:bg-gold-900/10' : 'border-gray-200 dark:border-white/10 hover:border-gold-300'}
          `}
        >
          <input {...getInputProps()} />
          <Upload size={28} className="mx-auto text-muted mb-2" />
          <p className="text-sm font-medium">
            {isDragActive ? 'Drop images here...' : 'Drag & drop or click to upload'}
          </p>
          <p className="text-xs text-muted mt-1">JPG, PNG, WebP up to 5MB</p>
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-4 gap-3 mt-4">
            {images.map((img, i) => {
              const src = typeof img === 'string' ? img : URL.createObjectURL(img)
              return (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image src={src} alt="" fill className="object-cover" sizes="150px" />
                  {i === 0 && (
                    <div className="absolute bottom-1 left-1 bg-gold-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">
                      Main
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={12} />
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ── Basic Info ── */}
      <div className="bg-white dark:bg-charcoal/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
        <h3 className="font-semibold mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
              Product Name *
            </label>
            <input
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="e.g. Royal Bridal Necklace Set"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:border-gold-400 outline-none transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
              Category *
            </label>
            <select
              required
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value as any }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:border-gold-400 outline-none text-sm capitalize"
            >
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
              Purity / Grade
            </label>
            <input
              value={form.purity}
              onChange={e => setForm(f => ({ ...f, purity: e.target.value }))}
              placeholder="e.g. 22K, 18K, 92.5, VVS1"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:border-gold-400 outline-none transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
              Weight (grams) *
            </label>
            <input
              required
              type="number"
              step="0.01"
              min="0"
              value={form.weight}
              onChange={e => setForm(f => ({ ...f, weight: e.target.value }))}
              placeholder="e.g. 12.5"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:border-gold-400 outline-none transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
              Price (INR)
            </label>
            <div className="flex gap-3 items-start">
              <input
                type="number"
                value={form.price}
                onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                placeholder="Leave blank for 'Price on request'"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:border-gold-400 outline-none transition-colors text-sm"
              />
              <label className="flex items-center gap-2 mt-3 text-sm cursor-pointer whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={form.showPrice}
                  onChange={e => setForm(f => ({ ...f, showPrice: e.target.checked }))}
                  className="accent-gold-500"
                />
                Show Price
              </label>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
              Description
            </label>
            <textarea
              rows={4}
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              placeholder="Describe the craftsmanship, design details, and what makes this piece special..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:border-gold-400 outline-none transition-colors text-sm resize-none"
            />
          </div>
        </div>
      </div>

      {/* ── Tags & Occasions ── */}
      <div className="bg-white dark:bg-charcoal/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
        <h3 className="font-semibold mb-4">Tags & Occasions</h3>

        <div className="mb-4">
          <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Product Type Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {COMMON_TAGS.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`
                  px-3 py-1.5 rounded-full text-sm border capitalize transition-all
                  ${form.tags.includes(tag)
                    ? 'bg-gold-500 text-white border-gold-500'
                    : 'border-gray-200 dark:border-white/10 hover:border-gold-300'
                  }
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Occasions
          </label>
          <div className="flex flex-wrap gap-2">
            {OCCASIONS.map(occ => (
              <button
                key={occ}
                type="button"
                onClick={() => toggleOccasion(occ)}
                className={`
                  px-3 py-1.5 rounded-full text-sm border capitalize transition-all
                  ${form.occasion.includes(occ)
                    ? 'bg-charcoal text-white dark:bg-white dark:text-charcoal border-charcoal'
                    : 'border-gray-200 dark:border-white/10 hover:border-gray-400'
                  }
                `}
              >
                {occ}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Visibility Options ── */}
      <div className="bg-white dark:bg-charcoal/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
        <h3 className="font-semibold mb-4">Visibility & Status</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { key: 'inStock',  label: 'In Stock',  desc: 'Available now'    },
            { key: 'featured', label: 'Featured',  desc: 'Show on homepage' },
          ].map(opt => (
            <label
              key={opt.key}
              className={`
                flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all
                ${(form as any)[opt.key]
                  ? 'border-gold-400 bg-gold-50 dark:bg-gold-900/10'
                  : 'border-gray-200 dark:border-white/10'
                }
              `}
            >
              <input
                type="checkbox"
                checked={(form as any)[opt.key]}
                onChange={e => setForm(f => ({ ...f, [opt.key]: e.target.checked }))}
                className="accent-gold-500 w-4 h-4"
              />
              <div>
                <p className="text-sm font-medium">{opt.label}</p>
                <p className="text-xs text-muted">{opt.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* ── Submit ── */}
      <div className="flex items-center gap-4 pb-8">
        <motion.button
          type="submit"
          disabled={saving || success}
          whileTap={{ scale: 0.97 }}
          className={`
            flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm
            transition-all duration-300 shadow-lg
            ${success
              ? 'bg-green-500 text-white shadow-green-200'
              : 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-gold hover:shadow-gold-lg'
            }
            disabled:opacity-60 disabled:cursor-not-allowed
          `}
        >
          {saving  ? <><Loader2 size={16} className="animate-spin" /> Saving...</> :
           success ? <><Check size={16} /> Saved!</> :
           mode === 'create' ? <><Plus size={16} /> Add Product</> : 'Update Product'
          }
        </motion.button>

        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 text-sm hover:border-gray-400 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}