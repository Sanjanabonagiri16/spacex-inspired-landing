import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionHighlight from "@/components/MissionHighlight";
import MissionTimeline from "@/components/MissionTimeline";
import VehicleShowcase from "@/components/VehicleShowcase";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AstronautEasterEgg from "@/components/AstronautEasterEgg";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="bg-space-dark min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <div id="mission-highlight">
          <MissionHighlight />
        </div>
        <VehicleShowcase />
        <MissionTimeline />
        <Footer />
        <AstronautEasterEgg />
        <Chatbot />
      </div>
    </SmoothScroll>
  );
};

export default Index;