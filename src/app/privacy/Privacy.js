'use client'

import React, { useState } from 'react'
import Link from "next/link";
import LayoutOne from "@/components/Layout/LayoutOne";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const privacyData = [
    {
        id: 1,
        title: "Information We Collect",
        desc: "We collect personal information such as name, email address, phone number, company details, and project requirements when you engage our IT services. We also collect technical data including IP addresses, browser information, and usage analytics to improve our services."
    },
    {
        id: 2,
        title: "How We Use Your Information",
        desc: "Your information is used to provide IT services, communicate about projects, send invoices, provide technical support, improve our services, and comply with legal obligations. We may also use anonymized data for research and development purposes."
    },
    {
        id: 3,
        title: "Data Collection Methods",
        desc: "We collect information through our website forms, email communications, project management tools, support tickets, client meetings, and automated technologies like cookies and server logs during your interaction with our digital platforms."
    },
    {
        id: 4,
        title: "Legal Basis for Processing",
        desc: "We process your data based on contract performance, legitimate business interests, legal compliance, and consent where required. For EU residents, we comply with GDPR requirements and provide clear legal basis for all data processing activities."
    },
    {
        id: 5,
        title: "Data Sharing and Disclosure",
        desc: "We do not sell your personal data. We may share information with trusted third-party service providers, legal authorities when required by law, and business partners with your explicit consent. All third parties are bound by strict confidentiality agreements."
    },
    {
        id: 6,
        title: "Data Security Measures",
        desc: "We implement industry-standard security measures including encryption, secure servers, access controls, regular security audits, and employee training. Our infrastructure follows SOC 2 Type II standards and ISO 27001 best practices for information security."
    },
    {
        id: 7,
        title: "Data Retention Policy",
        desc: "We retain personal data for as long as necessary to provide services, typically 7 years for business records. Project data is retained for 3 years post-completion. Marketing data is kept until you opt out or withdraw consent."
    },
    {
        id: 8,
        title: "Your Privacy Rights",
        desc: "You have rights to access, correct, delete, restrict processing, data portability, and withdraw consent. EU residents have additional GDPR rights. Contact our privacy team at privacy@abnoq.com to exercise these rights or raise concerns."
    },
    {
        id: 9,
        title: "Cookies and Tracking",
        desc: "We use essential cookies for website functionality, analytics cookies to understand usage patterns, and marketing cookies with your consent. You can control cookie preferences through your browser settings or our cookie management tool."
    },
    {
        id: 10,
        title: "Third-Party Services",
        desc: "We integrate with trusted third-party services like cloud providers (AWS, Google Cloud), analytics tools (Google Analytics), CRM systems, and communication platforms. Each service has its own privacy policy governing their data handling practices."
    },
    {
        id: 11,
        title: "International Data Transfers",
        desc: "We may transfer data internationally to provide our services. All transfers are protected by appropriate safeguards including Standard Contractual Clauses, adequacy decisions, or certification schemes as required by applicable law."
    },
    {
        id: 12,
        title: "Marketing Communications",
        desc: "We send marketing emails about our IT services, industry insights, and company updates only with your consent. You can unsubscribe anytime using the link in emails or by contacting us directly. We respect your communication preferences."
    },
    {
        id: 13,
        title: "Data Breach Response",
        desc: "In the unlikely event of a data breach affecting your personal information, we will notify you and relevant authorities within 72 hours as required by law. We maintain an incident response plan and conduct regular security assessments."
    },
    {
        id: 14,
        title: "Children's Privacy",
        desc: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information promptly."
    },
    {
        id: 15,
        title: "Privacy Policy Updates",
        desc: "We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of material changes via email or website notice. The updated policy becomes effective upon posting."
    },
    {
        id: 16,
        title: "Contact Our Privacy Team",
        desc: "For privacy-related questions, concerns, or to exercise your rights, contact our Data Protection Officer at privacy@abnoq.com or write to us at our registered office. We respond to privacy inquiries within 5 business days."
    }
];

export default function PrivacyPolicy() {
    const [openPrivacy, setOpenPrivacy] = useState()

    const handleOpenPrivacy = (id) => {
        setOpenPrivacy(prevId => prevId === id ? null : id)
    }

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <section className="privacy-policy-section lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container">
                    <div className="flex max-lg:flex-col justify-between gap-y-8">
                        
                        <div className="w-full lg:w-2/2 lg:pl-12">
                            <div className="list-privacy bg-white py-8 px-10 rounded-2xl shadow-xl">
                            <h4 className="heading4">Privacy Policy</h4>
                                <p className="text-surface1 mt-2">How We Protect Your Personal Data</p>
                                <div className="list mt-3">
                                    {privacyData.slice(0, 5).map((item) => (
                                        <div
                                            className={`privacy-item py-5 border-b border-outline cursor-pointer ${openPrivacy === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenPrivacy(item.id)}
                                        >
                                            <div className="privacy-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                               
                                            </div>
                                            <div className="content-privacy">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <h4 className="heading4 mt-5">Data Protection & Security</h4>
                                <div className="list mt-3">
                                    {privacyData.slice(5, 11).map((item) => (
                                        <div
                                            className={`privacy-item py-5 border-b border-outline cursor-pointer ${openPrivacy === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenPrivacy(item.id)}
                                        >
                                            <div className="privacy-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                               
                                            </div>
                                            <div className="content-privacy">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <h4 className="heading4 mt-5">Your Rights & Contact</h4>
                                <div className="list mt-3">
                                    {privacyData.slice(11, 16).map((item) => (
                                        <div
                                            className={`privacy-item py-5 border-b border-outline cursor-pointer ${openPrivacy === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenPrivacy(item.id)}
                                        >
                                            <div className="privacy-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                   
                                                </div>
                                            </div>
                                            <div className="content-privacy">
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