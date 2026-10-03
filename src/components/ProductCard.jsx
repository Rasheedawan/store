import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group bg-white border border-neutral-100 flex flex-col relative">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-neutral-900 text-white text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1">
          {product.badge}
        </span>
      )}

      {/* Image Container with Zoom and Fade Overlay */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Hover Dark Overlay with Buy/Add Buttons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 gap-2">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full py-2.5 bg-white text-neutral-900 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors duration-200"
          >
            Add To Cart
          </button>
          <button
            onClick={() => alert(`Order placed for ${product.name}`)}
            className="w-full py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col flex-grow text-center">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{product.category}</span>
        <h4 className="text-sm font-medium text-neutral-800 mt-1 line-clamp-1">{product.name}</h4>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-sm font-bold text-neutral-900">PKR {product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-neutral-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}