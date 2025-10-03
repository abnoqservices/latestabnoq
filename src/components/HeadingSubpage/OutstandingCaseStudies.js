"use client";

import React from "react";
import Link from "next/link";
import { convertToSlug } from "@/common/utils";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const OutstandingCaseStudies = ({ data, showDesc }) => {
  return (
    <div className="heading-content">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, type: "bullets" }} 
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="case-studies-slider"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                className="content-main style-one block bg-white rounded-3xl overflow-hidden shadow-lg"
                href={process.env.PUBLIC_URL + "/case-studies/[slug]"}
                as={
                  process.env.PUBLIC_URL +
                  "/case-studies/" +
                  convertToSlug(item.urltitle)
                }
              >
                <div className="flex max-lg:flex-col-reverse items-center justify-between relative">
                  <div className="lg:w-1/2">
                    <div className="text-content lg:p-20 max-lg:px-8 max-lg:py-10">
                      <div className="tag text-label">{item.category}</div>
                      <div className="name heading3 mt-4">{item.title}</div>
                      {showDesc && (
                        <div className="desc body2 text-surface1 mt-4">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-full lg:absolute top-0 right-0">
                    <div className="bg-img h-full">
                      <Image
                        width={5000}
                        height={5000}
                        className="w-full h-full object-cover"
                        src={item.thumbImage}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OutstandingCaseStudies;
