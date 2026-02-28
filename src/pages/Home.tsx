import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Brands from '../components/sections/Brands'
import Team from '../components/sections/Team'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <Process />
      <Brands />
      <Team />
      <Contact />
    </motion.div>
  )
}
