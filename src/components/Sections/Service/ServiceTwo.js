import React from 'react'
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link"
import { convertToSlug } from "@/common/utils"
import benefitData from "@/components/Sections/Benefit/benefits.json";
const ServiceTwo = ({slug}) => {
  const benefit = benefitData.find((item) => item.slug === slug)



  // ✅ fallback if not found
  const defaultData = {
    "sectionHeading": "Technology Consulting Core Services",
    "services": [
      {
        "icon": "Database",
        "title": "IT Strategy & Roadmaps",
        "description": "Long-term technology planning aligned with business objectives."
      },
      {
        "icon": "Users",
        "title": "Digital Transformation Consulting",
        "description": "Advisory for process automation, AI adoption, and modern platforms."
      },
      {
        "icon": "Cloud",
        "title": "Cloud Strategy & Migration",
        "description": "Roadmaps for cloud adoption, hybrid environments, and modernization."
      },
      {
        "icon": "Recycle",
        "title": "Data Analytics & Insights",
        "description": "Business intelligence and predictive analytics for smarter decisions."
      },
      {
        "icon": "Pulse",
        "title": "Risk Management & Compliance",
        "description": "Governance, cybersecurity, and regulatory frameworks."
      },
      {
        "icon": "ClockCounterClockwise",
        "title": "Process Optimization",
        "description": "Re-engineering workflows for agility, cost reduction, and scalability."
      }
    ]
  }
  
  const data = benefit || defaultData;
    return (
        
      <section className="service-block pt-10 ">
      <div className="container text-center">
        {/* Section Heading */}
    
        <span className="tag text-label bg-grey text-blue ">{data.tag}</span>
        <h3 className="heading3 text-center  pt-5">{data.sectionHeading}</h3>

        {/* Dynamic Services */}
        <div className="list-values grid xl:grid-cols-3 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-6">
          {data.services.map((service, index) => {
            const IconComponent = Icon[service.icon]; // ✅ dynamic icon
            return (
              <div
                key={index}
                className="item bg-white p-8 rounded-[20px] h-full bg-linear"
              >
                {IconComponent && (
                  <IconComponent className="text-blue text-6xl" />
                )}
                <div className="heading5 fw-600 mt-6">{service.title}</div>
                <div className="text-surface1 mt-3">{service.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
      
    )
}

export default ServiceTwo
