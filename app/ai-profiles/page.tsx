'use client';

import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../config/apiConfig';

interface AIProfile {
  id: string;
  name: string;
  avatar: string;
  photos?: string[];
  age: number;
  gender: string;
  occupation: string;
  location: string;
  bio: string;
  hobbies: string[];
  flirtingLevel: number;
  sarcasmLevel: number;
  kindnessLevel: number;
  emotionalIntelligence: number;
  isActive: boolean;
}

export default function AIProfilesAdminPage() {
  const [profiles, setProfiles] = useState<AIProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProfile, setEditingProfile] = useState<AIProfile | null>(null);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'NORTH_INDIAN'>('ALL');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [paginationData, setPaginationData] = useState({
    totalProfiles: 0,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  // Form State for creating/editing an AI character with multiple photos
  const [formData, setFormData] = useState({
    name: '',
    photos: [] as string[],
    newPhotoInput: '',
    age: 22,
    gender: 'FEMALE',
    occupation: '',
    location: '',
    bio: '',
    hobbies: 'Coffee, Music, Photography',
    flirtingLevel: 7,
    sarcasmLevel: 4,
    kindnessLevel: 9,
    emotionalIntelligence: 9,
  });

  useEffect(() => {
    fetchProfiles(currentPage, itemsPerPage, search);
  }, [currentPage, itemsPerPage]);

  const fetchProfiles = async (
    page: number = 1,
    limit: number = 12,
    searchQuery: string = search
  ) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        search: searchQuery,
        paginated: 'true',
      });

      const res = await fetch(`${API_BASE_URL}/admin/ai-profiles?${queryParams.toString()}`);
      const data = await res.json();

      if (data.profiles) {
        setProfiles(data.profiles);
        setPaginationData(data.pagination);
      } else if (Array.isArray(data)) {
        setProfiles(data);
      }
    } catch (err) {
      console.log('Error fetching AI profiles:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchProfiles(1, itemsPerPage, search);
  };

  const handleOpenCreateModal = () => {
    setEditingProfile(null);
    setFormData({
      name: '',
      photos: [],
      newPhotoInput: '',
      age: 22,
      gender: 'FEMALE',
      occupation: '',
      location: '',
      bio: '',
      hobbies: 'Coffee, Music, Photography',
      flirtingLevel: 7,
      sarcasmLevel: 4,
      kindnessLevel: 9,
      emotionalIntelligence: 9,
    });
    setShowModal(true);
  };

  const handleOpenEditModal = (profile: AIProfile) => {
    setEditingProfile(profile);
    const photoList = profile.photos && profile.photos.length > 0 ? profile.photos : [profile.avatar];

    setFormData({
      name: profile.name,
      photos: photoList,
      newPhotoInput: '',
      age: profile.age,
      gender: profile.gender || 'FEMALE',
      occupation: profile.occupation,
      location: profile.location || 'India',
      bio: profile.bio,
      hobbies: Array.isArray(profile.hobbies) ? profile.hobbies.join(', ') : String(profile.hobbies || ''),
      flirtingLevel: profile.flirtingLevel || 7,
      sarcasmLevel: profile.sarcasmLevel || 4,
      kindnessLevel: profile.kindnessLevel || 9,
      emotionalIntelligence: profile.emotionalIntelligence || 9,
    });
    setShowModal(true);
  };

  const handleToggleActive = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/admin/ai-profiles/${id}/toggle`, {
        method: 'PATCH',
      });
      if (res.ok) {
        setProfiles((prev) =>
          prev.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p))
        );
      }
    } catch (err) {
      console.log('Error toggling profile:', err);
    }
  };

  const handleDeleteProfile = async (id: string) => {
    if (!confirm('Are you sure you want to delete this AI character?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/admin/ai-profiles/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setProfiles((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.log('Error deleting profile:', err);
    }
  };

  const handlePhotoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          const newPhoto = reader.result;
          setFormData((prev) => ({
            ...prev,
            photos: [...prev.photos, newPhoto],
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddPhotoUrl = () => {
    if (!formData.newPhotoInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, prev.newPhotoInput.trim()],
      newPhotoInput: '',
    }));
  };

  const handleRemovePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const hobbiesArr = formData.hobbies.split(',').map((h) => h.trim());

      const photosList = formData.photos.length > 0
        ? formData.photos
        : ['https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80'];

      const bodyData = {
        name: formData.name,
        avatar: photosList[0],
        photos: photosList,
        age: formData.age,
        gender: formData.gender,
        occupation: formData.occupation,
        location: formData.location || 'India',
        bio: formData.bio,
        hobbies: hobbiesArr,
        flirtingLevel: formData.flirtingLevel,
        sarcasmLevel: formData.sarcasmLevel,
        kindnessLevel: formData.kindnessLevel,
        emotionalIntelligence: formData.emotionalIntelligence,
        promptTemplate: `You are ${formData.name}, a ${formData.occupation} living in ${formData.location}. Speak in warm Hinglish WhatsApp style!`,
      };

      const url = editingProfile
        ? `${API_BASE_URL}/admin/ai-profiles/${editingProfile.id}`
        : `${API_BASE_URL}/admin/ai-profiles`;

      const method = editingProfile ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      if (res.ok) {
        setShowModal(false);
        setEditingProfile(null);
        fetchProfiles(currentPage, itemsPerPage, search);
      }
    } catch (err) {
      console.log('Error saving character:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProfiles = profiles.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.occupation.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());

    if (filterCategory === 'ALL') return matchesSearch;
    if (filterCategory === 'NORTH_INDIAN')
      return matchesSearch && (p.location.includes('Shimla') || p.location.includes('Chandigarh') || p.location.includes('Lucknow') || p.location.includes('Delhi') || p.location.includes('Punjab'));
    return matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gradient-to-r from-[#13141C] via-[#1A1C29] to-[#13141C] p-6 rounded-3xl border border-[#2A2A3C] shadow-2xl gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FF3B70]/10 text-[#FF3B70] border border-[#FF3B70]/20 text-[11px] font-bold uppercase tracking-wider">
              Paginated & Cloudinary Studio ☁️
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            AI Character Studio & Personality Lab 🎭
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Craft, update, and manage photorealistic AI female profiles for the mobile swipe deck.
          </p>
        </div>

        <button
          onClick={handleOpenCreateModal}
          className="bg-gradient-to-r from-[#FF3B70] to-[#A855F7] hover:opacity-90 text-white px-6 py-3 rounded-2xl text-xs font-extrabold shadow-xl shadow-[#FF3B70]/25 transition active:scale-95 flex items-center gap-2 self-stretch sm:self-auto justify-center"
        >
          <span>✨</span> Craft New AI Character
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#13141C]/80 backdrop-blur-xl p-4 rounded-2xl border border-[#2A2A3C]">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <button
            onClick={() => setFilterCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition whitespace-nowrap ${
              filterCategory === 'ALL'
                ? 'bg-[#FF3B70] text-white shadow-lg shadow-[#FF3B70]/30'
                : 'bg-[#1F2130] text-gray-400 hover:text-white'
            }`}
          >
            All Characters ({paginationData.totalProfiles || profiles.length})
          </button>
          <button
            onClick={() => setFilterCategory('NORTH_INDIAN')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition whitespace-nowrap ${
              filterCategory === 'NORTH_INDIAN'
                ? 'bg-[#FF3B70] text-white shadow-lg shadow-[#FF3B70]/30'
                : 'bg-[#1F2130] text-gray-400 hover:text-white'
            }`}
          >
            🏔️ North Indian Girls
          </button>
        </div>

        <form onSubmit={handleSearchSubmit} className="flex gap-2 w-full sm:w-80">
          <input
            type="text"
            placeholder="Search by name, city, or profession..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0B0C10] border border-[#2A2A3C] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3B70]"
          />
          <button
            type="submit"
            className="bg-[#FF3B70] text-white px-4 py-2.5 rounded-xl text-xs font-bold"
          >
            Search
          </button>
        </form>
      </div>

      {/* AI Profiles Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20 text-gray-400 text-sm">
          Loading Page {currentPage} of AI Characters...
        </div>
      ) : filteredProfiles.length === 0 ? (
        <div className="text-center py-20 bg-[#13141C] rounded-3xl border border-[#2A2A3C]">
          <span className="text-4xl">🎭</span>
          <p className="text-gray-300 font-bold mt-4 text-base">No AI Profiles Found</p>
          <p className="text-gray-500 text-xs mt-1">Try adjusting your search filters or craft a new profile.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfiles.map((p) => {
            const photoList = p.photos && p.photos.length > 0 ? p.photos : [p.avatar];
            return (
              <div
                key={p.id}
                className="bg-[#13141C] rounded-3xl border border-[#2A2A3C] overflow-hidden hover:border-[#FF3B70]/50 transition group flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Avatar & Badges */}
                  <div className="relative h-64 overflow-hidden bg-[#0B0C10]">
                    <img
                      src={p.avatar}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13141C] via-transparent to-transparent" />

                    {/* Multi-Photo Count Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold text-white flex items-center gap-1">
                      <span>📸</span> {photoList.length} Photos
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-xl font-extrabold text-white">{p.name}, {p.age}</h3>
                          <p className="text-xs text-gray-300 font-medium">{p.occupation}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-lg bg-[#FF3B70]/20 text-[#FF3B70] text-[10px] font-bold border border-[#FF3B70]/30">
                          📍 {p.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{p.bio}</p>

                    {/* Trait Indicators */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#0B0C10] p-3 rounded-2xl border border-[#2A2A3C]">
                      <div>
                        <span className="text-gray-500 block">Flirting</span>
                        <span className="font-bold text-[#FF3B70]">{p.flirtingLevel}/10</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Kindness</span>
                        <span className="font-bold text-purple-400">{p.kindnessLevel}/10</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions (Edit, Active, Delete) */}
                <div className="p-5 pt-0 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleOpenEditModal(p)}
                    className="bg-[#1F2130] hover:bg-[#2A2A3C] text-white px-3 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1"
                  >
                    <span>✏️</span> Edit
                  </button>

                  <button
                    onClick={() => handleToggleActive(p.id)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                      p.isActive
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20'
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{p.isActive ? '🟢 Active' : '⚪ Paused'}</span>
                  </button>

                  <button
                    onClick={() => handleDeleteProfile(p.id)}
                    className="bg-red-500/10 hover:bg-red-500/20 text-red-400 p-2.5 rounded-xl text-xs font-bold transition"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Control Bar */}
      {paginationData.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-[#13141C] rounded-2xl border border-[#2A2A3C]">
          <div className="text-xs text-gray-400">
            Showing Page <span className="font-bold text-white">{currentPage}</span> of{' '}
            <span className="font-bold text-white">{paginationData.totalPages}</span> ({paginationData.totalProfiles} Total AI Profiles)
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
      )}

      {/* Craft / Edit Character Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#13141C] border border-[#2A2A3C] rounded-3xl w-full max-w-2xl p-6 sm:p-8 space-y-6 shadow-2xl my-8">
            <div className="flex justify-between items-center border-b border-[#2A2A3C] pb-4">
              <div>
                <h2 className="text-xl font-black text-white">
                  {editingProfile ? `Edit Profile: ${editingProfile.name} ✏️` : 'Craft AI Character (Multi-Photo) 🎭'}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">Upload multiple photos to automatically route through Cloudinary CDN.</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white text-lg p-2"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Multiple Photos Gallery Uploader */}
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-2">
                  Character Photos Gallery ({formData.photos.length} Added)
                </label>

                {/* Photos Thumbnails */}
                {formData.photos.length > 0 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-3 mb-3">
                    {formData.photos.map((pUrl, idx) => (
                      <div key={idx} className="relative group shrink-0">
                        <img
                          src={pUrl}
                          alt={`Photo ${idx + 1}`}
                          className="w-20 h-20 rounded-2xl object-cover border-2 border-[#FF3B70]"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(idx)}
                          className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shadow-lg"
                        >
                          ✕
                        </button>
                        {idx === 0 && (
                          <span className="absolute bottom-1 left-1 bg-[#FF3B70] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-md">
                            Main
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Upload File Input */}
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoFileUpload}
                    className="w-full sm:w-auto text-xs text-gray-400 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#FF3B70]/20 file:text-[#FF3B70] hover:file:bg-[#FF3B70]/30 cursor-pointer"
                  />

                  <div className="flex gap-2 w-full sm:flex-1">
                    <input
                      type="text"
                      placeholder="Paste Image URL (https://...)"
                      value={formData.newPhotoInput}
                      onChange={(e) => setFormData({ ...formData, newPhotoInput: e.target.value })}
                      className="flex-1 bg-[#0B0C10] border border-[#2A2A3C] rounded-xl px-3 py-2 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={handleAddPhotoUrl}
                      className="bg-[#2A2A3C] hover:bg-[#3A3A4C] text-white px-3 py-2 rounded-xl text-xs font-bold"
                    >
                      + Add URL
                    </button>
                  </div>
                </div>
              </div>

              {/* Name & Occupation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mehak"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0C10] border border-[#2A2A3C] rounded-xl px-4 py-2.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Occupation & Role</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fashion Designer"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full bg-[#0B0C10] border border-[#2A2A3C] rounded-xl px-4 py-2.5 text-xs text-white"
                  />
                </div>
              </div>

              {/* Location & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Location & City</label>
                  <input
                    type="text"
                    placeholder="e.g. Chandigarh, Punjab"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#0B0C10] border border-[#2A2A3C] rounded-xl px-4 py-2.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                    className="w-full bg-[#0B0C10] border border-[#2A2A3C] rounded-xl px-4 py-2.5 text-xs text-white"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">Bio</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Character story and background..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full bg-[#0B0C10] border border-[#2A2A3C] rounded-xl p-3 text-xs text-white"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-[#2A2A3C]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-[#1F2130] text-gray-300 py-3 rounded-2xl text-xs font-bold hover:bg-[#2A2A3C]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-[#FF3B70] to-[#A855F7] text-white py-3 rounded-2xl text-xs font-extrabold shadow-lg shadow-[#FF3B70]/25"
                >
                  {loading ? 'Cloudinary Uploading...' : (editingProfile ? 'Update Character Profile ✨' : 'Save Character with Multi-Photos ✨')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
