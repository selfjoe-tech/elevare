export type CardData = {
  name: string
  title: string
  company: string
  phone: string
  email: string
  cta: string
  image: string
  logo: string
  website?: string
    linkedin?: string
    youtube?: string
    instagram?: string
    x?: string
}



export const cards: Record<string, CardData> = {
  'gracious': {
    name: 'Gracious Sakhile Mutsindikwa',
    title: 'CEO, Co-founder',
    company: 'Elevare Conglomerate',
    phone: '+27 71 777 3991',
    email: 'gracious@elevareconglomerate.co.za',
    cta: 'See how we can help',
    image: '/images/execs/gracious.png',
    logo: '/brand/card.png',
    website: "https://elevareconglomerate.co.za",
    linkedin: "https://bw.linkedin.com/in/gracious-sakhile-mutsindikwa-5a54a0261"
    
  },
}