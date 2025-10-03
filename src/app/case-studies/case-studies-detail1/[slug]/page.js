
import Image from "next/image";
import * as Icon from '@phosphor-icons/react/dist/ssr'

import LayoutOne from "@/components/Layout/LayoutOne";
import testimonialData from "@/data/testimonial/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json"
import ContactOne from "@/components/Sections/Contact/ContactOne";
import { getPostByTitle } from "@/common/postSelect";




export async function generateMetadata({ params }) {
    const decodedSlug = decodeURIComponent(params.slug);
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");
    let foundPost = getPostByTitle(caseStudyData, cleanedSlug);
    const data = Array.isArray(caseStudyData) ? caseStudyData[0] : caseStudyData;
    const title = data?.Metatitle ;
    const description =data?.Metadescription ||"Explore our IT services including cloud, AI, web development, and cybersecurity.";
    const ogTitle = data?.OGTitle || title;
    const ogDescription = data?.OGDescription || description;
    const keywords = data?.MetaKeywords?.split(",").map((k) => k.trim()) || [
        "IT Services",
        "AbnoQ",
        "Cloud",
        "Cybersecurity",
      ];
    return {
      title,
      description,
      keywords,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: `https://abnoq.com/${params.slug}`,
        images: [
          {
            url: data?.OGImage || "https://abnoq.com/og-services.jpg",
            width: 1200,
            height: 630,
            alt: data?.OGTitle || "Abnoq IT Services",
          },
        ],
      },
      alternates: {
        canonical: `https://abnoq.com/${params.slug}`,
      },
    };
  }
  
export default function CaseStudiesDtailOne({ params, searchParams }) {
    // Decode URL 
    const { slug} = params; 
    const id = searchParams?.id;

    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    let foundPost = getPostByTitle(caseStudyData, cleanedSlug);
    const data = Array.isArray(caseStudyData) ? caseStudyData[0] : caseStudyData;
   
   

    return (
        <>
            <LayoutOne className="-style-1">
      <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>

      {/* Heading Section */}
      <HeadingSubpage
        classname="lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8"
        tag={data?.category}
        title={data?.title}
      />

      {/* Intro Section */}
      <div className="introduce">
        <div className="container">
          <div className="bg-img md:h-[460px] h-[300px] rounded-[20px] overflow-hidden">
            <Image
              src={data?.coverImage || "/images/placeholder.png"}
              width={5000}
              height={5000}
              alt={data?.title || "cover image"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="desc-block flex items-center justify-center lg:mt-10 mt-7">
            <p className="desc w-5/6 heading5 font-normal normal-case text-center">
              {data?.intro?.text}
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-us-block lg:py-20 sm:py-14 py-10">
        <div className="container">
          <div className="flex max-lg:flex-col items-center justify-between gap-y-10">
            <div className="lg:w-1/2 lg:pr-10">
              <div className="bg-img w-full">
                <img
                  className="w-full rounded-3xl"
                  src={data?.about?.image}
                  alt="about"
                />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <div className="text-content">
                <h3 className="heading3">{data?.about?.title}</h3>
                <p className="body2 text-surface1 mt-6">
                  {data?.about?.description}
                </p>
                <div className="more-infor xl:w-1/2 lg:w-2/3 sm:w-1/2 w-3/4 mt-6">
                  <div className="flex items-center justify-between">
                    <strong className="heading6">Client</strong>
                    <span className="body2 text-surface1">
                      {data?.about?.info?.client}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <strong className="heading6">Date</strong>
                    <span className="body2 text-surface1">
                      {data?.about?.info?.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <strong className="heading6">Author</strong>
                    <span className="body2 text-surface1">
                      {data?.about?.info?.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="counter">
        <div className="container">
          <div className="counter-inner flex flex-col items-center justify-center lg:p-[60px] sm:p-10 p-7 rounded-3xl bg-linear">
            <span className="heading6 font-normal">{data?.services?.subtitle}</span>
            <h3 className="heading3 mt-3">{data?.services?.title}</h3>
            <div className="list-counter flex justify-between max-lg:flex-wrap gap-y-8 w-full lg:mt-10 mt-7">
              {data?.services?.counters?.map((item, index) => (
                <div
                  key={index}
                  className="counter-item flex flex-col items-center max-lg:w-1/2"
                >
                  <strong className="heading3">{item.value}</strong>
                  <span className="heading6 font-normal text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefit lg:pt-20 sm:pt-14 pt-10">
        <div className="container">
          <div className="heading flex max-lg:flex-col justify-between gap-y-4">
            <div className="xl:w-5/12 lg:w-6/12">
              <h3 className="heading3">{data?.benefits?.title}</h3>
            </div>
            <div className="xl:w-5/12 lg:w-6/12">
              <div className="body2 text-surface1 lg:text-end">
                {data?.benefits?.description}
              </div>
            </div>
          </div>
          <div className="flex max-lg:flex-col justify-between lg:mt-10 mt-7 gap-y-10">
            <div className="lg:w-5/12">
              {data?.benefits?.items?.map((item, index) => {
                const IconComponent = Icon[item.icon] || Icon.Target;
                return (
                  <div
                    key={index}
                    className="feature-item flex item-center gap-6 mt-7 first:mt-0"
                  >
                    <div className="icon flex flex-shrink-0 items-center justify-center lg:w-[68px] w-14 lg:h-[68px] h-14 bg-surface rounded-full">
                      <IconComponent className="text-blue lg:text-4xl text-3xl" />
                    </div>
                    <div className="infor">
                      <h5 className="heading5">{item.title}</h5>
                      <p className="body2 text-surface1 lg:mt-3 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="lg:w-6/12">
              <div className="bg-img overflow-hidden rounded-3xl">
                <Image
                  width={5000}
                  height={5000}
                  className="w-full"
                  src={data?.benefits?.image}
                  alt="benefit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="feature-block lg:py-20 sm:py-14 py-10">
        <div className="container">
          <div className="flex max-lg:flex-col gap-y-8">
            <div className="lg:w-6/12 lg:pr-20 lg:border-r border-outline">
              <h3 className="heading3">{data?.project?.titleLeft}</h3>
              <p className="body2 text-surface1 mt-5">
                {data?.project?.descriptionLeft}
              </p>
            </div>
            <div className="lg:w-6/12 lg:pl-20">
              <h3 className="heading3">{data?.project?.titleRight}</h3>
              <p className="body2 mt-5">{data?.project?.descriptionRight}</p>
              <div className="list-feature mt-3">
                {data?.project?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center mt-4">
                    <Icon.CheckCircle
                      weight="fill"
                      className="flex-shrink-0 text-blue text-2xl"
                    />
                    <div className="text-title pl-3">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Related Case Studies */}
      <TestimonialOne
        classname="style-service md:py-[60px] bg-linear md:rounded-3xl rounded-full"
        data={testimonialData}
      />
      <CaseStudyOne
        classname="lg:py-20 sm:py-14 py-10 bg-linear"
        data={caseStudyData}
        start={0}
        limit={5}
      />
      <ContactOne classname="bg-linear-blue" />
    </LayoutOne>
        </>
    );
}
