import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)
  //   // Simulate submission
  //   await new Promise(resolve => setTimeout(resolve, 1500))
  //   setIsSubmitting(false)
  //   setFormData({ name: '', email: '', service: '', message: '' })
  //   // You can add toast notification here
  // }
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const mailtoLink = `
    mailto : kashish.goyal@karmbaba.com
    ?subject=Service: ${formData.service}
    &body=
    Name: ${formData.name}
    Email: ${formData.email}
    Message: ${formData.message}
  `

  window.location.href = mailtoLink
}



  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 9203326281',
      href: 'tel:+919203326281',
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      label: 'Email',
      value: 'kashish.goyal@karmbaba.com / karmsolutions777@gmail.com',
      href: 'mailto:kashish.goyal@karmbaba.com,karmsolutions777@gmail.com',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Shop No. 1, Sanoli Road, Opp. Tikana Lau Wala Gurudwara, New HB Colony, Panipat, Haryana – 132103 India',
     href: "https://www.google.com/maps/dir//1,+Sanoli+Rd,+near+Abhi+Hardware,+New+HB+Colony,+Panipat,+Kabul+Bagh,+Haryana+132103/@28.7035879,75.8699388,190728m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390dda508afdb9c1:0xc99f2d1625e65277!2m2!1d76.9745382!2d29.3859511?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"

,
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
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-dark-lighter border border-accent-purple/30 rounded-lg px-4 py-3 text-text-light placeholder-text-gray focus:border-accent-purple focus:outline-none transition-all"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Your Email *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-dark-lighter border border-accent-purple/30 rounded-lg px-4 py-3 text-text-light placeholder-text-gray focus:border-accent-purple focus:outline-none transition-all"
                />
              </motion.div>

              {/* Service Selection */}
              <motion.div variants={itemVariants}>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Service Interested In
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-dark-lighter border border-accent-purple/30 rounded-lg px-4 py-3 text-text-light focus:border-accent-purple focus:outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="seo">SEO</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="pr">PR & Press</option>
                  <option value="influencer">Influencer Marketing</option>
                  <option value="lead-gen">Lead Generation</option>
                  <option value="other">Other</option>
                </motion.select>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full bg-dark-lighter border border-accent-purple/30 rounded-lg px-4 py-3 text-text-light placeholder-text-gray focus:border-accent-purple focus:outline-none transition-all resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-semibold text-dark hover:shadow-lg hover:shadow-accent-purple/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : <>
                  Send Message
                  <FiSend />
                </>}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
        
          <div><motion.div
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
      className="glass block w-full p-6 rounded-xl 
                 border border-accent-purple/20 
                 hover:border-accent-purple/50 
                 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="text-accent-purple text-2xl flex-shrink-0 
                        group-hover:text-accent-blue transition-colors">
          {info.icon}
        </div>

        <div className="min-w-0">
          <h4 className="font-semibold text-lg mb-1 break-words">
            {info.label}
          </h4>
          <p className="text-text-gray break-words 
                        group-hover:text-accent-purple transition-colors">
            {info.value}
          </p>
        </div>
      </div>
    </motion.a>
  ))}

  {/* Business Hours */}
  <motion.div
    variants={itemVariants}
    className="glass p-6 rounded-xl 
               border border-accent-purple/20"
  >
    <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
    <div className="space-y-2 text-text-gray text-sm">
      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
      <p>Saturday: 10:00 AM - 4:00 PM IST</p>
      <p>Sunday: Closed</p>
    </div>
  </motion.div>

  {/* Quick Response */}
  <motion.div
    variants={itemVariants}
    className="glass p-6 rounded-xl 
               border border-accent-blue/20 
               bg-accent-blue/5 md:col-span-2"
  >
    <p className="text-text-gray text-sm">
      ✓ We typically respond within 24 hours
    </p>
  </motion.div>
</motion.div>
</div>
         
        </div>
      </div>
    </section>
  )
}





