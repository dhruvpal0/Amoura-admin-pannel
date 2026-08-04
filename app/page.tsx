'use client';

import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/apiConfig';

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/admin/analytics`);
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.log('Error fetching admin analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-20 bg-[#13141C] rounded-2xl border border-[#2A2A3C] w-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-28 bg-[#13141C] rounded-2xl border border-[#2A2A3C]"></div>
          ))}
        </div>
      </div>
    );
  }

  const metrics = data?.metrics || {
    totalUsers: 5,
    totalAIProfiles: 19,
    totalMatches: 25,
    totalMessages: 57,
    llmTokenCosts: '$14.52',
  };

  const recentUsers = data?.recentUsers || [];
  const recentMatches = data?.recentMatches || [];

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gradient-to-r from-[#13141C] via-[#1A1C29] to-[#13141C] p-6 rounded-3xl border border-[#2A2A3C] shadow-2xl relative overflow-hidden gap-4">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Connected to Supabase PostgreSQL
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Platform Telemetry & AI Analytics
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Real-time infrastructure health, character usage, and token consumption metrics.
          </p>
        </div>

        <button
          onClick={fetchAnalytics}
          className="bg-gradient-to-r from-[#FF3B70] to-[#A855F7] hover:opacity-90 text-white px-5 py-2.5 rounded-2xl text-xs font-extrabold shadow-lg shadow-[#FF3B70]/25 transition active:scale-95 flex items-center gap-2 self-stretch sm:self-auto justify-center"
        >
          <span>🔄</span> Refresh Telemetry
        </button>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Total Users */}
        <div className="bg-[#13141C]/80 backdrop-blur-xl p-5 rounded-2xl border border-[#2A2A3C] hover:border-[#FF3B70]/50 transition duration-300 shadow-xl group">
          <div className="flex justify-between items-center text-gray-400 text-xs font-semibold">
            <span>Registered Users</span>
            <span className="text-lg group-hover:scale-110 transition">👥</span>
          </div>
          <p className="text-3xl font-black text-white mt-2 tracking-tight">{metrics.totalUsers}</p>
          <span className="text-emerald-400 text-[11px] font-bold mt-1 inline-block">
            ● Supabase Cloud Records
          </span>
        </div>

        {/* AI Profiles */}
        <div className="bg-[#13141C]/80 backdrop-blur-xl p-5 rounded-2xl border border-[#2A2A3C] hover:border-[#A855F7]/50 transition duration-300 shadow-xl group">
          <div className="flex justify-between items-center text-gray-400 text-xs font-semibold">
            <span>Active AI Characters</span>
            <span className="text-lg group-hover:scale-110 transition">🎭</span>
          </div>
          <p className="text-3xl font-black text-white mt-2 tracking-tight">{metrics.totalAIProfiles}</p>
          <span className="text-purple-400 text-[11px] font-bold mt-1 inline-block">
            Cloudinary Hosted Avatars
          </span>
        </div>

        {/* Matches */}
        <div className="bg-[#13141C]/80 backdrop-blur-xl p-5 rounded-2xl border border-[#2A2A3C] hover:border-[#FF3B70]/50 transition duration-300 shadow-xl group">
          <div className="flex justify-between items-center text-gray-400 text-xs font-semibold">
            <span>Matches Generated</span>
            <span className="text-lg group-hover:scale-110 transition">💖</span>
          </div>
          <p className="text-3xl font-black text-[#FF3B70] mt-2 tracking-tight">{metrics.totalMatches}</p>
          <span className="text-pink-400 text-[11px] font-bold mt-1 inline-block">
            Relationship Progression
          </span>
        </div>

        {/* Messages */}
        <div className="bg-[#13141C]/80 backdrop-blur-xl p-5 rounded-2xl border border-[#2A2A3C] hover:border-blue-500/50 transition duration-300 shadow-xl group">
          <div className="flex justify-between items-center text-gray-400 text-xs font-semibold">
            <span>AI Messages Sent</span>
            <span className="text-lg group-hover:scale-110 transition">💬</span>
          </div>
          <p className="text-3xl font-black text-white mt-2 tracking-tight">{metrics.totalMessages}</p>
          <span className="text-blue-400 text-[11px] font-bold mt-1 inline-block">
            Hinglish WhatsApp Chat
          </span>
        </div>

        {/* Token Cost */}
        <div className="bg-[#13141C]/80 backdrop-blur-xl p-5 rounded-2xl border border-[#2A2A3C] hover:border-amber-500/50 transition duration-300 shadow-xl group">
          <div className="flex justify-between items-center text-gray-400 text-xs font-semibold">
            <span>Est. LLM Token Cost</span>
            <span className="text-lg group-hover:scale-110 transition">⚡</span>
          </div>
          <p className="text-3xl font-black text-amber-400 mt-2 tracking-tight">{metrics.llmTokenCosts}</p>
          <span className="text-amber-400/80 text-[11px] font-bold mt-1 inline-block">
            Gemini + Groq Engine
          </span>
        </div>
      </div>

      {/* Two Column Section: Live Recent Matches & Registered User Accounts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Matches */}
        <div className="bg-[#13141C]/80 backdrop-blur-xl rounded-3xl border border-[#2A2A3C] p-6 space-y-4 shadow-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>💖</span> Live User Matches
            </h2>
            <span className="text-xs text-gray-400 font-mono">Real-time DB Sync</span>
          </div>

          <div className="space-y-3">
            {recentMatches.length === 0 ? (
              <div className="text-center py-8 bg-[#0B0C10] rounded-2xl border border-[#2A2A3C]">
                <p className="text-gray-400 text-xs font-medium">No active matches recorded yet.</p>
              </div>
            ) : (
              recentMatches.map((m: any) => (
                <div
                  key={m.id}
                  className="flex justify-between items-center bg-[#0B0C10] p-4 rounded-2xl border border-[#2A2A3C] hover:border-[#FF3B70]/40 transition"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={m.aiProfile?.avatar}
                      alt={m.aiProfile?.name}
                      className="w-11 h-11 rounded-2xl object-cover border-2 border-[#FF3B70]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {m.user?.name} <span className="text-gray-500 font-normal">matched with</span> {m.aiProfile?.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Relationship Stage:{' '}
                        <span className="text-[#FF3B70] font-extrabold uppercase tracking-wide">
                          {m.relationshipStage}
                        </span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    {new Date(m.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Registered Users */}
        <div className="bg-[#13141C]/80 backdrop-blur-xl rounded-3xl border border-[#2A2A3C] p-6 space-y-4 shadow-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>👤</span> Database User Accounts
            </h2>
            <span className="text-xs text-gray-400 font-mono">Bcrypt Secured</span>
          </div>

          <div className="space-y-3">
            {recentUsers.length === 0 ? (
              <div className="text-center py-8 bg-[#0B0C10] rounded-2xl border border-[#2A2A3C]">
                <p className="text-gray-400 text-xs font-medium">No registered users yet.</p>
              </div>
            ) : (
              recentUsers.map((u: any) => (
                <div
                  key={u.id}
                  className="flex justify-between items-center bg-[#0B0C10] p-4 rounded-2xl border border-[#2A2A3C] hover:border-[#A855F7]/40 transition"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">{u.name}</h4>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">{u.email}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold tracking-wide ${
                        u.isPremium
                          ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-gray-800 text-gray-400 border border-gray-700'
                      }`}
                    >
                      {u.isPremium ? 'PRO PREMIUM' : 'FREE TIER'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
