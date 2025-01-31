import { UserRound } from "lucide-react";
import { motion } from "framer-motion";

const AstronautEasterEgg = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      className="fixed bottom-4 right-4 z-50 cursor-pointer"
    >
      <UserRound 
        size={32} 
        className="text-white hover:text-space-light transition-colors"
        onClick={() => {
          const audio = new Audio("/astronaut-radio.mp3");
          audio.volume = 0.3;
          audio.play();
        }}
      />
    </motion.div>
  );
};

export default AstronautEasterEgg;