import React from 'react'
import Layout from '../components/layout'
import type { HeadFC } from "gatsby"

export default function PrivacyPolicy() {
    return (
        <Layout active="support">
            <div className="container">
                <div className='pt-5 lg:pt-24 pb-40 px-4'>
                    <div className="pb-8 mb:pb-16">
                        <h1 className="text-3xl md:text-5xl text-[#520B1F] font-bold mb-6">Privacy Policy</h1>
                        <div className="text-gray-600 text-lg leading-relaxed">
                            BCartGH.com is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                            use, and protect your information when you use our platform.
                        </div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Section 1 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">1. Information We Collect</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect the following information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li><strong>Personal Information:</strong> Name, email address, phone number, payment details, etc.</li>
                                <li><strong>Account Information:</strong> Username, password, uploads, purchases</li>
                                <li><strong>Usage Data:</strong> IP address, browser type, device, pages visited, etc.</li>
                                <li><strong>Cookies:</strong> We use cookies to improve user experience and analyze traffic</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use your information to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Provide and improve our services</li>
                                <li>Process transactions and payouts</li>
                                <li>Communicate updates, promotions, and support</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">3. Sharing Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We do not sell your data. We may share data with:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Payment processors (e.g., Mobile Money)</li>
                                <li>Third-party service providers (for hosting, analytics)</li>
                                <li>Authorities, if required by law</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">4. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement security measures to protect your data, but no system is 100% secure. You are 
                                responsible for keeping your password confidential.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">5. Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You can:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Access, update, or delete your data</li>
                                <li>Opt out of marketing emails</li>
                                <li>Request data export</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">6. Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                BCartGH does not knowingly collect data from children under 13. If we discover such data, it 
                                will be deleted.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">7. Changes to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this policy. Changes are effective upon posting.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#520B1F] mb-4">8. Contact</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For questions or data requests:
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

export const Head: HeadFC = () => <title>Privacy Policy - Bcart</title>