import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-6 pt-32"
    >
      <div className="text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-9xl font-bold font-display mb-6"
        >
          <span className="gradient-text">404</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-text-gray mb-8"
        >
          Page not found
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-semibold text-dark hover:shadow-lg hover:shadow-accent-purple/50 transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
