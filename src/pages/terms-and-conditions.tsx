import React from 'react'
import Layout from '../components/layout'
import type { HeadFC } from "gatsby"

export default function TermsAndConditions() {
    return (
        <Layout active="support">
            <div className="container">
                <div className='pt-5 lg:pt-24 pb-40 px-4'>
                    <div className="pb-8 mb:pb-16">
                        <h1 className="text-3xl md:text-5xl text-[#520B1F] font-bold mb-6">Terms & Conditions</h1>
                        <div className="text-gray-600 text-lg leading-relaxed">
                            Welcome to BCartGH.com. These Terms and Conditions govern your use of our platform. 
                            By accessing or using our services, you agree to be bound by these terms.
                        </div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Section 1 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                By using BCartGH, you affirm that you are at least 18 years old or accessing the site under 
                                the supervision of a legal guardian. If you do not agree to these Terms, please do not use our 
                                services.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">2. User Accounts</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To sell, upload, or purchase content on BCartGH, you must register for an account. You are 
                                responsible for maintaining the confidentiality of your account and password. BCartGH 
                                reserves the right to suspend or terminate accounts that violate these Terms.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">3. Content Upload and Licensing</h2>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h3 className="font-semibold text-[#520B1F] mb-2">Ownership</h3>
                                    <p className="leading-relaxed">Creators retain full copyright over their original work.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#520B1F] mb-2">License to BCartGH</h3>
                                    <p className="leading-relaxed">
                                        By uploading content, you grant BCartGH a non-exclusive, royalty-free, worldwide license 
                                        to display, promote, and distribute your content on the platform.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#520B1F] mb-2">Usage by Buyers</h3>
                                    <p className="leading-relaxed">
                                        Buyers receive a limited, non-exclusive license to use purchased content as described at 
                                        the time of purchase (e.g., personal use, commercial use, editorial use). Reselling, 
                                        redistribution, or claiming ownership of purchased content is prohibited unless otherwise agreed.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">4. Prohibited Content and Conduct</h2>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h3 className="font-semibold text-[#520B1F] mb-2">You may not upload or sell:</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Infringing, defamatory, obscene, or illegal content</li>
                                        <li>AI-generated content without proper disclosure</li>
                                        <li>Stolen or plagiarized material</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#520B1F] mb-2">You also agree not to:</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Violate intellectual property rights</li>
                                        <li>Interfere with platform operations or security</li>
                                        <li>Use the platform for fraudulent purposes</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">5. Transactions and Payments</h2>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h3 className="font-semibold text-[#520B1F] mb-2">Pricing</h3>
                                    <p className="leading-relaxed">
                                        Prices are set by content creators or vendors, subject to platform minimums or commission structures.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#520B1F] mb-2">Payouts</h3>
                                    <p className="leading-relaxed">
                                        Sellers receive payments through Mobile Money, Bank Transfer minus BCartGH's commission.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#520B1F] mb-2">Refunds</h3>
                                    <p className="leading-relaxed">
                                        Due to the digital nature of our products, refunds are granted only in exceptional cases, 
                                        such as duplicate purchases or technical issues.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">6. Platform Fees</h2>
                            <p className="text-gray-700 leading-relaxed">
                                BCartGH charges a commission on each sale made through the platform. This fee is subject 
                                to change, and users will be notified in advance of any updates.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">7. Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed">
                                All trademarks, branding, and site design are owned by BCartGH. Unauthorized use of any 
                                part of the platform, including scraping, copying, or replicating our site design or branding, is 
                                strictly prohibited.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">8. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                BCartGH is not liable for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Content uploaded by users</li>
                                <li>Any loss of revenue or data due to site downtime or cyber attacks</li>
                                <li>Disputes between buyers and sellers; however, we may mediate in good faith</li>
                            </ul>
                        </section>

                        {/* Section 9 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">9. Termination</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to suspend or terminate your access if you violate any of these Terms. In 
                                case of termination, any outstanding balances owed to you will be settled accordingly.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">10. Changes to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                BCartGH may update these Terms at any time. Continued use of the platform constitutes 
                                acceptance of the revised terms. You are encouraged to review them periodically.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">11. Governing Law</h2>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms are governed by the laws of the Republic of Ghana. Any disputes shall be 
                                resolved in Ghanaian courts.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">12. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For questions, support, or disputes, contact us at:
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                                <p className="flex items-center text-gray-700">
                                    <span className="mr-2">📧</span>
                                    <a href="mailto:wearebcart@gmail.com" className="text-[#520B1F] hover:underline">
                                        wearebcart@gmail.com
                                    </a>
                                </p>
                                <p className="text-gray-700">📍 Accra, Ghana</p>
                                <p className="text-gray-700">🌐 www.bcartgh.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>Terms and Conditions - Bcart</title>