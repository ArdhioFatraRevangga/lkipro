"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Truck, CheckCircle2 } from "lucide-react"; // Pastikan CheckCircle2 di-import
import Link from "next/link";

export default function LayananPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. DI SINI TEMPAT KAMU MENGEDIT TEKSNYA
  // Kamu tinggal ubah tulisan di dalam tanda kutip pada bagian "desc:"
  const layananList = [
    {
      name: "Sound System",
      desc: "Paket sound system profesional dengan kualitas audio jernih...",
      img: "/assets/loading/IMG_1079.png",
      slug: "sound-system" // <--- Tambahkan ini
    },
    {
      name: "Lighting",
      desc: "Sistem pencahayaan canggih untuk menciptakan atmosfer...",
      img: "/assets/loading/IMG_1072.png",
      slug: "lighting" // <--- Tambahkan ini
    },
    {
      name: "LED Video Tron",
      desc: "Layar LED Videotron beresolusi tinggi...",
      img: "/assets/loading/IMG_1081.png",
      slug: "video-tron" // <--- Tambahkan ini
    },
    {
      name: "Rigging / Stage Alumunium",
      desc: "Rigging / Stage Alumunium",
      img: "/assets/loading/IMG_1074.png",
      slug: "rigging-stage" // <--- Tambahkan ini (Catatan: Mungkin kamu ingin mengganti slug ini agar tidak bentrok dengan truk-box)
    },
  ];

  return (
    // 1. DIV UTAMA PEMBUNGKUS HALAMAN (Tambahkan flex-col dan min-h-screen)
    <div className="relative flex flex-col min-h-screen bg-[#f8f9fa] font-sans text-gray-900">

      {/* ====================================================== */}
      {/* 1. TOMBOL HAMBURGER VIP (Desain Bulat Elegan) */}
      {/* ====================================================== */}
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

      {/* ====================================================== */}
      {/* 2. MENU DROPDOWN (Desain Glassmorphism Modern) */}
      {/* ====================================================== */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-[85px] right-6 w-[180px] bg-black/70 backdrop-blur-lg flex flex-col z-[999999] shadow-2xl rounded-2xl border border-white/10 overflow-hidden py-2 animate-in fade-in duration-200">
          <Link
            href="/"
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link
            href="/tentang"
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tentang
          </Link>
          <Link
            href="/layanan"
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Layanan
          </Link>
          <Link
            href="/kontak"
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontak Kami
          </Link>
        </div>
      )}

      {/* ====================================================== */}
      {/* NAVBAR UTAMA */}
      {/* ====================================================== */}
      <nav className="absolute top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
        <Link href="/" className="flex items-center pointer-events-auto">
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png"
            alt="LKI Production Logo"
            width={220}
            height={50}
            className="w-40 md:w-56 h-auto object-contain" priority />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium pointer-events-auto">
          <Link href="/" className="hover:text-[#2eb886] transition">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#2eb886] transition">Kontak Kami</Link>
        </div>
      </nav>

      {/* 2. TAG MAIN (Konten akan mengisi sisa ruang dengan flex-grow) */}
      <main className="flex-grow pb-20">
        
        {/* HEADER LAYANAN DENGAN BACKGROUND FOTO */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-6 md:px-16 text-center overflow-hidden">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/loading/IMG_1071.png"
              alt="Background Layanan LKI Production"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Overlay hitam transparan agar teks putih tetap terbaca jelas */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Konten Teks */}
          <div className="relative z-20 text-white max-w-3xl mx-auto mt-4">
            <Truck className="w-16 h-16 text-[#2eb886] mx-auto mb-6 drop-shadow-lg" strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
              Layanan Event
            </h1>
            <p className="text-gray-300 text-base md:text-lg drop-shadow">
              Katalog lengkap perlengkapan event dan logistik LKI Production.
            </p>
          </div>
          
        </section>

        {/* ====================================================== */}
        {/* KATALOG ZIG-ZAG DENGAN TEKS DESKRIPSI */}
        {/* ====================================================== */}
        <section className="py-16 md:py-20 px-6 md:px-16">
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            {layananList.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <Link
                  href={`/layanan/${item.slug}`}
                  key={idx}
                  className={`flex flex-col md:flex-row items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-6 md:p-8 w-full gap-8 md:gap-12 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >

                  {/* Kotak Gambar */}
                  <div className="w-full md:w-[350px] h-[220px] bg-gray-100 rounded-lg relative overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Area Teks (Judul, Deskripsi, Status) */}
                  <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>

                    {/* 2. TEKS "Tersedia & Siap Operasi" ADA DI SINI
                    <div className="flex items-center justify-center md:justify-start gap-2 text-[#2eb886] font-medium">
                      <CheckCircle2 size={20} />
                      <span>Tersedia & Siap Operasi</span>
                    </div> */}
                  </div>

                </Link>
              );
            })}
          </div>
        </section>

      </main>

      {/* 3. FOOTER (Diletakkan di luar tag <main> dan ditambahkan w-full) */}
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
          {/* Link Instagram */}
          <a
            href="https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Image src="/assets/ig-putih.png" alt="Instagram" width={20} height={20} className="object-contain" />
          </a>

          {/* Link YouTube */}
          <a
            href="https://www.youtube.com/@LKIProduction"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Image src="/assets/youtube-putih.png" alt="YouTube" width={20} height={20} className="object-contain" />
          </a>

          {/* Link TikTok */}
          <a
            href="https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Image src="/assets/tiktok-putih.png" alt="TikTok" width={20} height={20} className="object-contain" />
          </a>
        </div>
      </footer>

    </div>
  );
}