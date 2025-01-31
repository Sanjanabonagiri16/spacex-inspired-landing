const MissionHighlight = () => {
  return (
    <div className="bg-space-dark text-white py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold">RECENT LAUNCH</h2>
            <p className="text-space-light text-lg">
              STARLINK MISSION
            </p>
            <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-space-dark transition-all duration-300">
              REWATCH
            </button>
          </div>
          <div className="relative h-[400px] animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80"
              alt="Rocket Launch"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionHighlight;