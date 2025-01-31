import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-space-dark/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">
          SPACEX
        </a>
        <div className="hidden md:flex space-x-8">
          {["Falcon 9", "Falcon Heavy", "Dragon", "Starship"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;