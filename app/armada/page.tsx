"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Truck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ArmadaPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Daftar lengkap armada LKI Production
  const armadaList = [
    { 
      name: "Truk Box Fuso (Kapasitas Besar)", 
      desc: "Armada utama untuk pengiriman logistik berat seperti struktur rigging, panggung, dan videotron berukuran besar dengan aman dari cuaca.", 
      img: "/assets/gudang.png" 
    },
    { 
      name: "Truk Engkel Box", 
      desc: "Mobilitas cepat dan aman untuk pengiriman set sound system profesional dan perangkat lighting ke lokasi acara medium-to-large.", 
      img: "/assets/gudang.png" 
    },
    { 
      name: "Mobil Pick-up Operasional", 
      desc: "Kendaraan taktis untuk operasional ringan, mobilitas kru, dan pengiriman barang-barang kebutuhan mendesak di lapangan.", 
      img: "/assets/gudang.png" 
    },
    { 
      name: "Gudang & Fasilitas Inventaris", 
      desc: "Pusat penyimpanan mandiri yang luas untuk merawat dan menjaga seluruh alat produksi agar selalu dalam kondisi prima sebelum digunakan.", 
      img: "/assets/halaman.png" 
    },
  ];

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
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          {/* Menu aktif diberi garis bawah */}
          <Link href="/armada" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Armada</Link>
        </div>
        
      </nav>

      {/* HEADER ARMADA */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 text-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1712] to-black opacity-80" />
        </div>
        <div className="relative z-20 text-white max-w-3xl mx-auto mt-4">
          <Truck className="w-16 h-16 text-[#2eb886] mx-auto mb-6" strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Armada & Fasilitas <span className="text-[#2eb886]">Milik Sendiri</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            LKI Production didukung oleh armada transportasi logistik dan fasilitas inventaris mandiri. Kami siap mendatangkan kebutuhan event Anda tepat waktu, kapan pun dan di mana pun.
          </p>
        </div>
      </section>

      {/* KATALOG ARMADA (LISTING) */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          {armadaList.map((item, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300`}>
              
              {/* Foto Armada */}
              <div className="w-full md:w-1/2 relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden bg-gray-200">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Deskripsi Armada */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{item.name}</h2>
                <div className="w-16 h-1 bg-[#2eb886] rounded-full"></div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg pt-2">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-[#2eb886] font-medium pt-2">
                  <CheckCircle2 size={20} />
                  <span>Tersedia & Siap Operasi</span>
                </div>
              </div>

            </div>
          ))}
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