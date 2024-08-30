import React, { useState } from 'react';
import Layout from '../components/layout';
import type { HeadFC } from "gatsby";

export default function FeaturedCreative() {

    return (
        <Layout active="partner">
            <div className="container relative">
                

                <div className='pt-5 pb-40 px-4'>
                    <div className="pb-8 mb:pb-16">
                        <div className=''>
                            <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-10'>
                                <div className='flex justify-center items-center w-full md:w-1/2'>
                                <div className="grid grid-cols-2 gap-4">
  <div className="flex items-end justify-end">
    <img src="/img/f-1.webp" alt="Image 1" className="w-2/5 rounded-lg h-auto object-cover" />
  </div>
  <div className="masonry-item">
    <img src="/img/f-2.webp" alt="Image 2" className="w-4/5 rounded-lg h-auto object-cover" />
  </div>
  <div className="masonry-item">
    <img src="/img/f-3.webp" alt="Image 3" className="w-full rounded-lg h-auto object-cover" />
  </div>
  <div className="masonry-item">
    <img src="/img/f-4.webp" alt="Image 4" className="w-3/5 rounded-lg h-auto object-cover" />
  </div>
</div>
                                </div>
                                <div className='w-full md:w-1/2'>
                                <div className='text-xl  font-semibold pb-5 text-[#520B1F]'>Featured Creative</div>
                                <h1 className="text-3xl md:text-4xl leading-10 pb-10 text-[#520B1F] font-bold ">This is a quote extracted from<br/> the profile of the featured<br/> creative.</h1>
                                    
                                    <div className='text-sm tracking-wider'>
                                        <p className='pb-5'>This is an introductory text stating who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        <p className='pb-5'>This is an introductory text stating who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        <p className='pb-5'>This is an introductory text stating who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    </div>
                                    <div className='pt-7'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            >
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const Head: HeadFC = () => <title>Featured Creative - Bcart</title>;