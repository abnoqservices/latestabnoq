// src/app/faqs/page.js

import Privacy from "./Privacy";

export async function generateMetadata() {
  return {
    title: "Privacy Policy | ABNOQ IT & Technology Services",
    description:
      "Read ABNOQ’s Privacy Policy to learn how we collect, use, and protect your personal data. Our policy covers data security, retention, third-party services, GDPR compliance, cookies, and your privacy rights.",
    keywords:"Read ABNOQ’s Privacy Policy to learn how we collect, use, and protect your personal data. Our policy covers data security, retention, third-party services, GDPR compliance, cookies, and your privacy rights.",
      openGraph: {
      title: "ABNOQ Privacy Policy - How We Protect Your Data",
      description:
        "Discover how ABNOQ safeguards your personal information with encryption, GDPR compliance, data retention policies, and secure international data transfers. Learn about your rights, cookies, and third-party services.",
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
export default function PrivacyPage() {
  return <Privacy />;
}
