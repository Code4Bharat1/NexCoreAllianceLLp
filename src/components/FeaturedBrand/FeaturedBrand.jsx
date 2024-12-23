// src/components/FeaturedBrand/FeaturedBrand.jsx
import Image from "next/image";
import Link from "next/link";

const FeaturedBrand = () => {
  // Sample featured brand data
  const featured = {
    name: "Featured Brand",
    image: "/images/featured-brand.png",
    story:
      "This month, we are proud to feature our brand that has achieved remarkable success in the industry...",
    link: "/brands/featured-brand",
  };

  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={featured.image}
            alt={`${featured.name} Image`}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{featured.name}</h2>
          <p className="mb-6">{featured.story}</p>
          <Link
            href={featured.link}
            className="bg-darkBlue text-white px-6 py-3 rounded-md hover:bg-lightBlue"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrand;
