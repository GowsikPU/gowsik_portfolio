export interface Certificate { id: string; title: string; issuer: string; date: string; image?: string; published: boolean }
export const certificates: Certificate[] = [
  { id: 'c1', published: true, title: 'Digital Marketing — Industrial Visit Participation', issuer: 'AbserveTech', date: '20 September 2025', image: '/assets/certificates/digital-marketing.jpg' },
  { id: 'c2', published: true, title: 'VACIT03 — Cyber Security: Essential Security Skills', issuer: 'Kongunadu College of Engineering and Technology with Xplore Intellects Private Limited', date: '14–19 December 2024', image: '/assets/certificates/cybersecurity.jpg' },
  { id: 'c3', published: true, title: 'VACAD03 — Core Java', issuer: 'Kongunadu College of Engineering and Technology', date: '23–28 September 2024', image: '/assets/certificates/core-java.jpg' },
  { id: 'c4', published: true, title: 'Data Analytics for E-Commerce Database — Internship Completion', issuer: 'UK Info Tech', date: '3–19 June 2025 (15 days)', image: '/assets/certificates/data-analytics.jpg' },
  // Listed on the resume; no image yet, so shown as text only (not as verified credentials).
  { id: 'c5', published: true, title: 'Python Programming', issuer: 'Infosys Springboard', date: 'May 2024' },
  { id: 'c6', published: true, title: 'Programming in Java', issuer: 'NPTEL', date: 'December 2023' },
  // Hidden placeholders for future certificates.
  { id: 'c7', published: false, title: '', issuer: '', date: '' }, { id: 'c8', published: false, title: '', issuer: '', date: '' },
  { id: 'c9', published: false, title: '', issuer: '', date: '' }, { id: 'c10', published: false, title: '', issuer: '', date: '' },
]
