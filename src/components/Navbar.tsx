import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { nav, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(nav.map(n => n[0]))
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-extrabold tracking-tight">{site.name}.</a>
        <ul className="hidden lg:flex items-center gap-8">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
              className={`text-xs font-display font-bold tracking-[0.14em] pb-1 border-b transition-colors ${active === id ? 'border-clay text-ink' : 'border-transparent text-muted hover:text-ink'}`}>{label}</a></li>
          ))}
          {site.resumeAvailable && <li><a href={site.resume} download aria-label="Download resume" className="text-clay hover:text-ink"><Download size={16} /></a></li>}
        </ul>
        <button className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="lg:hidden bg-paper border-t border-line px-6 py-4 space-y-4">
          {nav.map(([id, label]) => <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className="font-display font-bold tracking-[0.14em] text-sm">{label}</a></li>)}
        </ul>
      )}
    </header>
  )
}
