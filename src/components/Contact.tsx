import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-space-dark py-24" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-space-light text-lg max-w-2xl mx-auto">
            Have questions about our missions or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Mail,
              title: "Email",
              content: "info@spacex.com",
              link: "mailto:info@spacex.com"
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+1 (310) 363-6000",
              link: "tel:+13103636000"
            },
            {
              icon: MapPin,
              title: "Address",
              content: "Hawthorne, California",
              link: "https://maps.google.com"
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-space-gray p-8 rounded-lg text-center hover:bg-opacity-80 transition-all"
            >
              <item.icon className="w-12 h-12 text-space-light mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-space-light">{item.content}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;