import React from 'react'
import Layout from '../components/layout'
import type { HeadFC } from "gatsby"

export default function TermsAndConditions() {
    return (
        <Layout active="partner">
      <div className="container">
        <div className='pt-5 lg:pt-24 pb-40 px-4'>
            <div className=" pb-8 mb:pb-16">
                <h1 className="text-3xl md:text-7xl text-[#520B1F] font-bold ">catchy statement <br/> about partnership.</h1>
                <div className="pt-10 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante. Praesent orci dui, accumsan ac odio sed, elementum varius turpis. Maecenas rhoncus condimentum mollis. Etiam id rutrum velit. Nam dictum vitae leo ut vehicula. Integer at fringilla velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </div>
                <div className='pt-24'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10'>
                        <div>
                            <img src="/img/logoipsum-logo.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="/img/logoipsum-logo.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="/img/logoipsum-logo.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="/img/logoipsum-logo.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="/img/logoipsum-logo.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="/img/logoipsum-logo.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="/img/logoipsum-logo.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="/img/logoipsum-logo.webp" alt="logo" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Layout>
    )
}
export const Head: HeadFC = () => <title>Partners - Bcart</title>