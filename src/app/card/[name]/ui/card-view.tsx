'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Mail,
  Phone,
  Share2,
  X,
  Send,
  Copy,
  QrCodeIcon,
} from 'lucide-react'
import type { CardData } from '@/lib/cards'
import SocialLinks from '@/components/social-links'
import StyledQrCode from './qr'
import Reveal from '@/components/ui/Reveal'


export default function CardView({ data }: { data: CardData }) {
  const [shareOpen, setShareOpen] = useState(false)
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const whatsappUrl = useMemo(() => {
    const text = `Check out ${data.name}'s card: ${shareUrl}`
    return `https://wa.me/?text=${encodeURIComponent(text)}`
  }, [data.name, shareUrl])

  const telegramUrl = useMemo(() => {
    const text = `Check out ${data.name}'s card`
    return `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`
  }, [data.name, shareUrl])

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // no-op
    }
  }

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
ORG:${data.company}
TITLE:${data.title}
TEL:${data.phone}
EMAIL:${data.email}
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = `${data.name.replace(/\s+/g, '_')}.vcf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  const qrSize = 170
  const qrOuter = qrSize + 28

  return (
    <>
      <main className="min-h-screen bg-[#f3f3f3] px-4 py-8 pb-28">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-sm items-center justify-center">
          <Reveal className="w-full" from="bottom" distance={12}>
            <div className="relative w-full overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              {/* Banner */}
              <div className="h-44 w-full overflow-hidden rounded-t-[2rem]">
                <img
                  src={data.logo}
                  alt="Banner"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Avatar */}
              <div className="absolute left-6 top-[120px] z-50 h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-zinc-200 shadow-xl">
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-[1.7rem] font-extrabold text-zinc-900">
                      {data.name}
                    </h1>
                    <p className="mt-1 text-[0.95rem] text-zinc-500">{data.title}</p>
                    <p className="text-[0.95rem] text-zinc-500">{data.company}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#223bc5]/10">
                      <Phone className="h-4 w-4 text-[#74265f]" />
                    </div>
                    <span className="text-sm text-zinc-800">{data.phone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#223bc5]/10">
                      <Mail className="h-4 w-4 text-[#74265f]" />
                    </div>
                    <span className="text-sm text-zinc-800">{data.email}</span>
                  </div>

                  <SocialLinks
                    links={{
                      website: data.website,
                      linkedin: data.linkedin,
                      youtube: data.youtube,
                      instagram: data.instagram,
                      x: data.x,
                    }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] flex justify-center px-4 pb-4">
        <div className="flex w-full max-w-sm justify-center gap-3 rounded-2xl bg-transparent p-3 ">
          <button
            onClick={() => setShareOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-[#223bc5] px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-50"
          >
            <QrCodeIcon className="h-7 w-7 text-white" />
            QR Code
          </button>

          
        </div>
      </div>

      {/* Share Sheet */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 transition-opacity duration-200 ${
          shareOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setShareOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed left-1/2 w-[min(92vw,38rem)] -translate-x-1/2 overflow-hidden bg-white shadow-2xl transition-all duration-200 ease-out ${
            shareOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          } bottom-0 rounded-t-3xl sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:rounded-3xl`}
        >
          <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Share</h2>
              <p className="text-sm text-zinc-500">Send or save this card</p>
            </div>

            <button
              type="button"
              onClick={() => setShareOpen(false)}
              className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#25D366]/20 bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>Share on WhatsApp</span>
              </a>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
              >
                <Send className="h-5 w-5 shrink-0 text-[#229ED9]" />
                <span>Share on Telegram</span>
              </a>

              <button
                type="button"
                onClick={copyLink}
                className="flex w-full items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
              >
                <Copy className="h-5 w-5 shrink-0 text-zinc-600" />
                <span>{copied ? 'Link copied' : 'Copy link'}</span>
              </button>
            </div>

            <div className="flex justify-center sm:justify-end">
              <div
                className="flex shrink-0 flex-col items-center rounded-[1.5rem] border border-zinc-200 bg-zinc-50 shadow-sm"
                style={{ width: qrOuter, padding: 12 }}
              >
                <div
                  className="flex items-center justify-center rounded-[1.1rem] border border-dashed border-zinc-300 bg-white"
                  style={{ width: qrSize, height: qrSize, padding: 8 }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{ width: qrSize - 16, height: qrSize - 16 }}
                  >
                    <StyledQrCode
                      value="https://elevare-lac.vercel.app/card/gracious"
                      logoUrl="/brand/logo-2.png"
                      size={qrSize - 16}
                    />
                  </div>
                </div>

                <p className="mt-2 text-center text-[11px] leading-none text-zinc-500">
                  QR code
                </p>
              </div>
            </div>
          </div>

          <div className="h-4 sm:hidden" />
        </div>
      </div>
    </>
  )
}

function WhatsAppIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="#FFFFFF"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M24.504 7.504A11.88 11.88 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.9 11.9 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.96 11.96 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.9 9.9 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.86 9.86 0 0 1 7.02 2.91a9.88 9.88 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a17 17 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352"
      />
    </svg>
  )
}