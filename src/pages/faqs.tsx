import React from 'react'
import Accordion from '../components/accordion'
import Layout from '../components/layout'
import type { HeadFC } from "gatsby"

export default function FAQ() {
    return (
        <Layout active="support">
            <div className="container">
                <div className='pt-5 lg:pt-24 pb-40 px-4'>
                    <div className=" pb-8 mb:pb-16">
                        <h1 className="text-3xl md:text-5xl text-[#520B1F] font-bold ">Frequently Asked Questions (FAQs)</h1>
                        <div className="pt-4 text-sm ">Answers to most of thee questions our customers ask</div>
                    </div>
                    <div>
                        <div>
                            <Accordion title='Who owns the content uploaded to BCartGH?' >
                                <div>Creators retain full copyright over their work. BCartGH does not claim
                                    ownership but is licensed to market and sell it. </div>
                            </Accordion>
                        </div>
                        <div className='pt-2'>
                            <Accordion title='What license do buyers receive?' >
                                <div>Buyers receive a limited, non-exclusive license based on the type of content
                                    (e.g., personal use, editorial, or commercial), which is defined at the point of
                                    sale.</div>
                            </Accordion>
                        </div>
                        <div className='pt-2'>
                            <Accordion title='Can buyers resell content? ' >
                                <div>No. Reselling, sublicensing, or redistributing purchased content without
                                    explicit permission is prohibited. </div>
                            </Accordion>
                        </div>
                        <div className='pt-2'>
                            <Accordion title='What is the difference between commercial and editorial use?' >
                                <div>Commercial use allows the content to be used in ads, products, and monetized
                                    media. Editorial use is limited to news, education, and non-commercial
                                    publications. </div>
                            </Accordion>
                        </div>

                        <div>
                            <Accordion title='Can creators offer exclusive licenses? ' >
                                <div>Yes. Creators can negotiate exclusive rights with buyers directly or through
                                    custom license options listed on BCartGH. </div>
                            </Accordion>
                        </div>
                        <div className='pt-2'>
                            <Accordion title='What happens if someone uses content without permission? ' >
                                <div>Unauthorized use violates copyright law. BCartGH supports creators in
                                    reporting and removing infringing use. </div>
                            </Accordion>
                        </div>
                        <div className='pt-2'>
                            <Accordion title='How do I credit the creator? ' >
                                <div>If attribution is required, buyers must clearly credit the creator by name or
                                    username, as specified on the content page. </div>
                            </Accordion>
                        </div>
                        <div className='pt-2'>
                            <Accordion title='Where can I get help? ' >
                                <div>Contact wearebcart@gmail.com with any licensing questions or disputes.  </div>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const Head: HeadFC = () => <title>FAQs - Bcart</title>
