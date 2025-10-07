import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const BannerOne = () => {
    return (
        <section className={`banner-block bg-blue py-7`}>
            <Marquee>
                <span className={`heading4 text-white uppercase px-[60px]`}>Experience Seamless IT Solutions</span>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[50px]' />
                <span className={`heading4 text-white uppercase px-[60px]`}>Request IT Consultation</span>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[50px]' />
                <span className={`heading4 text-white uppercase px-[60px]`}>Experience Seamless IT Solutions</span>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[50px]' />
                <span className={`heading4 text-white uppercase px-[60px]`}>Request IT Consultation</span>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[50px]' />
                <span className={`heading4 text-white uppercase px-[60px]`}>Experience Seamless IT Solutions</span>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[50px]' />
                <span className={`heading4 text-white uppercase px-[60px]`}>Request IT Consultation</span>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[50px]' />
            </Marquee>
        </section>
    )
}


export default BannerOne
