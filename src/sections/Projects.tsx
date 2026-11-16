import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { projects, type Project } from '../data/projects'
export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null)
  const list = projects.filter(p => p.published)
  return (
    <section id="work" className="py-28 max-w-7xl mx-auto px-6">
      <SectionHeading label="02 / SELECTED WORK">THINGS I'VE BUILT.</SectionHeading>
      <div className="space-y-24">
        {list.map((p, i) => (
          <motion.article key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-12 gap-8 items-center ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div className="md:col-span-6">
              {p.image ? <img src={p.image} alt={p.title} loading="lazy" className="w-full aspect-[4/3] object-cover" /> :
                <div className="aspect-[4/3] bg-sand border border-line flex items-end p-6"><span className="font-display font-extrabold text-8xl text-beige">0{i + 1}</span></div>}
            </div>
            <div className="md:col-span-6">
              <p className="text-clay font-display font-bold text-sm mb-3">Project 0{i + 1}</p>
              <h3 className="font-display font-extrabold text-2xl md:text-4xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted">{p.role}</p>
              <ul className="mt-5 flex flex-wrap gap-2 text-xs">{p.tech.map(t => <li key={t} className="border border-line px-2.5 py-1">{t}</li>)}</ul>
              <button onClick={() => setOpen(p)} className="mt-6 font-display font-bold text-xs tracking-[0.14em] border-b border-ink pb-1 hover:text-clay hover:border-clay">VIEW PROJECT</button>
            </div>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div role="dialog" aria-modal="true" aria-label={open.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/60 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
            <motion.div initial={{ y: 24 }} animate={{ y: 0 }} onClick={e => e.stopPropagation()} className="bg-paper max-w-2xl w-full p-8 md:p-12 relative max-h-[90vh] overflow-auto">
              <button aria-label="Close" onClick={() => setOpen(null)} className="absolute top-4 right-4"><X /></button>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl pr-8">{open.title}</h3>
              <p className="mt-5 leading-relaxed">{open.description}</p>
              <p className="mt-5 text-sm"><span className="font-bold">Role:</span> {open.role}</p>
              <p className="mt-2 text-sm text-muted">{open.tech.join(', ')}</p>
              <div className="mt-6 flex gap-5 text-sm">
                {open.github ? <a className="inline-flex gap-2 items-center hover:text-clay" href={open.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a> : <span className="text-muted">Repository link not published yet</span>}
                {open.demo && <a className="inline-flex gap-2 items-center hover:text-clay" href={open.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} />Live demo</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
