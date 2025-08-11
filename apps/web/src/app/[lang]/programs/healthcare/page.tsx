
import Image from "next/image";
import Link from "next/link";

export default async function HealthcareProgramPage( ) {
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Healthcare Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Healthcare Access Initiative
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Improving health outcomes for rural communities through medical camps, health education, and sustainable healthcare infrastructure development.
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
                    Our Healthcare Access Initiative addresses critical health disparities in rural Rwanda by providing comprehensive medical services, health education, and infrastructure development. We believe that access to quality healthcare is a fundamental human right that should be available to all communities.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Since 2012, this initiative has served over 50,000 patients across 20 districts, focusing on maternal and child health, infectious disease prevention, and chronic disease management. Our mobile medical units and community health workers bring healthcare directly to remote villages.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The program operates through a network of partnerships with local health centers, government health agencies, and international medical organizations. We emphasize preventive care, health literacy, and sustainable healthcare solutions that empower communities to take charge of their health.
                  </p>
                </div>
              </div>

              {/* Key Components */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Program Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Medical Camps</h3>
                        <p className="text-gray-600">Regular medical camps providing free consultations, vaccinations, and essential treatments in remote communities.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Education</h3>
                        <p className="text-gray-600">Comprehensive health literacy programs covering nutrition, hygiene, disease prevention, and family planning.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure Development</h3>
                        <p className="text-gray-600">Building and equipping health centers, maternity wards, and emergency response facilities in underserved areas.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Health Workers</h3>
                        <p className="text-gray-600">Training and supporting local health workers to provide basic care and health monitoring in their communities.</p>
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
                    <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
                    <div className="text-gray-600">Patients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">20</div>
                    <div className="text-gray-600">Districts Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                    <div className="text-gray-600">Health Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">11</div>
                    <div className="text-gray-600">Years Active</div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Reducing Maternal Mortality in Nyagatare</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Through our maternal health program, we've reduced maternal mortality rates by 60% in Nyagatare district. The construction of a new maternity ward and training of local midwives has ensured safe deliveries for over 2,000 mothers annually. "Before this program, many women had to travel hours to reach a health facility. Now they have access to quality care right in their community," says Dr. Uwimana, our local medical director.
                    </p>
                    <div className="text-sm text-gray-500">60% reduction in maternal mortality • 2,000+ safe deliveries annually</div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Health Worker Network</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our network of 150 trained community health workers now serves 50 remote villages, providing basic healthcare, health education, and emergency response. These workers have become trusted health advisors in their communities, helping to bridge the gap between formal healthcare and traditional community practices.
                    </p>
                    <div className="text-sm text-gray-500">150 trained health workers • 50 villages served</div>
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
                  <div className="flex justify-between">
                    <span className="text-gray-600">Program Start:</span>
                    <span className="font-semibold">2012</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Budget:</span>
                    <span className="font-semibold">$3.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medical Staff:</span>
                    <span className="font-semibold">75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Health Centers:</span>
                    <span className="font-semibold">25</span>
                  </div>
                </div>
              </div>

              {/* Reports & Downloads */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reports & Downloads</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Healthcare Annual Report 2023</div>
                      <div className="text-sm text-gray-500">PDF • 3.1 MB</div>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Medical Impact Study 2023</div>
                      <div className="text-sm text-gray-500">PDF • 2.7 MB</div>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Health Guidelines Manual</div>
                      <div className="text-sm text-gray-500">PDF • 1.4 MB</div>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Financial Report 2023</div>
                      <div className="text-sm text-gray-500">PDF • 1.8 MB</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Involved</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">Interested in supporting our healthcare program? Contact us to learn more about partnership opportunities.</p>
                  <button className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                    Contact Program Director
                  </button>
                  <button className="w-full border border-purple-600 text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors">
                    Make a Donation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
