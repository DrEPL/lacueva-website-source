import { motion } from 'framer-motion'

const AboutSection = () => {
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
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-400/20 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              La Cueva est une marque née de la passion pour l'élégance et le raffinement. 
              Fondée par <span className="text-yellow-400 font-semibold">Véronique Sadio</span> et{' '}
              <span className="text-yellow-400 font-semibold">Dieudonné Mansal</span>, elle propose 
              des parfums, des vêtements et des produits féminins qui allient style, qualité et authenticité.
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">E</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Élégance</h3>
                <p className="text-gray-400">Un style raffiné qui transcende les tendances</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">Q</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Qualité</h3>
                <p className="text-gray-400">Des produits d'exception sélectionnés avec soin</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">A</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Authenticité</h3>
                <p className="text-gray-400">Une approche sincère et personnalisée</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

