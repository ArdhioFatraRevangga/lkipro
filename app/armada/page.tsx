"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Truck, CheckCircle2 } from "lucide-react"; // Pastikan CheckCircle2 di-import
import Link from "next/link";

export default function ArmadaPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. DI SINI TEMPAT KAMU MENGEDIT TEKSNYA
  // Kamu tinggal ubah tulisan di dalam tanda kutip pada bagian "desc:"
  const armadaList = [
    { 
      name: "Sound System", 
      desc: "Paket sound system profesional dengan kualitas audio jernih...",
      img: "/assets/gudang.png",
      slug: "sound-system" // <--- Tambahkan ini
    },
    { 
      name: "Lighting", 
      desc: "Sistem pencahayaan canggih untuk menciptakan atmosfer...",
      img: "/assets/halaman.png",
      slug: "lighting" // <--- Tambahkan ini
    },
    { 
      name: "LED Video Tron", 
      desc: "Layar LED Videotron beresolusi tinggi...",
      img: "/assets/gudang.png",
      slug: "video-tron" // <--- Tambahkan ini
    },
    // { 
    //   name: "Truk Box Fuso (Kapasitas Besar)", 
    //   desc: "Armada utama untuk pengiriman logistik berat...",
    //   img: "/assets/halaman.png",
    //   slug: "truk-box" // <--- Tambahkan ini
    // },
    { 
      name: "Reaging / Stage Alumunium", 
      desc: "Panggung",
      img: "/assets/halaman.png",
      slug: "truk-box" // <--- Tambahkan ini
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#f8f9fa] font-sans text-gray-900 pb-20">
      
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
            href="/armada" 
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Armada
          </Link>
        </div>
      )}

      {/* ====================================================== */}
      {/* NAVBAR UTAMA */}
      {/* ====================================================== */}
      <nav className="absolute top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
        <Link href="/" className="flex items-center pointer-events-auto">
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-40 md:w-56 h-auto object-contain" priority />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium pointer-events-auto">
          <Link href="/" className="hover:text-[#2eb886] transition">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          <Link href="/armada" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Layanan</Link>
        </div>
      </nav>

      {/* HEADER ARMADA */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-6 md:px-16 text-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1712] to-black opacity-80" />
        </div>
        <div className="relative z-20 text-white max-w-3xl mx-auto mt-4">
          <Truck className="w-16 h-16 text-[#2eb886] mx-auto mb-6" strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Layanan Booking & Event</h1>
          <p className="text-gray-300 text-base md:text-lg">Katalog lengkap perlengkapan event dan logistik LKI Production.</p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* KATALOG ZIG-ZAG DENGAN TEKS DESKRIPSI */}
      {/* ====================================================== */}
      <section className="py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {armadaList.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <Link 
    href={`/armada/${item.slug}`} 
    key={idx} 
    className={`flex flex-col md:flex-row items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-6 md:p-8 w-full gap-8 md:gap-12 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer ${
      isEven ? "md:flex-row" : "md:flex-row-reverse"
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
  );
}