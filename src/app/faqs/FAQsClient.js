// src/app/faqs/FAQsClient.js
"use client";

import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import LayoutOne from "@/components/Layout/LayoutOne";
import faqData from "@/data/faqs/data.json";

export default function FAQsClient() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleOpenFaq = (id) => {
    setOpenFaq((prevId) => (prevId === id ? null : id));
  };

  return (
    <LayoutOne>
      <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
      <section className="form-contact-us lg:py-20 sm:py-14 py-10 border-b border-outline">
        <div className="container">
          <div className="flex max-lg:flex-col justify-between gap-y-8">
            {/* FAQ Section */}
            <div className="w-full lg:w-2/2 lg:pl-12">
              <div className="list-faqs bg-white py-8 px-10 rounded-2xl shadow-xl">
                <h4 className="heading4">Build & Secure</h4>
                <div className="list mt-3">
                  {faqData.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className={`question-item py-5 border-b border-outline cursor-pointer ${
                        openFaq === item.id ? "open" : ""
                      }`}
                      onClick={() => handleOpenFaq(item.id)}
                    >
                      <div className="question-item-main flex items-center justify-between">
                        <strong className="heading6 pr-8">
                          {item.title}
                        </strong>
                        <div className="icon">
                          <Icon.Plus className="icon-plus text-xl" />
                          <Icon.Minus className="icon-minus text-xl" />
                        </div>
                      </div>
                      {openFaq === item.id && (
                        <div className="content-question">
                          <div className="body3 text-secondary pt-3">
                            {item.desc}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {/* ... same for other sections */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
}
