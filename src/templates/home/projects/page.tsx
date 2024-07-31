import React from "react";
import Image from "next/image";
import Button from "../../../components/shared/button";
import ProjectImage1 from "@/assets/images/project1.svg";

interface Project {
  title: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Speed Code Labs - Website",
    image: ProjectImage1,
    description:
      "The Speed Code Labs website is a modern platform highlighting the company's services and expertise. With its responsive design, intuitive interface, and SEO optimization, it offers a seamless browsing experience while effectively showcasing Speed Code Labs' capabilities to potential clients.",
  },

  {
    title: "Speed Code Labs - Website",
    image: ProjectImage1,
    description:
      "The Speed Code Labs website is a modern platform highlighting the company's services and expertise. With its responsive design, intuitive interface, and SEO optimization, it offers a seamless browsing experience while effectively showcasing Speed Code Labs' capabilities to potential clients.",
  },

  {
    title: "Speed Code Labs - Website",
    image: ProjectImage1,
    description:
      "The Speed Code Labs website is a modern platform highlighting the company's services and expertise. With its responsive design, intuitive interface, and SEO optimization, it offers a seamless browsing experience while effectively showcasing Speed Code Labs' capabilities to potential clients.",
  },
];

export default function Projects() {
  return (
    <>
      <div className=" w-full grid grid-cols-3 gap-14 pt-10 pb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-blue-700 bg-opacity-10 backdrop-blur-lg border-2 border-[#2471a8] rounded-xl p-8 space-y-4"
          >
            <h4 className="group-hover:text-[2vh] ease-in-out duration-300">
              {project.title}
            </h4>
            <Image src={project.image} alt={`Project Image-1`} />
            <p className="text-justify">{project.description}</p>
            <div className="flex w-full justify-end"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Button />
      </div>
    </>
  );
}
