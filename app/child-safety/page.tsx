import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-r from-[#FF3B70]/10 to-[#A855F7]/10 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-white transition mb-8 group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Dashboard
        </Link>
        
        <div className="bg-[#13141C]/80 backdrop-blur-xl border border-[#2A2A3C] rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          <div className="absolute top-0 left-8 w-20 h-1 bg-gradient-to-r from-[#FF3B70] to-[#A855F7] rounded-b-full"></div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-10 tracking-tight">
            Child Safety Policy
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#A855F7] hover:prose-a:text-[#FF3B70] prose-a:transition prose-strong:text-white prose-li:text-gray-300">
            
      <h2>1. Age Restrictions</h2>
      <p>Amoura is strictly intended for individuals who are <strong>18 years of age or older</strong>. The themes, conversations, and AI interactions on this platform are not designed for, nor directed at, children or minors.</p>
      
      <h2>2. Zero Tolerance Policy</h2>
      <p>We have a zero-tolerance policy regarding the presence of minors on our platform. We do not knowingly solicit data from or market to children under 18 years of age. By using the App, you represent that you are at least 18.</p>

      <h2>3. Account Termination</h2>
      <p>If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.</p>

      <h2>4. Reporting Underage Users</h2>
      <p>If you become aware of any data we may have collected from children under age 18, please contact us immediately at <a href="mailto:pal664908@gmail.com" className="text-[#FF3B70] hover:underline">pal664908@gmail.com</a> so we can take swift action.</p>
    
          </div>
          
          <div className="mt-12 text-xs text-gray-500 border-t border-[#2A2A3C] pt-6 font-mono flex items-center justify-between">
             <span>Amoura Official Documentation</span>
             <span>Last updated: 7/8/2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
