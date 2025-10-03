'use client'

import React, { useState } from "react";
import LayoutOne from "@/components/Layout/LayoutOne";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');
    const [responseType, setResponseType] = useState(''); // 'success' or 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setLoading(true);
        setResponseMsg('');
        setResponseType('');

        // Validate form data
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setResponseMsg('Please fill in all required fields.');
            setResponseType('error');
            setLoading(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setResponseMsg('Please enter a valid email address.');
            setResponseType('error');
            setLoading(false);
            return;
        }

        try {
            const requestData = {
                name: formData.name.trim(),
                subject: formData.subject.trim(),
                email: formData.email.trim(),
                message: formData.message.trim(),
                type: "General Inquiry"
            };

            console.log('Sending request:', requestData);

            const res = await fetch('https://aapkiyojana.org/abnoq/welcome/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(requestData),
                cache: 'no-cache',
            });

            console.log('Response status:', res.status);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const result = await res.json();
            console.log('Response data:', result);

            if (result.status === 'success') {
                setResponseMsg('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
                setResponseType('success');
                setFormData({ name: '', subject: '', email: '', message: '' });
            } else {
                setResponseMsg(result.message || 'Something went wrong. Please try again.');
                setResponseType('error');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                setResponseMsg('Network error. Please check your internet connection and try again.');
            } else {
                setResponseMsg('Error: ' + (error.message || 'Something went wrong. Please try again.'));
            }
            setResponseType('error');
        }

        setLoading(false);
    };

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <section className="form-contact-us pt-20">
                <div className="container">
                    <div className="flex max-lg:flex-col lg:items-center justify-between gap-y-8">
                        <div className="w-full lg:w-1/2 lg:pr-3">
                            <div className="infor">
                                <div className="heading">
                                    <div className="tag caption1 font-bold uppercase">Contact Us</div>
                                    <h2 className="heading2 mt-4">We're here to support your goals.</h2>
                                    <p className="body2 mt-4">Have a project in mind or need assistance? Our team is here to help you with tailored solutions and expert guidance. Get in touch with us today to discuss your requirements and explore how we can work together to achieve your goals.</p>
                                </div>
                                <div className="list-social flex items-center gap-5 mt-7">
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.facebook.com/abnoqservices" target="_blank">
                                        <i className="icon-facebook"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="http://linkedin.comabout-us/abnoqservices" target="_blank">
                                        <i className="icon-linkedin"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.instagram.com/abnoqservices?igsh=NjM5cWdpdm9yc3Fp" target="_blank">
                                        <i className="icon-instagram text-sm"></i>
                                    </Link>
                                </div>
                                <div className="list-more-infor lg:mt-10 mt-7">
                                    <div className="item flex items-center gap-6 mt-5">
                                        <div className="icon flex items-center justify-center w-12 h-12 bg-blue text-white rounded-full">
                                            <Icon.EnvelopeSimple weight="bold" className="text-xl" />
                                        </div>
                                        <div className="text h-full flex-1 pl-6 border-l border-outline">
                                            <span className="body2">hello@abnoq.com</span>
                                        </div>
                                    </div>
                                    <div className="item flex items-center gap-6 mt-5">
                                        <div className="icon flex items-center justify-center w-12 h-12 bg-blue text-white rounded-full">
                                            <Icon.MapPin weight="bold" className="text-xl" />
                                        </div>
                                        <div className="text h-full flex-1 pl-6 border-l border-outline">
                                            <span className="body2 whitespace-pre-line">
                                                Abnoq Services Private Limited
                                                {"\n"}Delhi | Noida | Kanpur | Ohio (US)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-12">
                            <form className="form-block bg-white rounded-2xl p-10 shadow-xl" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-2">
                                        <input 
                                            className="w-full bg-surface caption1 px-4 py-3 rounded-lg" 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name *" 
                                            required 
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-2">
                                        <input 
                                            className="w-full bg-surface caption1 px-4 py-3 rounded-lg" 
                                            type="text" 
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject" 
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <input 
                                            className="w-full bg-surface caption1 px-4 py-3 rounded-lg" 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address *" 
                                            required 
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <textarea 
                                            className="w-full bg-surface caption1 px-4 py-3 rounded-lg resize-vertical" 
                                            name="message" 
                                            rows="4" 
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message *" 
                                            required
                                            disabled={loading}
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Response Message */}
                                {responseMsg && (
                                    <div className={`mt-6 p-4 rounded-lg text-center ${
                                        responseType === 'success' 
                                            ? 'bg-green-100 text-green-700 border border-green-300' 
                                            : 'bg-red-100 text-red-700 border border-red-300'
                                    }`}>
                                        {responseMsg}
                                    </div>
                                )}

                                <button 
                                    type="submit"
                                    className="button-main lg:mt-10 mt-7 w-full transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed" 
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-location lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container">
                    <h3 className="heading3 text-center"></h3>
                    <p className="body2 text-surface1 text-center mt-4"></p>
                </div>
            </section>
        </LayoutOne>
    );
}