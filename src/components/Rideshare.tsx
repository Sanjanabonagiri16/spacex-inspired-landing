import { motion } from "framer-motion";
import { Share2, Target, Zap, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Rideshare = () => {
  return (
    <section className="bg-space-gray py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Rideshare Program
          </h2>
          <p className="text-space-light text-lg max-w-2xl mx-auto">
            Join our revolutionary rideshare program and make space accessible for your mission.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden h-[300px]"
          >
            <img
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80"
              alt="Rideshare concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Small Satellites</h3>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden h-[300px]"
          >
            <img
              src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=800&q=80"
              alt="Launch concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Dedicated Launches</h3>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Share2,
              title: "Shared Resources",
              description: "Cost-effective launch solutions through resource sharing"
            },
            {
              icon: Target,
              title: "Precision Deployment",
              description: "Accurate orbital placement for your payload"
            },
            {
              icon: Zap,
              title: "Quick Integration",
              description: "Streamlined payload integration process"
            },
            {
              icon: Clock,
              title: "Flexible Schedule",
              description: "Regular launch windows to meet your timeline"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <feature.icon className="w-12 h-12 text-space-light mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-space-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-space-dark"
          >
            Book Your Launch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Rideshare;