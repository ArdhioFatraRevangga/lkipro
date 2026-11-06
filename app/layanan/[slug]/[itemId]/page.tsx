"use client";

import { notFound } from "next/navigation";
import { armadaDetails } from "../../../data/armada"; 
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Menu, X } from "lucide-react"; 
import { useState, use } from "react"; 

export default function DetailPage({
  params,
}: {
  params: Promise<{ slug: string; itemId: string }>;
}) {
  const resolvedParams = use(params);
  
  const slug = decodeURIComponent(resolvedParams.slug);
  const itemId = decodeURIComponent(resolvedParams.itemId);

  const layanan = armadaDetails[slug];
  if (!layanan) notFound();

  const item = layanan.gallery.find((g) => g.id === itemId);
  if (!item) notFound();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // DIV PEMBUNGKUS (Diubah jadi bg-black dan text-white seperti halaman katalog)
    <div className="flex flex-col min-h-screen bg-black font-sans text-white">
      
      {/* NAVBAR MOBILE (HAMBURGER VIP BULAT) */}
      <button 
        type="button" 
        onClick={() => setIsMobileMenuOpen((prev) => !prev)} 
        className="sm:hidden fixed top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center z-[999999] cursor-pointer touch-manipulation shadow-lg transition-all hover:bg-black/60"
      >
        {isMobileMenuOpen ? (
          <X size={26} className="text-white pointer-events-none" />
        ) : (
          <Menu size={26} className="text-white pointer-events-none" />
        )}
      </button>

      {/* DROPDOWN MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-[85px] right-6 w-[180px] bg-black/70 backdrop-blur-lg flex flex-col z-[999999] shadow-2xl rounded-2xl border border-white/10 overflow-hidden py-2 animate-in fade-in duration-200">
          <Link href="/" className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
          <Link href="/tentang" className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
          <Link href="/layanan" className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
          <Link href="/kontak" className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Kontak Kami</Link>
        </div>
      )}

      {/* NAVBAR UTAMA DESKTOP */}
      <nav className="absolute top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
        <Link href="/" className="flex items-center pointer-events-auto">
          <Image 
            src="/assets/LOGO LKI PRO FORMAL-02.png" 
            alt="LKI Production Logo" 
            width={220} 
            height={50} 
            className="w-40 md:w-56 h-auto object-contain" 
            priority 
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium pointer-events-auto">
          <Link href="/" className="hover:text-[#2eb886] transition">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#2eb886] transition">Kontak Kami</Link>
        </div>
      </nav>

      {/* 2. KONTEN UTAMA */}
      <main className="flex-grow pt-32 pb-16 px-6 md:px-16 max-w-6xl mx-auto w-full">
        
        {/* Tombol Kembali (Di atas gambar) */}
        <Link href={`/layanan/${slug}`} className="inline-flex items-center gap-2 text-gray-400 hover:text-[#2eb886] transition-colors mb-8 font-medium">
          <ArrowLeft size={20} />
          <span>Kembali ke Galeri {layanan.name}</span>
        </Link>

        {/* CONTAINER UTAMA (Kiri Gambar, Kanan Teks) */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          
          {/* Bagian Kiri: Gambar Besar */}
          <div className="w-full md:w-1/2 aspect-square relative rounded-3xl overflow-hidden bg-white shadow-xl flex items-center justify-center p-8">
            <Image 
              src={item.img} 
              alt={item.title} 
              fill 
              className="object-contain p-8 md:p-12 hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Bagian Kanan: Detail & Spesifikasi */}
          <div className="w-full md:w-1/2 flex flex-col justify-center pt-2 md:pt-6">
            
            {/* Tag Kategori (Opsional) */}
            {item.category && (
              <span className="inline-block bg-[#2eb886]/20 text-[#2eb886] border border-[#2eb886]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                {item.category}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{item.title}</h1>
            <div className="w-16 h-1.5 bg-[#2eb886] rounded-full mb-8"></div>
            
            <h2 className="text-xl font-semibold text-gray-300 mb-6">Spesifikasi Teknis:</h2>
            <ul className="space-y-5">
              {item.specs.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-4 bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="text-[#2eb886] shrink-0 mt-0.5" size={24} />
                  <span className="text-gray-300 text-base md:text-lg leading-relaxed">{spec}</span>
                </li>
              ))}
            </ul>

            <a 
              href={`https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20tertarik%20menyewa%20${encodeURIComponent(item.title)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-12 bg-[#2eb886] hover:bg-[#24966d] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center w-full md:w-fit shadow-[0_4px_20px_rgba(46,184,134,0.4)] hover:shadow-[0_6px_25px_rgba(46,184,134,0.6)] hover:-translate-y-1"
            >
              Pesan Alat Ini Sekarang
            </a>
          </div>

        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="w-full mt-auto bg-[#111] text-gray-400 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/LOGO LKI PRO FORMAL-02.png" 
              alt="LKI Production Logo"
              width={200}
              height={45}
              className="w-36 md:w-48 h-auto object-contain"
            />
          </Link>
        </div>
        <div className="text-xs md:text-sm mb-4 md:mb-0">
          © 2026 LKI Production. All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-5">
          <a href="https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
            <Image src="/assets/ig-putih.png" alt="Instagram" width={20} height={20} className="object-contain" />
          </a>
          <a href="https://www.youtube.com/@LKIProduction" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
            <Image src="/assets/youtube-putih.png" alt="YouTube" width={20} height={20} className="object-contain" />
          </a>
          <a href="https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
            <Image src="/assets/tiktok-putih.png" alt="TikTok" width={20} height={20} className="object-contain" />
          </a>
        </div>
      </footer>

    </div>
  );
}