const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden flex items-center min-h-screen sm:min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 lg:items-center relative">
          {/* Left Section */}
          <div className="text-center lg:text-left opacity-0 animate-slideInLeft w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-blue-600">
              <span className="block">Building Tomorrow's</span>
              <span className="block text-gray-800">Digital Solutions</span>
              <span className="block text-gray-800">Today</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We transform your ideas into powerful software solutions that drive growth, enhance efficiency, and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
              <button className="bg-gradient-to-r from-blue-600 to-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group text-base">
                <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                <span className="whitespace-nowrap">Start Your Project</span>
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center group text-base">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
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
          <div className="relative mt-8 lg:mt-0 opacity-0 animate-slideInRight w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto hover:shadow-3xl transition-all duration-300">
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