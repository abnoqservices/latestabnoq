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
export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
