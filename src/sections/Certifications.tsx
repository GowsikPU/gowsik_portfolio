import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { certificates, type Certificate } from '../data/certificates'
export default function Certifications() {
  const [open, setOpen] = useState<Certificate | null>(null)
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  const shown = certificates.filter(c => c.published)
  const visual = shown.filter(c => c.image), textOnly = shown.filter(c => !c.image)
  return (
    <section id="certificates" className="bg-sand py-28"><div className="max-w-7xl mx-auto px-6">
      <SectionHeading label="06 / CERTIFICATIONS">LEARNING NEVER STOPS.</SectionHeading>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {visual.map(c => (
          <li key={c.id}>
            <button onClick={() => setOpen(c)} aria-label={`Enlarge certificate: ${c.title}`} className="group block w-full text-left">
              <div className="aspect-[4/5] bg-paper border border-line overflow-hidden"><img src={c.image} alt={`Certificate: ${c.title}`} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" /></div>
              <h3 className="mt-4 font-display font-bold leading-snug group-hover:text-clay">{c.title}</h3>
              <p className="text-sm text-muted mt-1">{c.issuer}</p><p className="text-sm text-clay mt-1">{c.date}</p>
            </button>
          </li>
        ))}
      </ul>
      {textOnly.length > 0 && (
        <div className="mt-16 border-t border-line pt-8">
          <h3 className="font-display font-bold mb-2">Also listed on my resume</h3>
          <p className="text-sm text-muted mb-4">Certificate images to be added.</p>
          <ul className="space-y-2">{textOnly.map(c => <li key={c.id} className="flex flex-wrap gap-x-4 text-sm"><span className="font-bold">{c.title}</span><span className="text-muted">{c.issuer} · {c.date}</span></li>)}</ul>
        </div>
      )}
      <AnimatePresence>
        {open?.image && (
          <motion.div role="dialog" aria-modal="true" aria-label={open.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/85 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
            <button aria-label="Close" className="absolute top-5 right-5 text-paper"><X /></button>
            <img src={open.image} alt={`Certificate: ${open.title}`} className="max-h-[92vh] max-w-full object-contain" onClick={e => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div></section>
  )
}
