import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="bg-white py-12 px-4 sm:px-6 lg:px-20 xl:px-32">
      <div className="text-sm text-yellow-600 mb-2">About Us</div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
        Our Story: Where Mystery Meets Merriment
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
        {/* Left Column - Text Content */}
        <div className="text-gray-700 text-base sm:text-sm md:text-base space-y-4 md:space-y-6 leading-relaxed w-full lg:w-1/2">
          <p>
            The Tumus masquerade club was founded in 1980 by a group of passionate individuals who sought to bring a unique blend of elegance, mystery, and vibrant festivity to the heart of Sekondi-Takoradi. Inspired by the timeless allure of historical masquerade balls and the rich cultural tapestry of Ghana, we envisioned a space where members could shed their daily personas and embrace an evening of playful anonymity and sophisticated revelry.
          </p>
          <p>
            We pride ourselves on curating unforgettable experiences, from grand annual galas to intimate themed evenings. Our commitment is to provide a safe, inclusive, and exceptionally magical atmosphere where every member feels free to unmask their true spirit and celebrate in style. 
          </p>
          <p>
            We believe in the power of transformation that a mask can offer – a chance to explore different facets of oneself, engage in genuine conversation, and experience connection on a deeper, more intriguing level. 
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-4 md:pt-6 text-yellow-700 text-sm md:text-base font-medium">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">100</p>
              Branches<br />that we visit regularly
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">16,950</p>
              Members<br />ready to road with you
            </div>
          </div>
        </div>

        {/* Right Column - Image with overlay card */}
        <div className="relative w-full lg:w-1/2 aspect-[4/5] max-w-[500px] mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/assets/about.png" 
            alt="Join Us"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/70"></div>

          {/* Glass effect overlay - responsive positioning */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[60%] md:w-[270px] bg-black/60 backdrop-blur-md text-white rounded-xl p-4 sm:p-6 shadow-lg">
            <FaUserPlus className="text-lg sm:text-xl mb-2 sm:mb-3" />
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Join the Family</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              Unmask elegance, mystery, and vibrant fun! Join our community for unforgettable nights in Sekondi–Takoradi.
            </p>
            <Link to="/signup" className="text-xs sm:text-sm font-semibold" >
              Join us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}