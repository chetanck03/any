const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden flex items-center min-h-screen sm:min-h-[calc(100vh-120px)]">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 lg:items-center relative">
          {/* Left Section */}
          <div className="text-center lg:text-left px-2 mt-3 sm:px-4 md:px-6 lg:px-0 opacity-0 animate-slideInLeft w-full">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-blue-600">
              <span className="block">Building Tomorrow's</span>
              <span className="block text-gray-800">Digital Solutions</span>
              <span className="block text-gray-800">Today</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We transform your ideas into powerful software solutions that drive growth, enhance efficiency, and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              <button className="bg-gradient-to-r from-blue-600 to-black text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                <span className="whitespace-nowrap">Start Your Project</span>
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
                <span className="whitespace-nowrap">View Our Work</span>
              </button>
            </div>
          </div>

          {/* Center Divider - Mobile and Desktop */}
          <div className="flex lg:hidden justify-center my-4 z-20">
            <div className="flex items-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 opacity-80"></div>
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mx-2 animate-pulse">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-transparent opacity-80"></div>
            </div>
          </div>

          {/* Center Divider - Desktop */}
          <div className="hidden xl:flex justify-center absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-24 xl:h-32 bg-gradient-to-b from-transparent via-blue-600 to-blue-600 opacity-80"></div>
              <div className="w-6 h-6 xl:w-8 xl:h-8 bg-blue-600 rounded-full flex items-center justify-center my-2 animate-pulse">
                <svg className="w-3 h-3 xl:w-4 xl:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="w-0.5 h-24 xl:h-32 bg-gradient-to-b from-blue-600 to-transparent opacity-80"></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative px-2 sm:px-4 md:px-6 lg:px-0 mt-0 sm:mt-8 lg:mt-0 mb-8 sm:mb-0 opacity-0 animate-slideInRight w-full">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 pb-10 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-6 mb-4 sm:my-0 hover:shadow-3xl transition-all duration-300">
              {/* RouteMaestro Logo */}
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <img 
                  src="/AscentiaVercel-main/public/img/footerlogonew.png" 
                  alt="RouteMaestro" 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2 text-gray-800">RouteMaestro</h2>
              <p className="text-gray-600 text-center mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed px-2">
                Advanced route optimization and logistics management platform that streamlines delivery operations and reduces costs.
              </p>

              {/* Features */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 mb-10 sm:mb-6 px-2">
                <div className="text-center flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2 hover:bg-blue-200 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-xs leading-tight">Smart Route Planning</span>
                </div>
                
                <div className="text-center flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2 hover:bg-blue-200 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-xs leading-tight">Real-time Tracking</span>
                </div>
                
                <div className="text-center flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2 hover:bg-blue-200 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-xs leading-tight">Analytics Dashboard</span>
                </div>
              </div>

              <a 
                href="https://www.routemaestro.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-black text-white py-3 rounded-full font-semibold hover:shadow-xl hover:from-blue-700 hover:to-gray-900 transition-all duration-300 flex items-center justify-center text-sm transform hover:scale-105 group"
              >
                Visit RouteMaestro
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/61412566906" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      </a>

      {/* Professional CSS Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.4s forwards;
        }
        
        /* Ensure smooth loading */
        * {
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default Hero;