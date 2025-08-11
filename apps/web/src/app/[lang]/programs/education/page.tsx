
import Image from "next/image";
import Link from "next/link";

export default async function EducationProgramPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Education Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Education Support Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Empowering vulnerable children through comprehensive educational support, scholarships, and learning resources to build a brighter future for Rwanda.
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
                    Our Education Support Program is a comprehensive initiative designed to break the cycle of poverty through education. We believe that every child, regardless of their background, deserves access to quality education and the opportunity to reach their full potential.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Since its inception in 2010, this program has supported over 5,000 children across 15 districts in Rwanda. We work closely with local schools, communities, and government institutions to ensure sustainable educational development.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The program addresses multiple barriers to education including financial constraints, lack of school supplies, transportation challenges, and social stigma. Through our holistic approach, we provide not just financial support, but also mentorship, career guidance, and life skills training.
                  </p>
                </div>
              </div>

              {/* Key Components */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Program Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Scholarship Program</h3>
                        <p className="text-gray-600">Full and partial scholarships covering tuition fees, uniforms, and essential school supplies for primary and secondary education.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure Support</h3>
                        <p className="text-gray-600">Building and renovating classrooms, libraries, and computer labs to create conducive learning environments.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Teacher Training</h3>
                        <p className="text-gray-600">Professional development programs for teachers to enhance their skills and improve teaching methodologies.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship Program</h3>
                        <p className="text-gray-600">One-on-one mentoring and career guidance to help students make informed decisions about their future.</p>
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
                    <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                    <div className="text-gray-600">Children Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-600">Graduation Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                    <div className="text-gray-600">Districts Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                    <div className="text-gray-600">Years Active</div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Marie's Journey to Medical School</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Marie, a 19-year-old from rural Rwanda, was the first in her family to attend university. Through our scholarship program, she completed secondary education and is now studying medicine at the University of Rwanda. "This program didn't just pay for my education; it gave me hope and showed me that my dreams are possible," says Marie.
                    </p>
                    <div className="text-sm text-gray-500">Graduated 2023 • Now studying Medicine</div>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Niyonsaba Family Transformation</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The Niyonsaba family had three children who all benefited from our program. The eldest, Jean, is now a teacher and helps support his siblings' education. "Education changed everything for our family. We went from struggling to survive to having hope for the future," says their mother.
                    </p>
                    <div className="text-sm text-gray-500">Family of 5 • All children in school</div>
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
                    <span className="font-semibold">2010</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Budget:</span>
                    <span className="font-semibold">$2.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Staff Members:</span>
                    <span className="font-semibold">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Partner Schools:</span>
                    <span className="font-semibold">120</span>
                  </div>
                </div>
              </div>

              {/* Reports & Downloads */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reports & Downloads</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Annual Report 2023</div>
                      <div className="text-sm text-gray-500">PDF • 2.3 MB</div>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Impact Assessment 2023</div>
                      <div className="text-sm text-gray-500">PDF • 1.8 MB</div>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Program Guidelines</div>
                      <div className="text-sm text-gray-500">PDF • 856 KB</div>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Financial Report 2023</div>
                      <div className="text-sm text-gray-500">PDF • 1.2 MB</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Involved</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">Interested in supporting our education program? Contact us to learn more about partnership opportunities.</p>
                  <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Program Director
                  </button>
                  <button className="w-full border border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
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
