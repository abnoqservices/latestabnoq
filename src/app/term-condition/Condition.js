'use client'

import React, { useState } from 'react'
import Link from "next/link";
import LayoutOne from "@/components/Layout/LayoutOne";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const termsData = [
    {
        id: 1,
        title: "Acceptance of Terms",
        desc: "By accessing and using our IT services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services."
    },
    {
        id: 2,
        title: "Service Description",
        desc: "We provide comprehensive IT solutions including software development, web development, mobile application development, cloud services, cybersecurity solutions, and technical support services to businesses and individuals."
    },
    {
        id: 3,
        title: "User Responsibilities",
        desc: "Users are responsible for providing accurate information, maintaining the confidentiality of their account credentials, and using our services in compliance with applicable laws and regulations."
    },
    {
        id: 4,
        title: "Payment Terms",
        desc: "Payment terms are specified in individual service agreements. Generally, payments are due within 30 days of invoice date. Late payments may incur additional charges as specified in your service contract."
    },
    {
        id: 5,
        title: "Intellectual Property Rights",
        desc: "All custom software, code, and solutions developed by our team remain our intellectual property until full payment is received. Upon payment, clients receive appropriate usage rights as specified in the project agreement."
    },
    {
        id: 6,
        title: "Data Privacy and Security",
        desc: "We implement industry-standard security measures to protect your data. Our data handling practices are governed by our Privacy Policy and applicable data protection regulations including GDPR where applicable."
    },
    {
        id: 7,
        title: "Service Level Agreements",
        desc: "We strive to maintain 99.9% uptime for our hosted services. Scheduled maintenance will be communicated in advance. Service credits may be provided for extended outages as outlined in your specific SLA."
    },
    {
        id: 8,
        title: "Limitation of Liability",
        desc: "Our liability is limited to the amount paid for the specific service in question. We are not liable for indirect, consequential, or punitive damages arising from the use of our services."
    },
    {
        id: 9,
        title: "Confidentiality",
        desc: "We maintain strict confidentiality regarding all client information, project details, and business data. Non-disclosure agreements may be executed for additional protection of sensitive information."
    },
    {
        id: 10,
        title: "Project Scope and Changes",
        desc: "Project scope is defined in individual contracts. Changes to scope require written approval and may result in additional charges. We follow agile methodologies to accommodate reasonable changes during development."
    },
    {
        id: 11,
        title: "Support and Maintenance",
        desc: "Post-launch support and maintenance terms are specified in service agreements. We offer various support tiers including emergency support, regular maintenance, and feature updates based on client needs."
    },
    {
        id: 12,
        title: "Termination Policy",
        desc: "Either party may terminate services with appropriate notice as specified in the service agreement. Upon termination, all deliverables and payments up to the termination date become due immediately."
    },
    {
        id: 13,
        title: "Force Majeure",
        desc: "We are not liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including natural disasters, government actions, or other unforeseeable events."
    },
    {
        id: 14,
        title: "Governing Law",
        desc: "These terms are governed by the laws of the jurisdiction where our company is incorporated. Any disputes will be resolved through binding arbitration or in the courts of competent jurisdiction."
    },
    {
        id: 15,
        title: "Updates to Terms",
        desc: "We reserve the right to update these Terms and Conditions. Clients will be notified of material changes via email or through our website. Continued use of services constitutes acceptance of updated terms."
    },
    {
        id: 16,
        title: "Contact Information",
        desc: "For questions about these Terms and Conditions, please contact our legal department at hello@abnoq.com or through our official support channels. We aim to respond to all inquiries within 2 business days."
    }
];

export default function TermsConditions() {
    const [openTerm, setOpenTerm] = useState()

    const handleOpenTerm = (id) => {
        setOpenTerm(prevId => prevId === id ? null : id)
    }

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <section className="terms-conditions-section lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container">
                    <div className="flex max-lg:flex-col justify-between gap-y-8">
                     
                        <div className="w-full lg:w-2/2 lg:pl-12">
                            <div className="list-terms bg-white py-8 px-10 rounded-2xl shadow-xl">
                            <h4 className="heading4">Terms & Conditions</h4>
                                <p className="text-surface1 mt-2">Legal Framework for Our IT Services</p>
                                <div className="list mt-3">
                                    {termsData.slice(0, 6).map((item) => (
                                        <div
                                            className={`term-item py-5 border-b border-outline cursor-pointer ${openTerm === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenTerm(item.id)}
                                        >
                                            <div className="term-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                  
                                                </div>
                                            </div>
                                            <div className="content-term">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <h4 className="heading4 mt-5">Legal & Compliance</h4>
                                <div className="list mt-3">
                                    {termsData.slice(6, 12).map((item) => (
                                        <div
                                            className={`term-item py-5 border-b border-outline cursor-pointer ${openTerm === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenTerm(item.id)}
                                        >
                                            <div className="term-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                
                                                </div>
                                            </div>
                                            <div className="content-term">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <h4 className="heading4 mt-5">General Provisions</h4>
                                <div className="list mt-3">
                                    {termsData.slice(12, 16).map((item) => (
                                        <div
                                            className={`term-item py-5 border-b border-outline cursor-pointer ${openTerm === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenTerm(item.id)}
                                        >
                                            <div className="term-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                 
                                                </div>
                                            </div>
                                            <div className="content-term">
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