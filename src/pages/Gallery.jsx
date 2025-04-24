const images = [
  "/gal1.jpg",
  "/gal2.jpg",
  "/public/gal3.png",
  "/gal4.jpg"
];

const Gallery = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center bg-black/40">
          <h4 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Gallery
          </h4>
        </div>
      </div>

      {/* Image Grid */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;



