"use client"; // ✅ Required for useState/useEffect in Next.js App Router

import { useEffect, useState } from "react";
import LayoutOne from "@/components/Layout/LayoutOne";
import BenefitSeven from "@/components/Sections/Benefit/BenefitSeven";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialSix from "@/components/Sections/Testimonial/TestimonialSeven";
import testimonialData from "@/data/testimonial/data.json";
import teamData from "@/data/team/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import OutstandingCaseStudies from "@/components/HeadingSubpage/OutstandingCaseStudies";
import CounterAbout from "@/components/Sections/Counter/CounterAbout";
import BenefitAbout from "@/components/Sections/Benefit/BenefitAbout";
import HistoryAbout from "@/components/Sections/About/HistoryAbout";
import TeamAbout from "@/components/Sections/Team/TeamAbout";
import caseData from '@/data/case-study/data.json'
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import AboutOne from "@/components/Sections/About/AboutOne";
export default function AboutUs() {
    const [arrayIndex, setArrayIndex] = useState(2); // start from caseData[2]

  useEffect(() => {
    const interval = setInterval(() => {
      // pick random index between 1 and 6
      setArrayIndex(Math.floor(Math.random() * 6) + 1);
    }, 3000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Now you get the whole array dynamically
  const data = caseData[arrayIndex];

    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8'} title={'about us'} desc={'Discover our story, our mission, and our passion for creativity and innovation.'} />
                <OutstandingCaseStudies data={caseData} showDesc />
                <div className="mt-14">
                <AboutOne  />
                </div>
                {/* <HistoryAbout /> */}
                <div className="our-value-block ">
                <ServiceOne className={'bg-subpage absolute top-0 w-full h-[740px] z-[-1] bg-white'} bground={'bg-white'}/>
                </div>
               <BrandOne classname={'lg:pt-20 md:pt-14 pt-10 lg:pb-[60px] md:pb-12 py-8 style-subpage'} />
                <TestimonialSix data={testimonialData}  />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
           
        </>
    );
}
