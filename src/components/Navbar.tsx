import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          transition: { duration: 0.3 }
        }}
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <motion.a 
            href="/" 
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SPACEX
          </motion.a>
          <div className="hidden md:flex space-x-8">
            {["Falcon 9", "Falcon Heavy", "Dragon", "Starship"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-white/80 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;