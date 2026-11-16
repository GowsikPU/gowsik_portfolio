import SectionHeading from '../components/SectionHeading'
import { education } from '../data/education'
export default function Education() {
  return (
    <section id="education" className="py-28 max-w-7xl mx-auto px-6">
      <SectionHeading label="07 / EDUCATION">MY ACADEMIC JOURNEY.</SectionHeading>
      <ul className="divide-y divide-line border-y border-line">
        {education.map(e => (
          <li key={e.degree} className="grid md:grid-cols-12 gap-3 py-8">
            <p className="md:col-span-3 font-serif italic text-2xl text-clay">{e.years}</p>
            <div className="md:col-span-9"><h3 className="font-display font-extrabold text-xl md:text-3xl">{e.degree.toUpperCase()}</h3><p className="mt-2 text-muted">{e.school}</p></div>
          </li>
        ))}
      </ul>
    </section>
  )
}
