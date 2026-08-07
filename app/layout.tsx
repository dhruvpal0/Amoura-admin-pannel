import React from 'react';
import './globals.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Amoura Admin & AI Relationship Studio',
  description: 'Manage AI Characters, Moderate Chats, and Monitor Platform Metrics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-[#0B0C10] text-white min-h-screen font-sans flex flex-col lg:flex-row antialiased" suppressHydrationWarning>
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto mt-16 lg:mt-0 w-full flex flex-col h-screen">
          <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
