import { notFound } from 'next/navigation'
import { cards } from '@/lib/cards'
import CardView from './ui/card-view'
import { WavyBackground } from '@/components/ui/wavy'

export default async function CardPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const data = cards[name]

  if (!data) return notFound()

  return (<>

    <div className="relative min-h-screen overflow-x-clip overflow-y-clip">

        <WavyBackground
            containerClassName="pointer-events-none absolute left-[-1.5rem] top-[-0.5rem] h-[18rem] w-[18rem] md:left-[-6rem] md:top-[-2rem] md:h-[38rem] md:w-[38rem]"
            colors={["#223bc5", "#4a85de", "#9186ef"]}
            waveWidth={50}
            blur={3}
            speed="fast"
            waveOpacity={1}
            corner="top-left"
            waves={3}
            amplitude={30}
            />
                {/* bottom-right quarter wave */}
        <WavyBackground
            containerClassName="pointer-events-none absolute bottom-[-3.5rem] right-[-1.5rem] h-[15rem] w-[15rem] md:bottom-[-5rem] md:right-[-6rem] md:h-[30rem] md:w-[30rem]"
            colors={["#223bc5", "#4a85de", "#9186ef"]}
            waveWidth={50}
            blur={3}
            speed="fast"
            waveOpacity={1}
            corner="bottom-right"
            waves={3}
            amplitude={20}
        />

          <CardView data={data} />

    </div>

  
  
  </>)
}