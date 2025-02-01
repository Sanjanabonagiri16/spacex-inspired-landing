import { motion } from "framer-motion";
import { ArrowRight, Users, Rocket, Globe } from "lucide-react";

const HumanSpaceflight = () => {
  return (
    <section className="bg-space-dark py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Human Spaceflight
          </h2>
          
          {/* Main Feature */}
          <div className="relative rounded-lg overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=1200&q=80"
              alt="Space exploration concept"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Pioneering the Future
                </h3>
                <p className="text-space-light text-lg max-w-2xl">
                  Experience space travel reimagined. Our innovative approach combines cutting-edge technology 
                  with unparalleled comfort, making space accessible for civilian exploration.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Civilian Program",
                description: "Comprehensive training program designed for civilian space travelers"
              },
              {
                icon: Rocket,
                title: "Advanced Systems",
                description: "State-of-the-art life support and navigation systems"
              },
              {
                icon: Globe,
                title: "Global Access",
                description: "Launch facilities strategically located worldwide"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-space-gray p-6 rounded-lg"
              >
                <feature.icon className="w-12 h-12 text-space-light mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-space-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-white mt-12 hover:text-space-light transition-colors"
            whileHover={{ x: 5 }}
          >
            Learn More About Our Program <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HumanSpaceflight;