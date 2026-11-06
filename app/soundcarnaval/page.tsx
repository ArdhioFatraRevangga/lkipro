"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowLeft, Music, CheckCircle2, Volume2 } from "lucide-react";
import Link from "next/link";

export default function SoundCarnavalPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data Paket & Spesifikasi Sound System Karnaval
  const soundList = [
    {
      id: 1,
      name: "Line Array Subwoofers Extreme SPL",
      desc: "Rangkaian speaker gantung dan subwoofer ground-stack bertenaga tinggi yang dirancang khusus untuk membelah kebisingan jalanan dan menjangkau ribuan penonton karnaval.",
      img: "/assets/gudang.png", // Ganti dengan foto sound system LKI
      specs: ["High-Output Subwoofer 18-21 Inch", "SPL Tinggi Tanpa Distorsi", "Daya Jangkau Luas Area Terbuka"]
    },
    {
      id: 2,
      name: "Management Audio & Power Genset",
      desc: "Sistem pengolah sinyal digital (DSP), mixer konsol outdoor, dan pasokan daya terisolasi untuk memastikan performa audio tetap stabil meski berjalan di atas truk bergerak.",
      img: "/assets/halaman.png", // Ganti dengan foto mixer/rack sound LKI
      specs: ["Digital Audio Processor & Delay Management", "Stabilisator Tegangan Listrik", "Kabel & Rigging Khusus Truk"]
    },
    {
      id: 3,
      name: "Paket Full-Set Audio Parade",
      desc: "Solusi audio komplit mencakup mic wireless jarak jauh, monitor kru, hingga DJ set outdoor yang siap langsung pasang di atas armada karnaval Anda.",
      img: "/assets/gudang.png", // Ganti dengan foto paket audio LKI
      specs: ["Microphone Wireless High-Range", "DJ & Live Music Setup Ready", "Pendampingan Operator Teknis Handal"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      
      {/* TOMBOL HAMBURGER MOBILE */}
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
          <Link href="/" className="py-3 px-6 text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all">Beranda</Link>
          <Link href="/tentang" className="py-3 px-6 text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all">Tentang</Link>
          <Link href="/layanan" className="py-3 px-6 text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all">Layanan</Link>
          <Link href="/kontak" className="py-3 px-6 text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all">Kontak Kami</Link>
        </div>
      )}

      {/* NAVBAR UTAMA DESKTOP */}
      <nav className="absolute top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
        <Link href="/" className="flex items-center pointer-events-auto">
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-40 md:w-56 h-auto object-contain" priority />
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium pointer-events-auto">
          <Link href="/" className="hover:text-[#2eb886] transition">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#2eb886] transition">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#2eb886] transition">Kontak Kami</Link>
        </div>
      </nav>

      <div className="flex-grow">
        
        {/* HEADER SOUND SYSTEM CARNAVAL */}
        <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-6 md:px-16 text-center overflow-hidden bg-[#0f2820]">
          <div className="relative z-20 text-white max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-[#2eb886]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#2eb886]/30">
              <Music className="w-10 h-10 text-[#2eb886]" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Sound System Carnaval
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Kombinasi audio bertenaga monster dan tuning presisi outdoor untuk memeriahkan parade, karnaval, dan acara jalanan Anda.
            </p>
          </div>
        </section>

        {/* DAFTAR SOUND SYSTEM (GRID) */}
        <section className="py-12 md:py-16 px-6 md:px-16 max-w-7xl mx-auto w-full">
          
          {/* Tombol Kembali di atas foto sound */}
          <div className="mb-8">
            <Link 
              href="/carnaval" 
              className="inline-flex items-center text-gray-600 hover:text-[#2eb886] transition-colors font-medium text-sm md:text-base"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Halaman Carnaval
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {soundList.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                
                {/* Foto Sound */}
                <div className="relative w-full h-60 md:h-72 overflow-hidden bg-gray-100">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                {/* Detail Sound System */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#2eb886] transition-colors">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                  
                  {/* Spesifikasi List */}
                  <div className="space-y-3 border-t border-gray-100 pt-6 mb-8">
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="text-[#2eb886] shrink-0" size={18} />
                        <span className="text-sm font-medium text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={`https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20tanya%20seputar%20${encodeURIComponent(item.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#2eb886] hover:bg-[#24966d] text-white py-3.5 px-6 rounded-xl font-semibold transition-all text-center block shadow-md mt-auto"
                  >
                    Booking Paket Ini
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#111] text-gray-400 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left mt-auto">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="inline-block">
            <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={200} height={45} className="w-36 md:w-48 h-auto object-contain" />
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

    </main>
  );
}