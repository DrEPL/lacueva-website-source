import { motion } from 'framer-motion'

const OwnersSection = () => {
  const owners = [
    {
      name: "Véronique Sadio",
      role: "Fondatrice & Propriétaire",
      image: "/images/veronique.jpg",
      description: "Passionnée par l'art de vivre et l'élégance, Véronique apporte sa vision créative et son expertise pour créer des expériences uniques."
    },
    {
      name: "Dieudonné Mansal",
      role: "Co-Propriétaire & Assistant",
      image: "/images/dieudonne.jpg",
      description: "Avec son sens aigu des affaires et son attention aux détails, Dieudonné assure le développement stratégique de La Cueva."
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'serif' }}>
            Nos Fondateurs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rencontrez les visionnaires derrière La Cueva, unis par une passion commune pour l'excellence et l'authenticité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {owners.map((owner, index) => (
            <motion.div
              key={owner.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-400/20 group-hover:border-yellow-400 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {owner.name}
                  </h3>
                  
                  <p className="text-yellow-400 font-semibold mb-4">
                    {owner.role}
                  </p>
                </div>
                
                <p className="text-gray-300 text-center leading-relaxed">
                  {owner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-8 border border-yellow-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Notre Vision</h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Ensemble, nous créons un univers où chaque femme peut exprimer sa beauté unique à travers des produits d'exception, 
              alliant tradition artisanale et innovation moderne pour révéler l'éclat qui sommeille en chacune.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OwnersSection

