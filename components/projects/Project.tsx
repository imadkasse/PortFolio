"use client";
import React, { useState } from "react";
import { data } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
}

const Project = ({ id }: Props) => {
  const [projects, setProjects] = useState(data);

  const Project = data.filter((project) => project.id === id);
  console.log(Project);

  return (
    <div className="text-white  container mx-auto my-16">
      {Project.map((project) => {
        return (
          <div key={project.id}>
            <div>
              <h1 className="my-12 text-center text-4xl">{project.title}</h1>
            </div>

            <div>
              <Image
                src={project.src}
                alt="Project Img"
                width={5550}
                height={5550}
                className="w-full h-96"
              />
            </div>

            <div>
              <h1 className="my-3 text-2xl ">description:</h1>
            </div>

            <div className="mx-4 text-lg">
              <p className="">{project.desc}</p>
            </div>

            <div>
              <h1 className="my-3 mt-9 text-2xl ">Technologies:</h1>
            </div>

            <div className="mx-4 flex gap-2 mb-9">
              {project?.technologies?.map((tech) => (
                <div key={tech.id}>
                  <button className="p-2 text-base bg-gray-600 rounded-3xl hover:bg-gray-600/70 transition duration-300">
                    {tech.title}
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h1 className="my-3 text-2xl ">Site objectives :</h1>
            </div>
            <ol className="list-disc mx-8 ">
              {project?.objectiveProject?.map((objective) => (
                <li key={objective.id}>{objective.text}</li>
              ))}
            </ol>

            <div className="mt-14 flex items-center justify-center border rounded-lg flex-col gap-5 py-4 bg-gray-700/40">
              <h1 className="text-5xl">Call Me for Your project</h1>
              <Link
                href="#"
                className="px-5 py-2.5 rounded-lg text-white bg-gray-400/10  border hover:bg-gradient-to-tl hover:from-purple-700 to-purple-300"
              >
                Call Now
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
