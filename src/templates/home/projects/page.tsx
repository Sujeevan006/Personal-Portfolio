import React from "react";
import Image from "next/image";
import "@/styles/tools.css";
import Button from "../../../components/shared/button";
import ProjectImage1 from "@/assets/images/sample2.svg";
import LinkedInIcon from "@/assets/images/linkedInIcon.svg";
import BehanceIcon from "@/assets/images/behanceIcon.svg";
import FacebookIcon from "@/assets/images/facebookIcon.svg";
import InstagramIcon from "@/assets/images/instagramIcon.svg";
import WhatsappIcon from "@/assets/images/whatsappIcon.svg";
import GithubIcon from "@/assets/images/githubIcon.svg";

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

interface Tools {
  image: string;
}

const tools: Tools[] = [
  {
    image: FacebookIcon,
  },
  {
    image: BehanceIcon,
  },
  {
    image: GithubIcon,
  },
  {
    image: FacebookIcon,
  },
  {
    image: InstagramIcon,
  },
  {
    image: WhatsappIcon,
  },
];

export default function Projects() {
  return (
    <>
      <div className="space-y-8 p-4">
        {projects.map((project: any, projectindex: any) => (
          <div
            key={projectindex}
            className="bg-[#00558f] bg-opacity-20 backdrop-blur-lg border-2 border-[#00558f] rounded-xl flex p-6 gap-10"
          >
            <div className="bg-red-8000 w-[800px] flex items-center">
              <Image src={project?.image} alt={`Project Image-1`} />
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-6">
                <h4 className="text-[3vh] ease-in-out duration-300">
                  {project?.title}
                </h4>
                <p className="text-justify">{project?.description}</p>
              </div>
              <div className="flex gap-8 w-full items-center">
                <div>Tools and Technologies used</div>
                {tools.map((tool: any, toolindex: any) => (
                  <div
                    key={toolindex}
                    className="flex flex-col justify-center items-center p-4 space-y-2 rounded-md border-2 border-blue-800"
                  >
                    <div className="w-12 rounded-full flex items-center justify-center">
                      <Image src={tool?.image} alt={`SocialMedia Icon`} />
                    </div>
                    <label htmlFor="" className="text-[12px]">
                      Figma
                    </label>
                  </div>
                ))}
              </div>

              <div>Tools used</div>
              <div className="flex justify-end w-full">
                <Button />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Button />
      </div>
    </>
  );
}
