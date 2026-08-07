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
            Founder & Team
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#A855F7] hover:prose-a:text-[#FF3B70] prose-a:transition prose-strong:text-white prose-li:text-gray-300">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10 bg-[#0B0C10] p-6 rounded-3xl border border-[#2A2A3C] shadow-lg">
              <div className="relative shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#FF3B70] p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative">
                    {/* Founder Image */}
                    <img 
                      src="https://res.cloudinary.com/dqppqvblk/image/upload/v1762668962/dhruvpal_fd00uj.jpg" 
                      alt="Dhruv Pal" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center sm:text-left flex-1">
                <h2 className="!mt-0 !mb-1 text-2xl font-bold text-white">Dhruv Pal</h2>
                <p className="text-[#A855F7] font-bold text-sm mb-4 uppercase tracking-wider">Founder & CEO</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Dhruv Pal is the visionary founder behind Amoura. With a deep background in software engineering, AI architecture, and user experience design, Dhruv set out to create a platform that bridges the gap between technology and emotional connection.
                </p>
                
                {/* Social Connections */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 not-prose">
                  <a href="https://www.linkedin.com/in/dhruv-pal-59b584253/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-[#1A1C29] border border-[#2A2A3C] hover:border-blue-500 hover:text-blue-500 text-gray-300 transition text-xs font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/dhruvpal0" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-[#1A1C29] border border-[#2A2A3C] hover:border-gray-400 hover:text-white text-gray-300 transition text-xs font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/rock._dhruv_/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-[#1A1C29] border border-[#2A2A3C] hover:border-pink-500 hover:text-pink-500 text-gray-300 transition text-xs font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Instagram
                  </a>
                  <a href="https://x.com/Dhruv_Pal0" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-[#1A1C29] border border-[#2A2A3C] hover:border-white hover:text-white text-gray-300 transition text-xs font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    X
                  </a>
                  <a href="https://founder.peerlynk.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-[#1A1C29] border border-[#2A2A3C] hover:border-emerald-500 hover:text-emerald-500 text-gray-300 transition text-xs font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    Portfolio
                  </a>
                  <a href="mailto:pal664908@gmail.com" className="px-4 py-2 rounded-xl bg-[#1A1C29] border border-[#2A2A3C] hover:border-[#FF3B70] hover:text-[#FF3B70] text-gray-300 transition text-xs font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                    Email
                  </a>
                </div>
              </div>
            </div>
      
            {/* Peerlynk Card */}
            <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#2A2A3C] pb-4">Previous Ventures</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-[#0B0C10] p-6 rounded-3xl border border-[#2A2A3C] shadow-lg mb-10 group hover:border-[#A855F7]/50 transition duration-300 not-prose">
              <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <img 
                  src="https://peerlynk.com/logo.png" 
                  alt="Peerlynk Logo" 
                  className="w-full h-auto max-h-full object-contain group-hover:scale-105 transition duration-300" 
                />
              </div>
              
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-bold text-white mb-1">Peerlynk</h3>
                <p className="text-blue-400 font-bold text-xs mb-3 uppercase tracking-wider">The Operating System for College Life</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Prior to Amoura, Dhruv led the development of <strong>Peerlynk</strong>, an innovative platform that connected users through shared interests and digital identities. The experience and technical foundation built during the Peerlynk project laid the groundwork for the advanced real-time database syncing and user management systems now utilized in Amoura.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <a href="https://peerlynk.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#1A1C29] border border-[#2A2A3C] hover:border-[#A855F7] hover:text-white text-gray-300 transition text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    Website
                  </a>
                  <a href="https://about.peerlynk.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#1A1C29] border border-[#2A2A3C] hover:border-[#A855F7] hover:text-white text-gray-300 transition text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    About
                  </a>
                  <a href="https://career.peerlynk.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#1A1C29] border border-[#2A2A3C] hover:border-[#A855F7] hover:text-white text-gray-300 transition text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Careers
                  </a>
                  <a href="https://labs.peerlynk.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#1A1C29] border border-[#2A2A3C] hover:border-[#A855F7] hover:text-white text-gray-300 transition text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    Labs
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.peerlynk.network" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#1A1C29] border border-[#2A2A3C] hover:border-[#3DDC84] hover:text-[#3DDC84] text-gray-300 transition text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    Play Store App
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#2A2A3C]/50">
                  <a href="https://www.linkedin.com/company/peerlynk" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#1A1C29] border border-[#2A2A3C] hover:border-blue-500 hover:text-blue-500 text-gray-400 transition text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/peerlynk/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#1A1C29] border border-[#2A2A3C] hover:border-pink-500 hover:text-pink-500 text-gray-400 transition text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Instagram
                  </a>
                  <a href="https://x.com/peerlynk" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#1A1C29] border border-[#2A2A3C] hover:border-white hover:text-white text-gray-400 transition text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    X
                  </a>
                </div>
              </div>
            </div>

      <h2>The Amoura Team</h2>
      <p>Building on the legacy of previous successful projects like Peerlynk, the Amoura team consists of dedicated engineers, AI researchers, and safety moderators committed to delivering the best possible experience. Our team works tirelessly behind the scenes to ensure the platform remains fast, secure, and above all, safe for everyone.</p>

      <div className="mt-12 bg-gradient-to-r from-[#13141C] to-[#1A1C29] border border-[#2A2A3C] p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-2">Join Our Journey</h3>
        <p className="text-gray-400 mb-0">We are always looking for passionate individuals to join our mission. If you're interested in AI, machine learning, or community building, reach out to us at <a href="mailto:pal664908@gmail.com" className="text-[#A855F7] hover:underline">pal664908@gmail.com</a>.</p>
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
