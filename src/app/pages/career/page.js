// src/app/faqs/page.js

import Career from "./Career";

export async function generateMetadata() {
  return {
    title: "Careers | AbnoQ IT Services",
    description:
      "Join AbnoQ IT Services and build your career in cloud, AI, web development, cybersecurity, and cutting-edge IT solutions. Explore job openings, growth opportunities, and our work culture.",
    openGraph: {
      title: "Careers at AbnoQ IT Services",
      description:
        "Discover exciting IT career opportunities at AbnoQ. We’re hiring talented professionals in cloud, AI, web development, and cybersecurity.",
      url: "https://abnoq.com/careers",
      images: [
        {
          url: "https://abnoq.com/og-careers.jpg",
          width: 1200,
          height: 630,
          alt: "AbnoQ Careers",
        },
      ],
    },
    alternates: {
      canonical: "https://abnoq.com/careers",
    },
  };
}

// ✅ Server component just renders the client component
export default function DisclaimerPage() {
  return <Career />;
}
