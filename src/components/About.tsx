import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-space-dark py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About SpaceX
          </h2>
          <p className="text-space-light text-lg md:text-xl leading-relaxed mb-8">
            Space Exploration Technologies Corp. (SpaceX) is revolutionizing space technology, 
            with the ultimate goal of enabling people to live on other planets. Founded by 
            Elon Musk in 2002, SpaceX has gained worldwide attention for a series of historic 
            milestones.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: "200+",
                label: "Successful Launches",
              },
              {
                number: "190+",
                label: "Total Landings",
              },
              {
                number: "170+",
                label: "Total Reflights",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-space-gray p-6 rounded-lg"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-space-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.a
            href="#mission-highlight"
            className="inline-flex items-center gap-2 text-white mt-12 hover:text-space-light transition-colors"
            whileHover={{ x: 5 }}
          >
            Explore Our Missions <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;