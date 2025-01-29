import React from 'react'
import Accordion from '../components/accordion'
import Layout from '../components/layout'
import type { HeadFC } from "gatsby"

export default function TechnicalSupport() {
    return (
        <Layout active="support">
      <div className="container">
        <div className='pt-5 lg:pt-24 pb-40 px-4'>
            <div className=" pb-8 mb:pb-16">
                <h1 className="text-3xl md:text-5xl text-[#520B1F] font-bold ">Technical Support</h1>
                <div className="pt-4 text-sm ">Answers to most of thee questions our customers ask</div>
            </div>
            <div>
                <div>
                    <Accordion title='What Items Can I send?' >
                        <div>Your can send a wide range of packages including and not limited to, documents, food items, Fragile items, Animals, Gifts etc.</div>
                    </Accordion>
                </div>
                <div className='pt-2'>
                    <Accordion title='Do I have to pay to list a package?' >
                        <div>You don't have to pay to list a package.</div>
                    </Accordion>
                </div>
                <div className='pt-2'>
                    <Accordion title='What happens when my package is destroyed?' >
                        <div>Awaiting content</div>
                    </Accordion>
                </div>
                <div className='pt-2'>
                    <Accordion title='How safe is the platform?' >
                        <div>LHD-Express ensures safety by verifying all users with their documents</div>
                    </Accordion>
                </div>
            </div>
        </div>
        </div>
        </Layout>
    )
}
export const Head: HeadFC = () => <title>Technical Support - Bcart</title>