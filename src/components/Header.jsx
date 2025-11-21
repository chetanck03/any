import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-[9999] w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+919356385744" className="text-gray-700 hover:text-blue-600 font-semibold">
                +91 9356385744
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:support@ascentialabs.com" className="text-gray-700 hover:text-blue-600 font-semibold">
                support@ascentialabs.com
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/ascentialabs/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ascentialabs/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://wa.me/61412566906" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <img 
              src="/ascentialabslogopng.png" 
              alt="Ascentia Labs" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a  className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a  className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                Services 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <a  className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="16,18 22,12 16,6"/>
                        <polyline points="8,6 2,12 8,18"/>
                      </svg>
                      <div>
                        <div className="font-semibold">Custom Software Development</div>
                        <div className="text-sm text-gray-500">Tailored solutions for your business</div>
                      </div>
                    </a>
                    <a  className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      <div>
                        <div className="font-semibold">Web Development</div>
                        <div className="text-sm text-gray-500">Modern, responsive websites</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                        <line x1="7" y1="2" x2="7" y2="22"/>
                        <line x1="17" y1="2" x2="17" y2="22"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <line x1="2" y1="7" x2="7" y2="7"/>
                        <line x1="2" y1="17" x2="7" y2="17"/>
                        <line x1="17" y1="17" x2="22" y2="17"/>
                        <line x1="17" y1="7" x2="22" y2="7"/>
                      </svg>
                      <div>
                        <div className="font-semibold">Mobile App Development</div>
                        <div className="text-sm text-gray-500">iOS & Android applications</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                      </svg>
                      <div>
                        <div className="font-semibold">E-Commerce Solutions</div>
                        <div className="text-sm text-gray-500">Online store development</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a  className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Industries</a>
            <a  className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-black text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a  className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a  className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
              <a  className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a className="text-gray-700 hover:text-blue-600 font-medium">Industries</a>
              <a  className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-black text-white px-6 py-2 rounded-full w-fit">
                Get In Touch
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;