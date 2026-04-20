"use client";

import { X, ShoppingBag, Trash2, ExternalLink, Github, Sparkles, Plus } from "lucide-react";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const { items, removeItem, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRemove = (id: string, title: string) => {
    removeItem(id);
    setNotification(`Removed "${title}"`);
    setTimeout(() => setNotification(null), 2000);
  };

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="View collection"
      >
        <div className="relative">
          <div className="flex items-center justify-center w-14 h-14 bg-[--primary] text-[--primary-foreground] shadow-lg shadow-[--primary]/20 transition-all group-hover:scale-110 group-hover:-translate-y-1 active:scale-95">
            <ShoppingBag className="h-6 w-6 transition-transform group-hover:scale-110" />
            {items.length === 0 && (
              <Plus className="absolute -top-1 -right-1 h-4 w-4 bg-[--primary] text-[--primary-foreground] opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[--foreground] text-[--background] text-xs font-bold animate-pulse">
              {items.length}
            </span>
          )}
        </div>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-[--background]/95 backdrop-blur-xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full max-w-md mx-auto">
          <div className="flex items-center justify-between p-6 border-b border-[--border]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-[--primary]" />
              <h2 className="font-display text-xl font-bold">Collection</h2>
              <span className="text-xs px-2 py-0.5 bg-[--primary] text-[--primary-foreground]">
                {items.length}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-[--muted] transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="p-4 bg-[--secondary] animate-float">
                  <Sparkles className="h-8 w-8 text-[--primary]" />
                </div>
                <div className="space-y-2">
                  <p className="font-display text-lg font-bold">Your collection is empty</p>
                  <p className="text-[--muted-foreground] text-sm">
                    Add projects you like to save them for later
                  </p>
                </div>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={item.id}
                  className="p-4 border border-[--border] bg-[--card] space-y-3"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1) ${index * 80}ms, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1) ${index * 80}ms`,
                  }}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-label text-[--primary]">
                      {item.role}
                    </span>
                    <button
                      onClick={() => handleRemove(item.id, item.title)}
                      className="p-1.5 hover:bg-[--secondary] text-[--muted-foreground] hover:text-[--destructive] transition-colors"
                      aria-label="Remove from collection"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="font-display font-bold">{item.title}</h3>
                  <p className="text-body-sm text-[--muted-foreground] line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={item.githubUrl}
                      className="p-2 border border-[--border] hover:border-[--primary] hover:text-[--primary] transition-all text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={item.demoUrl}
                      className="flex items-center gap-1.5 px-3 py-2 bg-[--primary] hover:bg-[--primary]/90 text-[--primary-foreground] text-xs font-medium transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-4 border-t border-[--border] space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[--muted-foreground]">Projects saved</span>
                <span className="font-medium">{items.length}</span>
              </div>
              <button
                onClick={clearCart}
                className="w-full py-3 border border-[--border] hover:border-[--destructive] hover:text-[--destructive] font-medium transition-colors text-sm"
              >
                Clear Collection
              </button>
            </div>
          )}
        </div>
      </div>

      {notification && (
        <div 
          className="fixed bottom-24 right-6 z-50 px-4 py-2 bg-[--foreground] text-[--background] text-sm font-medium animate-fade-in-up"
        >
          {notification}
        </div>
      )}
    </>
  );
}