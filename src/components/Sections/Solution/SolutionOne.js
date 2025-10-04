import ServiceItem from "@/components/Service/ServiceItem"
import Link from "next/link"
import { convertToSlug } from "@/common/utils"
const SolutionOne = ({ data, start, limit }) => {
    return (
        <section className="section-solution bg-linear lg:mt-20 sm:mt-14 mt-10 lg:py-20 sm:py-14 py-10">
            <div className="container text-center">
                <span className="tag text-label">How we do</span>
                <div className="heading3 text-center mt-3">Our solutions</div>
              
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[30px] gap-5 md:mt-10 mt-6">
                    {data.slice(start, limit).map((item, index) => (
                        <ServiceItem data={item} key={index} type={'style-one'} />
                    ))}
                </div>
                <Link className="mt-10 button-main bg-grey"
                        href={process.env.PUBLIC_URL + "/solutions"}
                        as={
                            process.env.PUBLIC_URL +
                            "/solutions/" 
                        }
                    >
                        View All Solutions
                    </Link>
            </div>
            
        </section>
    )
}

export default SolutionOne
