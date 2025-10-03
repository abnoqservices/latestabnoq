import Image from "next/image"
import Link from "next/link"
import benefitData from "@/components/Sections/Benefit/benefits.json";
const AboutSevenFirst = ({slug}) => {
  const benefit = benefitData.find((item) => item.slug === slug)

  const defaultData = {
    tag1: "Global Experience",
    heading1: "Helping Enterprises Succeed With Proven Global Experience",
    description: "With 10+ years of advisory excellence, AbnoQ has partnered with 20+ global brands and delivered 1000+ successful projects across industries including finance, healthcare, retail, and manufacturing. \n Our consultants blend strategic insight with hands-on expertise-helping enterprises reduce risks, embrace innovation, and achieve measurable growth.",
    
    counters: [
      { value: "10+", label: "Years Experience" },
      { value: "1000+", label: "Deployments" }
    ],
    button: { label: " Talk To Our Advisors", link: "about-us" },
    image1: "/images/component/about-third7.png",
    alt: "Default About Image"
  };

  const data = benefit || defaultData;

  return (
    <section className="section-about style-seven  lg:mt-20 sm:mt-14 mt-10">
      <div className="container">
        <div className="flex items-center justify-between gap-y-8 max-lg:flex-col-reverse">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 lg:pr-16">
            <span className="tag text-label bg-grey text-blue">{data.tag1}</span>

            {/* Heading */}
            <h3 className="heading3 mt-5">{data.heading1}</h3>

            {/* Description */}
            <div className="desc mt-5 whitespace-pre-line">{data.description}</div>

            {/* Counters */}
            <div className="counter flex mt-4">
              {data.counters.map((counter, i) => (
                <div key={i} className={`item ${i > 0 ? "pl-10" : ""}`}>
                  <div className="heading3">{counter.value}</div>
                  <div className="text-title mt-1">{counter.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              className="button-main text-black bg-transparent border border-black hover:bg-blue hover:border-blue hover:text-white md:mt-10 mt-7"
              href={data.button.link}
            >
              {data.button.label}
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-5/12 lg:pl-4">
            <Image
              width={8000}
              height={8000}
              className="w-full"
              src={data.image1}
              alt={data.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSevenFirst;