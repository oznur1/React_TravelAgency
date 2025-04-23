const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* İçerik */}
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
          Explore the World With Us
        </h1>
        <p className="text-lg md:text-2xl text-white drop-shadow-md mb-8">
          Discover amazing places at exclusive deals
        </p>
        <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;





