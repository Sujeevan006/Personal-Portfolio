import Header from "@/components/base/header";
import Landing from "@/templates/home/landing/page";
import Image from "next/image";
import Projects from "@/templates/home/projects/page";
import SocialMedia from "@/templates/home/socialmedias/page";
import Reviews from "@/templates/home/reviews/page";

export default function Home() {
  return (
    <>
      <div className="p-2 px-6 h-auto bg-gradient-to-r from-[#06140d] to-[#000c24]">
        <div className="">
          <Header />
          <div className="mx-[10%] space-y-10">
            <Landing />
            <SocialMedia />
            <Projects />
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
}
