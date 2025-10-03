// src/app/faqs/page.js

import Disclaimer from "./Disclaimer";

export async function generateMetadata() {
  return {
    title: "Disclaimer | ABNOQ IT & Technology Services",
    description:
      "Read ABNOQ’s Disclaimer for IT and technology services. Learn about service limitations, data security, professional advice, warranties, third-party links, system compatibility, and regulatory compliance.",
    keywords:"ABNOQ disclaimer, IT services disclaimer, data security disclaimer, professional advice disclaimer, service limitations, system compatibility, intellectual property disclaimer, regulatory compliance, business impact disclaimer, technology services disclaimer",
      openGraph: {
      title: "ABNOQ Disclaimer - Important Information About Our IT Services",
      description:
        "ABNOQ’s Disclaimer outlines key information about IT services, including professional advice, data and security, service performance, warranties, intellectual property, and business impact limitations.",
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
  return <Disclaimer />;
}
