import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const originalSlug: string | undefined = body.originalSlug
    const profile = body.profile
    const links = Array.isArray(body.links) ? body.links : []

    if (!profile?.slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    const lookupSlug = originalSlug || profile.slug

    const { data: existing } = await supabaseAdmin
      .from('card_profiles')
      .select('id')
      .eq('slug', lookupSlug)
      .maybeSingle()

    let cardId: string

    if (existing?.id) {
      const { data, error } = await supabaseAdmin
        .from('card_profiles')
        .update({
          slug: profile.slug,
          full_name: profile.full_name,
          title: profile.title,
          bio: profile.bio,
          email: profile.email,
          phone: profile.phone,
          website: profile.website,
          profile_image_url: profile.profile_image_url,
          background_color: profile.background_color,
          background_image_url: profile.background_image_url,
          button_color: profile.button_color,
          text_color: profile.text_color,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existing.id)
        .select('id')
        .single()

      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
      cardId = data.id
    } else {
      const { data, error } = await supabaseAdmin
        .from('card_profiles')
        .insert({
          slug: profile.slug,
          full_name: profile.full_name,
          title: profile.title,
          bio: profile.bio,
          email: profile.email,
          phone: profile.phone,
          website: profile.website,
          profile_image_url: profile.profile_image_url,
          background_color: profile.background_color,
          background_image_url: profile.background_image_url,
          button_color: profile.button_color,
          text_color: profile.text_color,
        })
        .select('id')
        .single()

      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
      cardId = data.id
    }

    const { error: deleteError } = await supabaseAdmin
      .from('card_links')
      .delete()
      .eq('card_id', cardId)

    if (deleteError) {
      return NextResponse.json({ error: deleteError.message }, { status: 500 })
    }

    if (links.length) {
      const inserts = links.map((link: any, index: number) => ({
        card_id: cardId,
        label: link.label,
        url: link.url,
        sort_order: link.sort_order ?? index,
      }))

      const { error: insertError } = await supabaseAdmin
        .from('card_links')
        .insert(inserts)

      if (insertError) {
        return NextResponse.json({ error: insertError.message }, { status: 500 })
      }
    }

    return NextResponse.json({ ok: true, slug: profile.slug })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}