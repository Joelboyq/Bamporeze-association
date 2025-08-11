import Image from "next/image";
import Link from "next/link";

export default async function EconomicProgramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Economic Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Economic Empowerment Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Building sustainable livelihoods through vocational training, microfinance, and business development support for vulnerable communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Program Overview */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our Economic Empowerment Program is designed to break the cycle of poverty by providing individuals and families with the skills, resources, and support they need to build sustainable livelihoods. We focus on creating long-term economic opportunities that benefit entire communities.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Since 2015, this program has supported over 3,000 entrepreneurs and trained more than 5,000 individuals in various vocational skills. Our approach combines skills development, access to capital, market linkages, and ongoing mentorship to ensure sustainable success.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The program targets vulnerable groups including women, youth, and people with disabilities, providing them with opportunities to become economically independent and contribute to their communities' development. We work with local businesses, financial institutions, and government agencies to create an enabling environment for economic growth.
                  </p>
                </div>
              </div>

              {/* Key Components */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Program Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-orange-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Vocational Training</h3>
                        <p className="text-gray-600">Comprehensive skills training in agriculture, crafts, technology, and service industries with market-relevant curricula.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-orange-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Microfinance Support</h3>
                        <p className="text-gray-600">Access to small loans, savings programs, and financial literacy training to start and grow businesses.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-orange-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Linkages</h3>
                        <p className="text-gray-600">Connecting entrepreneurs with markets, buyers, and supply chains to ensure sustainable business growth.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-orange-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Incubation</h3>
                        <p className="text-gray-600">Supporting new businesses with mentorship, workspace, and access to networks and resources.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Statistics */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">3,000+</div>
                    <div className="text-gray-600 text-sm">Entrepreneurs Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">5,000+</div>
                    <div className="text-gray-600 text-sm">Individuals Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">85%</div>
                    <div className="text-gray-600 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">20+</div>
                    <div className="text-gray-600 text-sm">Districts Served</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Program Duration: 6-24 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Training Sessions: Weekly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Mentorship: Ongoing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Follow-up: 2 years</span>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="text-gray-700 text-sm italic">"The vocational training program helped me start my own tailoring business. I now employ three other women from my community."</p>
                    <p className="text-orange-600 text-xs mt-2">- Marie Claire, Kigali</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="text-gray-700 text-sm italic">"With the microfinance support, I was able to expand my small shop and now provide for my family's education."</p>
                    <p className="text-orange-600 text-xs mt-2">- Jean Pierre, Butare</p>
                  </div>
                </div>
              </div>

              {/* Reports & Downloads */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resources</h3>
                <div className="space-y-3">
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg px-4 py-2 text-sm transition-all duration-300">
                    Download Program Report
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg px-4 py-2 text-sm transition-all duration-300">
                    View Case Studies
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg px-4 py-2 text-sm transition-all duration-300">
                    Impact Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-orange-600">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build
            <span className="block text-orange-200">Economic Independence?</span>
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join our Economic Empowerment Program and take the first step towards financial independence and community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-lg px-8 py-4 text-lg shadow-lg transition-all duration-300">
              Get Started
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold rounded-lg px-8 py-4 text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
