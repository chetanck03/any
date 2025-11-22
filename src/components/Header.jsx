import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Settings, 
  GraduationCap, 
  Building, 
  Star, 
  Home, 
  Plane, 
  BookOpen, 
  Wrench, 
  Heart, 
  Truck,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
  ChevronDown,
  Code,
  Monitor,
  Smartphone,
  ShoppingCart,
  BarChart3
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-[9999] w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:+919356385744" className="text-gray-700 hover:text-blue-600 font-semibold">
                +91 9356385744
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:support@ascentialabs.com" className="text-gray-700 hover:text-blue-600 font-semibold">
                support@ascentialabs.com
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/ascentialabs/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ascentialabs/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/61412566906" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/ascentialabslogopng.png" 
                alt="Ascentia Labs" 
                className="h-10 sm:h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                Services 
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <a  className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Code className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Custom Software Development</div>
                        <div className="text-sm text-gray-500">Tailored solutions for your business</div>
                      </div>
                    </a>
                    <a  className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Monitor className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Web Development</div>
                        <div className="text-sm text-gray-500">Modern, responsive websites</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Smartphone className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Mobile App Development</div>
                        <div className="text-sm text-gray-500">iOS & Android applications</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <ShoppingCart className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">E-Commerce Solutions</div>
                        <div className="text-sm text-gray-500">Online store development</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link 
                to="/industries" 
                className={`font-medium transition-colors flex items-center ${
                  location.pathname === '/industries' 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Industries 
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-blue-100">
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3">
                    {/* Column 1 */}
                    <Link to="complaint-management-system" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <Settings className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Custom CRM</div>
                    </Link>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Building className="w-5 h-5 mr-3 text-blue-600" />
                      <div className="font-medium text-sm whitespace-nowrap">Interior & Architecture</div>
                    </div>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Home className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Real Estate</div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Education</div>
                    </div>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Star className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Kindergarten</div>
                    </div>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Plane className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Travel & Tourism</div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <BarChart3 className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">ERP</div>
                    </div>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Library</div>
                    </div>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Wrench className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Manufacturing</div>
                    </div>

                    {/* Row 4 - Only 2 items */}
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Heart className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Health Care</div>
                    </div>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Truck className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Logistics</div>
                    </div>
                    
                    <div></div> {/* Empty cell for alignment */}
                  </div>
                
                </div>
              </div>
            </div>
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
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <a  className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <Link 
                to="/industries" 
                className={`font-medium transition-colors ${
                  location.pathname === '/industries' 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
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