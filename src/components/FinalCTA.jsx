export default function FinalCTA() {
  return (
    <section className="w-full bg-black py-20 text-zinc-200">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-3xl font-bold text-white sm:text-4xl">Join the Beta Ride</h3>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
          Built for riders, not users. Less noise, more flow.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://zenmoto.app/beta"
            className="inline-flex items-center justify-center rounded-md bg-[#FF6B00] px-6 py-3 text-base font-semibold text-black transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40"
          >
            Download App
          </a>
          <a
            href="https://t.me/zenmoto"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Join Telegram Community
          </a>
        </div>
        <div className="mt-10 text-xs text-zinc-500">
          <a href="#terms" className="hover:text-zinc-300">Terms</a>
          <span className="mx-3">•</span>
          <a href="#privacy" className="hover:text-zinc-300">Privacy</a>
          <span className="mx-3">•</span>
          <a href="#contact" className="hover:text-zinc-300">Contact</a>
        </div>
      </div>
    </section>
  )
}
