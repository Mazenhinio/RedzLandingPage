'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Building, DollarSign, ExternalLink, ChevronDown } from 'lucide-react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export default function WorkWithUsPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-50 ${roboto.variable}`} style={{ fontFamily: 'var(--font-roboto)' }}>
      {/* Header */}
              <div className="bg-white border-b shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-14">
          {/* Top section with minimal spacing */}
          <div className="pt-0 pb-0">
            <Link
              href="/"
              className="inline-flex items-center mt-6 gap-2 text-gray-700 hover:text-gray-900 transition-colors -ml-2"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>

          {/* Orange-reddish line below Back to Home */}
          <div className="mx-2 mt-2">
            <div className="w-full h-1 bg-orange-400 rounded-full"></div>
          </div>

          {/* Main content with improved spacing */}
          <div className="pb-4">
            {/* We're hiring badge */}
            <div className="flex items-center mt-6 gap-2 bg-white text-black border-2 border-black px-6 py-3 rounded-full text-base font-medium mb-3 w-fit">
              We're hiring!
            </div>

            <h1 className="text-4xl mt-6 md:text-6xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'var(--font-roboto)' }}>Be part of our mission</h1>
            <p className=" -mt-2 mb-6 px-2 text-l text-gray-700 max-w-4xl leading-relaxed" style={{ fontFamily: 'var(--font-roboto)' }}>
              We're looking for passionate people to join us on our mission. We value
              flat hierarchies, clear communication, and full ownership and responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4">
        <div className="space-y-4">
          {/* Job Card - Business Development Representative */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-normal text-gray-900 mb-2">
                  Business Development Representative (Entry Level)
                </h3>
                <p className="text-gray-600 mb-4">
                  We're looking for ambitious individuals to join our team and help people reimagine their careers.
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-400">
                    <MapPin size={14} />
                    London & Remote
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-400">
                    <Clock size={14} />
                    Flexible hours
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-400">
                    <DollarSign size={14} />
                    Commission + Bonus
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center text-m font-normal gap-3 bg-brand/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-brand hover:scale-105 active:scale-95"
              >
                <span>{showDetails ? 'Show Less' : 'Learn More'}</span>
                <ChevronDown size={18} className={`transition-all duration-300 ${showDetails ? 'rotate-180' : ''}`} />
              </button>
            </div>



            {/* Expandable Detailed Job Information Section */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showDetails ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <div className="border-t pt-6">
                {/* About Us */}
                <div className="mb-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">About Us</h4>
                    <div className="bg-white text-black border-2 border-gray-600 px-4 py-2 rounded-full text-m font-light hover:bg-gray-50 hover:border-gray-800 transition-all duration-200">
                      Reports To: Sales Manager/Team Lead
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Redagents is a growth concierge agency on a mission to empower people through learning and opportunity.
                    We support founders to build thriving businesses by creating effective sales systems and innovative marketing strategies.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Our Mission</h5>
                      <p className="text-gray-700">To help people expand using their talents.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Our Values</h5>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Lifelong Education</li>
                        <li>• Partnerships</li>
                        <li>• Concierge Level of Service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Summary</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Join our mission to transform careers through education. As a Business Development Representative, 
                    you'll connect with individuals seeking professional growth and guide them toward life-changing 
                    learning opportunities. Through strategic outreach and relationship building, you'll help people 
                    discover relevant CPD and vocational training programs that align with their career aspirations, 
                    while developing valuable skills in sales, marketing, and business development.
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h4>
                  <ul className="space-y-2 text-gray-800 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Complete a comprehensive training programme in marketing, social media and digital marketing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Drive engagement through proactive outreach and relationship building across multiple channels.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Engage new people through in-person conversations in public settings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Build connections using social media and digital platforms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Advise individuals about their skills, backgrounds and career ambitions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Guide potential clients through accredited CPD and vocational training courses.</span>
                    </li>
                  </ul>
                </div>

                {/* What You'll Gain */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What You'll Gain</h4>
                  <ul className="space-y-2 text-gray-800 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Accredited Training: Free, industry-recognised courses in sales, marketing, business and digital communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>1-to-1 Mentoring: Personalised coaching and ongoing support to accelerate your progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Commission & Bonus: Excellent earning potential based on results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Real-World Experience: Gain practical skills across all key marketing channels and sales environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Career Pathways: After 3-6 months, transition to independent roles within companies in various industries</span>
                    </li>
                  </ul>
                </div>

                {/* Who You Are */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Who You Are</h4>
                  <ul className="space-y-2 text-gray-800 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Excellent communication and listening skills to confidently connect with new people</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Empathy and genuine commitment to guiding individuals toward meaningful career growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Curiosity and openness to feedback, continuously developing your skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Strong motivation, resilience, and a growth mindset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Clear aspiration to reach your highest potential</span>
                    </li>
                  </ul>
                </div>

                {/* How to Apply */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">How to Apply</h4>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-normal" style={{ backgroundColor: '#ef4444' }}>1</div>
                        <p className="text-sm text-gray-700">Complete our online application (short form, no CV required)</p>
                      </div>
                      <div className="text-center">
                        <div className="text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-normal" style={{ backgroundColor: '#ef4444' }}>2</div>
                        <p className="text-sm text-gray-700">Submit a video interview application</p>
                      </div>
                      <div className="text-center">
                        <div className="text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-normal" style={{ backgroundColor: '#ef4444' }}>3</div>
                        <p className="text-sm text-gray-700">Attend an online interview with Redagents team</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href="mailto:richard@redagents.com?subject=Application for Business Development Representative Position"
                    className="inline-flex -mt-18 items-center gap-2 bg-white text-black border-2 border-black/60 px-6 py-3 rounded-full text-base font-normal hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                  >
                    Apply Now
                    <ExternalLink size={16} />
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    For questions, contact Richard Butler – <a href="mailto:richard@redagents.com" className="text-brand hover:underline">richard@redagents.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* More Jobs Coming Soon */}
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">More Opportunities Coming Soon</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're constantly growing and looking for talented individuals to join our team.
              Check back regularly for new openings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}