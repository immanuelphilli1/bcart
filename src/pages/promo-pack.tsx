import React, { useState } from 'react';
import Layout from '../components/layout';
import type { HeadFC } from "gatsby";

export default function PromoPack() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <Layout active="partner">
            <div className="container relative">
                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-70 z-20"
                        onClick={closeSidebar}>
                    </div>
                )}

                {/* Sidebar */}
                <div
                    className={`fixed top-0 right-0 w-72 md:w-96 lg:w-[30rem] bg-white h-full z-20 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className="pt-24 lg:pt-36 px-4">
                        <div className='px-4 font-bold pb-5 text-[#520B1F]'>Package 2</div>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                            <div className='flex justify-center items-center w-full'>
                                <img src="/img/about-1.webp" alt="logo" className="w-24 " />
                            </div>
                            <div className=''>
                                <div className='text-lg font-bold pb-5'>Description</div>
                                <div className='text-sm tracking-wider'>
                                    We’re sorry you couldn’t find what you are looking for. Feel free to tell us what you want and our creatives will make your wishes come true
                                </div>
                                <div className='pt-7 text-xl font-semibold text-[#2B1139]'>
                                    $ 20.00 / month
                                </div>
                            </div>
                        </div>
                        <div className='border-t-2 border-gray-300 mt-10'>
                            <div className='flex items-start gap-4 justify-between w-full text-[#520B1F] px-4 pt-10'>
                                <div className='font-bold text-3xl'>Total</div>
                                <div className='flex flex-col gap-4'>
                                    <div className='font-bold text-3xl text-right'>$ 20.00</div>
                                    {/* checkbox */}
                                    <div className='flex justify-end items-center'>
                                        <input type="checkbox" className="w-5 h-5" />
                                        <label className="ml-2 font-bold text-sm ">Auto renew</label>
                                    </div>
                                    <div className='pt-4'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            onClick={toggleSidebar}>
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-5 lg:pt-24 pb-40 px-4'>
                    <div className="pb-8 mb:pb-16">
                        <h1 className="text-3xl md:text-7xl text-[#520B1F] font-bold ">Promo packs</h1>
                        <div className="pt-10 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className='pt-24'>
                            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                                <div className='flex justify-center items-center w-full md:w-1/2'>
                                    <img src="/img/about-1.webp" alt="logo" className="w-24 md:w-60" />
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <div className='text-xl md:text-3xl font-bold pb-5 text-[#520B1F]'>Package 1</div>
                                    <div className='text-sm tracking-wider'>
                                        This is an introductory text stating who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    </div>
                                    <div className='pt-7'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            onClick={toggleSidebar}>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-24'>
                            <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-4'>
                                <div className='flex justify-center items-center w-full md:w-1/2'>
                                    <img src="/img/about-1.webp" alt="logo" className="w-24 md:w-60" />
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <div className='text-xl md:text-3xl font-bold pb-5 text-[#520B1F]'>Package 2</div>
                                    <div className='text-sm tracking-wider'>
                                        This is an introductory text stating who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    </div>
                                    <div className='pt-7'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            onClick={toggleSidebar}>
                                            Get Started
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

export const Head: HeadFC = () => <title>Promo Pack - Bcart</title>;