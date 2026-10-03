import React from 'react';

export default function Navbar({ cartCount, onCartClick, searchQuery, setSearchQuery }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-neutral-900 text-white text-[11px] font-medium text-center py-2 tracking-widest uppercase">
        Free Shipping Nationwide On Orders Above PKR 3,000 | Cash On Delivery Available
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <span className="text-2xl font-serif tracking-[0.25em] font-bold text-neutral-900 uppercase">
              THE FABRIC STORE
            </span>
            <span className="text-[9px] tracking-[0.4em] text-neutral-500 uppercase font-sans -mt-1">
              EST. LUXURY TEXTILES
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/3 relative">
          <input
            type="text"
            placeholder="Search fabrics, collections, suits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-50 text-xs px-4 py-2.5 pr-10 border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
          />
          <svg className="w-4 h-4 text-neutral-400 absolute right-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>

        {/* Cart Icon */}
        <button onClick={onCartClick} className="relative p-2 text-neutral-800 hover:text-black transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-neutral-900 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}