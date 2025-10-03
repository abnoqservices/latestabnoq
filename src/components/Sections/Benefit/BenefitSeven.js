'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import VideoFrame from "@/components/Other/VideoFrame";
import benefitData from "@/components/Sections/Benefit/benefits.json"; // ✅ import JSON

const BenefitSeven = ({ classname, background, slug }) => {
  const [openVideo, setOpenVideo] = useState(false);

  // ✅ find JSON data by slug
  const benefit = benefitData.find((item) => item.slug === slug)



  // ✅ fallback if not found
  const defaultData = {
    heading: "Transforming Enterprises With Proven Technology Consulting",
    video: {
      image: "/images/component/about3.png",
      ceo: "Tony Nguyen, CEO, Abnoq"
    },
    contentBox: {
      heading: "Unlock Your Business Growth Potential Today!",
      features: [
        "Tailored IT & Business Strategy Advisory",
        "Digital Transformation Roadmaps & Execution",
        "Data-Driven Decision Support & Analytics",
        "Cloud, AI & Emerging Tech Adoption",
        "Risk Management & Compliance Advisory",

      ],
      buttonText: " Explore Services",
      buttonLink: "about-us/our-teams",
      buttonText2: "Schedule A Consultation",
      buttonLink2: "about-us/our-teams"
      
    }
  };
  const data = benefit || defaultData;

  return (
    <section className={`section-benefit ${classname}`}>
      <div className="container">
        <div className={`flex gap-y-8 xl:items-center justify-between max-xl:flex-col sm:p-14 p-6 ${background} rounded-3xl`}>
          
          {/* LEFT SIDE */}
          <div className="w-full xl:w-1/2 relative">
            <h4 className="heading3">{data.heading}</h4>
            <div className="bg-img mt-7 video-block relative overflow-hidden rounded-[20px]">
              <Image width={5000} height={5000} className="w-full" src={data.video.image} alt="benefit" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full xl:w-1/2 xl:pl-20">
            <div className="bg-white sm:p-10 p-6 rounded-[20px]">
              <h3 className="heading4">{data.contentBox.heading}</h3>
              <div className="list-feature mt-7">
                {data.contentBox.features.map((feature, index) => (
                  <div className="flex items-center mt-3" key={index}>
                    <Icon.Check className="text-blue text-2xl" />
                    <div className="text-title pl-3">{feature}</div>
                  </div>
                ))}
              </div>
              <Link className="button-main md:mt-9 mt-7 mr-1 text-sm" href={data.contentBox.buttonLink}>
                {data.contentBox.buttonText}
              </Link>
              <Link className="button-main md:mt-9 mt-7 text-sm bg-grey" href={data.contentBox.buttonLink2}>
                {data.contentBox.buttonText2}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {openVideo && <VideoFrame setOpenVideo={setOpenVideo} />}
    </section>
  );
};

export default BenefitSeven;
