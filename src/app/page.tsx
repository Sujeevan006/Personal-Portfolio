import Header from "@/components/base/header";
import Landing from "@/templates/home/landing/page";
import Image from "next/image";
import Projects from "@/templates/home/projects/page";
import SocialMedia from "@/templates/home/socialmedias/page";

export default function Home() {
  return (
    <>
      <div className="p-6 h-auto bg-gradient-to-r from-[#06140d] to-[#000c24]">
        <div>
          <Header />
          <div className="lg:mx-[6%] md:mx-[2%] space-y-10">
            <Landing />
            <SocialMedia />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
