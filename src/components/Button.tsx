import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function Button({ href, children, variant = 'solid', ...rest }: { href: string; children: ReactNode; variant?: 'solid' | 'outline' } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base = 'inline-block px-6 py-3 text-xs font-display font-bold tracking-[0.14em] transition-colors '
  const style = variant === 'solid' ? 'bg-ink text-paper hover:bg-clay' : 'border border-ink text-ink hover:bg-ink hover:text-paper'
  return <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href={href} className={base + style} {...(rest as object)}>{children}</motion.a>
}
