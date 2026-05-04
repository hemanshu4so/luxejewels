export const formatINR = (amount: number): string =>
  new Intl.NumberFormat('en-IN', {
    style:    'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)

export const generateSlug = (name: string): string =>
  name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()

export const getWhatsAppLink = (product: { name: string, id: string }): string => {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'
  const text   = encodeURIComponent(
    `Hello! I'm interested in *${product.name}* from LuxeJewels.\n\nProduct ID: ${product.id}\n\nCould you please share more details?`
  )
  return `https://wa.me/${number}?text=${text}`
}

export const truncate = (str: string, n: number): string =>
  str.length > n ? str.slice(0, n - 1) + '…' : str

export const debounce = <T extends (...args: any[]) => any>(
  fn: T, ms: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}