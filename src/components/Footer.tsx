import { ArrowUp } from 'lucide-react'
import { nav, site } from '../data/site'
export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div><p className="font-display font-extrabold text-2xl">{site.name}.</p><p className="text-sm text-beige mt-2">{site.title}</p></div>
        <ul className="grid grid-cols-2 gap-2 text-sm">{nav.map(([id, l]) => <li key={id}><a className="hover:text-beige" href={`#${id}`}>{l}</a></li>)}</ul>
        <ul className="text-sm space-y-2">
          <li><a className="hover:text-beige" href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a className="hover:text-beige" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
          <li><a className="hover:text-beige" href={site.github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-6 flex justify-between text-xs text-beige">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href="#home" className="inline-flex items-center gap-2 hover:text-paper">Back to top <ArrowUp size={14} /></a>
      </div>
    </footer>
  )
}
