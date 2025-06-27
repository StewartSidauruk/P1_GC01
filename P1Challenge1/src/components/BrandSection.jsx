export default function BrandSection({ onBrandClick }) {
  const brands = [
    { name: "Disney", logo: "/assets/disney.webp", bg: "bg-[#1f1f1f]" },
    { name: "Pixar", logo: "/assets/pixar.webp", bg: "bg-[#1f1f1f]" },
    { name: "Marvel", logo: "/assets/marvel.webp", bg: "bg-[#1f1f1f]" },
    { name: "Star Wars", logo: "/assets/starwars.webp", bg: "bg-[#1f1f1f]" },
    { name: "Nat Geo", logo: "/assets/national.webp", bg: "bg-[#1f1f1f]" },
    { name: "Star", logo: "/assets/star.webp", bg: "bg-[#1f1f1f]" },
  ];

  return (
    <section className="px-4 md:px-12 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {brands.map((brand, idx) => (
          <button
            key={idx}
            onClick={() => onBrandClick(brand.name)}
            className={`rounded-lg ${brand.bg} hover:scale-105 transition-transform duration-300 flex items-center justify-center h-[100px] md:h-[120px]`}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-[60%] max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
