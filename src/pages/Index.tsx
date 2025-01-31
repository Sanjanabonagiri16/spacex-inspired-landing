import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionHighlight from "@/components/MissionHighlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-space-dark min-h-screen">
      <Navbar />
      <Hero />
      <MissionHighlight />
      <Footer />
    </div>
  );
};

export default Index;