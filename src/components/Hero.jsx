import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const downloadUrl = 'https://zenmoto.app/beta'
const telegramUrl = 'https://t.me/zenmoto'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {/* Spline 3D scene as the hero background */}
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Vignette + gradient tint */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF6B00]" />
          <span className="text-xs uppercase tracking-widest text-zinc-300">Beta Live in India</span>
        </div>

        <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
          Ride Together. <span className="text-[#FF6B00]">Flow Together.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">
          The only app built for Indian motorbikers to plan, ride, and stay connected in real-time.
        </p>

        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href={downloadUrl}
            className="inline-flex items-center justify-center rounded-md bg-[#FF6B00] px-6 py-3 text-base font-semibold text-black transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40"
          >
            Download Beta
          </a>
          <div className="flex items-center gap-4">
            <img
              className="h-20 w-20 rounded-md border border-white/10 bg-white/5 p-1"
              alt="Scan to download Zen Moto"
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(downloadUrl)}`}
            />
            <div className="text-sm text-zinc-300">
              <div className="font-semibold text-white">Scan to Download</div>
              <a href={telegramUrl} className="text-[#FF6B00] underline underline-offset-4">
                Join Telegram Community
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
