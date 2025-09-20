import { motion } from 'framer-motion'
import { Sparkles, Shirt, Watch } from 'lucide-react'

const ProductsSection = () => {
  const products = [
    {
      icon: Sparkles,
      title: "Parfums",
      description: "Des fragrances exclusives qui révèlent votre personnalité unique",
      gradient: "from-pink-400 to-purple-600"
    },
    {
      icon: Shirt,
      title: "Vêtements",
      description: "Une collection de pièces élégantes pour toutes les occasions",
      gradient: "from-yellow-400 to-orange-600"
    },
    {
      icon: Watch,
      title: "Accessoires",
      description: "Des accessoires raffinés qui complètent votre style avec sophistication",
      gradient: "from-blue-400 to-indigo-600"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'serif' }}>
            Nos Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre univers de produits soigneusement sélectionnés pour sublimer votre beauté naturelle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 text-center leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="text-center">
                    <button 
                      onClick={() => window.open('https://www.instagram.com/la.cueva.official?igsh=MTJqYzUzdXRtNTQ1cA==', '_blank')}
                      className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      Découvrir
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-8 border border-yellow-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Bientôt disponible</h3>
            <p className="text-gray-300 mb-6">
              Notre boutique en ligne sera prochainement disponible pour vous offrir une expérience d'achat exceptionnelle
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Être notifié(e)
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection

