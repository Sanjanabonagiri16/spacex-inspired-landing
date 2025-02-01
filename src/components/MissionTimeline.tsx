import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

interface Mission {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const missions: Mission[] = [
  {
    id: 1,
    title: "CREW-8 MISSION",
    date: "March 2024",
    description: "SpaceX's eighth operational crew mission to the ISS",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "STARSHIP FLIGHT TEST",
    date: "February 2024",
    description: "Second integrated flight test of Starship",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "STARLINK MISSION",
    date: "January 2024",
    description: "Launch of 23 Starlink satellites to orbit",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80"
  }
];

const MissionTimeline = () => {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

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
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-wider"
        >
          MISSION TIMELINE
        </motion.h2>
        
        <div className="overflow-x-auto pb-8 snap-x snap-mandatory">
          <div className="flex space-x-6 min-w-max px-4">
            {missions.map((mission) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={floatingAnimation}
                onHoverStart={playHoverSound}
                className="w-80 snap-center"
              >
                <Card className="bg-space-gray border-none overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={mission.image}
                      alt={mission.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{mission.title}</h3>
                      <p className="text-space-light text-sm mb-2">{mission.date}</p>
                      <p className="text-gray-300">{mission.description}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionTimeline;