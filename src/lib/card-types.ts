export type CardLink = {
  id?: string
  label: string
  url: string
  sort_order?: number
}

export type CardProfile = {
  id?: string
  slug: string
  full_name: string
  title: string
  bio: string
  email: string
  phone: string
  website: string
  profile_image_url: string
  background_color: string
  background_image_url: string
  button_color: string
  text_color: string
  links: CardLink[]
}

export const emptyProfile: CardProfile = {
  slug: '',
  full_name: '',
  title: '',
  bio: '',
  email: '',
  phone: '',
  website: '',
  profile_image_url: '',
  background_color: '#111827',
  background_image_url: '',
  button_color: '#2563eb',
  text_color: '#ffffff',
  links: [],
}