import React from "react";
import Image from "next/image";
import ReviewerImg1 from "@/assets/images/reviewer1.jpg";

interface Review {
  image: any;
  name: string;
  about: string;
  message: string;
}

const reviews: Review[] = [
  {
    image: ReviewerImg1,
    name: "Nakarasan",
    about: "CEO - Speed Code Labs",
    message:
      "Sujeevan has been a standout UI/UX designer for us. His innovative designs and user-focused approach have consistently exceeded our expectations. He is a collaborative team player with a keen eye for detail. Highly recommended!",
  },

  {
    image: ReviewerImg1,
    name: "Nakarasan",
    about: "CEO - Speed Code Labs",
    message:
      "Sujeevan has been a standout UI/UX designer for us. His innovative designs and user-focused approach have consistently exceeded our expectations. He is a collaborative team player with a keen eye for detail. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        {reviews.map((reviews: any, reviewindex: any) => (
          <div
            key={reviewindex}
            className="bg-[#00558f] bg-opacity-20 backdrop-blur-lg border-2 border-[#00558f] rounded-xl flex flex-col items-center p-6 gap-10"
          >
            <div>
              <Image
                src={reviews.image}
                alt="Reviewer Image-1"
                className="w-[200px] rounded-md "
              />
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="">{reviews.name}</label>
              </div>
              <div>
                <label htmlFor="">{reviews.about}</label>
              </div>
              <p className="text-justify">{reviews.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
