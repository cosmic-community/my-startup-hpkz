import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
          Welcome to My Startup
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Build something great, faster than ever
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          The all-in-one platform that helps modern teams ship products, delight customers, and scale with confidence.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Get Started
          </Link>
          <Link
            href="/features"
            className="rounded-lg border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  )
}