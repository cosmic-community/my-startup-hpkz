import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-slate-900">
            <span>🚀</span>
            <span>My Startup</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/features" className="text-sm text-slate-600 hover:text-brand-600">Features</Link>
            <Link href="/pricing" className="text-sm text-slate-600 hover:text-brand-600">Pricing</Link>
            <Link href="/team" className="text-sm text-slate-600 hover:text-brand-600">Team</Link>
            <Link href="/blog" className="text-sm text-slate-600 hover:text-brand-600">Blog</Link>
            <Link href="/testimonials" className="text-sm text-slate-600 hover:text-brand-600">Testimonials</Link>
          </nav>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          © {year} My Startup. All rights reserved.
        </p>
      </div>
    </footer>
  )
}