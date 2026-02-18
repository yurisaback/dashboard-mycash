import { supabase } from './supabase'

export type BucketName = 'avatars' | 'account-logos' | 'documents' | 'media'

export const storageService = {
  async upload(
    bucket: BucketName,
    path: string,
    file: File,
    options?: { upsert?: boolean }
  ) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, { upsert: options?.upsert ?? true })
    if (error) throw error
    return data
  },

  async getPublicUrl(bucket: BucketName, path: string) {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path)
    return data.publicUrl
  },

  async getSignedUrl(bucket: BucketName, path: string, expiresIn = 3600) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(path, expiresIn)
    if (error) throw error
    return data.signedUrl
  },

  async delete(bucket: BucketName, path: string) {
    const { error } = await supabase.storage.from(bucket).remove([path])
    if (error) throw error
  },

  /** Upload avatar: avatars/{userId}/profile.png */
  async uploadAvatar(userId: string, file: File) {
    const ext = file.name.split('.').pop() || 'png'
    const path = `${userId}/profile.${ext}`
    await this.upload('avatars', path, file)
    return this.getPublicUrl('avatars', path)
  },

  /** Upload logo de conta: account-logos/{userId}/{accountId}.png */
  async uploadAccountLogo(userId: string, accountId: string, file: File) {
    const ext = file.name.split('.').pop() || 'png'
    const path = `${userId}/${accountId}.${ext}`
    await this.upload('account-logos', path, file)
    return this.getPublicUrl('account-logos', path)
  },
}
