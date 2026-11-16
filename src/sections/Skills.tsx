import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <section id="skills" className="bg-sand py-28"><div className="max-w-7xl mx-auto px-6">
      <SectionHeading label="03 / CAPABILITIES">TOOLS OF MY TRADE.</SectionHeading>
      <dl className="divide-y divide-line border-y border-line">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="grid md:grid-cols-12 gap-4 py-8">
            <dt className="md:col-span-4 font-display font-bold text-sm tracking-[0.1em] text-clay">{cat.toUpperCase()}</dt>
            <dd className="md:col-span-8 font-display font-bold text-2xl md:text-3xl leading-snug">{items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </div></section>
  )
}
