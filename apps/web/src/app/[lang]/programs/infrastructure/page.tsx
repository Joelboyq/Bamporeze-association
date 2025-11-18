
export default async function InfrastructureProgram() {


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] bg-gradient-to-r from-green-600 to-green-800">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
                            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">Environmental Protection Program</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Environmental Protection
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                            Promoting environmental sustainability through reforestation initiatives, energy-saving stoves distribution, water harvesting, and eco-friendly practices that protect our planet while improving community livelihoods.
                        </p>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Protecting Our Planet,
                                <span className="block text-green-600">Empowering Communities</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Our Environmental Protection Program promotes sustainable practices that protect our planet while improving community livelihoods. We believe that environmental conservation and community development go hand in hand.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Through reforestation initiatives, energy-saving solutions, water harvesting, and eco-friendly practices, we help communities build resilience while protecting Rwanda's natural resources for future generations.
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
                                        <h4 className="font-semibold text-gray-900 mb-1">Community Engagement</h4>
                                        <p className="text-gray-600">All environmental initiatives are designed with direct input from community members to ensure sustainability and local ownership.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Sustainable Practices</h4>
                                        <p className="text-gray-600">We promote eco-friendly practices that protect Rwanda's natural resources while improving community livelihoods.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Long-term Impact</h4>
                                        <p className="text-gray-600">Our programs focus on creating lasting environmental benefits that protect Rwanda's natural heritage for future generations.</p>
                                    </div>
                                </div>
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
                            Our Environmental
                            <span className="block text-green-600">Initiatives</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We focus on key environmental protection areas that help communities thrive while preserving Rwanda's natural heritage.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Reforestation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Planting trees to restore forests, fight soil erosion, and create sustainable ecosystems for future generations.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Energy-Saving Stoves</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Distributing efficient stoves that reduce deforestation, improve household air quality, and save families time and money.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Water Harvesting</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Providing water harvesting tanks for households, especially those relocated from high-risk areas, ensuring sustainable water access.
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
                            Environmental
                            <span className="block text-green-200">Impact</span>
                        </h2>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Our environmental protection initiatives have created lasting change, protecting Rwanda's natural resources while improving community livelihoods.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">25,000+</div>
                            <div className="text-green-100 text-lg">Trees Planted</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">1,200</div>
                            <div className="text-green-100 text-lg">Energy-Saving Stoves</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">100</div>
                            <div className="text-green-100 text-lg">Water Tanks Provided</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">29</div>
                            <div className="text-green-100 text-lg">Years of Impact</div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
}
