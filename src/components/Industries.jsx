const Industries = () => {
  const industries = [
    {
      title: "Education",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
    },
    {
      title: "Healthcare",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
        </svg>
      )
    },
    {
      title: "Travel & Tourism",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
        </svg>
      )
    },
    {
      title: "Petcare",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 12.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S6.83 11 6 11s-1.5.67-1.5 1.5zM9 16c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5S9 15.17 9 16zm4.5-3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 4.5C10.07 2.91 7.45 2.91 5.5 4.5c-1.95 1.59-1.95 4.15 0 5.74L12 16.5l6.5-6.26c1.95-1.59 1.95-4.15 0-5.74C16.55 2.91 13.93 2.91 12 4.5z"/>
        </svg>
      )
    },
    {
      title: "E-Commerce",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      )
    },
    {
      title: "Manufacturing",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    },
    {
      title: "Logistics",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      title: "Parking",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
        </svg>
      )
    },
    {
      title: "Wellness & Health",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Real Estate",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title with Animation */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
            <span className="inline-block animate-slide-in-left">One Vision, Many Industries: Crafting Our</span>
            <br className="hidden md:block" />
            <span className="block mt-1 sm:mt-2 animate-slide-in-right delay-300">Bespoke Solutions For Unique Industry Demands</span>
          </h2>
        </div>

        {/* Industries Grid with Enhanced Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-4 sm:p-6 bg-blue-500/20 backdrop-blur-md rounded-2xl border border-blue-300/30 hover:bg-blue-400/30 transition-all duration-500 hover:scale-105 cursor-pointer transform hover:-translate-y-3 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon Container with Better Styling */}
              <div className="flex justify-center mb-4">
                <div className="p-3 sm:p-4 rounded-2xl bg-white shadow-md group-hover:shadow-lg group-hover:bg-blue-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {industry.icon}
                </div>
              </div>

              {/* Industry Title */}
              <h3 className="text-center text-sm sm:text-base font-bold text-white leading-tight px-2">
                {industry.title}
              </h3>

              {/* Animated Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-transparent to-blue-300/40 rounded-2xl blur-sm"></div>
              </div>

              {/* Floating Animation Dots */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section - Centered */}
        <div className="text-center mt-16">
         
          
          {/* Centered Button */}
          <div className="flex justify-center">
            <button className="group relative px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 hover:bg-blue-50 overflow-hidden">
              <span className="relative z-10">Consult Our Experts Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
            </button>
          </div>
        </div>

    
      </div>

      {/* Custom CSS for Enhanced Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        /* Enhanced hover effects */
        .group:hover {
          animation: gentle-float 2s ease-in-out infinite;
        }
        
        /* Button hover effects */
        button:hover {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
        
        /* Responsive Grid Improvements */
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
        
        /* Mobile CTA adjustments */
        @media (max-width: 640px) {
          .text-center div {
            padding: 1.5rem;
          }
          
          .text-center h3 {
            font-size: 1.5rem;
          }
          
          .text-center p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Industries;