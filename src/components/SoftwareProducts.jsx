const SoftwareProducts = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
              Transforming Ideas into Software Products
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Explore our innovative software products designed to optimize performance and drive business success.
          </p>
        </div>

        {/* Software Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0 responsive-grid-sm">
          {/* Route Maestro */}
          <a 
            href="https://www.routemaestro.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 hover:border-red-200 min-h-[280px] flex flex-col justify-center items-center text-center cursor-pointer mobile-no-hover"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-red-50 rounded-xl group-hover:bg-red-100 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Route Maestro Logo.png"
                  alt="Route Maestro"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
              RouteMaestro
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
              AI Powered Travel Planning And Booking Software
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            {/* External Link Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* Insurance Safe */}
          <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 hover:border-blue-200 min-h-[280px] flex flex-col justify-center items-center text-center mobile-no-hover">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Insurance Safe.png"
                  alt="Insurance Safe"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              InsuranceSafe
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
              Insurance Management Software
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>

          {/* Kinder Connect */}
          <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 hover:border-orange-200 min-h-[280px] flex flex-col justify-center items-center text-center mobile-no-hover">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Frame 1000002695.png"
                  alt="Kinder Connect"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              KinderConnect
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
              Kindergarten Management Software
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>

          {/* JusDoIt */}
          <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 hover:border-green-200 min-h-[280px] flex flex-col justify-center items-center text-center mobile-no-hover">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-green-50 rounded-xl group-hover:bg-green-100 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/JusDoIt.png"
                  alt="JusDoIt"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
              JusDoIt
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
              Task Management Software
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default SoftwareProducts;