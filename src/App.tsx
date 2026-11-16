import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Certifications from './sections/Certifications'
import Education from './sections/Education'
import Contact from './sections/Contact'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main><Hero /><About /><Projects /><Skills /><Experience /><Achievements /><Certifications /><Education /><Contact /></main>
      <Footer />
    </MotionConfig>
  )
}
