import { Instagram, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-400/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="text-center md:text-left">
            <img 
              src="/images/logo.jpg" 
              alt="La Cueva Logo" 
              className="w-32 h-auto mx-auto md:mx-0 mb-4 rounded"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              La Cueva - Le secret de votre éclat. Une marque dédiée à l'élégance, 
              la qualité et l'authenticité.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  À propos
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Produits
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Équipe
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact et réseaux sociaux */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Nous contacter</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a 
                  href="mailto:lacuevaofficial1@gmail.com" 
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  lacuevaofficial1@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Instagram className="w-4 h-4 text-yellow-400" />
                <a 
                  href="https://www.instagram.com/la.cueva.official?igsh=MTJqYzUzdXRtNTQ1cA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  @la.cueva.official
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 La Cueva. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Développé avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>par Dr_EPL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer