import Image from 'next/image'
import React from 'react'

const HistoryAbout = () => {
    return (
        <section className="history-block lg:py-20 sm:py-12 py-10">
            <div className="container">
                <div className="row flex items-center justify-center">
                <div className="lg:w-5/6 md:w-full"> 
  <div className="heading">
    <h3 className="heading3 text-center">Our Journey Through Time</h3>
    <div className="body2 text-surface1 text-center mt-4">
      Building a Legacy of IT Consulting, Development, and Scalable Solutions
    </div>
  </div>

  <div className="content-main lg:mt-10 mt-7">
    {/* 2018 - Foundation */}
    <div className="flex max-sm:flex-col-reverse sm:items-center justify-between gap-y-6">
      <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
        <div className="text-content sm:text-end">
          <div className="text-surface1">01/2018</div>
          <div className="heading5">The Beginning</div>
          <div className="text-surface1 mt-3">
            Our journey started in 2018 with a vision to deliver innovative IT consulting and development services, focused on helping businesses adopt technology effectively.
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 sm:w-[45%] w-full">
        <div className="bg-img">
          <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="foundation-2018" />
        </div>
      </div>
    </div>

    {/* 2020 - Expansion */}
    <div className="flex max-sm:flex-col sm:items-center justify-between gap-y-6 pt-10">
      <div className="lg:w-2/5 sm:w-[45%] w-full">
        <div className="bg-img">
          <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="expansion-2020" />
        </div>
      </div>
      <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
        <div className="text-content text-start">
          <div className="text-surface1">05/2020</div>
          <div className="heading5">Expanding Services</div>
          <div className="text-surface1 mt-3">
            We expanded into full-scale IT development and support services, delivering scalable digital solutions to meet the growing demands of enterprises and startups.
          </div>
        </div>
      </div>
    </div>

    {/* 2021 - Robust Solutions */}
    <div className="flex max-sm:flex-col-reverse sm:items-center justify-between gap-y-6 pt-10">
      <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
        <div className="text-content sm:text-end">
          <div className="text-surface1">11/2021</div>
          <div className="heading5">Robust IT Solutions</div>
          <div className="text-surface1 mt-3">
            We engineered robust, scalable, and secure IT solutions while strengthening our consulting practice to guide businesses in adopting cutting-edge technologies.
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 sm:w-[45%] w-full">
        <div className="bg-img">
          <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="robust-2021" />
        </div>
      </div>
    </div>

    {/* 2022 - Team & Clients */}
    <div className="flex max-sm:flex-col sm:items-center justify-between gap-y-6 pt-10">
      <div className="lg:w-2/5 sm:w-[45%] w-full">
        <div className="bg-img">
          <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="team-2022" />
        </div>
      </div>
      <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
        <div className="text-content text-start">
          <div className="text-surface1">08/2022</div>
          <div className="heading5">Team & Client Growth</div>
          <div className="text-surface1 mt-3">
            Our dedicated team grew, and we established strong client partnerships by focusing on value-driven, client-centric IT services.
          </div>
        </div>
      </div>
    </div>

    {/* 2023 - Future Ready */}
    <div className="flex max-sm:flex-col-reverse sm:items-center justify-between gap-y-6 pt-10">
      <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
        <div className="text-content sm:text-end">
          <div className="text-surface1">04/2023</div>
          <div className="heading5">Future-Ready Innovation</div>
          <div className="text-surface1 mt-3">
            We continue to innovate with scalable IT consulting, development, and managed services — empowering businesses to stay ahead in a fast-changing digital era.
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 sm:w-[45%] w-full">
        <div className="bg-img">
          <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="future-2023" />
        </div>
      </div>
    </div>
  </div>

  <div className="heading5 text-center mt-10 sm:px-20 px-6 capitalize">
    Thank you for being a part of our journey. Together, we build effective, scalable, and robust IT solutions for the future.
  </div>
</div>

                </div>
            </div>
        </section>
    )
}

export default HistoryAbout
