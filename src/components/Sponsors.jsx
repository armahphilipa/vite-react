export default function Sponsors() {
  const logos = [
    "/assets/logo1.png",
    "/assets/logo2.png",
    "/assets/logo3.jpg",
    "/assets/logo4.jpg",
    "/assets/logo.png",
  ];

  return (
    <section className="bg-white py-8 sm:py-12 overflow-hidden">
      <div className="relative w-full">
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          {/* First Marquee Loop */}
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`first-${index}`} className="inline-flex items-center mx-8 sm:mx-12 lg:mx-16">
                <img
                  src={logo}
                  alt={`Sponsor ${index % logos.length + 1}`}
                  className="h-10 sm:h-14 md:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Second Marquee Loop (for seamless animation) */}
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap py-4" aria-hidden="true">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`second-${index}`} className="inline-flex items-center mx-8 sm:mx-12 lg:mx-16">
                <img
                  src={logo}
                  alt={`Sponsor duplicate ${index % logos.length + 1}`}
                  className="h-10 sm:h-14 md:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes (add to your global CSS) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  );
}