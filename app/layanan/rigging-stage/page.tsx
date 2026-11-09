"use client";

import { notFound } from "next/navigation";
import { armadaDetails } from "../../data/armada"; 
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useState, useEffect } from "react"; 

export default function RiggingStagePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const kategoriLayanan = armadaDetails["rigging-stage"];
  if (!kategoriLayanan) notFound();

  const groupedGallery = kategoriLayanan.gallery.reduce((acc, item) => {
    const category = item.category ? item.category.toUpperCase() : "LAINNYA";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof kategoriLayanan.gallery>);

  const sortedCategories = Object.keys(groupedGallery).sort((a, b) => {
    if (a.includes("RING")) return -1;
    if (b.includes("RING")) return 1;
    if (a.includes("ALUMUNIUM")) return -1;
    if (b.includes("ALUMUNIUM")) return 1;
    return 0;
  });

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      
      {/* TOMBOL HAMBURGER MOBILE */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="sm:hidden fixed top-6 right-6 w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center z-[999999] cursor-pointer shadow-2xl"
      >
        {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-[85px] right-6 w-[200px] bg-[#0a1914]/90 backdrop-blur-2xl flex flex-col z-[999999] shadow-2xl rounded-3xl border border-white/10 overflow-hidden py-3">
          {["Beranda", "Tentang", "Layanan", "Kontak Kami"].map((item, idx) => {
            const path = item === "Beranda" ? "/" : item === "Kontak Kami" ? "/kontak" : `/${item.toLowerCase()}`;
            return (
              <Link key={idx} href={path} className="py-3 px-6 text-white/80 text-sm font-semibold hover:bg-white/10 hover:text-[#2eb886]" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </Link>
            );
          })}
        </div>
      )}

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-16 py-4 md:py-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-lg shadow-lg py-4 border-b border-white/10" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
        <Link href="/" className={`flex items-center transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-36 md:w-52 h-auto object-contain" priority />
        </Link>
        <div className="hidden sm:flex items-center gap-10 text-sm font-medium text-white/90">
          <Link href="/" className="hover:text-[#2eb886] transition">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#2eb886] transition">Kontak Kami</Link>
        </div>
      </nav>

      {/* HERO SECTION HITAM */}
      <section className="pt-32 pb-16 px-6 md:px-16 bg-black text-white relative text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-wider uppercase">
            {kategoriLayanan.name}
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            {kategoriLayanan.desc}
          </p>
        </div>
      </section>

      {/* AREA UTAMA (MURNI GALERI TANPA LINK DETAIL) */}
      <main className="flex-grow py-16 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <Link href="/layanan" className="inline-flex items-center text-gray-500 hover:text-[#2eb886] transition-colors mb-16 font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Layanan
          </Link>

          {sortedCategories.map((categoryName) => {
            const items = groupedGallery[categoryName];
            return (
              <div key={categoryName} className="mb-20 text-center">
                
                {/* Judul Kategori */}
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-gray-900 mb-10">
                  REAGGING/STAGE {categoryName}
                </h2>

                {/* Grid 4 Kolom Murni Gambar (Tanpa Link / Terputus) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {items.map((item, index) => (
                    <div 
                      key={`${item.id}-${index}`}
                      className="group block"
                    >
                      <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-100 rounded-xl shadow-md">
                        <Image 
                          src={item.img} 
                          alt={item.title || "Rigging Stage"} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full mt-auto bg-[#111] text-gray-500 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="inline-block">
            <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={180} height={40} className="w-32 md:w-40 h-auto object-contain opacity-70" />
          </Link>
        </div>
        <div className="text-xs md:text-sm font-medium">
          © 2026 LKI Production. All rights reserved.
        </div>
      </footer>
    </div>
  );
}