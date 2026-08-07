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
            Contact Us
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#A855F7] hover:prose-a:text-[#FF3B70] prose-a:transition prose-strong:text-white prose-li:text-gray-300">
            
      <h2>Get in Touch</h2>
      <p>We value your feedback and are here to assist you with any issues you may encounter while using Amoura. Whether you have a technical problem, a billing inquiry, or just want to share your thoughts on how we can improve, our door is always open.</p>
      
      <div className="bg-[#13141C] border border-[#2A2A3C] rounded-2xl p-6 mt-8">
        <h3 className="text-xl font-bold text-white mb-2">Support Email</h3>
        <p className="text-gray-400 mb-4">For all general inquiries, technical support, and feedback, please email us directly. We aim to respond to all emails within 24-48 hours.</p>
        <a href="mailto:pal664908@gmail.com" className="inline-block bg-gradient-to-r from-[#FF3B70] to-[#A855F7] text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition">
          Email pal664908@gmail.com
        </a>
      </div>

      <div className="mt-8">
        <h3>Business Inquiries</h3>
        <p>For partnerships, press, or other business-related inquiries, please use the same contact email, and route your subject line appropriately (e.g., "Partnership Inquiry - [Your Company]").</p>
      </div>
    
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
