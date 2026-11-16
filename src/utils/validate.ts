export interface FormValues { name: string; email: string; subject: string; message: string }
export function validate(v: FormValues) {
  const e: Partial<Record<keyof FormValues, string>> = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}
