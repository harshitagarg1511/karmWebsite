import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business, market, and audience to understand your unique challenges and opportunities.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'Our team crafts a data-driven strategy tailored to your goals, leveraging market insights and competitive analysis.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'We bring the strategy to life with creative excellence and technical expertise, maintaining transparency throughout.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Scale',
    description: 'We continuously optimize, measure, and refine to ensure sustained growth and maximum ROI for your investment.',
    icon: '📈',
  },
]

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="process" className="py-20 md:py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            Our Process
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            A proven framework designed to deliver results at every stage
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-0 md:grid md:grid-cols-4 gap-8 relative"
        >
          {/* Connection Line - Desktop Only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple opacity-30" />

          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative"
            >
              <div className="glass p-8 rounded-lg border border-accent-purple/20 hover:border-accent-purple/50 transition-all h-full relative z-10">
                {/* Number Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl font-bold text-accent-blue/50 mb-4"
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <div className="text-5xl mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-display mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-gray mb-6">
                  {step.description}
                </p>

                {/* Arrow - Mobile Only */}
                {idx < processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8">
                    <FiChevronRight className="text-accent-purple text-4xl transform rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  )
}
