export interface Product {
  id:          string
  name:        string
  slug:        string
  category:    Category
  subcategory: string
  images:      string[]
  weight:      number        // grams
  price?:      number        // optional — can be hidden
  showPrice:   boolean
  description: string
  tags:        string[]
  occasion:    Occasion[]
  material:    string
  purity?:     string        // e.g. "22K", "92.5"
  inStock:     boolean
  featured:    boolean
  views:       number
  createdAt:   string
  updatedAt:   string
}

export type Category = 'gold' | 'silver' | 'diamond' | 'bridal' | 'platinum' | 'kundan' | 'polki'
export type Occasion = 'wedding' | 'daily-wear' | 'festive' | 'office' | 'party' | 'gifting'

export interface MetalRates {
  id:           string
  gold22k:      number   // per gram in INR
  gold24k:      number
  silver:       number
  updatedAt:    string
  updatedBy:    string
}

export interface Enquiry {
  id:          string
  name:        string
  phone:       string
  email?:      string
  message:     string
  productId?:  string
  productName?:string
  status:      'new' | 'read' | 'replied'
  createdAt:   string
}

export interface AdminUser {
  uid:    string
  email:  string
  role:   'admin' | 'staff'
}

export interface FilterState {
  category:   Category | 'all'
  occasion:   Occasion | 'all'
  minPrice:   number
  maxPrice:   number
  minWeight:  number
  maxWeight:  number
  search:     string
  sortBy:     'newest' | 'price-asc' | 'price-desc' | 'weight-asc'
}