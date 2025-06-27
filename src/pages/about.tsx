import React from 'react'
import Layout from '../components/layout'
import type { HeadFC } from "gatsby"

export default function About() {
    return (
        <Layout active="about">
      <div className="container">
        <div className='pt-5 lg:pt-24 pb-40 px-4'>
            <div className=" pb-8 mb:pb-16">
                <h1 className="text-3xl md:text-7xl text-[#520B1F] font-bold ">BCARTGH - 
                <br/> Limitless CREATIVITY
                </h1>
                <div className='pt-10 pb-2'><img src="/img/banner-2.webp" alt="logo" className="w-full h-full rounded-3xl" /></div>
                <div className="pt-10 text-sm ">
                At BCARTGH, we believe that creativity is not just an expression — it’s a movement. Our mission is to drive transformation through technology by building a dynamic digital platform that empowers photographers, designers, artists, and content creators across Africa and beyond.

We are not just a marketplace — we are a community and catalyst for creative growth. Whether you’re capturing the essence of everyday life, designing captivating visuals, or telling immersive digital stories, BCARTGH provides the tools, exposure, and support to help you succeed.

From seamless content showcasing and direct-to-audience selling, to brand collaborations and monetization features, we exist to make sure your art is seen, valued, and rewarded. Creativity knows no bounds, and at BCARTGH, neither do you.
                    
                    At BCARTGH, we believe creativity knows no bounds. Our platform empowers photographers, designers, artists, and content creators to showcase, sell, and thrive. Whether you're capturing everyday beauty or building visual stories, BCART is your space to be seen, supported, and celebrated.

                </div>
            </div>
            {/* section 2 */}
            <div className='pt-24'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 xl:gap-20'>
                    <div>
                        <div className='flex justify-center pb-24'><img src="/img/about-1.webp" alt="logo" className="w-48" /></div>
                        <div className=''>
                            <div className='text-xl md:text-3xl font-bold pb-5 text-[#520B1F]'>Our Mission</div>
                            <div className='text-sm tracking-wider'>
                            <div className='mb-4'>1. Our mission is to amplify Ghana’s visual & creative talent—making professional photography and videography accessible to businesses and individuals.</div>

<div className='mb-4'>2. Enriching lives globally through our carefully curated board and card games</div>
</div>
                        </div>
                        <div className=' pt-10 lg:pt-16'>
                            <div className='text-xl md:text-3xl font-bold pb-5 text-[#520B1F]'>Our Vision</div>
                            <div className='text-sm tracking-wider'>
                            We envision a creative ecosystem where talented photographers, videographers, and game creators from Ghana and beyond are discovered, supported, and celebrated. Through Bcart, we aim to redefine how Africa’s stories are told—authentically, beautifully, and globally accessible.</div>
                        </div>
                    </div>
                    <div className='lg:col-span-2'>
                    <div className='lg:px-32'>
                            <div className='text-xl md:text-3xl font-bold pb-5 text-[#520B1F]'>Our Dedication</div>
                            <div className='text-sm tracking-wider'>
                            At BCARTGH, we believe creativity knows no bounds. Our platform empowers photographers, designers, artists, and content creators to showcase, sell, and thrive. Whether you're capturing everyday beauty or building visual stories, BCART is your space to be seen, supported, and celebrated.

</div>
                        </div>
                        <div className='flex justify-center pt-24'><img src="/img/about-2.webp" alt="logo" className=" rounded-3xl" /></div>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className='pt-24'>
                <div>
                    <div className='text-xl md:text-3xl font-bold pb-60 text-[#520B1F]'>Meet the team</div>
                    <div className='flex flex-wrap md:flex-nowrap justify-between items-end gap-y-40 md:gap-y-6 gap-x-6'>
                        <div className='bg-[#520B1F] bg-opacity-20 rounded-3xl w-full p-6 flex flex-col items-center relative'>
                            <div className='absolute bottom-40'>
                                <img src="/img/team-1.webp" alt="logo" className="w-full h-full" />
                            </div>
                            <div className='font-bold text-lg pt-44 text-[#373F41]'>Benita Copperfield</div>
                            <div className=' text-lg pt-5 pb-4 capitalize text-[#373F41]'>CEO & Lead creative
                            </div>
                        </div>
                        <div className='bg-[#520B1F] bg-opacity-20 rounded-3xl w-full p-6 flex flex-col items-center relative'>
                            <div className='absolute bottom-40'>
                                <img src="/img/team-2.webp" alt="logo" className="w-full h-full" />
                            </div>
                            <div className='font-bold text-lg pt-44 text-[#373F41]'>Xane Asiamah</div>
                            <div className=' text-lg pt-5 pb-4 capitalize text-[#373F41]'>lead Marketer & head OF Creative arts
                            </div>
                        </div>
                        <div className='bg-[#520B1F] bg-opacity-20 rounded-3xl w-full p-6 flex flex-col items-center relative'>
                            <div className='absolute bottom-40'>
                                <img src="/img/team-3.webp" alt="logo" className="w-full h-full" />
                            </div>
                            <div className='font-bold text-lg pt-44 text-[#373F41]'>Kafui Fialor</div>
                            <div className=' text-lg pt-5 pb-4 capitalize text-[#373F41]'>lead Developer & head OF production
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            {/* section 4 */}
            <div className='pt-24'>
                <div>
                    <div className='text-xl md:text-3xl font-bold text-[#520B1F]'>Achievements</div>
                </div>
                <div className='pt-12'>
                    <div className='flex flex-wrap justify-between gap-6'>
                        <img src="/img/ach-1.webp" alt="logo" className="h-20" />
                        <img src="/img/ach-2.webp" alt="logo" className="h-20" />
                        <img src="/img/ach-3.webp" alt="logo" className="h-20" />
                        <img src="/img/ach-4.webp" alt="logo" className="h-20" />
                        <img src="/img/ach-5.webp" alt="logo" className="h-20" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Layout>
    )
}
export const Head: HeadFC = () => <title>About - Bcart</title>