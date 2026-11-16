import SectionHeading from '../components/SectionHeading'
import { achievements } from '../data/achievements'
export default function Achievements() {
  return (
    <section id="achievements" className="bg-ink text-paper py-28"><div className="max-w-7xl mx-auto px-6">
      <p className="text-xs tracking-[0.2em] text-beige font-display font-bold mb-4">05 / MILESTONES</p>
      <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-16">A FEW MILESTONES.</h2>
      {achievements.filter(a => a.published).map(a => (
        <div key={a.title} className="grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-7 font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(3.5rem,12vw,10rem)] text-beige">{a.title.toUpperCase()}</p>
          <div className="md:col-span-5"><p className="font-serif italic text-2xl">{a.event}</p><p className="mt-4 text-beige/80 leading-relaxed">{a.text}</p></div>
        </div>
      ))}
    </div></section>
  )
}
