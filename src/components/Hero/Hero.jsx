import Link from "next/link";

const Hero = () => {
  return (
    <section
    className="text-white bg-cover bg-center relative min-h-screen"
    aria-labelledby="hero-heading"
  >
    {/* Overlay for better text visibility */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
  
    <div className="max-w-7xl mx-auto px-4 py-40 md:py-48 flex flex-col-reverse md:flex-row items-center relative z-10 hero-content">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        {/* Center text on small screens */}
        <h1
          id="hero-heading"
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Empowering Innovation, Education, and Technology
        </h1>
        <div className="flex justify-center md:justify-start">
          {/* Center button on small screens */}
          <Link
            href="/our-brands"
            className="bg-[#051D40] text-[#FFFFFF] px-6 py-3 rounded-md hover:bg-white hover:text-[#051D40] inline-block transition-colors duration-300 mb-4 md:mr-4"
          >
            Explore Our Brands
          </Link>
        </div>
      </div>
    </div>
  
    <style jsx>{`
      section {
        background-color:blue; /* Ensure no background color shows */
        background-size: cover;
        background-position: center;
      }
  
      @media (min-width: 820px) {
        section {
          background-image: url("/images/desktop-hero.jpg"); /* Desktop image */
        }
      }
  
      @media (max-width: 819px) {
        section {
          background-image: url("/images/mobile-hero.jpg"); /* Mobile image */
        }
  
        .hero-content {
          justify-content: flex-start; /* Move content to the top in mobile view */
          padding-top: 100px; /* Adjust padding as per your preference */
          padding-bottom: 0; /* Remove bottom padding */
        }
      }
    `}</style>
  </section>
  

  );
};

export default Hero;
