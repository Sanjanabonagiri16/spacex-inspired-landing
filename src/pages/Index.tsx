import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionHighlight from "@/components/MissionHighlight";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="bg-space-dark min-h-screen">
        <Navbar />
        <Hero />
        <div id="mission-highlight">
          <MissionHighlight />
        </div>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;