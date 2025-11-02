import { motion } from 'framer-motion'
import { Smartphone, Map, MessageSquare, Gauge } from 'lucide-react'

function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto h-[560px] w-[280px] rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-3 shadow-2xl shadow-black/60">
      <div className="mx-auto h-full w-full rounded-[28px] bg-zinc-950 p-3 ring-1 ring-white/10">
        <div className="mx-auto mb-3 h-6 w-24 rounded-full bg-zinc-800" />
        <div className="h-[480px] overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 ring-1 ring-white/10">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-white/5" />
    </div>
  )
}

export default function Showcase() {
  const features = [
    { icon: Smartphone, title: 'Smart Ride Setup', desc: 'Create and publish rides in seconds.' },
    { icon: Map, title: 'Live GPS Tracking', desc: 'See where your crew is, in real time.' },
    { icon: Gauge, title: 'Captain Mode', desc: 'Manage the group without breaking the flow.' },
    { icon: MessageSquare, title: 'Group Chat', desc: 'Stay aligned with subtle nudges and updates.' }
  ]

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0B0B0B] to-black py-20 text-zinc-200">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Precision that feels like freedom.</h3>
          <p className="mt-3 max-w-xl text-zinc-400">
            From planning to the last kilometer, Zen Moto keeps the ride tight and effortless.
          </p>

          <div className="mt-8 space-y-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A1A1A] text-[#FF6B00] ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">{title}</div>
                  <p className="text-sm text-zinc-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <PhoneFrame>
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: [0, -280, -560, -840], opacity: 1 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-full w-[1120px]"
            >
              {/* Ride Creation */}
              <div className="flex h-full w-[280px] flex-col items-stretch justify-between p-4">
                <div>
                  <div className="text-sm uppercase tracking-widest text-[#FF6B00]">Ride Creation</div>
                  <div className="mt-2 text-xl font-semibold text-white">Set route, date, pace</div>
                </div>
                <div className="mt-4 flex-1 rounded-xl bg-zinc-900/80 p-4 ring-1 ring-white/10">
                  <div className="h-8 w-32 rounded-md bg-gradient-to-r from-zinc-700 to-zinc-800" />
                  <div className="mt-3 h-6 w-40 rounded-md bg-zinc-800" />
                  <div className="mt-3 h-6 w-24 rounded-md bg-zinc-800" />
                  <div className="mt-4 h-40 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700 to-zinc-900" />
                </div>
              </div>

              {/* Invite Riders */}
              <div className="flex h-full w-[280px] flex-col items-stretch justify-between p-4">
                <div>
                  <div className="text-sm uppercase tracking-widest text-[#FF6B00]">Invite Riders</div>
                  <div className="mt-2 text-xl font-semibold text-white">Share link, set roles</div>
                </div>
                <div className="mt-4 flex-1 space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl bg-zinc-900/80 p-3 ring-1 ring-white/10">
                      <div className="h-6 w-28 rounded bg-zinc-800" />
                      <div className="h-6 w-16 rounded bg-zinc-800" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Map Tracking */}
              <div className="flex h-full w-[280px] flex-col items-stretch justify-between p-4">
                <div>
                  <div className="text-sm uppercase tracking-widest text-[#FF6B00]">Live Map</div>
                  <div className="mt-2 text-xl font-semibold text-white">Positions in real-time</div>
                </div>
                <div className="mt-4 flex-1 rounded-xl bg-[radial-gradient(circle_at_center,_#2f2f2f,_#0a0a0a)] p-3 ring-1 ring-white/10">
                  <div className="h-full w-full rounded-lg border border-white/10 bg-[conic-gradient(at_50%_50%,_#FF6B00_0deg,_#111_120deg,_#FF6B00_240deg,_#111_360deg)] opacity-90" />
                </div>
              </div>

              {/* Group Chat */}
              <div className="flex h-full w-[280px] flex-col items-stretch justify-between p-4">
                <div>
                  <div className="text-sm uppercase tracking-widest text-[#FF6B00]">Group Chat</div>
                  <div className="mt-2 text-xl font-semibold text-white">Quiet, purposeful updates</div>
                </div>
                <div className="mt-4 flex-1 space-y-2 overflow-hidden rounded-xl bg-zinc-900/80 p-3 ring-1 ring-white/10">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-8 w-full rounded bg-zinc-800" />
                  ))}
                </div>
              </div>
            </motion.div>
          </PhoneFrame>

          {/* Community Vibe strip */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
            <div
              className="h-40 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10" />
            <div className="absolute inset-0 flex items-center px-6">
              <div className="text-white">
                <div className="text-lg font-semibold">Because rides are better together.</div>
                <div className="mt-1 text-sm text-zinc-300">“Zen Moto changed how we ride as a crew — no more missed turns.”</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Motion trail on scroll */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}
