import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Languages } from "@/components/portfolio/Languages";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CartProvider } from "@/components/portfolio/CartContext";
// import { CartDrawer } from "@/components/portfolio/CartDrawer";
import { SectionWrapper } from "@/components/portfolio/SectionWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <CartProvider>
        <AnimatedBackground />
        <Navbar />
        
        <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <section className="py-16 lg:py-24">
            <Hero />
          </section>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[--border]" />
            <SectionWrapper>
              <section className="pl-8 py-16 lg:py-20">
                <Skills />
              </section>
            </SectionWrapper>
          </div>
          
          <SectionWrapper delay={100}>
            <section className="py-16 lg:py-24">
              <Projects />
            </section>
          </SectionWrapper>
          
          <SectionWrapper delay={200}>
            <section className="py-16 lg:py-20">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <Education />
                <div className="md:mt-24">
                  <Languages />
                </div>
              </div>
            </section>
          </SectionWrapper>
          
          <SectionWrapper delay={300}>
            <section className="py-16 lg:py-20">
              <Contact />
            </section>
          </SectionWrapper>
        </main>
        
        <Footer />
        {/* <CartDrawer /> */}
      </CartProvider>
    </div>
  );
}