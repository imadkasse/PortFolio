import NavBar from "@/components/NavBar";
import Projects from "@/components/projects/Projects";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

const page = () => {
  return (
    <div className="bg-black/[0.96]  ">
      <NavBar />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 purple "
        fill="purple"
      />
      <div className="text-white">
        <Projects />
      </div>
    </div>
  );
};

export default page;
