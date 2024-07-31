import Header from "@/components/base/header";
import Landing from "@/templates/home/landing/page";
import Projects from "@/templates/home/projects/page";

export default function Home() {
  return (
    <>
      <div className="p-6 h-auto bg-gradient-to-r from-[#06140d] to-[#000c24]">
        <Header />
        <div className="lg:mx-[6%] md:mx-[2%]">
          <Landing />
          <Projects />
        </div>
      </div>
    </>
  );
}
