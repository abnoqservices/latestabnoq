'use client'

import React, { useState } from 'react'
import Link from "next/link";
import LayoutOne from "@/components/Layout/LayoutOne";
import * as Icon from "@phosphor-icons/react/dist/ssr";

// JSON Dataset for Free Consultation Features
const consultationData = {
    header: {
        tag: "Get AI-Powered Growth Solutions",
        title: "Free consultation - discover IT solutions for your business",
        description: "Unlock the full potential of your business with our free consultation. Our expert team will assess your IT needs, recommend tailored solutions, and chart a path to success. Book your consultation now and take the first step towards empowering your business with cutting-edge technology.",
        contactEmail: "2hi.avitex@gmail.com"
    },
    features: [
        {
            id: 1,
            text: "Confirmation of appointment details"
        },
        {
            id: 2,
            text: "Research and preparation by the IT services company"
        },
        {
            id: 3,
            text: "Consultation to discuss technology solutions"
        },
        {
            id: 4,
            text: "Needs assessment for tailored solutions"
        },
        {
            id: 5,
            text: "Presentation of proposed solutions"
        },
        {
            id: 6,
            text: "Project execution and ongoing support"
        },
        {
            id: 7,
            text: "Follow-up to evaluate effectiveness and satisfaction"
        }
    ]
};


export default function AIGrowthFAQs() {
    const [openFaq, setOpenFaq] = useState()

    const handleOpenFaq = (id) => {
        setOpenFaq(prevId => prevId === id ? null : id)
    }

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <section className="form-contact-us lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container">
                    <div className="flex max-lg:flex-col justify-between gap-y-8">
                        <div className="w-full lg:w-2/3 lg:pr-12">
                            <div className="lg:flex items-center justify-between">
                                <div className="content-main w-full xl:w-8/12 lg:w-1/2">
                                    <span className="text-label tag text-white bg-blue">{consultationData.header.tag}</span>
                                    <h3 className="heading3 mt-3">{consultationData.header.title}</h3>
                                    <p className="desc mt-6">{consultationData.header.description}</p>
                                    
                                    <div className="list-features mt-4 pb-6 border-b border-line">
                                        {consultationData.features.map((feature) => (
                                            <div key={feature.id} className="item flex items-center mt-2">
                                                <Icon.Check className='text-xl' />
                                                <span className="body2 pl-3">{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="flex items-center mt-6">
                                        <Icon.Envelope className="text-xl" />
                                        <span className="body2 pl-3">{consultationData.header.contactEmail}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/3">
                            <form className="form-block bg-white rounded-2xl p-8 shadow-xl">
                                <h4 className="heading4 text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Get AI-Powered Growth Solutions</h4>
                                <p className="text-surface1 mt-2">Transform Your Business with Smart AI Technology</p>
                                <div className="list-input mt-5">
                                    <div className="">
                                        <label htmlFor="name" className="caption1 text-surface1">Full Name</label>
                                        <input className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline focus:border-blue-500 transition-colors" name="name" type="text" placeholder="Your Full Name" required />
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="email" className="caption1 text-surface1">Business Email</label>
                                        <input className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline focus:border-blue-500 transition-colors" name="email" type="email" placeholder="your@company.com" required />
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="company" className="caption1 text-surface1">Company Name</label>
                                        <input className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline focus:border-blue-500 transition-colors" name="company" type="text" placeholder="Your Company" required />
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="select" className="caption1 text-surface1">Which AI Solution Interests You?</label>
                                        <div className="select-block mt-2 relative">
                                            <select className="w-full pl-4 pr-12 py-3 border border-outline rounded-lg focus:border-blue-500 transition-colors" name="select">
                                                <option value="AI Analytics & Insights">AI Analytics & Insights</option>
                                                <option value="Automated Customer Service">Automated Customer Service</option>
                                                <option value="Predictive Marketing">Predictive Marketing</option>
                                                <option value="Business Process Automation">Business Process Automation</option>
                                                <option value="AI-Powered CRM">AI-Powered CRM</option>
                                                <option value="Custom AI Development">Custom AI Development</option>
                                                <option value="AI Strategy Consultation">AI Strategy Consultation</option>
                                            </select>
                                            <Icon.CaretDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="message" className="caption1 text-surface1">Tell us about your growth goals</label>
                                        <textarea className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline focus:border-blue-500 transition-colors" name="message" rows="4" placeholder="Describe your business challenges and growth objectives..." required></textarea>
                                    </div>
                                </div>
                                <button className="button-main w-full text-center lg:mt-5 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all">Get AI Growth Strategy</button>
                                <p className="text-xs text-gray-500 mt-3 text-center">Free consultation • No commitment required</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutOne>
    );
}