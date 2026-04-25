import { supabaseAdmin } from '@/lib/supabase/admin'
import { emptyProfile } from '@/lib/card-types'
import CardEditor from './ui/card-editor'

export const dynamic = 'force-dynamic'

export default async function EditCardPage({ searchParams }: any) {
  const slug = searchParams?.name ? decodeURIComponent(searchParams.name) : ''

  if (!slug) {
    return (
      <main className="mx-auto max-w-4xl p-6">
        <CardEditor initialProfile={emptyProfile} originalSlug="" />
      </main>
    )
  }

  const { data: profile } = await supabaseAdmin
    .from('card_profiles')
    .select('id, slug, full_name, title, bio, email, phone, website, profile_image_url, background_color, background_image_url, button_color, text_color')
    .eq('slug', slug)
    .maybeSingle()

  const { data: links } = profile?.id
    ? await supabaseAdmin
        .from('card_links')
        .select('id, label, url, sort_order')
        .eq('card_id', profile.id)
        .order('sort_order', { ascending: true })
    : { data: [] }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <CardEditor
        initialProfile={{
          ...(profile ?? emptyProfile),
          links: links ?? [],
        }}
        originalSlug={slug}
      />
    </main>
  )
}