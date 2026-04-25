'use client'

import {
  Globe,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-react'

type SocialLink = {
  platform: 'linkedin' | 'youtube' | 'instagram' | 'x' | 'website'
  url: string
}

type Props = {
  links: Partial<Record<'linkedin' | 'youtube' | 'instagram' | 'x' | 'website', string>>
}

const items = [
  { key: 'website', label: 'Website', icon: Globe },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'youtube', label: 'YouTube', icon: Youtube },
  { key: 'instagram', label: 'Instagram', icon: Instagram },
  { key: 'x', label: 'X / Twitter', icon: Twitter },
] as const

export default function SocialLinks({ links }: Props) {
  const active = items.filter((item) => links[item.key])

  if (!active.length) return null

  return (
    <div className="mt-6">
      <h3 className="mb-3 text-sm font-medium text-zinc-500">Socials</h3>

      <div className="grid gap-3">
        {active.map(({ key, label, icon: Icon }) => {
          const url = links[key]
          if (!url) return null

          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#74265f]/10">
                <Icon className="h-4 w-4 text-[#223bc5]" />
              </span>
              <span>{label}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}