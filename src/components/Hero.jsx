export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen min-h-[600px] max-h-[900px]"
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/hero.jpg')",
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "darken"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Unmask the Magic!
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Welcome to Tumus – Sekondi-Takoradi's most enchanting masquerade experience! Step into a world where mystery, elegance, and vibrant celebration converge.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-300">
              Join Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
