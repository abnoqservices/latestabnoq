'use client'

import Image from "next/image";
import Link from "next/link";
import * as Icon from '@phosphor-icons/react/dist/ssr'
import serviceData from "@/data/service/data.json"
import { convertToSlug } from "@/common/utils";
import { useState } from "react";

export default function FooterOne({ classname }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("⚠️ Please enter a valid email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://aapkiyojana.org/abnoq/welcome/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // CI expects form-data
        },
        body: new URLSearchParams({ email }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setMessage("✅ Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(`❌ ${data.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Failed to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="footer">
      <div className={`footer-block ${classname}`}>
        <div className="container py-[60px]">
          <div className="flex justify-between gap-y-8 max-xl:flex-wrap">
            {/* Company Info */}
            <div className="xl:w-1/4 md:w-1/2">
              <div className="footer-company-infor flex flex-col gap-5">
                <Link href="/" className="logo">
                  {classname ? (
                    <Image src={'/images/logo-white.svg'} width={5000} height={5000} alt="logo" className="w-[148px]" />
                  ) : (
                    <Image src={'/images/Abnoq-logo.svg'} width={5000} height={5000} alt="logo" className="w-[148px]" />
                  )}
                </Link>
                <div className="caption1">
                  At AbnoQ, we go beyond technology-we design AI-powered solutions that help businesses build strong foundations, grow visibility, automate smarter, and expand globally.
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="w-full md:w-1/2">
              <div className="footer-navigate flex md:justify-evenly max-md:gap-20 max-sm:gap-y-6 max-sm:flex-wrap">
                <div className="footer-nav-item">
                  <div className="item-heading text-button">Company</div>
                  <ul className="list-nav mt-3">
                    <li className="mt-2"><Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="about-us">About us</Link></li>
                    <li className="mt-2"><Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/blog">Blog</Link></li>
                    <li className="mt-2"><Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/case-study">Case Studies</Link></li>
                    <li className="mt-2"><Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/career">Career</Link></li>
                    <li className="mt-2"><Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/pages/contact-us">Contact</Link></li>
                  </ul>
                </div>

                {/* Solutions */}
                <div className="footer-nav-item">
                  <div className="item-heading text-button">Solutions</div>
                  <ul className="list-nav mt-3">
                    {serviceData.slice(0, 5).map(item => (
                      <li className="mt-2" key={item.id}>
                        <Link
                          className={`caption1 hover-underline ${classname && 'underline-white'}`}
                          href={process.env.PUBLIC_URL + "/[slug]"}
                          as={process.env.PUBLIC_URL + "/" + convertToSlug(item.title)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
  
            {/* Newsletter */}
            <div className="xl:w-1/4 w-full">
              <div className="company-contact max-xl:w-1/2 max-sm:w-full">
                <div className="heading text-button">Newsletter</div>
                <div className="send-block mt-4 flex items-center w-full relative">
                  <Icon.Envelope className="text-lg absolute top-1/2 left-0 -translate-y-1/2" />
                  <input
                    className={`caption1 w-full h-[50px] pl-7 pr-9 bg-transparent border-b ${classname ? 'border-white focus:border-white' : 'border-black'}`}
                    type="text"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                     aria-label="Send Message"
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    {loading ? (
                      <span className="caption1">...</span>
                    ) : (
                      <Icon.PaperPlaneTilt className="text-2xl" />
                    )}
                  </button>
                </div>

                {/* Success/Error message */}
                {message && (
                  <p className="caption1 mt-2 text-sm">{message}</p>
                )}

                {/* Social Icons */}
                <div className="list-social flex items-center flex-wrap gap-2.5 mt-7">
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.facebook.com/abnoqservices" target="_blank">
                    <i className="icon-facebook text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.linkedin.com/company/abnoqservices" target="_blank">
                    <i className="icon-linkedin text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://x.com/abnoqservices" target="_blank">
                    <i className="icon-twitter text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.youtube.com/@abnoq" target="_blank">
                    <i className="icon-youtube text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.instagram.com/abnoqservices/" target="_blank">
                    <i className="icon-instagram text-sm"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="flex items-center sm:justify-between max-sm:flex-col gap-y-2 justify-center py-2 border-t border-outline">
              <div className="left-block flex items-center">
                <div className="copy-right text-surface1 caption1">
                  Copyright © 2025 Abnoq Services Pvt. Ltd. All right reserved.
                </div>
              </div>
              <div className="nav-link flex items-center gap-2.5">
                <Link className="text-surface1 caption1 hover-underline" href="/term-condition">Terms Of Services</Link>
                <span className="text-surface1 caption1">|</span>
                <Link className="text-surface1 caption1 hover-underline" href="/privacy">Privacy Policy</Link> 
                <span className="text-surface1 caption1">|</span>
                <Link className="text-surface1 caption1 hover-underline" href="/disclaimer">Disclaimer</Link>
                <span className="text-surface1 caption1">|</span>
                <Link className="text-surface1 caption1 hover-underline" href="/faqs">Faqs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


