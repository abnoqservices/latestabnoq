import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import LayoutOne from "@/components/Layout/LayoutOne";
import testimonialData from "@/data/testimonial/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialEight";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import { getCaseStudyData } from "@/data/case-study/data"; // local data
import ContactOne from "@/components/Sections/Contact/ContactOne";
import { getPostByTitle } from "@/common/postSelect";

// ✅ Fetch case study from API using slug
async function getCaseStudyBySlug(slug) {
  try {
    const res = await fetch(
      `https://aapkiyojana.org/abnoq/welcome/getCaseStudy/${slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch case study");
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// ✅ Metadata generator
export async function generateMetadata({ params }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

  const caseStudyData = await getCaseStudyData();
  const foundPost = getPostByTitle(caseStudyData, cleanedSlug);

  const data = foundPost || null;

  const title = data?.Metatitle || "AbnoQ IT Services";
  const description =
    data?.Metadescription ||
    "Explore our IT services including cloud, AI, web development, and cybersecurity.";
  const ogTitle = data?.OGTitle || title;
  const ogDescription = data?.OGDescription || description;
  const keywords =
    data?.MetaKeywords?.split(",").map((k) => k.trim()) || [
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

// ✅ Page Component
export default async function CaseStudiesDetailOne({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

  // Local JSON data (for SEO/extra info)
  const caseStudyData = await getCaseStudyData();
  const foundPost = getPostByTitle(caseStudyData, cleanedSlug);

  // API fetch by slug
  const apiData = await getCaseStudyBySlug(slug);

  if (!foundPost && !apiData) {
    return <div>❌ Case study not found</div>;
  }


  return (
    <LayoutOne className="-style-1">
      <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>

      {/* ✅ Show API Data above testimonial */}
      {apiData.map((item) => (
        <div
          key={item.id}
          dangerouslySetInnerHTML={{ __html: item.caseStudy_title }}
        />
      ))}

      {/* ✅ Testimonial stays as it is */}
      <TestimonialOne
        classname="style-service md:py-[60px]"
        data={testimonialData}
      />
      <CaseStudyOne
        classname="lg:py-20 sm:py-14 py-10 bg-linear"
        data={caseStudyData}
        start={0}
        limit={6}
      />
      <ContactOne classname="bg-linear-blue" />
    </LayoutOne>
  );
}
