import { FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-lighter border-t border-accent-purple/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              <span className="gradient-text">KARM</span>
            </h3>
            <p className="text-text-gray text-sm leading-relaxed">
              Powered by data, creativity, and strategy — ensuring your brand doesn't just grow… it dominates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-text-light">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/#services" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/#process" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Process
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-text-gray hover:text-accent-purple transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

         

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-text-light">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiPhone className="text-accent-purple mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-text-gray">+91 9203326281</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="text-accent-purple mt-1 flex-shrink-0" />
                
                <div className="text-sm">
                  <p className="text-text-gray">karmsolutions777@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="text-accent-purple mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-text-gray">kashish.goyal@karmbaba.com</p>
                </div>
              
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-accent-purple mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-text-gray">Shop No. 1, Sanoli Road,
 Opp. Tikana Lau Wala Gurudwara,
 New HB Colony,
 Panipat, Haryana – 132103
 India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-accent-purple/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-gray text-sm mb-4 md:mb-0">
            © {currentYear} KARM Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/karm.solutions?igsh=MXdxazdxMnlpenVzYw==" className="text-text-gray hover:text-accent-purple transition-colors">
              <FiInstagram size={20} />
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  )
}
