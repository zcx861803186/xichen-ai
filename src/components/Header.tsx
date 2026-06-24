"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            晨曦集团
          </span>
          <span className="ml-2 text-sm text-zinc-400 font-normal">AI 自动化服务</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            首页
          </Link>
          <Link href="/capabilities" className="hover:text-amber-600 transition-colors">
            能力
          </Link>
          <Link href="/products" className="hover:text-amber-600 transition-colors">
            服务
          </Link>
          <Link href="/blog" className="hover:text-amber-600 transition-colors">
            博客
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm font-medium text-zinc-600">
            <Link href="/" className="py-1 hover:text-amber-600" onClick={() => setMenuOpen(false)}>
              首页
            </Link>
            <Link href="/products" className="py-1 hover:text-amber-600" onClick={() => setMenuOpen(false)}>
              服务
            </Link>
            <Link href="/capabilities" className="py-1 hover:text-amber-600" onClick={() => setMenuOpen(false)}>
              能力
            </Link>
            <Link href="/blog" className="py-1 hover:text-amber-600" onClick={() => setMenuOpen(false)}>
              博客
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
