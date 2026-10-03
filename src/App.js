import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import { productsData } from './data/products';

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['All', 'Unstitched', 'Men', 'Fancy'];

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <Navbar
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Banner */}
      <div className="bg-neutral-100 py-12 px-6 text-center border-b border-neutral-200">
        <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-neutral-900">
          New Season Collection
        </h1>
        <p className="text-xs tracking-widest text-neutral-500 uppercase mt-2">
          Discover Premium Unstitched & Stitched Fabric
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main className="flex-1 p-6">
          <div className="mb-6 flex justify-between items-center border-b pb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800">
              {selectedCategory === 'All' ? 'All Fabrics' : selectedCategory}
            </h2>
            <span className="text-xs text-neutral-500">{filteredProducts.length} Items</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-white h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest">Shopping Bag</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-neutral-500 hover:text-black">✕</button>
              </div>

              {cart.length === 0 ? (
                <p className="text-neutral-400 text-xs text-center py-8">Your bag is empty.</p>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-3 text-xs">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-neutral-500">PKR {item.price} × {item.quantity}</p>
                      </div>
                      <span className="font-bold">PKR {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4 text-sm font-bold">
                  <span>Total:</span>
                  <span>PKR {cartTotal.toLocaleString()}</span>
                </div>
                <button className="w-full bg-neutral-900 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-black">
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}