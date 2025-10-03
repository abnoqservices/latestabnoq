import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import benefitData from "@/components/Sections/Benefit/benefits.json";
import { Span } from "next/dist/trace";
const AboutSevenSecond = ({ slug }) => {
  const benefit = benefitData.find((item) => item.slug === slug);

  const defaultData = {
    tags: "Why Choose Us",
  subheading: "Elevate Enterprise Growth With Proven Advisory Expertise",
    image: "/images/component/about-third7.png",
  blocks: [
    {
      icon: "ChartPolar",
      title: "Strategic IT Guidance",
      desc: "We align technology with business goals, ensuring every investment drives measurable outcomes."
    },
    {
      icon: "ChartBar",
      title: "Accelerated Digital Transformation",
      desc: "From cloud to AI, we help enterprises adopt emerging tech to stay competitive and agile."
    },
    {
      icon: "ChartLineDown",
      title: "Risk & Compliance Focus",
      desc: "Advisory that minimizes risks while ensuring regulatory compliance and data security at scale."
    }
  ]
  };

  const data = benefit || defaultData;

  return (
    <section className="section-about style-seven  lg:py-20 sm:py-14 py-10">
      <div className="container">
        <div className="flex items-center justify-between gap-y-8 max-lg:flex-wrap">
          {/* Left image */}
          <div className="w-full lg:w-5/12 lg:pr-4">
            <Image
              width={8000}
              height={8000}
              className="w-full"
              src={data?.image }
              alt={data?.heading}
            />
          </div>

          {/* Right content */}
          <div className="w-full lg:w-7/12 lg:pl-16">
            <span className="tag text-label bg-grey text-blue">
              {data.tags}
            </span>
            <h3 className="heading3 mt-7">{data?.subheading}</h3>
            <div className="desc mt-7 whitespace-pre-line" >{data?.desc}</div>

            {/* Dynamic feature blocks */}
            <div className="feature border-t border-outline mt-7 ">
              {data.blocks?.map((block, idx) => {
                const DynamicIcon = Icon[block?.icon];
                return (
                  <div className="item flex gap-4 mt-4" key={idx}>
                    {DynamicIcon && (
                      <DynamicIcon
                        weight="fill"
                        className="text-5xl flex-shrink-0"
                      />
                    )}
                    <div className="info sm:flex-shrink-0">
                      <h5 className="heading5">{block?.title}</h5>
                      <span className="desc mt-2 block w-full sm:w-[700px] break-words">
  {block?.desc}
</span>


                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSevenSecond