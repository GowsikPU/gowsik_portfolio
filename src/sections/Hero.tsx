import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Github, Mail } from 'lucide-react'
import Button from '../components/Button'
import { site } from '../data/site'
export default function Hero() {
  const { scrollY } = useScroll(); const y = useTransform(scrollY, [0, 600], [0, 50])
  const ease = [0.22, 1, 0.36, 1] as const
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7">
        <p className="font-serif italic text-clay text-xl mb-4">Hello, I’m</p>
        <div className="overflow-hidden"><motion.h1 initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, ease }}
          className="font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(3.5rem,11vw,9.5rem)]">GOWSIK PU.</motion.h1></div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-4 font-display font-bold tracking-[0.2em] text-sm text-muted">SOFTWARE ENGINEER</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease }} className="mt-8 max-w-xl space-y-4 text-muted leading-relaxed">
          <p className="text-ink text-lg">“I enjoy turning ideas into practical software solutions, exploring intelligent technologies and understanding how systems work beneath the surface.”</p>
          <p>Currently pursuing Computer Science and Engineering, with interests in software development, artificial intelligence and cybersecurity.</p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button href="#work">EXPLORE MY WORK</Button>
            {site.resumeAvailable && <Button href={site.resume} download variant="outline">DOWNLOAD RESUME</Button>}
            <Button href="#contact" variant="outline">GET IN TOUCH</Button>
          </div>
          <div className="flex items-center gap-5 pt-4 text-sm">
            <span className="inline-flex items-center gap-2"><MapPin size={16} />{site.location}</span>
            <a aria-label="GitHub" href={site.github} target="_blank" rel="noreferrer" className="hover:text-clay"><Github size={18} /></a>
            <a aria-label="Email" href={`mailto:${site.email}`} className="hover:text-clay"><Mail size={18} /></a>
          </div>
        </motion.div>
      </div>
      <motion.div style={{ y }} className="lg:col-span-5">
        <motion.div initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.2, ease, delay: 0.2 }} className="relative">
          <img src={site.portrait} alt="Portrait of Gowsik PU" width={1112} height={1414} fetchPriority="high" className="w-full aspect-[4/5] object-cover object-top" />
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-beige" />
        </motion.div>
      </motion.div>
    </section>
  )
}
