import { motion } from 'framer-motion'
export default function SectionHeading({ label, children }: { label: string; children: string }) {
  return (
    <div className="mb-14 md:mb-20">
      <p className="text-xs tracking-[0.2em] text-clay font-display font-bold mb-4">{label}</p>
      <div className="overflow-hidden">
        <motion.h2 initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02]">{children}</motion.h2>
      </div>
    </div>
  )
}
