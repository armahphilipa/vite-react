export default function Community() {
  return (
    <section id="community" className="bg-green-50 py-12 px-4 sm:px-6 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm text-yellow-600 mb-4 sm:mb-6">Blog</h3>
        
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
          {/* Image - Responsive sizing */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/assets/community.png" 
              alt="Community activities"
              className="rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Content - Responsive text and spacing */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
              Communal Labour Around Sekondi-Takoradi
            </h2>
            
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Welcome to the Tumus — Sekondi-Takoradi's most enchanting masquerade experience! Step into a world where mystery, elegance, and vibrant celebration converge. Our community events bring together people from all walks of life to celebrate our rich cultural heritage.
            </p>

            <button className="mt-4 sm:mt-6 text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 rounded-lg border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
