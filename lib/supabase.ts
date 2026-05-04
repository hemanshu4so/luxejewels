import { createClient } from '@supabase/supabase-js'

// For admin file uploads, CMS, etc.
// Website data remains Firebase for realtime
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
  cookies: {}
})

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SERVICE_SUPABASE_KEY!,
  {
    auth: { autoRefreshToken: false, persistSession: false }
  }
)

// Utility functions
export async function uploadImage(file: File, bucket = 'product-images'): Promise<string> {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`
  
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, { upsert: true, contentType: file.type })
    
  if (error) throw error
  
  const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(fileName)
  return publicUrl
}

export async function deleteImage(path: string, bucket = 'product-images') {
  const { error } = await supabase.storage.from(bucket).remove([path])
  if (error) throw error
}

