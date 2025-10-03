import LayoutOne from "@/components/Layout/LayoutOne";
import LayoutBlogGrid from "@/components/Blog/LayoutBlogGridSolutions";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";

export default function BlogModern() {
    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10'} title={'Our Solutions'} desc={'Empowering Businesses with Secure & Scalable IT Solutions'} />
            <LayoutBlogGrid layout={'style-modern'} type={'style-modern'} pageLimit={10} />
        </LayoutOne>
    );
}
