// src/app/faqs/page.js

import Condition from "./Condition";

export async function generateMetadata() {
  return {
    title: "Terms & Conditions | ABNOQ IT & Technology Services",
    description:
      "Read ABNOQ’s Terms & Conditions for IT and technology services, including software development, cloud computing, cybersecurity, automation, and consulting. Learn about service agreements, user responsibilities, payment terms, and compliance policies.",
    keywords:"ABNOQ terms and conditions, IT services terms, technology consulting policies, cloud computing terms, software development agreement, user responsibilities, data privacy, intellectual property rights, service level agreements, IT compliance",
      openGraph: {
      title: "ABNOQ Terms & Conditions for IT & Technology Services",
      description:
        "Explore the legal framework of ABNOQ’s IT services, covering service agreements, data privacy, intellectual property, liability, compliance, and user responsibilities for secure and reliable business solutions.",
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
export default function ConditionPage() {
  return <Condition />;
}
