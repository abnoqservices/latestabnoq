import React from 'react'
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link"
import { convertToSlug } from "@/common/utils"

const ServiceOne = ({ data, start, limit,bground }) => {
    return (
        
        <section className="service-block  pt-10">
                 <section className="about-block  sm:pt-7  sm:pb-10 pb-8">
            <div className="container">
                <div className="flex gap-y-3 items-center justify-between max-lg:flex-wrap">
                    <div className="w-full xl:w-5/12 lg:w-6/12">
                        <h3 className="heading3">Your Trusted Partner for Smart Business Growth </h3>
                    </div>
                    <div className="w-full lg:w-6/12">

                        <div className="desc">At AbnoQ, we’re more than consultants-we’re growth allies. We combine AI-powered solutions, strategy, and innovation to help businesses transform challenges into opportunities and scale without limits.</div>

                        
                        <Link className="text-button-sm inline-block mt-4 border-b-2 border-black" href="about-us">Our Company</Link>
                    </div>
                </div>
            </div>
        </section>
        <section class="cta-block">
            <div class="container">
                <div class="flex gap-y-4 gap-6 items-center justify-between flex-wrap max-lg:flex-col max-lg:justify-center bg-linear-blue py-7 px-10 rounded-2xl overflow-hidden">
                    <h4 class="text-white heading4 max-lg:text-center">Looking for Smarter AI-Powered Growth Solutions?</h4>

                    <a class="button-main" href="/pages/growthcheck"> Get Growth Check</a>


                    </div>
                    </div>
                </section>
        <div className="container">
            
            <div className="list-values grid xl:grid-cols-4 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-6">
            <div className={`item bg-white p-8 rounded-[20px] h-full ${bground}`}>

                    <Icon.Users className="text-blue text-6xl" />
                    <div className="heading5 fw-600 mt-6">Customer Centricity</div>
                    <div className="text-surface1 mt-3">We put clients first-listening to their needs, understanding challenges, and delivering tailored solutions that drive measurable success.
</div>
                </div>
                <div className={`item bg-white p-8 rounded-[20px] h-full ${bground}`}>
                    <Icon.Trophy className="text-blue text-6xl" />
                    <div className="heading5 fw-600 mt-6">Quality Assurance</div>
                    <div className="text-surface1 mt-3">Our commitment to quality is uncompromising. Every service undergoes rigorous testing to ensure reliability, performance, and value.</div>
                </div>
                <div className={`item bg-white p-8 rounded-[20px] h-full  ${bground}`}>
                    <Icon.Crosshair className="text-blue text-6xl" />
                    <div className="heading5 fw-600 mt-6">Client Focus</div>
                    <div className="text-surface1 mt-3">Clients are at the center of everything we do. From tailored strategies to ongoing support, their success is our success.</div>
                </div>
                <div className={`item bg-white p-8 rounded-[20px] h-full ${bground}`}>
                    <Icon.ShieldCheck className="text-blue text-6xl" />
                    <div className="heading5 fw-600 mt-6">Integrity Always</div>
                    <div className="text-surface1 mt-3">We work with honesty, transparency, and fairness, building lasting partnerships based on trust and shared growth.</div>
                </div>
            </div>
        </div>
        <div className="award-block lg:mt-20 sm:mt-14 mt-10">
            <div className="container xl:flex gap-8">
            <div className="heading4 flex-shrink-0">Global Certifications &<br className='max-sm:hidden' />Expertise</div>
                <div className="w-full max-xl:mt-7">
                    <div className="list-award flex items-center xl:justify-end max-sm:flex-wrap sm:gap-14 gap-8">

                      
                        <div className="bg-img">
                            <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/abnoq-google-cloude.png" alt="award/abnoq google cloude" />
                        </div>
                        <div className="bg-img">
                            <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/meta.png" alt="award/meta" />
                        </div>
                        <div className="bg-img">
                            <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/AbnoQ_Content_experience_uberflip.png" alt="award/AbnoQ Content experience uberflip" />
                        </div>
                        <div className="bg-img">
                            <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/AbnoQ_Business_Marketing_strategy.png" alt="award/bnoQ Business Marketing strategy" />
                        </div>
                        <div className="bg-img">
                            <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/AbnoQ_AWS_Cloud_Practitioner.png" alt="award/AbnoQ AWS Cloud Practitioner.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    </section>
    )
}

export default ServiceOne
