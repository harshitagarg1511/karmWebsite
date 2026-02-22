import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { FiArrowRight } from 'react-icons/fi'

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(182, 36, 255, 0.2)',
    },
  }
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919203326281"; // 91 + number (no +)
    const message = "Hello, I would like to get in touch and schedule a consultation.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-dark-lighter">
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
            Our Services
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Comprehensive solutions to elevate your brand across all digital channels
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <Link to={`/services/${service.id}`}>
                <motion.div
                  className="glass h-full p-8 rounded-lg border border-accent-purple/20 hover:border-accent-purple/50 transition-all cursor-pointer relative overflow-hidden"
                  whileHover={{ borderColor: 'rgba(182, 36, 255, 0.5)' }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-5xl mb-4"
                    >
                      {service.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold font-display mb-3 group-hover:gradient-text transition-all">
                      {service.title}
                    </h3>

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-accent-purple/20 rounded-full text-xs text-accent-purple font-semibold">
                        {service.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-gray mb-6 line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Key Features Preview */}
                    <div className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-text-gray">
                          <span className="text-accent-blue mt-0.5">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center gap-2 text-accent-blue font-semibold group-hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <FiArrowRight />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-text-gray mb-6">
            Can't find what you're looking for?
          </p>
          <motion.button
          onClick={handleWhatsAppRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-accent-purple rounded-lg font-semibold text-accent-purple hover:bg-accent-purple/10 transition-all"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
