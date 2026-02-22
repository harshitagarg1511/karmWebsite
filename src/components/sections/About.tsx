import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text"
            >
              Why Choose KARM
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-text-gray mb-6 leading-relaxed"
            >
              At KARM Solutions, every campaign is powered by data, creativity, and strategy — ensuring your brand doesn't just grow… it dominates.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {[
                'Data-driven strategies for measurable results',
                'Creative excellence combined with technical expertise',
                'Dedicated team committed to your success',
                'Transparent reporting and continuous optimization',
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4 items-start"
                >
                  <div className="text-accent-blue text-2xl font-bold flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-text-gray">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            
          </motion.div>

          {/* Right - Animated Blob/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-96"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple/30 to-accent-blue/30 blur-2xl"
            />

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue opacity-20 blur-3xl" />
            </motion.div>

            <motion.div
              animate={{
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 flex items-center justify-center text-6xl"
            >
              🚀
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
