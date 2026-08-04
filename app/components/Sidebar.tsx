'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Overview & Analytics', icon: '📊' },
    { href: '/ai-profiles', label: 'AI Character Studio', icon: '🎭' },
    { href: '/users', label: 'Users & Retention', icon: '👥' },
  ];

  return (
    <>
      {/* Mobile Top Navbar Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#13141C]/90 backdrop-blur-md border-b border-[#2A2A3C] px-4 flex items-center justify-between z-40">
        <div className="flex items-center gap-2">
          <span className="text-xl">✨</span>
          <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FF3B70] to-[#A855F7]">
            Amoura Studio
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl bg-[#1E1E2D] border border-[#2A2A3C] text-gray-300 hover:text-white"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-72 bg-[#13141C] border-r border-[#2A2A3C] p-6 flex flex-col justify-between transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Logo & Brand Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3B70] to-[#A855F7] flex items-center justify-center text-xl shadow-lg shadow-[#FF3B70]/20">
                ✨
              </div>
              <div>
                <h1 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
                  Amoura Admin
                </h1>
                <span className="text-[10px] font-bold tracking-widest text-[#FF3B70] uppercase">
                  AI Relationship Suite
                </span>
              </div>
            </div>
            {/* Close button inside mobile menu */}
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    active
                      ? 'bg-gradient-to-r from-[#FF3B70]/20 to-[#A855F7]/10 text-white border border-[#FF3B70]/40 shadow-lg shadow-[#FF3B70]/10'
                      : 'text-gray-400 hover:bg-[#1E1E2D] hover:text-white border border-transparent'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom System Status Panel */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A3C]">
          <div className="bg-[#0B0C10] p-3.5 rounded-xl border border-[#2A2A3C]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-gray-400 font-medium">Database System</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Supabase
              </span>
            </div>
            <p className="text-[11px] text-gray-500 font-mono truncate">
              aws-0-ap-southeast-1.pooler
            </p>
          </div>

          <div className="text-[11px] text-gray-500 flex items-center justify-between px-1">
            <span>Amoura v2.0 • Studio</span>
            <span className="text-gray-400 font-medium">Cloudinary Active ☁️</span>
          </div>
        </div>
      </aside>
    </>
  );
}
