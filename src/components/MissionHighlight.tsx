const MissionHighlight = () => {
  return (
    <div className="bg-space-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider">RECENT LAUNCH</h2>
            <p className="text-space-light text-lg">
              STARLINK MISSION
            </p>
            <button 
              className="group relative px-8 py-3 overflow-hidden border-2 border-white text-white hover:text-space-dark transition-colors duration-300 ease-out"
              onMouseEnter={() => {
                const audio = new Audio("/hover-whoosh.mp3");
                audio.volume = 0.1;
                audio.play();
              }}
            >
              <span className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative inline-block group-hover:text-space-dark transition-colors duration-300">
                REWATCH
              </span>
            </button>
          </div>
          <div className="relative h-[400px] animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80"
              alt="Rocket Launch"
              className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionHighlight;