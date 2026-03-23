import React from "react";

const Carousel: React.FC = () => {
  const brands = [
    { src: "/kkc.svg", alt: "Brand 1", width: 120 },
    { src: "/grange.svg", alt: "Brand 2", width: 150 },
    { src: "/mercy_care.svg", alt: "Brand 3", width: 100 },
  ];


  const infiniteBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <div className="bg-[url('/bg_img.jpg')] bg-center bg-cover relative w-full overflow-hidden py-12">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-20%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
            width: max-content;
          }
        `}
      </style>

      <div
        className="animate-scroll flex items-center"
        style={{ gap: "120px" }}
      >
        {infiniteBrands.map((brand, index) => (
          <div
            key={`${brand.src}-${index}`}
            className="flex-shrink-0"
            style={{
              height: "80px",
              width: `${brand.width}px`,
            }}
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
