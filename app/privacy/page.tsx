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
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#A855F7] hover:prose-a:text-[#FF3B70] prose-a:transition prose-strong:text-white prose-li:text-gray-300">
            
      <h2>1. Introduction</h2>
      <p>Welcome to Amoura. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:pal664908@gmail.com" className="text-[#FF3B70] hover:underline">pal664908@gmail.com</a>.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We collect personal information that you voluntarily provide to us when you register on the App, express an interest in obtaining information about us or our products and Services, when you participate in activities on the App or otherwise when you contact us.</p>
      <ul>
        <li><strong>Personal Information Provided by You:</strong> We collect names; email addresses; usernames; passwords; contact preferences; contact or authentication data; and other similar information.</li>
        <li><strong>AI Interaction Data:</strong> To provide a personalized AI companion experience, we securely process and store the text, voice messages, and context of your conversations with AI characters.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use personal information collected via our App for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
      <ul>
        <li>To facilitate account creation and logon process.</li>
        <li>To post testimonials with your consent.</li>
        <li>To request feedback and to contact you about your use of our App.</li>
        <li>To enable user-to-user (or user-to-AI) communications.</li>
      </ul>

      <h2>4. Will Your Information Be Shared With Anyone?</h2>
      <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to advertisers.</p>

      <h2>5. How Long Do We Keep Your Information?</h2>
      <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>

      <h2>6. How Do We Keep Your Information Safe?</h2>
      <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

      <h2>7. Contact Us</h2>
      <p>If you have questions or comments about this notice, you may email us at <a href="mailto:pal664908@gmail.com" className="text-[#FF3B70] hover:underline">pal664908@gmail.com</a>.</p>
    
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
