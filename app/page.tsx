import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Languages } from "@/components/portfolio/Languages";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-24 sm:space-y-32">
        <Hero />
        <Skills />
        <Projects />
        
        {/* Education & Languages */}
        <section className="grid md:grid-cols-2 gap-6">
          <Education />
          <Languages />
        </section>
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
