export interface Experience { role: string; org: string; period: string; points: string[]; needsVerification?: boolean }
// NEEDS VERIFICATION: the resume may have these titles and descriptions mapped to the wrong entries. Confirm, then remove the flag.
export const experience: Experience[] = [
  { role: 'Ethical Hacking', org: 'INFO.TECH', period: 'October 2024 · 12 months', needsVerification: true, points: ['Developed Python scripts for problem-solving, data processing and file handling.','Applied data structures and core Python concepts to implement programming solutions.','Practiced debugging, code optimization and clean coding principles.'] },
  { role: 'Python Intern', org: 'METS TRICHY', period: 'March 2023 · 6 months', needsVerification: true, points: ['Explored ethical hacking methodologies, network fundamentals and system reconnaissance.','Studied common web application and network vulnerabilities, along with mitigation techniques.','Practiced vulnerability assessment, penetration testing workflows and defensive security principles.'] },
]
