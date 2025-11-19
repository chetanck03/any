const Industries = () => {
  const industries = [
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Healthcare App Development",
      description: "Digital health solutions, patient management systems, and telemedicine platforms.",
      projects: "25+ Projects",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
      title: "Education App Development",
      description: "E-learning platforms, student management systems, and educational mobile apps.",
      projects: "30+ Projects",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h2a1 1 0 110 2H7a1 1 0 110-2zm5 0a1 1 0 100 2h1a1 1 0 100-2h-1zm-5 4h2a1 1 0 110 2H7a1 1 0 110-2zm5 0a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Enterprise Resource Planning",
      description: "ERP systems, CRM solutions, and business process automation tools.",
      projects: "40+ Projects",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Real Estate App Development",
      description: "Property management systems, virtual tours, and real estate marketplaces.",
      projects: "20+ Projects",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Travel App Development",
      description: "Booking platforms, travel management systems, and tourism mobile apps.",
      projects: "15+ Projects",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Manufacturing",
      description: "Supply chain management, inventory systems, and production tracking tools.",
      projects: "18+ Projects",
      color: "from-gray-500 to-slate-600"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Finance",
      description: "Fintech solutions, payment gateways, and financial management systems.",
      projects: "22+ Projects",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
        </svg>
      ),
      title: "Logistics Software Development",
      description: "Fleet management, route optimization, and delivery tracking systems.",
      projects: "12+ Projects",
      color: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We craft personalized solutions across various industries, helping businesses transform and grow with cutting-edge technology.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors duration-300">
                    {industry.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Projects Count */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {industry.projects}
                  </span>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Success Story: Healthcare Innovation
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We developed a comprehensive telemedicine platform that connected over 10,000 patients with healthcare providers, reducing consultation time by 60% and improving patient satisfaction scores.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Patients Connected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">60%</div>
                  <div className="text-sm text-gray-600">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-blue-600 to-black text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                View Case Study
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="bg-gradient-to-br from-blue-600 to-black rounded-xl p-6 text-white mb-6">
                  <h4 className="text-xl font-bold mb-2">Healthcare Platform</h4>
                  <p className="text-blue-100 text-sm">Telemedicine & Patient Management</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Patient Portal</span>
                    <div className="w-20 h-2 bg-blue-100 rounded-full">
                      <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Video Consultation</span>
                    <div className="w-20 h-2 bg-blue-100 rounded-full">
                      <div className="w-18 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Appointment System</span>
                    <div className="w-20 h-2 bg-blue-100 rounded-full">
                      <div className="w-full h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;