const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          HUMAN SPACEFLIGHT
        </h1>
        <p className="text-lg md:text-xl text-space-light max-w-2xl mx-auto mb-8">
          Making life multiplanetary
        </p>
        <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-space-dark transition-all duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;