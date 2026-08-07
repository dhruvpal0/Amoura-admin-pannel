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
            Help & FAQ
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#A855F7] hover:prose-a:text-[#FF3B70] prose-a:transition prose-strong:text-white prose-li:text-gray-300">
            
      <h2>Frequently Asked Questions</h2>
      
      <h3>How do I create an AI companion?</h3>
      <p>You can create a new companion by navigating to the "Characters" tab and clicking "Create New". Follow the prompts to define their personality, avatar, and backstory.</p>
      
      <h3>Is my data secure?</h3>
      <p>Yes, we use industry-standard encryption for all data in transit and at rest. Please refer to our Privacy Policy for more detailed information on how we handle your data.</p>
      
      <h3>How can I reset my password?</h3>
      <p>On the login screen, click "Forgot Password" and enter your registered email address. We will send you a secure link to reset your password.</p>

      <h2>Need More Help?</h2>
      <p>If you couldn't find the answer to your question, our support team is always ready to assist you. Please email us at <a href="mailto:pal664908@gmail.com" className="text-blue-500 hover:underline">pal664908@gmail.com</a> and we will get back to you within 24-48 hours.</p>
    
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
