import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/styles.scss";
import GlobalProvider from "./GlobalProvider";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://abnoq.com"),
  title:"Global Tech & Marketing Solutions Powered by AI | AbnoQ",
  description:"AbnoQ helps enterprises build, grow, and innovate with AI-driven automation, digital development, cloud, and growth marketing solutions. Start scaling smarter today.",
  keywords:"AI-powered solutions, enterprise IT, digital development, growth marketing, business automation, cloud services",
  openGraph: {
    title: "AI-Powered Global Tech & Marketing Solutions",
    description: "Build, grow, and innovate with AbnoQ. From IT infrastructure to AI innovation, we deliver digital solutions that help enterprises scale worldwide.",
    url: "https://abnoq.com/",
    images: [
      {
        url: "https://abnoqmain.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fhome-1.png&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Abnoq Pvt Ltd - Digital Agency",
      },
    ],
  },
};

const jobPostingJsonLd = {
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Full Stack Developer",
  "description": "Design and develop scalable web applications using React.js and Vue.js for frontend and Node.js/Express for backend. Build and optimize databases (PostgreSQL & MongoDB or DynamoDB) for performance and reliability. Deploy, monitor, and scale applications using AWS cloud services (EC2, S3, Lambda, CloudFront, etc). Integrate AI/ML models and APIs (chatbots, recommendation engines, automation workflows). Ensure application security, performance, and best coding practices. Collaborate with designers, product managers, and other engineers in a fast-paced environment. Write clean, reusable, and well-documented code with version control (Git).",
  "identifier": {
    "@type": "PropertyValue",
    "name": "Company Name",
    "value": "Not Specified"
  },
  "datePosted": "2025-10-08",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Company Name",
    "sameAs": ""
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Kalyanpur Kanpur",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 40000,
      "maxValue": 60000,
      "unitText": "MONTH"
    }
  },
  "qualifications": "5+ years of professional experience as a Full-Stack Developer. Strong expertise in React.js and/or Vue.js for building modern UIs. Proficiency in Node.js, REST/GraphQL APIs. Deep knowledge of PostgreSQL and MongoDB database design & optimization. Proven experience with AWS cloud setup and deployment. Solid understanding of microservices architecture and CI/CD pipelines. Hands-on experience integrating AI/ML features into web applications. Strong problem-solving, debugging, and optimization skills. Docker/Kubernetes, serverless architectures, data engineering and MLOps workflows are a plus.",
  "experienceRequirements": "Minimum 5 years of Full Stack Development experience.",
  "skills": [
    "React.js",
    "Vue.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "AWS (EC2, S3, Lambda, CloudFront)",
    "REST APIs",
    "GraphQL APIs",
    "AI/ML model/API integration",
    "Git",
    "Microservices",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Serverless architectures",
    "Data engineering",
    "MLOps"
  ],
  "industry": "IT",
  "jobBenefits": ""
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google verification */}
        <meta name="google-site-verification" content="O3bQyw56L9FrBAtP-mYw6kYhQIPS2UeXDncj9PaDO5I" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
        />
      </head>
      <body className={plusJakarta.className}>
        <GlobalProvider>
          {children}
          <div id="nav-full" />
          <div id="nav-sidebar" />
          <div id="cart-sidebar" />
          <div id="overlay" />
          <div id="modal" />
        </GlobalProvider>
      </body>
    </html>
  );
}
