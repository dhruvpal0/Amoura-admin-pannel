import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0C10] border-t border-[#2A2A3C] py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-[#FF3B70] transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#FF3B70] transition">Terms of Service</Link></li>
              <li><Link href="/safety" className="hover:text-[#FF3B70] transition">Safety Policy</Link></li>
              <li><Link href="/child-safety" className="hover:text-[#FF3B70] transition">Child Safety</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-[#A855F7] transition">About Us</Link></li>
              <li><Link href="/founder" className="hover:text-[#A855F7] transition">Founder & Team</Link></li>
              <li><Link href="/contact" className="hover:text-[#A855F7] transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/help" className="hover:text-blue-500 transition">Help & FAQ</Link></li>
              <li><a href="mailto:pal664908@gmail.com" className="hover:text-blue-500 transition">Email Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Amoura App</h3>
            <p className="text-sm text-gray-400 mb-4">
              Your intelligent AI companion for deep conversations and relationships.
            </p>
            <div className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Amoura. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
