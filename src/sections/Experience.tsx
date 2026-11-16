import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'
if (import.meta.env.DEV && experience.some(e => e.needsVerification)) console.warn('[portfolio] Experience titles/descriptions need verification against the resume (src/data/experience.ts).')
export default function Experience() {
  return (
    <section id="experience" className="py-28 max-w-7xl mx-auto px-6">
      <SectionHeading label="04 / EXPERIENCE">MY PROFESSIONAL JOURNEY.</SectionHeading>
      <ol className="border-l border-line ml-2">
        {experience.map(e => (
          <li key={e.role} className="relative pl-8 md:pl-12 pb-16 last:pb-0">
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-clay" />
            <p className="text-sm text-muted">{e.period}</p>
            <h3 className="font-display font-extrabold text-3xl md:text-4xl mt-1">{e.role}</h3>
            <p className="font-display font-bold text-clay text-sm tracking-[0.1em] mt-1">{e.org}</p>
            <ul className="mt-5 space-y-2 max-w-2xl list-disc pl-5 text-muted">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
