import React from "react";
import Image from "next/image";
import Profile from "@/assets/images/sample.png";

export default function Landing() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full py-10 items-center">
        <div className="flex flex-col lg:w-2/3 justify-center items-center">
          <div className="space-y-4">
            <h1 className="text-[3vh]">Hello Nanpargale</h1>
            <h2 className="text-[5vh]">I am Amirthalingam Sujeevan</h2>
            <h3>UI / UX Engineer </h3>
            <p className="text-justify">
              I am a person who has a keen interest in the design layout. I
              think presenting an attractive design is a matter of concern in
              developing a branding of products. To creates a good design. I
              focus on proper composition and visual decoration details in order
              to make it more professional. For the time being. I am developing
              the skill for acquiring the UI / UX design for dynamic application
              and web development.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/3">
          <Image src={Profile} alt="Profile Image" className="" />
        </div>
      </div>
    </>
  );
}
