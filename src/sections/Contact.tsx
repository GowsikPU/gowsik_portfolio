import { useState, type FormEvent } from 'react'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'
import { validate, type FormValues } from '../utils/validate'
type Status = 'idle' | 'sending' | 'success' | 'error'
const empty: FormValues = { name: '', email: '', subject: '', message: '' }
export default function Contact() {
  const [v, setV] = useState(empty); const [errs, setErrs] = useState<ReturnType<typeof validate>>({}); const [status, setStatus] = useState<Status>('idle')
  const submit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if ((new FormData(ev.currentTarget).get('website') as string)?.length) return // honeypot: bots only
    const e = validate(v); setErrs(e); if (Object.keys(e).length) return
    setStatus('sending')
    try {
      const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw new Error(String(r.status))
      setStatus('success'); setV(empty)
    } catch { setStatus('error') }
  }
  const field = (k: keyof FormValues, label: string, type = 'text') => (
    <div>
      <label htmlFor={k} className="block text-xs font-display font-bold tracking-[0.14em] mb-2">{label}</label>
      {k === 'message'
        ? <textarea id={k} rows={5} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!errs[k]} className="w-full bg-transparent border border-line p-3 focus:border-clay outline-none" />
        : <input id={k} type={type} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!errs[k]} className="w-full bg-transparent border border-line p-3 focus:border-clay outline-none" />}
      {errs[k] && <p role="alert" className="text-sm text-clay mt-1">{errs[k]}</p>}
    </div>
  )
  return (
    <section id="contact" className="bg-sand py-28"><div className="max-w-7xl mx-auto px-6">
      <p className="text-xs tracking-[0.2em] text-clay font-display font-bold mb-4">08 / CONTACT</p>
      <h2 className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2.5rem,8vw,7rem)] mb-10">HAVE AN IDEA?<br />LET’S BUILD SOMETHING.</h2>
      <div className="grid md:grid-cols-12 gap-14">
        <div className="md:col-span-5 space-y-8">
          <p className="text-muted leading-relaxed">I’m always interested in exploring new technologies, collaborating on meaningful projects and connecting with people who enjoy building innovative solutions.</p>
          <dl className="space-y-4 text-sm">
            <div><dt className="font-display font-bold tracking-[0.14em] text-xs">EMAIL</dt><dd><a className="hover:text-clay" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div><dt className="font-display font-bold tracking-[0.14em] text-xs">PHONE</dt><dd><a className="hover:text-clay" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></dd></div>
            <div><dt className="font-display font-bold tracking-[0.14em] text-xs">GITHUB</dt><dd><a className="hover:text-clay" href={site.github} target="_blank" rel="noreferrer">{site.github}</a></dd></div>
          </dl>
        </div>
        <div className="md:col-span-7">
          {!site.formEndpoint ? (
            <p className="border border-line bg-paper p-6 text-sm">The contact form is not connected yet. Email me directly at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-6">
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              {field('name', 'NAME')}{field('email', 'EMAIL', 'email')}{field('subject', 'SUBJECT')}{field('message', 'MESSAGE')}
              <button disabled={status === 'sending'} className="bg-ink text-paper px-8 py-3 text-xs font-display font-bold tracking-[0.14em] hover:bg-clay disabled:opacity-50">{status === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}</button>
              <div aria-live="polite">
                {status === 'success' && <p className="text-sm">Message sent. I’ll reply by email.</p>}
                {status === 'error' && <p className="text-sm text-clay">Your message was not sent. Try again, or email {site.email} directly.</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </div></section>
  )
}
