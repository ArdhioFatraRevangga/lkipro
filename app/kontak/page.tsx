"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"; // Import disesuaikan

export default function KontakPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // 1. DIV UTAMA PEMBUNGKUS HALAMAN
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      
      {/* TOMBOL MENU MOBILE */}
      <button 
        type="button" 
        onClick={() => setIsMobileMenuOpen((prev) => !prev)} 
        className="md:hidden fixed top-6 right-6 w-12 h-12 bg-black/30 border border-white/20 rounded-lg flex items-center justify-center z-[99999] cursor-pointer shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X size={32} className="text-white pointer-events-none" />
        ) : (
          <Menu size={32} className="text-white pointer-events-none" />
        )}
      </button>

      {/* DROPDOWN MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[85px] right-6 w-[160px] bg-[#757575] flex flex-col z-[99999] shadow-2xl rounded border border-white/20">
          <Link href="/" className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
          <Link href="/tentang" className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
          <Link href="/layanan" className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
          <Link href="/kontak" className="py-3 text-center text-white text-base font-semibold hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Kontak Kami</Link>
        </div>
      )}

      {/* NAVBAR DESKTOP */}
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
          <Link href="/layanan" className="hover:text-[#2eb886] transition">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Kontak Kami</Link>
        </div>
      </nav>

      {/* 2. TAG MAIN (Konten akan mengisi sisa ruang dengan flex-grow) */}
      <main className="flex-grow pb-20">
        
        {/* HERO SECTION */}
        <section className="relative pt-36 pb-16 px-6 md:px-16 text-center bg-gradient-to-b from-zinc-900 to-black">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#2eb886] font-bold tracking-widest text-xs md:text-sm block mb-3 uppercase">
              HUBUNGI KAMI
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Mari Bicara Tentang Proyek Anda
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Tim LKI Production siap membantu kebutuhan sound system, lighting, videotron, dan armada event Anda secara profesional.
            </p>
          </div>
        </section>

        {/* GRID KARTU KONTAK */}
        <section className="max-w-6xl mx-auto px-6 md:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* WhatsApp / Phone */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#2eb886] transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#2eb886]/10 text-[#2eb886] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Customer Service</h3>
              <p className="text-gray-400 text-sm mb-4">Konsultasi cepat via WhatsApp</p>
              <a 
                href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20konsultasi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#2eb886] font-semibold text-sm hover:underline"
              >
                +62 812 233 777
              </a>
            </div>

            {/* Location */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#2eb886] transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#2eb886]/10 text-[#2eb886] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Lokasi Gudang & Workshop</h3>
              <p className="text-gray-400 text-sm mb-4">Plampangan, Jugo, Kesamben, Kabupaten Blitar, Jawa Timur</p>
              <span className="text-[#2eb886] font-semibold text-sm">Indonesia</span>
            </div>

            {/* Operational Hours */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#2eb886] transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#2eb886]/10 text-[#2eb886] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Jam Operasional</h3>
              <p className="text-gray-400 text-sm mb-1">Senin - Sabtu: 08:00 - 17:00</p>
              <p className="text-gray-400 text-sm">Layanan Event: 24 Jam Non-Stop</p>
            </div>

          </div>

          {/* SECTION PETA DAN KONSULTASI QUICK ACTION */}
          <div className="bg-gradient-to-r from-zinc-900 via-[#2eb886]/10 to-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Butuh Penawaran Harga Khusus Event?</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Diskusikan skala event Anda bersama tim kami. Kami siap memberikan saran paket sound system, lighting, dan panggung yang paling efisien.
              </p>
            </div>
            <a
              href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20meminta%20penawaran%20harga%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#2eb886] hover:bg-[#259b70] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shrink-0"
            >
              {/* Menggunakan logo WA kustom dari folder public */}
              <Image 
                src="/assets/wa-putih.png" 
                alt="WhatsApp Logo" 
                width={24} 
                height={24} 
                className="object-contain"
              />
              <span>Chat WhatsApp Sekarang</span>
            </a>
          </div>
        </section>

      </main>

      {/* 3. FOOTER (Di luar tag main, otomatis full width) */}
      <footer className="w-full bg-[#111] text-gray-400 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left">
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
          {/* Link Instagram */}
          <a href="https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
            <Image src="/assets/ig-putih.png" alt="Instagram" width={20} height={20} className="object-contain" />
          </a>
          {/* Link YouTube */}
          <a href="https://www.youtube.com/@LKIProduction" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
            <Image src="/assets/youtube-putih.png" alt="YouTube" width={20} height={20} className="object-contain" />
          </a>
          {/* Link TikTok */}
          <a href="https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
            <Image src="/assets/tiktok-putih.png" alt="TikTok" width={20} height={20} className="object-contain" />
          </a>
        </div>
      </footer>

    </div>
  );
}