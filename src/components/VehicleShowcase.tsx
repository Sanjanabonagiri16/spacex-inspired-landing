import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

interface Vehicle {
  id: number;
  name: string;
  description: string;
  image: string;
  stats: {
    height: string;
    diameter: string;
    payload: string;
  };
}

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "FALCON 9",
    description: "First orbital class rocket capable of reflight",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80",
    stats: {
      height: "70 m",
      diameter: "3.7 m",
      payload: "22,800 kg",
    },
  },
  {
    id: 2,
    name: "FALCON HEAVY",
    description: "The world's most powerful rocket",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
    stats: {
      height: "70 m",
      diameter: "12.2 m",
      payload: "63,800 kg",
    },
  },
  {
    id: 3,
    name: "DRAGON",
    description: "Sending humans and cargo into space",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80",
    stats: {
      height: "8.1 m",
      diameter: "4 m",
      payload: "6,000 kg",
    },
  },
  {
    id: 4,
    name: "STARSHIP",
    description: "Making life multiplanetary",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80",
    stats: {
      height: "120 m",
      diameter: "9 m",
      payload: "100+ t",
    },
  },
];

const VehicleShowcase = () => {
  const playHoverSound = () => {
    const audio = new Audio("/hover-whoosh.mp3");
    audio.volume = 0.1;
    audio.play();
  };

  return (
    <section className="bg-space-dark py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center tracking-wider"
        >
          OUR VEHICLES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              onHoverStart={playHoverSound}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg mb-4">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="w-5 h-5 text-space-light" />
                    <h3 className="text-xl font-bold text-white tracking-wider">
                      {vehicle.name}
                    </h3>
                  </div>
                  <p className="text-space-light mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-space-light">Height</p>
                      <p className="text-white font-bold">{vehicle.stats.height}</p>
                    </div>
                    <div>
                      <p className="text-space-light">Diameter</p>
                      <p className="text-white font-bold">{vehicle.stats.diameter}</p>
                    </div>
                    <div>
                      <p className="text-space-light">Payload</p>
                      <p className="text-white font-bold">{vehicle.stats.payload}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;