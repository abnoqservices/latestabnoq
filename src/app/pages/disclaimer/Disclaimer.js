'use client'

import React, { useState } from 'react'
import Link from "next/link";
import LayoutOne from "@/components/Layout/LayoutOne";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const disclaimerData = [
    {
        id: 1,
        title: "General Disclaimer",
        desc: "The information provided on this website and through our IT services is for general informational purposes only. While we strive to ensure accuracy, we make no representations or warranties regarding the completeness, accuracy, or reliability of any information."
    },
    {
        id: 2,
        title: "Professional Advice Disclaimer",
        desc: "Our IT services and recommendations should not be considered as professional advice for specific business decisions. We recommend consulting with qualified professionals for critical business and technical decisions affecting your organization."
    },
    {
        id: 3,
        title: "Service Performance",
        desc: "While we endeavor to provide high-quality IT services, we cannot guarantee specific results or outcomes. Service performance may vary based on various factors including system configurations, third-party dependencies, and external circumstances."
    },
    {
        id: 4,
        title: "Third-Party Services and Links",
        desc: "Our services may integrate with or link to third-party applications, services, or websites. We are not responsible for the content, policies, or practices of these third-party services and disclaim any liability arising from their use."
    },
    {
        id: 5,
        title: "Data and Security",
        desc: "While we implement industry-standard security measures, no system is completely secure. We cannot guarantee absolute protection against all security threats, data breaches, or unauthorized access attempts."
    },
    {
        id: 6,
        title: "System Compatibility",
        desc: "Software and solutions developed may have specific system requirements. We disclaim responsibility for compatibility issues arising from unsupported configurations, outdated systems, or unauthorized modifications."
    },
    {
        id: 7,
        title: "Service Availability",
        desc: "We strive to maintain high service availability but cannot guarantee uninterrupted service. Scheduled maintenance, technical issues, or circumstances beyond our control may affect service availability."
    },
    {
        id: 8,
        title: "Limitation of Warranties",
        desc: "All services are provided 'as is' without warranties of any kind, either express or implied. We disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement."
    },
    {
        id: 9,
        title: "Technical Support Limitations",
        desc: "Technical support is provided based on service agreements and may have limitations on scope, response times, and availability. We cannot guarantee resolution of all technical issues within specific timeframes."
    },
    {
        id: 10,
        title: "Intellectual Property",
        desc: "While we respect intellectual property rights, we disclaim responsibility for any claims of infringement that may arise from client-provided content, specifications, or requirements incorporated into our solutions."
    },
    {
        id: 11,
        title: "Regulatory Compliance",
        desc: "Clients are responsible for ensuring their use of our services complies with applicable laws and regulations. We disclaim liability for any non-compliance issues arising from client-specific regulatory requirements."
    },
    {
        id: 12,
        title: "Business Impact",
        desc: "We disclaim responsibility for any business losses, revenue impact, or operational disruptions that may result from service interruptions, technical issues, or implementation challenges."
    },
    {
        id: 13,
        title: "Environmental Factors",
        desc: "Service performance may be affected by factors beyond our control including internet connectivity, power outages, natural disasters, or other environmental conditions. We disclaim liability for such circumstances."
    },
    {
        id: 14,
        title: "Updates and Changes",
        desc: "Software, services, and technologies evolve continuously. We disclaim responsibility for any issues arising from software updates, platform changes, or technology deprecation affecting our solutions."
    },
    {
        id: 15,
        title: "Consultation Limitations",
        desc: "Any advice or recommendations provided during consultations are based on information available at the time. We disclaim liability for decisions made based on such consultations or for outcomes resulting from implementation."
    },
    {
        id: 16,
        title: "Contact and Disputes",
        desc: "For questions about this disclaimer or to report concerns, please contact our support team at hello@abnoq.com. This disclaimer is subject to our Terms and Conditions and applicable law."
    }
];

export default function Disclaimer() {
    const [openDisclaimer, setOpenDisclaimer] = useState()

    const handleOpenDisclaimer = (id) => {
        setOpenDisclaimer(prevId => prevId === id ? null : id)
    }

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <section className="disclaimer-section lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container">
                    <div className="flex max-lg:flex-col justify-between gap-y-8">
                     
                        <div className="w-full lg:w-2/2 lg:pl-12">
                            <div className="list-disclaimers bg-white py-8 px-10 rounded-2xl shadow-xl">
                            <h4 className="heading4">Disclaimer</h4>
                                <p className="text-surface1 mt-2">Important Information About Our IT Services</p>
                                <div className="list mt-3">
                                    {disclaimerData.slice(0, 6).map((item) => (
                                        <div
                                            className={`disclaimer-item py-5 border-b border-outline cursor-pointer ${openDisclaimer === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenDisclaimer(item.id)}
                                        >
                                            <div className="disclaimer-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                   
                                                </div>
                                            </div>
                                            <div className="content-disclaimer">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <h4 className="heading4 mt-5">Service & Technical Disclaimers</h4>
                                <div className="list mt-3">
                                    {disclaimerData.slice(6, 12).map((item) => (
                                        <div
                                            className={`disclaimer-item py-5 border-b border-outline cursor-pointer ${openDisclaimer === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenDisclaimer(item.id)}
                                        >
                                            <div className="disclaimer-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                  
                                                </div>
                                            </div>
                                            <div className="content-disclaimer">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <h4 className="heading4 mt-5">General Limitations</h4>
                                <div className="list mt-3">
                                    {disclaimerData.slice(12, 16).map((item) => (
                                        <div
                                            className={`disclaimer-item py-5 border-b border-outline cursor-pointer ${openDisclaimer === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenDisclaimer(item.id)}
                                        >
                                            <div className="disclaimer-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                  
                                                </div>
                                            </div>
                                            <div className="content-disclaimer">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutOne>
    );
}