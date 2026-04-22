import React, { useEffect, useState } from "react";

const Carousel: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const brands = [
    { src: "/kkc.svg", alt: "Brand 1", width: 120 },
    { src: "/grange.svg", alt: "Brand 2", width: 150 },
    { src: "/mercy_care.svg", alt: "Brand 3", width: 100 },
  ];

  const infiniteBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ];

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = "/bg_img.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error("Failed to load background image");
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Background with fallback color */}
      <div
        className="absolute inset-0 transition-opacity duration-700 bg-cover bg-center"
        style={{
          backgroundColor: "#152532",
          backgroundImage: `url('/bg_img.jpg')`,
          opacity: imageLoaded ? 1 : 0,
        }}
      />

      {/* Background overlay for better contrast if needed */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
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
              className="shrink-0"
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
    </div>
  );
};

export default Carousel;
