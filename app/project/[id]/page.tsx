import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Project from "@/components/projects/Project";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="bg-black/[0.96] py-1">
      <NavBar />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 purple "
        fill="purple"
      />
      <Project id={params.id} />
      <Footer />
    </main>
  );
};

export default page;
