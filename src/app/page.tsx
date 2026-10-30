import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Methods from "@/components/Methods";
import DepthGauge from "@/components/DepthGauge";

// La Navbar ya se renderiza en el layout (antes aparecía duplicada acá).
export default function Home() {
  return (
    <div className="min-h-screen bg-pozo text-niebla">
      <DepthGauge />
      <Hero />
      <Stats />
      <Services />
      <Methods />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}
