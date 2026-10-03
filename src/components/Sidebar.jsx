import React from 'react';

export default function Sidebar({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <aside className="w-full md:w-60 bg-white p-6 border-r border-neutral-100 min-h-[calc(100vh-120px)]">
      <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest border-b pb-3 mb-6">
        Filter By Category
      </h3>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left text-xs uppercase tracking-wider py-2 px-3 transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}