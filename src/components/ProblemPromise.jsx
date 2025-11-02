import { Map, Users, Navigation } from 'lucide-react'

export default function ProblemPromise() {
  const items = [
    {
      icon: Map,
      title: 'Create & Manage Rides',
      desc: 'Plan routes with clarity. Publish in seconds and keep the crew aligned.'
    },
    {
      icon: Navigation,
      title: 'Track Every Rider Live',
      desc: 'Real-time positions and pace. No more missed turns.'
    },
    {
      icon: Users,
      title: 'Stay Synced, Wherever the Road Takes You',
      desc: 'In-app updates and nudges keep everyone flowing as one.'
    }
  ]

  return (
    <section className="relative w-full bg-[#0B0B0B] py-20 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Rides shouldn’t be chaotic.</h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Zen Moto brings order to the thrill — plan your route, track every rider live, and never lose the pack again.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition hover:from-white/[0.06]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1A1A1A] text-[#FF6B00] ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-lg font-semibold text-white">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
