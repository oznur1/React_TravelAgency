const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="flex items-center justify-center h-full bg-black/50">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img src="/hero.png" alt="About Us" className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Travel Agency, we believe in creating unforgettable journeys. With years of experience, 
            we specialize in crafting tailor-made travel experiences that suit every type of traveler.
          </p>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you're seeking adventure, relaxation, or cultural immersion, our dedicated team is here 
            to make your dream vacation a reality. Let us take care of everything while you explore the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;





