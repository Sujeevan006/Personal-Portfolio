import React from "react";
import Image from "next/image";
import "@/styles/socialmedia.css";
import LinkedInIcon from "@/assets/images/linkedInIcon.svg";
import BehanceIcon from "@/assets/images/behanceIcon.svg";
import FacebookIcon from "@/assets/images/facebookIcon.svg";
import InstagramIcon from "@/assets/images/instagramIcon.svg";
import WhatsappIcon from "@/assets/images/whatsappIcon.svg";
import GithubIcon from "@/assets/images/githubIcon.svg";

interface Socialmedias {
  image: string;
}

const medias: Socialmedias[] = [
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

export default function SocialMedia() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6">
        <div>
          <label htmlFor="">Contact Me</label>
        </div>
        <div className="flex gap-8 w-full justify-center items-center">
          <div className="h-1 bg-gradient-to-l from-[#00558f] w-full rounded-full"></div>
          {medias.map((media: any, mediaindex: any) => (
            <div
              key={mediaindex}
              className="box w-52 rounded-full flex items-center justify-center"
            >
              <Image src={media?.image} alt={`SocialMedia Icon`} />
            </div>
          ))}
          <div className="h-1 bg-gradient-to-r from-[#00558f]  w-full rounded-full"></div>
        </div>
      </div>
    </>
  );
}
