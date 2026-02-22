import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getServiceById } from '../data/services'
import { FiArrowLeft, FiCheck } from 'react-icons/fi'

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const service = serviceId ? getServiceById(serviceId) : null

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 gradient-text">Service not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent-purple hover:text-accent-blue transition-colors flex items-center gap-2 mx-auto"
          >
            <FiArrowLeft /> Back to Home
          </button>
        </div>
      </div>
    )
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }
   const handleWhatsAppRedirect = () => {
    const phoneNumber = "919203326281"; // 91 + number (no +)
    const message = `Hello, I would like to get in touch regarding ${service.title} service. Please call back as soon as possible.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-dark to-dark-lighter flex items-center justify-center pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/#services')}
            className="text-accent-purple hover:text-accent-blue transition-colors flex items-center gap-2 mb-8"
          >
            <FiArrowLeft /> Back to Services
          </motion.button>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-8xl mb-8"
          >
            {service.icon}
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold font-display mb-6 gradient-text"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-text-gray mb-8 leading-relaxed"
          >
            {service.fullDesc}
          </motion.p>

          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold font-display mb-12 text-center gradient-text"
          >
            Features & Benefits
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass p-8 rounded-lg border border-accent-purple/20 hover:border-accent-purple/50 transition-all hover:bg-accent-purple/5"
              >
                <div className="flex gap-4 items-start">
                  <div className="text-accent-blue text-2xl flex-shrink-0 mt-1">
                    <FiCheck />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-display mb-8"
          >
            Ready to Transform Your {service.title}?
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-gray mb-8"
          >
            Let's discuss how we can help your brand achieve its goals with our proven strategies.
          </motion.p>

          <motion.div
          onClick={handleWhatsAppRedirect}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-semibold text-dark hover:shadow-lg hover:shadow-accent-purple/50 transition-all">
              Contact Us
            </button>
            
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
