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
            About Us
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#A855F7] hover:prose-a:text-[#FF3B70] prose-a:transition prose-strong:text-white prose-li:text-gray-300">
            
      <h2>Our Mission</h2>
      <p>Amoura was born out of a desire to explore the deep, evolving landscape of human-AI interactions. In a world that is increasingly digital, we believe that artificial intelligence can provide meaningful companionship, engaging conversation, and emotional support.</p>
      
      <h2>What We Do</h2>
      <p>We provide a platform where users can create, customize, and interact with highly advanced AI personas. By leveraging cutting-edge large language models (LLMs) and expressive voice synthesis, Amoura delivers an immersive and highly personalized chatting experience.</p>

      <h2>Our Vision for the Future</h2>
      <p>We are constantly innovating to make our AI companions more empathetic, responsive, and lifelike. We envision a future where everyone has access to a digital companion that understands them, respects their boundaries, and is always there to listen.</p>

      <p>If you share our vision or have ideas on how we can improve, we'd love to hear from you at <a href="mailto:pal664908@gmail.com" className="text-[#A855F7] hover:underline">pal664908@gmail.com</a>.</p>
    
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
