// src/app/faqs/page.js

import FAQsClient from "./FAQsClient";

export async function generateMetadata() {
  return {
    title: "FAQs | ABNOQ IT & Digital Solutions Support",
    description:
      "Find answers to frequently asked questions about ABNOQ’s IT and digital solutions. Learn about services, support requests, SEO benefits, responsive websites, customer support, and digital agency guidance.",
    keywords:"ABNOQ FAQs, IT services questions, digital agency FAQs, customer support, SEO services benefits, responsive website FAQ, support request help, ABNOQ support center, IT solutions FAQ, business growth support",
      openGraph: {
      title: "ABNOQ FAQs - Your Questions About IT & Digital Solutions Answered",
      description:
        "Explore ABNOQ’s FAQs to get clear answers on IT services, support center, SEO benefits, responsive websites, digital agency solutions, and customer support assistance.",
      url: "https://abnoq.com/faqs",
      images: [
        {
          url: "https://abnoq.com/og-services.jpg",
          width: 1200,
          height: 630,
          alt: "AbnoQ FAQ",
        },
      ],
    },
    alternates: {
      canonical: "https://abnoq.com/faqs",
    },
  };
}

// ✅ Server component just renders the client component
export default function FAQsPage() {
  return <FAQsClient />;
}
