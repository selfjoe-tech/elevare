'use client'

import { useMemo, useState } from 'react'
import { CardProfile, CardLink } from '@/lib/card-types'

type Props = {
  initialProfile: CardProfile
  originalSlug: string
}

export default function CardEditor({ initialProfile, originalSlug }: Props) {
  const [profile, setProfile] = useState<CardProfile>(initialProfile)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const previewStyle = useMemo(
    () => ({
      backgroundColor: profile.background_color,
      backgroundImage: profile.background_image_url ? `url(${profile.background_image_url})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),
    [profile.background_color, profile.background_image_url]
  )

  const updateField = (key: keyof CardProfile, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }))
  }

  const updateLink = (index: number, key: keyof CardLink, value: string) => {
    setProfile((prev) => {
      const next = [...prev.links]
      next[index] = { ...next[index], [key]: value }
      return { ...prev, links: next }
    })
  }

  const addLink = () => {
    setProfile((prev) => ({
      ...prev,
      links: [...prev.links, { label: 'New link', url: '', sort_order: prev.links.length }],
    }))
  }

  const removeLink = (index: number) => {
    setProfile((prev) => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index),
    }))
  }

  const save = async () => {
    setSaving(true)
    setMessage('')

    const res = await fetch('/api/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        originalSlug,
        profile,
        links: profile.links,
      }),
    })

    const json = await res.json()
    setSaving(false)

    if (!res.ok) {
      setMessage(json.error || 'Save failed')
      return
    }

    setMessage(`Saved: /card/${json.slug}`)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl border p-6">
        <h1 className="mb-4 text-2xl font-semibold">Edit card</h1>

        <div className="grid gap-4">
          {[
            ['slug', 'Slug'],
            ['full_name', 'Full name'],
            ['title', 'Title'],
            ['bio', 'Bio'],
            ['email', 'Email'],
            ['phone', 'Phone'],
            ['website', 'Website'],
            ['profile_image_url', 'Profile image URL'],
            ['background_color', 'Background color'],
            ['background_image_url', 'Background image URL'],
            ['button_color', 'Button color'],
            ['text_color', 'Text color'],
          ].map(([key, label]) => (
            <label key={key} className="grid gap-1">
              <span className="text-sm font-medium">{label}</span>
              <input
                className="rounded-xl border px-3 py-2"
                value={(profile as any)[key]}
                onChange={(e) => updateField(key as keyof CardProfile, e.target.value)}
              />
            </label>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="mb-3 text-lg font-semibold">Links</h2>
          <div className="space-y-3">
            {profile.links.map((link, index) => (
              <div key={index} className="rounded-2xl border p-3">
                <div className="grid gap-3">
                  <input
                    className="rounded-xl border px-3 py-2"
                    placeholder="Label"
                    value={link.label}
                    onChange={(e) => updateLink(index, 'label', e.target.value)}
                  />
                  <input
                    className="rounded-xl border px-3 py-2"
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) => updateLink(index, 'url', e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => removeLink(index)}
                    className="w-fit rounded-xl border px-3 py-2 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addLink}
            className="mt-3 rounded-xl border px-4 py-2"
          >
            Add link
          </button>
        </div>

        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="mt-6 rounded-xl bg-black px-4 py-2 text-white"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>

        {message ? <p className="mt-3 text-sm">{message}</p> : null}
      </section>

      <section className="rounded-3xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">Preview</h2>
        <div
          className="rounded-3xl p-6 text-white"
          style={previewStyle}
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-white/10">
              {profile.profile_image_url ? (
                <img
                  src={profile.profile_image_url}
                  alt={profile.full_name}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
            <h3 className="text-2xl font-semibold">{profile.full_name}</h3>
            <p className="mt-1 text-sm opacity-80">{profile.title}</p>
            <p className="mt-4 text-sm opacity-90">{profile.bio}</p>
          </div>

          <div className="mt-6 space-y-3">
            {profile.links.map((link, index) => (
              <div
                key={index}
                className="rounded-2xl px-4 py-3 text-center font-medium"
                style={{
                  backgroundColor: profile.button_color,
                  color: profile.text_color,
                }}
              >
                {link.label || 'Link'}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}