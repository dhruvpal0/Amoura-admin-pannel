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
            Safety Policy
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#A855F7] hover:prose-a:text-[#FF3B70] prose-a:transition prose-strong:text-white prose-li:text-gray-300">
            
      <h2>1. Our Commitment to Safety</h2>
      <p>At Amoura, the safety and well-being of our community are our highest priorities. We are dedicated to providing a secure and respectful environment where users can interact with AI companions safely.</p>
      
      <h2>2. AI Content Moderation</h2>
      <p>We employ advanced automated moderation tools and manual reviews to ensure that all interactions comply with our Community Guidelines. Our AI models are strictly instructed to avoid generating harmful, explicit (unless within permitted, consensual 18+ environments), or illegal content.</p>

      <h2>3. User Conduct</h2>
      <p>Users are expected to treat the platform and other users with respect. The following behaviors are strictly prohibited and may result in immediate account termination:</p>
      <ul>
        <li>Generating or attempting to generate illegal content.</li>
        <li>Using the platform for hate speech, harassment, or bullying.</li>
        <li>Attempting to bypass our AI safety filters or security mechanisms.</li>
        <li>Sharing personal identifiable information of others without consent.</li>
      </ul>

      <h2>4. Reporting and Enforcement</h2>
      <p>If you encounter content or behavior that violates our policies, please report it immediately to our support team at <a href="mailto:pal664908@gmail.com" className="text-[#FF3B70] hover:underline">pal664908@gmail.com</a>. We review all reports promptly and take appropriate action, which may include content removal, warning the user, or account suspension.</p>
    
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
