import { motion } from 'framer-motion'

export default function Hero() {
  

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919203326281"; // 91 + number (no +)
    const message = "Hello, I would like to get in touch regarding your digital marketing services.Please Call back as soon as possible.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-purple to-transparent rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-accent-blue to-transparent rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-accent-purple font-semibold tracking-wider uppercase text-sm">
            Digital Marketing Agency
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
        >
          Your Brand's
          <br />
          <span className="gradient-text">Dominance Awaits</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          At KARM Solutions, every campaign is powered by data, creativity, and strategy — ensuring your brand doesn't just grow… it dominates.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
           onClick={handleWhatsAppRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-semibold text-dark text-lg hover:shadow-lg hover:shadow-accent-purple/50 transition-all magnetic-btn"
          >
            Work With Us
          </motion.button>
          
        </motion.div>
      </div>

     
      
    </section>
  )
}
