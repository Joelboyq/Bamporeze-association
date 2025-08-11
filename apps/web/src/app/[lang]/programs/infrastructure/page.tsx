import Image from "next/image";
import Link from "next/link";

export default async function InfrastructureProgram() {


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
                <Image
                    src="/images/cassiterite.jpg"
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Community Infrastructure Program"
                    className="brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                Infrastructure Development
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Community Infrastructure
                                <span className="block text-green-200">Program</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                                Building sustainable foundations for thriving communities through essential infrastructure development and long-term planning.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg transition-all duration-300">
                                    Download Program Report
                                </button>
                                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-lg px-8 py-4 text-lg border border-white/30 transition-all duration-300">
                                    Watch Impact Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Building Foundations for
                                <span className="block text-green-600">Sustainable Growth</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Our Community Infrastructure Program focuses on creating lasting physical foundations that enable communities to thrive. We believe that access to basic infrastructure is fundamental to breaking the cycle of poverty and vulnerability.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Through strategic partnerships with local governments, engineering firms, and community leaders, we develop and implement infrastructure projects that address the most critical needs while ensuring long-term sustainability and community ownership.
                            </p>
                            
                            {/* Key Features */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Community-Led Design</h4>
                                        <p className="text-gray-600">All projects are designed with direct input from community members to ensure they meet real needs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Sustainable Materials</h4>
                                        <p className="text-gray-600">We prioritize locally-sourced, eco-friendly materials that reduce environmental impact.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Long-term Maintenance</h4>
                                        <p className="text-gray-600">We provide training and support for ongoing maintenance to ensure infrastructure longevity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <Image
                                src="/images/about_pic_1.jpg"
                                width={600}
                                height={600}
                                alt="Community Infrastructure Development"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm">Years Building</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Components */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Infrastructure
                            <span className="block text-green-600">Components</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We focus on four critical infrastructure areas that form the foundation of community development and resilience.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Water Systems</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Clean water access through wells, purification systems, and distribution networks that serve entire communities.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Solutions</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Renewable energy installations including solar panels, wind turbines, and energy-efficient lighting systems.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Centers</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Multi-purpose facilities for education, healthcare, community meetings, and emergency shelter during disasters.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Road improvements, bridges, and transportation networks that connect communities to essential services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Statistics */}
            <section className="py-16 lg:py-20 bg-green-600">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Infrastructure
                            <span className="block text-green-200">Impact</span>
                        </h2>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Our infrastructure projects have created lasting change across multiple communities, providing essential services and improving quality of life.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">25+</div>
                            <div className="text-green-100 text-lg">Communities Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">150+</div>
                            <div className="text-green-100 text-lg">Infrastructure Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">50K+</div>
                            <div className="text-green-100 text-lg">People Impacted</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">95%</div>
                            <div className="text-green-100 text-lg">Project Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Success
                            <span className="block text-green-600">Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real stories from communities that have been transformed through our infrastructure development initiatives.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Clean Water for Kigali Village</h4>
                                    <p className="text-green-600">Water Systems Project</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                "Before the water system, our children were getting sick from contaminated water sources. Now, with clean water flowing to every household, our community's health has dramatically improved. Children are attending school regularly, and we've seen a 70% reduction in waterborne diseases."
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-500">- Marie Uwimana, Community Leader</div>
                                <div className="text-sm font-semibold text-green-600">2023 Project</div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Solar Power in Rural Communities</h4>
                                    <p className="text-green-600">Energy Solutions Project</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                "The solar installation has transformed our village. Children can now study at night, small businesses can operate longer hours, and our community center can host evening programs. The economic impact has been incredible - we've seen a 40% increase in local business activity."
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-500">- Jean Pierre Ndayisaba, Village Elder</div>
                                <div className="text-sm font-semibold text-green-600">2022 Project</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Facts */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                            Infrastructure Program
                            <span className="block text-green-600">Quick Facts</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3">Project Timeline</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Planning Phase: 2-3 months</li>
                                    <li>• Construction: 6-12 months</li>
                                    <li>• Community Training: Ongoing</li>
                                    <li>• Maintenance Support: 5+ years</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3">Community Involvement</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Local labor participation: 80%</li>
                                    <li>• Community meetings: Monthly</li>
                                    <li>• Training sessions: Bi-weekly</li>
                                    <li>• Maintenance committees: Established</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3">Sustainability Measures</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Renewable energy sources</li>
                                    <li>• Local material sourcing</li>
                                    <li>• Rainwater harvesting systems</li>
                                    <li>• Waste management integration</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3">Partnerships</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Local government agencies</li>
                                    <li>• Engineering firms</li>
                                    <li>• Environmental organizations</li>
                                    <li>• Community-based organizations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reports & Downloads */}
            <section className="py-16 lg:py-20 bg-green-600">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Reports &
                            <span className="block text-green-200">Resources</span>
                        </h2>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Access detailed reports, case studies, and resources about our infrastructure development projects and their impact.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Infrastructure Report 2023</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Comprehensive overview of all infrastructure projects completed in 2023, including impact metrics and community feedback.
                            </p>
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300">
                                Download PDF (2.4 MB)
                            </button>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Water Systems Case Study</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Detailed analysis of our water infrastructure projects, including technical specifications and community impact data.
                            </p>
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300">
                                Download PDF (1.8 MB)
                            </button>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Assessment 2023</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Statistical analysis of infrastructure project outcomes, including economic, social, and environmental impact metrics.
                            </p>
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300">
                                Download PDF (3.1 MB)
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Build
                            <span className="block text-green-200">Better Communities?</span>
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                            Join us in creating sustainable infrastructure that transforms communities and provides lasting foundations for growth and development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-lg px-8 py-4 text-lg shadow-lg transition-all duration-300">
                                Get Involved
                            </Link>
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-lg px-8 py-4 text-lg transition-all duration-300">
                                Request Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
