import React, { useState } from 'react';
import Layout from '../components/layout';
import type { HeadFC } from "gatsby";
import ProfileSettings from '../components/settings/profileSettings';
import PromoPacks from '../components/settings/promoPacks';
import CreativeHiring from '../components/settings/creativeHiring';

export default function Settings() {
    const [active, setActive] = useState("profile");

    return (
        <Layout active="partner">
            <div className="container relative">
                

                <div className='pt-5 pb-40 px-4'>
                    <div className='flex flex-col md:flex-row gap-4 lg:gap-20 items-start'>
                        <div className='flex flex-col gap-4 md:gap-10 justify-center items-center min-w-max'>
                        <div className='font-bold text-[#520B1F] md:pt-10'>Account Settings</div>
                        <div className='w-full'>
                                        <button
                                            className={`${active === "profile" ? " text-white bg-[#520B1F] " : "text-[#520B1F] bg-white hover:text-white hover:bg-[#520B1F] "} border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full`}
                                            onClick={() => setActive("profile")}>
                                            Profile
                                        </button>
                                    </div>
                                    <div className='w-full'>
                                        <button
                                            className={`${active === "creative" ? " text-white bg-[#520B1F] " : "text-[#520B1F] bg-white hover:text-white hover:bg-[#520B1F]"} border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full`}
                                            onClick={() => setActive("creative")}>
                                            Creatives & Hiring
                                        </button>
                                    </div>
                                    <div className='w-full'>
                                        <button
                                            className={`${active === "promo" ? " text-white  bg-[#520B1F] " : "text-[#520B1F] bg-white hover:text-white hover:bg-[#520B1F]"} border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full`}
                                            onClick={() => setActive("promo")}>
                                            Promo Packs
                                        </button>
                                    </div>
                        </div>
                        <div className='w-full bg-opacity-30 rounded-2xl md:min-h-[40rem] bg-[#520B1F]'>
                           {active === "profile" && <ProfileSettings /> }
                           {active === "creative" && <CreativeHiring /> }
                           {active === "promo" && <PromoPacks /> }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const Head: HeadFC = () => <title>Settings - Bcart</title>;