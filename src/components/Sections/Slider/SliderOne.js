import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function SliderOne({ data, className }) {
  return (
    <section className={`slider-block ${classNames(className)}`}>
      <div className="container">
        <div className="flex max-xl:flex-col-reverse gap-2">
          <div className="xl:w-1/3 w-full xl:pr-[15px]">
            <div className="text">
              <h1 className="heading3 xl:pr-[55px]">AI-Powered Global Tech & Marketing Solutions</h1>
              <div className="body2 mt-4">At AbnoQ, we help businesses build, grow, globalize, and innovate with confidence. Through AI automation, predictive analytics, localization, and seamless migration services, we deliver solutions that accelerate digital growth, reduce costs, and expand worldwide.</div>
            </div>
            <div className="block-button xl:mt-10 mt-6 flex gap-4 flex-wrap ">


              <Link className="button-main" href="about-us">Quick Audit</Link>
              <Link className="button-main bg-grey" href="/pages/contact-us">AI Strategy Call</Link>


            </div>
          </div>
         <div className="xl:w-2/3 w-full xl:pl-[15px] ">
            <div className="bg-img w-full ">
              <Image  loading="eager" priority     width={500} height={500} className="w-full max-sm:h-full object-cover" src="/images/slider/enterprise-it-infrastructure.png" alt="enterprise-it-infrastructure" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


