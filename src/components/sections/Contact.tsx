import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: 'Phone',
      value: ['+91 9203326281',],
      href: 'tel:+919203326281',
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 7988753980',
      href: 'tel:+917988753980',
    },

    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: 'Location',
      value:
        [`1) 829 Sector-18,HUDA, Panipat, Haryana 132103. `,
          `2) Post Box No. 64965, office no. 411,4th floor, Galadari Plaza, Raddison Blu Hotel, Al Rigga, Deira ,Dubai, UAE. `,
          `3) S1, Surya Mall, Juwani Road, Bhilai, Chhattisgarh 490020`,
        ]
    },
    
  ]

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

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-dark">
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
            Let's Work Together
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Ready to transform your brand? Get in touch with our team and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form (left intentionally for later) */}

          {/* Contact Info */}
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Contact Info Cards */}
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={info.href}
                  className="glass block w-full p-6 rounded-xl border border-accent-purple/20 hover:border-accent-purple/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-accent-purple text-2xl flex-shrink-0 group-hover:text-accent-blue transition-colors">
                      {info.icon}
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-lg mb-1 break-words">{info.label}</h4>
                      <p className="text-text-gray break-words group-hover:text-accent-purple transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Business Hours */}
              <motion.div variants={itemVariants} className="glass p-6 rounded-xl border border-accent-purple/20">
                <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                <div className="space-y-2 text-text-gray text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>

              {/* Quick Response */}
              <motion.div variants={itemVariants} className="glass p-6 rounded-xl border border-accent-blue/20 bg-accent-blue/5 md:col-span-2">
                <p className="text-text-gray text-sm">✓ We typically respond within 24 hours</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
