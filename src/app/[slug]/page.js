import LayoutOne from "@/components/Layout/LayoutOne";
import BenefitSeven from "@/components/Sections/Benefit/BenefitSeven";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import testimonialData from "@/data/testimonial/data.json";
import serviceData from "@/data/service/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import AboutSevenFirst from "@/components/Sections/About/AboutSevenFirst";
import AboutSevenSecond from "@/components/Sections/About/AboutSevenSecond";
import ServiceTwo from "@/components/Sections/Service/ServiceTwo";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialSeven";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";

import ContactOne from "@/components/Sections/Contact/ContactOne";
import { getPostByTitle } from "@/common/postSelect";
import benefitData from "@/components/Sections/Benefit/benefits.json"; 
import { getCaseStudyData } from "@/data/case-study/data";
// ✅ Dynamic Metadata for SEO
export async function generateMetadata({ params: { slug } }) {
  const decodedSlug = decodeURIComponent(slug || "");
  const cleanedSlug = decodedSlug.replace(/['"]/g, "'").trim();

  // get post (getPostByTitle may return array or single)
  const foundArray = getPostByTitle(serviceData, cleanedSlug) || [];
  const foundPost = Array.isArray(foundArray) ? foundArray[0] : foundArray;

  // normalize helpers for robust matching
  const normalize = (s = "") =>
    s
      .toString()
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();

  const postTitle = (foundPost?.title || "").trim();
  const postSlugFromPost = (foundPost?.slug || "").trim();

  const normalizedPostTitle = normalize(postTitle);
  const normalizedSearchSlug = normalize(postSlugFromPost || cleanedSlug);

  // Ensure benefitData is always an array
  const dataArray = Array.isArray(benefitData) ? benefitData : [benefitData];

  // Find the matching item by comparing both title and slug (robust, case-insensitive)
  const matchedData = dataArray.find((item) => {
    const itemTitle = normalize(item?.title);
    const itemSlug = normalize(item?.slug);

    return (
      (itemTitle && (itemTitle === normalizedPostTitle || itemTitle === normalizedSearchSlug)) ||
      (itemSlug && (itemSlug === normalizedSearchSlug || itemSlug === normalizedPostTitle))
    );
  });

  // source for metadata: prefer matchedData, otherwise fallback to foundPost, otherwise generic
  const metaSource = matchedData || foundPost || {};

  const title = metaSource?.Metatitle || metaSource?.title || "Abnoq IT Services";
  const description =
    metaSource?.Metadescription ||
    metaSource?.desc ||
    "Explore our IT services including cloud, AI, web development, and cybersecurity.";
  const ogTitle = metaSource?.OGTitle || title;
  const ogDescription = metaSource?.OGDescription || description;

  const keywords = metaSource?.MetaKeywords
    ? metaSource.MetaKeywords.split(",").map((k) => k.trim())
    : ["IT Services", "AbnoQ", "Cloud", "Cybersecurity"];

  // ensure OG image is an absolute URL
  const ogImagePath = metaSource?.OGImage || "/og-services.jpg";
  const ogImage = ogImagePath.startsWith("http")
    ? ogImagePath
    : `https://abnoq.com${ogImagePath}`;

  const canonical = `https://abnoq.com/${encodeURIComponent(slug)}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    alternates: {
      canonical,
    },
  };
}

export default async function ServiceDetail({ params: { slug } }) {
  const decodedSlug = decodeURIComponent(slug);
  const cleanedSlug = decodedSlug.replace(/['"]/g, "'");
  const foundPost = getPostByTitle(serviceData, cleanedSlug);
  const caseStudyData = await getCaseStudyData(); 
  return (
    <LayoutOne className="-style-1">
      <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]" />
      <HeadingSubpage
        classname="lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8"
        title={foundPost?.[0]?.title || "No Title"}
        desc={foundPost?.[0]?.desc || "No Description"}
      />

      <BenefitSeven background="bg-linear" slug={foundPost?.[0]?.title || "No Title"} />
      <AboutSevenSecond slug={foundPost?.[0]?.title || "No Title"} />
      <ServiceTwo slug={foundPost?.[0]?.title || "No Title"} classname="lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8" />
      <AboutSevenFirst slug={foundPost?.[0]?.title || "No Title"} />
      <CaseStudyOne classname="lg:py-20 sm:py-14 py-10  bg-linear" data={caseStudyData} start={0} limit={5} />
      <BrandOne classname="lg:pt-20 md:pt-14 pt-10 style-subpage" />
      <TestimonialOne data={testimonialData} />
      <ContactOne classname="bg-linear-blue" title={foundPost?.[0]?.title || "No Title"}  />
    </LayoutOne>
  );
}
