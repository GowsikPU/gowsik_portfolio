import SectionHeading from '../components/SectionHeading'
const interests = ['Software Development','Artificial Intelligence','Machine Learning','Cybersecurity','Ethical Hacking','Python Development','3D Reconstruction']
export default function About() {
  return (
    <section id="about" className="bg-sand py-28"><div className="max-w-7xl mx-auto px-6">
      <SectionHeading label="01 / ABOUT ME">A LITTLE ABOUT ME.</SectionHeading>
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-5 text-lg leading-relaxed">
          <p>I’m a Computer Science and Engineering student who enjoys turning ideas into practical software solutions.</p>
          <p>With a foundation in Java, Python and Object-Oriented Programming, I enjoy exploring different areas of technology, from artificial intelligence to cybersecurity.</p>
          <p className="font-serif italic text-2xl text-clay">I believe in continuous learning, logical thinking and building technology that creates meaningful impact.</p>
        </div>
        <div className="md:col-span-5 space-y-8 text-sm">
          <div><h3 className="font-display font-bold mb-2">Education</h3><p className="text-muted">B.E. Computer Science and Engineering, 2023–2027<br />Kongunadu College of Engineering and Technology, Trichy</p></div>
          <div><h3 className="font-display font-bold mb-3">Interests</h3><ul className="flex flex-wrap gap-2">{interests.map(i => <li key={i} className="border border-line bg-paper px-3 py-1">{i}</li>)}</ul></div>
        </div>
      </div>
    </div></section>
  )
}
