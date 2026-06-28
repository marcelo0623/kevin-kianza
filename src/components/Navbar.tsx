"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo de Kevin Kianza */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="bg-amber-600/80 backdrop-blur-sm text-white font-serif font-bold text-lg w-10 h-10 rounded-lg flex items-center justify-center shadow-md group-hover:bg-amber-700 transition border border-white/20">
            KK
          </span>
          <span className="text-xl font-bold tracking-wider text-white drop-shadow-sm group-hover:text-amber-400 transition font-serif">
            KEVIN KIANZA
          </span>
        </Link>
        
        {/* Liens de navigation style miroir */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-stone-200">
          <Link href="/" className="hover:text-amber-400 transition drop-shadow-sm">Accueil</Link>
          <Link href="#bio" className="hover:text-amber-400 transition drop-shadow-sm">À Propos</Link>
          <Link href="#musique" className="hover:text-amber-400 transition drop-shadow-sm">Musique</Link>
          <Link href="#agenda" className="hover:text-amber-400 transition drop-shadow-sm">Agenda</Link>
          <Link href="#contact" className="hover:text-amber-400 transition drop-shadow-sm">Contact</Link>
        </nav>
      </div>
    </header>
  );
}