'use client'

import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

type Props = {
  value: string
  logoUrl: string
  size?: number
}

export default function StyledQrCode({ value, logoUrl, size = 112 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const qr = new QRCodeStyling({
      width: size,
      height: size,
      type: 'svg',
      data: value,
      image: logoUrl,
      qrOptions: {
        errorCorrectionLevel: 'H',
      },
      dotsOptions: {
        color: '#ffffff',
        type: 'rounded',
      },
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: '#ffffff',
      },
      cornersDotOptions: {
        type: 'dot',
        color: '#ffffff',
      },
      backgroundOptions: {
        color: '#1800ad',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.48,
        margin: 1,
      },
    })

    if (ref.current) {
      ref.current.innerHTML = ''
      qr.append(ref.current)
    }
  }, [value, logoUrl, size])

  return <div ref={ref} className="h-full w-full" />
}