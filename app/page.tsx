import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  const words = t("aboutMe");
  return (
    <main className="bg-black/[0.96]  ">
      <NavBar />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 purple "
        fill="purple"
      />
      <div className=" py-16 ">
        <div className="container mx-auto p-2 flex items-center sm:justify-between sm:flex-row   w-full  xs:flex-col  xs:justify-center xs:px-5 sm:px-0">
          <div className="flex flex-col max-w-[200px] xs:max-w-[300px]  ">
            <h1 className=" bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <span className="sm:text-3xl font-semibold xs:text-xl">
                I am Imad
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-700 to-white bg-clip-text sm:text-5xl xs:text-3xl font-bold">
                Web Developer
              </span>
            </h1>
            <TextGenerateEffect words={words} className="my-4" />
          </div>
          <div className="text-white">
            <Image
              alt="profileImg"
              src="/imgs/LogoForMe.png"
              width={250}
              height={100}
              className="max-w-96 md:h-[60vh] h-[50vh]  sm:w-full object-cover  border-2 rounded-lg border-purple-900/20 hover:border-purple-900  transition duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div id="projects" className="my-16 container mx-auto">
        <Projects />
      </div>
      <div id="skills" className=" my-16 container mx-auto ">
        <Skills />
      </div>
      {/* testimonials not show in browser becuse not have a data  */}
      {/* <div id="testimonials" className="my-16 container mx-auto ">
        <Testimonials />
      </div> */}
      <div id="contact" className="my-16 container mx-auto ">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
