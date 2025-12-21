import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Methods from "@/components/Methods";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />
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