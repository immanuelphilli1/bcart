import React from 'react'
import Layout from '../components/layout'
import type { HeadFC } from "gatsby"

export default function About() {
    return (
        <Layout active="about">
      <div className="container">
        <div className='pt-5 lg:pt-24 pb-40 px-4'>
            <div className=" pb-8 mb:pb-16">
                <h1 className="text-3xl md:text-7xl text-[#520B1F] font-bold ">this is the <br/> corporate brand tagline.</h1>
                <div className='pt-10 pb-2'><img src="/img/banner-2.webp" alt="logo" className="w-full h-full rounded-3xl" /></div>
                <div className="pt-10 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
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
                            This is an introductory text stating who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </div>
                        </div>
                        <div className=' pt-10 lg:pt-16'>
                            <div className='text-xl md:text-3xl font-bold pb-5 text-[#520B1F]'>Our Vision</div>
                            <div className='text-sm tracking-wider'>
                            This is an introductory text stating who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2'>
                    <div className='lg:px-32'>
                            <div className='text-xl md:text-3xl font-bold pb-5 text-[#520B1F]'>Our Mission</div>
                            <div className='text-sm tracking-wider'>
                            This is an introductory text stating who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
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
                    <div className='flex justify-between items-end gap-6'>
                        <div className='bg-[#520B1F] bg-opacity-20 rounded-3xl w-full p-6 flex flex-col items-center relative'>
                            <div className='absolute bottom-40'>
                                <img src="/img/team-1.webp" alt="logo" className="w-full h-full" />
                            </div>
                            <div className='font-bold text-lg pt-44 text-[#373F41]'>Firstname Lastname</div>
                            <div className=' text-lg pt-5 pb-4 text-[#373F41]'>Position</div>
                        </div>
                        <div className='bg-[#520B1F] bg-opacity-20 rounded-3xl w-full p-6 flex flex-col items-center relative'>
                            <div className='absolute bottom-40'>
                                <img src="/img/team-2.webp" alt="logo" className="w-full h-full" />
                            </div>
                            <div className='font-bold text-lg pt-44 text-[#373F41]'>Firstname Lastname</div>
                            <div className=' text-lg pt-5 pb-4 text-[#373F41]'>Position</div>
                        </div>
                        <div className='bg-[#520B1F] bg-opacity-20 rounded-3xl w-full p-6 flex flex-col items-center relative'>
                            <div className='absolute bottom-40'>
                                <img src="/img/team-3.webp" alt="logo" className="w-full h-full" />
                            </div>
                            <div className='font-bold text-lg pt-44 text-[#373F41]'>Firstname Lastname</div>
                            <div className=' text-lg pt-5 pb-4 text-[#373F41]'>Position</div>
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