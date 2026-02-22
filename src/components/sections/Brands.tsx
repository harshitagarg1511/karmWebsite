import { motion } from 'framer-motion'

// Placeholder brand names - replace with actual client logos/names
const brands = [
  'Hidustan Times',
  'CoachDdhruv',
  'Home Shopee',
  'Do Bhaion ki dukan',
  'Vanivision',
  'Safeignite',
  'Flipkart',
  'ebulkmart',
  'SmartVentures',
  'GlobalReach',
]

export default function Brands() {
  return (
    <section className="py-16 md:py-24 px-6 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 gradient-text">
            Trusted by Leading Brands
          </h2>
          <p className="text-text-gray">
            Companies across industries partner with KARM Solutions for exceptional results
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* First scroll */}
            {brands.map((brand, idx) => (
              <motion.div
                key={`brand-1-${idx}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="glass px-8 py-4 rounded-lg border border-accent-purple/20 hover:border-accent-purple/50 transition-all">
                  <p className="font-semibold text-lg text-text-light">
                    {brand}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Duplicate scroll for seamless loop */}
            {brands.map((brand, idx) => (
              <motion.div
                key={`brand-2-${idx}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="glass px-8 py-4 rounded-lg border border-accent-purple/20 hover:border-accent-purple/50 transition-all">
                  <p className="font-semibold text-lg text-text-light">
                    {brand}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-lighter to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-lighter to-transparent pointer-events-none" />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '100+', label: 'Successful Campaigns' },
            { number: '50+', label: 'Brand Partners' },
            { number: '10M+', label: 'Impressions Generated' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="text-center glass p-8 rounded-lg border border-accent-purple/20"
            >
              <p className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </p>
              <p className="text-text-gray">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
