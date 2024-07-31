import React from "react";
import Button from "../../shared/button";

const handleButtonClick = () => {};

export default function Header() {
  return (
    <>
      <div className="flex w-full h-auto gap-20 bg-[#0496ff] bg-opacity-10 rounded-lg backdrop-blur-md justify-end items-center p-4">
        <ul className="flex gap-16 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
        <Button />
      </div>
    </>
  );
}
