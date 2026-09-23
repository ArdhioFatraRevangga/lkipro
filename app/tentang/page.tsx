"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TentangPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white font-sans text-gray-900">
      
      {/* ====================================================== */}
      {/* 1. TOMBOL HAMBURGER JALUR VIP */}
      {/* ====================================================== */}
      <button 
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="md:hidden fixed top-6 right-6 w-12 h-12 bg-black/30 border border-white/20 rounded-lg flex items-center justify-center z-[999999] cursor-pointer touch-manipulation shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X size={32} className="text-white pointer-events-none" />
        ) : (
          <Menu size={32} className="text-white pointer-events-none" />
        )}
      </button>

      {/* ====================================================== */}
      {/* 2. MENU DROPDOWN KOTAK ABU-ABU */}
      {/* ====================================================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[85px] right-6 w-[140px] bg-[#757575] flex flex-col z-[999999] shadow-2xl rounded border border-white/20">
          <Link 
            href="/" 
            className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link 
            href="/tentang" 
            className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tentang
          </Link>
          <Link 
            href="/armada" 
            className="py-3 text-center text-white text-base font-semibold hover:bg-gray-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Armada
          </Link>
        </div>
      )}

      {/* ====================================================== */}
      {/* 3. NAVBAR UTAMA */}
      {/* ====================================================== */}
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
          {/* Menu aktif diberi garis bawah */}
          <Link href="/tentang" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Tentang</Link>
          <Link href="/armada" className="hover:text-[#2eb886] transition">Armada</Link>
        </div>
        
      </nav>

      {/* HEADER TENTANG */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center px-6 md:px-16 text-center">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        </div>

        {/* TEKS SEBELUMNYA DIGANTI MENJADI VIDEO */}
        <div className="relative z-20 mt-16 md:mt-0 w-full max-w-3xl mx-auto flex justify-center">
          <video 
            src="/assets/LKI_Production_logo_animation.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto max-h-[250px] md:max-h-[350px] object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* DESKRIPSI UTAMA */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Bagian Gambar Kiri (Tersusun Atas-Bawah Sejajar) */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
          
          {/* Gambar Atas: halaman.png */}
          <div className="w-full h-[200px] md:h-[260px] relative rounded-2xl overflow-hidden shadow-md">
            <Image 
              src="/assets/halaman.png" 
              alt="Halaman Depan LKI Production" 
              fill
              className="object-cover" 
            />
          </div>

          {/* Gambar Bawah: gudang.png */}
          <div className="w-full h-[200px] md:h-[260px] relative rounded-2xl overflow-hidden shadow-md">
            <Image 
              src="/assets/gudang.png" 
              alt="Fasilitas Dalam LKI Production" 
              fill
              className="object-cover" 
            />
          </div>
          
        </div>

        {/* Bagian Teks Kanan */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One Stop Service for Event Production</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            LKI Production berdedikasi untuk menghadirkan pengalaman produksi acara dan visual terbaik. Berlokasi di Plampangan, Indonesia, kami menyediakan layanan menyeluruh untuk memastikan setiap acara dan kebutuhan kreatif Anda berjalan dengan sempurna dan berkesan.
          </p>
          <div className="space-y-4">
            {["Stage & Rigging", "Videotron", "Professional Sound System", "Lighting System"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2eb886]" size={24} />
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="bg-gray-50 py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-2xl font-bold mb-4 text-[#2eb886]">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi partner produksi dan visual terdepan di Indonesia yang dikenal karena inovasi, kualitas tanpa kompromi, dan profesionalisme tinggi dalam setiap karya.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-2xl font-bold mb-4 text-[#2eb886]">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Memberikan solusi *end-to-end* untuk event dan produksi kreatif, menghadirkan peralatan berstandar tinggi, dan membangun kolaborasi yang solid dengan setiap klien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-gray-400 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left">
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
          <Image src="/assets/ig-putih.png" alt="Instagram" width={20} height={20} className="object-contain hover:opacity-75 cursor-pointer transition" />
          <Image src="/assets/youtube-putih.png" alt="YouTube" width={20} height={20} className="object-contain hover:opacity-75 cursor-pointer transition" />
          <Image src="/assets/tiktok-putih.png" alt="TikTok" width={20} height={20} className="object-contain hover:opacity-75 cursor-pointer transition" />
        </div>
      </footer>

    </main>
  );
}