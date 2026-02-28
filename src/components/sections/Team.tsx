import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Abhi Sharma',
    role: 'Marketing Director',
    image: '/team/abhi-sharma.jpeg',
  },
  {
    name: 'Maanav Dahuja',
    role: 'Founder & CEO',
    image: 'team/maanav-dahuja.jpeg',
  },
  {
    name: 'Kashish Goyal',
    role: 'Co-founder & COO',
    image: '/team/kashish-goyal.jpeg',
  },
]

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="team" className="py-20 md:py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            Meet Our Team
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            A small, focused team of strategists and creators dedicated to growing your brand.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass p-6 rounded-xl text-center">
              <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
              <p className="text-text-gray text-sm">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
