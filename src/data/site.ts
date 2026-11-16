export const site = {
  name: 'GOWSIK PU', title: 'Software Engineer', location: 'Pudukkottai, Tamil Nadu, India',
  email: 'gowsikpu@gmail.com', phone: '+91 73393 16566', github: 'https://github.com/GowsikPU',
  portrait: '/assets/profile/gowsik-profile.jpeg',
  // Set to true once public/assets/resume/gowsik-resume.pdf exists.
  resumeAvailable: false, resume: '/assets/resume/gowsik-resume.pdf',
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '',
}
export const nav = [['home','HOME'],['about','ABOUT'],['work','WORK'],['experience','EXPERIENCE'],['certificates','CERTIFICATES'],['contact','CONTACT']] as const
