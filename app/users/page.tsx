'use client';

import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../config/apiConfig';

export default function UsersManagement() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState('ALL');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginationData, setPaginationData] = useState({
    totalUsers: 0,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  useEffect(() => {
    fetchUsers(currentPage, itemsPerPage, search, tierFilter);
  }, [currentPage, itemsPerPage, tierFilter]);

  const fetchUsers = async (
    page: number = 1,
    limit: number = 10,
    searchQuery: string = search,
    tier: string = tierFilter
  ) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        search: searchQuery,
        tier,
      });

      const res = await fetch(`${API_BASE_URL}/admin/users?${queryParams.toString()}`);
      if (res.ok) {
        const json = await res.json();
        setUsers(json.users || []);
        if (json.pagination) {
          setPaginationData(json.pagination);
        }
      }
    } catch (err) {
      console.log('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchUsers(1, itemsPerPage, search, tierFilter);
  };

  const handleTierChange = (tier: string) => {
    setTierFilter(tier);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gradient-to-r from-[#13141C] via-[#1A1C29] to-[#13141C] p-6 rounded-3xl border border-[#2A2A3C] shadow-2xl gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider">
              Paginated & Supabase Synced 🔐
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            User Accounts & Safety Management 👤
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Monitor registered user accounts, subscription validity, and platform safety.
          </p>
        </div>

        <button
          onClick={() => fetchUsers(currentPage, itemsPerPage, search, tierFilter)}
          className="bg-[#1E1E2D] hover:bg-[#2A2A3C] border border-[#2A2A3C] text-white px-5 py-2.5 rounded-2xl text-xs font-extrabold shadow-lg transition active:scale-95 flex items-center gap-2 self-stretch sm:self-auto justify-center"
        >
          <span>🔄</span> Refresh Accounts
        </button>
      </div>

      {/* Filter and Search Section */}
      <div className="bg-[#13141C]/80 backdrop-blur-xl rounded-3xl border border-[#2A2A3C] p-6 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => handleTierChange('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                tierFilter === 'ALL'
                  ? 'bg-[#FF3B70] text-white shadow-lg shadow-[#FF3B70]/20'
                  : 'bg-[#0B0C10] text-gray-400 border border-[#2A2A3C]'
              }`}
            >
              All Accounts ({paginationData.totalUsers})
            </button>
            <button
              onClick={() => handleTierChange('PRO')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                tierFilter === 'PRO'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-[#0B0C10] text-gray-400 border border-[#2A2A3C]'
              }`}
            >
              ⭐ PRO Premium
            </button>
            <button
              onClick={() => handleTierChange('FREE')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                tierFilter === 'FREE'
                  ? 'bg-gray-700 text-white'
                  : 'bg-[#0B0C10] text-gray-400 border border-[#2A2A3C]'
              }`}
            >
              Free Tier
            </button>
          </div>

          <form onSubmit={handleSearchSubmit} className="flex gap-2 w-full sm:w-80">
            <input
              type="text"
              placeholder="Search by email or name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#0B0C10] border border-[#2A2A3C] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 flex-1 focus:outline-none focus:border-[#FF3B70]"
            />
            <button
              type="submit"
              className="bg-[#FF3B70] hover:bg-[#FF3B70]/80 text-white px-4 py-2.5 rounded-xl text-xs font-bold"
            >
              Search
            </button>
          </form>
        </div>

        {/* Responsive Table View */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 font-medium">
            Loading page {currentPage} of registered accounts...
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-12 bg-[#0B0C10] rounded-2xl border border-[#2A2A3C] text-gray-400 text-xs">
            No user accounts found matching your query.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#0B0C10] text-gray-400 uppercase text-[10px] tracking-wider border-b border-[#2A2A3C]">
                <tr>
                  <th className="p-4 rounded-l-xl">User Name</th>
                  <th className="p-4">Email Address</th>
                  <th className="p-4">Subscription Plan</th>
                  <th className="p-4">Registered Date</th>
                  <th className="p-4 rounded-r-xl">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2A3C]/60">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-[#1E1E2D]/50 transition">
                    <td className="p-4 font-bold text-white flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF3B70]/30 to-[#A855F7]/30 border border-[#FF3B70]/40 flex items-center justify-center font-black text-xs text-[#FF3B70]">
                        {u.name ? u.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      {u.name}
                    </td>
                    <td className="p-4 text-gray-400 font-mono">{u.email}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wide ${
                          u.isPremium
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-gray-800 text-gray-400 border border-gray-700'
                        }`}
                      >
                        {u.isPremium ? '⭐ PRO PREMIUM' : 'FREE TIER'}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400">{new Date(u.createdAt).toLocaleDateString()}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                        ● ACTIVE
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Control Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#2A2A3C]">
          <div className="text-xs text-gray-400">
            Showing Page <span className="font-bold text-white">{currentPage}</span> of{' '}
            <span className="font-bold text-white">{paginationData.totalPages}</span> ({paginationData.totalUsers} Total Accounts)
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={!paginationData.hasPrevPage || loading}
              className="bg-[#0B0C10] hover:bg-[#1E1E2D] disabled:opacity-40 text-white px-4 py-2 rounded-xl text-xs font-bold border border-[#2A2A3C] transition"
            >
              ◄ Previous
            </button>

            <span className="text-xs font-extrabold text-[#FF3B70] bg-[#FF3B70]/10 px-3 py-1.5 rounded-lg border border-[#FF3B70]/20">
              {currentPage} / {paginationData.totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={!paginationData.hasNextPage || loading}
              className="bg-[#0B0C10] hover:bg-[#1E1E2D] disabled:opacity-40 text-white px-4 py-2 rounded-xl text-xs font-bold border border-[#2A2A3C] transition"
            >
              Next ►
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
