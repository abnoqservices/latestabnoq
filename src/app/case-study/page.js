import LayoutOne from "@/components/Layout/LayoutOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import testimonialData from "@/data/testimonial/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialEight";
import caseStudyData from "@/data/case-study/data.json"
import { getCaseStudyData } from "@/data/case-study/data";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem"
import caseData from '@/data/case-study/data.json'
import OutstandingCaseStudies from "@/components/HeadingSubpage/OutstandingCaseStudies";

export default async function CaseStudyPageOne() {
    const caseStudyData = await getCaseStudyData(); // ✅ different name
    const data = caseStudyData[3]; 

    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8'} title={"Success Stories"} desc={"From Clients Who Achieved Excellence with Abnoq"} />
                <OutstandingCaseStudies data={caseData} showDesc />
                <BrandOne classname={'lg:pt-20 md:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8 style-subpage'} />
                <section className="list-case-studies">
                    <div className="container">
                        <div className="content lg:py-20 sm:py-14 py-10 border-t border-outline">
                            <h3 className="heading3 text-center">Our Impact in Action</h3>
                            <p className="text-center mt-3">Case studies that showcase the agency's approach, results for specific clients.</p>
                            <div className="list section-stories grid xl:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-6 lg:mt-10 mt-7">
                                {caseStudyData.slice(0, 9).map((item) => (
                                    <CaseStudyItem key={item.id} data={item} style={'style-six'} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <TestimonialOne classname={'style-service sm:py-[60px] max-sm:pb-10 sm:rounded-3xl rounded-t-full rounded-b-3xl'} data={testimonialData} />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
