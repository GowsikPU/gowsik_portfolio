export interface Project { id: string; title: string; description: string; role: string; tech: string[]; github?: string; demo?: string; image?: string; published: boolean }
export const projects: Project[] = [
  { id: 'p1', published: true, title: 'Converting 2D Objects into 3D with a Minimal Set of Images',
    description: 'Developed a Gradio frontend for image uploads and interactive 3D reconstruction. Fine-tuned the reconstruction model to improve image-to-3D generation for the target use case. Integrated TripoSR to generate 3D object representations from single images. Applied 3D mesh extraction techniques to convert reconstructed geometry into usable 3D assets.',
    role: 'Frontend Developer, Model Fine-Tuning', tech: ['Python','TripoSR','Deep Learning','Triplane Representation','Marching Cubes','Gradio'] },
  { id: 'p2', published: true, title: 'Intelligent User Activity Monitoring & Anomaly Detection',
    description: 'Developed Windows event-log monitoring to track user activity and identify suspicious system behavior. Trained and integrated machine learning models using Scikit-learn to detect anomalous activity patterns. Designed an interactive Tkinter dashboard for activity visualization, security event analysis and monitoring. Integrated automated email and SMS alerts using SMTP and Twilio API.',
    role: 'Windows Event Monitoring, UI/UX Development, AI Model Training', tech: ['Python','Scikit-learn','Pandas','Windows Event Logs','SQLite/MySQL','Tkinter','SMTP','Twilio API'] },
  // Unpublished placeholders: set published to true and fill in details.
  { id: 'p3', published: false, title: '', description: '', role: '', tech: [] },
  { id: 'p4', published: false, title: '', description: '', role: '', tech: [] },
  { id: 'p5', published: false, title: '', description: '', role: '', tech: [] },
]
