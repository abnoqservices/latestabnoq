import { getPostByTitle } from "@/common/postSelect";
import LayoutDetailOne from "@/components/Blog/LayoutDetailOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import BlogTwo from "@/components/Sections/Blog/BlogTwo";
//import blogData from "@/data/blog/data.json";
import { blogData as getBlogData } from "@/data/blog/data"; 

export default async function BlogDetail1({ params: { slug } }) {
    // Decode URL
    const data = await getBlogData();
    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    let foundPost = getPostByTitle(data, cleanedSlug);

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <LayoutDetailOne data={foundPost[0]} />
            <BlogTwo data={data} start={0} limit={5} />
        </LayoutOne>
    );
}
