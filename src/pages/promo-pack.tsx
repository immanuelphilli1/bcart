import React, { useState } from 'react';
import Layout from '../components/layout';
import type { HeadFC } from "gatsby";

interface Package {
    id: string;
    name: string;
    description: string;
    price: string;
}

export default function PromoPack() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

    const packages: Package[] = [
        {
            id: 'starter-snap',
            name: 'Starter Snap',
            description: 'Perfect for portraits, birthdays, and quick creative sessions, this package is designed for those who want to capture special moments without the fuss. Whether it\'s a solo portrait, a birthday milestone, or a quick creative shoot, this pack offers just the right balance of time and quality.',
            price: 'GHS 350 / $35'
        },
        {
            id: 'pro-storyteller',
            name: 'Pro Storyteller',
            description: 'Designed for those who want more than just a photo — the Pro Storyteller pack is perfect for portraits, birthdays, or any creative shoot where storytelling is key. With extended time and added visuals, it offers a polished, high-impact capture of your moment.',
            price: 'GHS 600 / $60'
        },
        {
            id: 'business-visual',
            name: 'Business Visual Pack',
            description: 'Ideal for SME businesses, content creators, and product sellers, this package is crafted to help you elevate your brand\'s visual identity. Whether you\'re launching a new product, building your online presence, or sharing your creative process, this pack provides the right mix of content to tell your story with impact.',
            price: 'GHS 800 / $80'
        },
        {
            id: 'event-essentials',
            name: 'Event Essentials',
            description: 'Designed to capture life\'s biggest moments in full detail, the Event Essentials is ideal for weddings, parties, and special ceremonies. From candid emotions to key highlights, this package delivers a complete storytelling experience with both photo and video coverage.',
            price: 'GHS 1200 / $100'
        }
    ];

    const handleGetStarted = (packageData: Package) => {
        setSelectedPackage(packageData);
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setSelectedPackage(null);
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
                        <div className='px-4 font-bold pb-5 text-[#520B1F]'>
                            {selectedPackage ? selectedPackage.name : 'Package'}
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                            <div className='flex justify-center items-center w-full'>
                                <img src="/img/about-1.webp" alt="logo" className="w-24 " />
                            </div>
                            <div className=''>
                                <div className='text-lg font-bold pb-5'>Description</div>
                                <div className='text-sm tracking-wider'>
                                    {selectedPackage ? selectedPackage.description : 'Package description will appear here'}
                                </div>
                                <div className='pt-7 text-xl font-semibold text-[#2B1139]'>
                                    {selectedPackage ? selectedPackage.price : 'Price will appear here'}
                                </div>
                            </div>
                        </div>
                        <div className='border-t-2 border-gray-300 mt-10'>
                            <div className='flex items-start gap-4 justify-between w-full text-[#520B1F] px-4 pt-10'>
                                <div className='font-bold text-3xl'>Total</div>
                                <div className='flex flex-col gap-4'>
                                    <div className='font-bold text-3xl text-right'>
                                        {selectedPackage ? selectedPackage.price.split(' / ')[0] : 'GH₵ 0.00'}
                                    </div>
                                    {/* checkbox */}
                                    <div className='flex justify-end items-center'>
                                        <input type="checkbox" className="w-5 h-5" />
                                        <label className="ml-2 font-bold text-sm ">Auto renew</label>
                                    </div>
                                    <div className='pt-4'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            onClick={closeSidebar}>
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
                            <div> At BCARTGH, we understand that visibility is currency in the creative world. That's why we created Promo Packs — tailor-made promotional bundles designed to help creatives grow their audience, boost engagement, and increase sales.
                                Whether you're launching a new photo series, unveiling a product line, or promoting a digital collection, our Promo Packs offer the right mix of exposure, tools, and insights to help you stand out.</div>

                            <div>Promo Packs are more than marketing — they're about elevating your work to the right audience and helping you thrive in a crowded digital space. Because at BCARTGH, your creativity deserves to be celebrated — loudly, proudly, and widely.</div>
                        </div>
                        <div className='pt-24'>
                            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                                <div className='flex justify-center items-center w-full md:w-1/2'>
                                    <img src="/img/about-1.webp" alt="logo" className="w-24 md:w-60" />
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <div className='text-xl md:text-3xl font-bold pb-2 text-[#520B1F]'>Starter Snap</div>
                                    <div className='text-base md:text-lg font-bold pb-5 text-[#520B1F]'>GHS 350 / $35</div>
                                    <div className='text-sm tracking-wider'>
                                        Perfect for portraits, birthdays, and quick creative sessions, this package is designed for those who want to capture special moments without the fuss. Whether it's a solo portrait, a birthday milestone, or a quick creative shoot, this pack offers just the right balance of time and quality.
                                        <ul className='list-disc list-inside pt-5'>
                                            <li className='mb-2'>30-minute session</li>
                                            <li className='mb-2'>5 professionally edited images</li>
                                            <li className='mb-2'>Ideal for individuals, kids, or small groups looking for high-impact, short-format photography.</li>

                                        </ul>

                                        Capture it fast. Keep it forever.
                                    </div>                                    <div className='pt-7'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            onClick={() => handleGetStarted(packages[0])}>
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
                                    <div className='text-xl md:text-3xl font-bold pb-2 text-[#520B1F]'>Pro Storyteller</div>
                                    <div className='text-base md:text-lg font-bold pb-5 text-[#520B1F]'>GHS 600 / $60</div>
                                    <div className='text-sm tracking-wider'>
                                        Designed for those who want more than just a photo — the <strong>Pro Storyteller</strong> pack is perfect for portraits, birthdays, or any creative shoot where storytelling is key. With extended time and added visuals, it offers a polished, high-impact capture of your moment.
                                        <ul className='list-disc list-inside pt-5'>
                                            <li className='mb-2'>1.5 hours session</li>
                                            <li className='mb-2'>15 professionally edited images</li>
                                            <li className='mb-2'>1 minute video reel</li>
                                            <li className='mb-2'>Ideal for individuals, kids, or small groups looking for high-impact, premium photography.</li>

                                        </ul>
                                        High-impact capture of your moment

                                    </div>
                                    <div className='pt-7'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            onClick={() => handleGetStarted(packages[1])}>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-24'>
                            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                                <div className='flex justify-center items-center w-full md:w-1/2'>
                                    <img src="/img/about-1.webp" alt="logo" className="w-24 md:w-60" />
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <div className='text-xl md:text-3xl font-bold pb-2 text-[#520B1F]'>Business Visual Pack</div>
                                    <div className='text-base md:text-lg font-bold pb-5 text-[#520B1F]'>GHS 800 / $80</div>
                                    <div className='text-sm tracking-wider'>
                                    Ideal for SME businesses, content creators, and product sellers, this package is crafted to help you elevate your brand's visual identity. Whether you're launching a new product, building your online presence, or sharing your creative process, this pack provides the right mix of content to tell your story with impact.                                        <ul className='list-disc list-inside pt-5'>
                                            <li className='mb-2'>Includes high-quality product shots</li>
                                            <li className='mb-2'>Behind-the-scenes coverage to showcase your process or team</li>
                                            <li className='mb-2'>Engaging reels for social media that boost reach and connection</li>

                                        </ul>

                                        Perfect for brands that want to look professional, feel authentic, and stay memorable.
                                    </div>                                    <div className='pt-7'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            onClick={() => handleGetStarted(packages[2])}>
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
                                    <div className='text-xl md:text-3xl font-bold pb-2 text-[#520B1F]'>Event Essentials</div>
                                    <div className='text-base md:text-lg font-bold pb-5 text-[#520B1F]'>GHS 1200 / $100</div>
                                    <div className='text-sm tracking-wider'>
                                    Designed to capture life's biggest moments in full detail, the <strong>Event Essentials</strong> is ideal for weddings, parties, and special ceremonies. From candid emotions to key highlights, this package delivers a complete storytelling experience with both photo and video coverage.
                                        <ul className='list-disc list-inside pt-5'>
    <li className='mb-2'>2 hours of event coverage</li>
    <li className='mb-2'>50+ professionally edited photos</li>
    <li className='mb-2'>Full highlight video capturing the best moments</li>
    <li className='mb-2'>Perfect for couples, families, and celebrants who want lasting memories</li>
  </ul>
                                        High-impact capture of your moment

                                    </div>
                                    <div className='pt-7'>
                                        <button
                                            className='bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full'
                                            onClick={() => handleGetStarted(packages[3])}>
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