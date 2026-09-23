"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Speaker,
  Zap,
  Play,
  ArrowRight,
  Menu,
  Truck,
  X
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white font-sans text-gray-900">

      {/* ====================================================== */}
      {/* 1. TOMBOL HAMBURGER JALUR VIP (Bebas dari halangan apa pun) */}
      {/* ====================================================== */}
      <button 
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="sm:hidden fixed top-6 right-6 w-12 h-12 bg-black/30 border border-white/20 rounded-lg flex items-center justify-center z-[999999] cursor-pointer touch-manipulation shadow-lg"
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
        <div className="sm:hidden fixed top-[85px] right-6 w-[140px] bg-[#757575] flex flex-col z-[999999] shadow-2xl rounded border border-white/20">
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
      {/* 3. NAVBAR UTAMA (Hanya menampilkan Logo & Menu Desktop) */}
      {/* ====================================================== */}
      {/* Perhatikan pointer-events-none agar background hitamnya tidak menelan klik! */}
      <nav className="absolute top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
        
        {/* Logo (Bisa di-klik lagi dengan pointer-events-auto) */}
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
        
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium pointer-events-auto">
          <Link href="/" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          <Link href="/armada" className="hover:text-[#2eb886] transition">Armada</Link>
        </div>
        
      </nav>

      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] md:h-screen min-h-[500px] flex items-center px-6 md:px-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/halaman.png"
            alt="LKI Production Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-2xl text-white mt-16 md:mt-0 pointer-events-auto">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Ide Kreatif, <br />
            Jadi <span className="text-[#2eb886]">Karya Nyata</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-lg leading-relaxed">
            LKI Production adalah partner kreatif Anda dalam menghadirkan visual yang berdampak, dari konsep hingga produksi.
          </p>

          {/* Tombol WhatsApp (Hero) */}
          <a 
            href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20tanya-tanya%20seputar%20LKI%20Production." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2eb886] hover:bg-[#24966d] text-white px-6 py-3 rounded-full font-medium flex items-center gap-3 transition w-fit cursor-pointer"
          >
            <Image
              src="/assets/wa-putih.png"
              alt="WhatsApp Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            Hubungi Kami
            <ArrowRight size={18} className="ml-1" />
          </a>
        </div>
      </section>

     {/* LAYANAN KAMI */}
      <section className="py-16 md:py-24 px-6 md:px-16 text-center">
        <p className="text-[#2eb886] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-4">LAYANAN KAMI</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Solusi Produksi Kreatif<br className="hidden md:block" /> untuk Setiap Kebutuhan
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-12 md:mb-16">
          Kami menyediakan layanan produksi video dan konten kreatif dengan kualitas terbaik, untuk berbagai kebutuhan brand, perusahaan, atau individu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 max-w-6xl mx-auto">
          {[
            { icon: Speaker, title: "Sound System", desc: "Sound untuk carnival, konser, dll" },
            { icon: Play, title: "Content Result", desc: "Konten kreatif untuk brand dan media sosial." },
            { icon: Zap, title: "Lightning", desc: "Lightning yang berbagai macam" },
            { 
              icon: Truck, 
              title: "Armada", 
              desc: "Apa aja sih yang dimiliki LKI? Klik disini untuk mengetahui Fasilitas dan armada milik sendiri yang siap didatangkan ke lokasi acara Anda.",
              link: "/armada" 
            },
          ].map((service, idx) => {
            if (service.link) {
              return (
                <Link href={service.link} key={idx} className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-10 h-10 md:w-12 md:h-12 text-[#2eb886] mb-3 md:mb-4 group-hover:text-[#22996e] transition-colors" strokeWidth={1.5} />
                  <h3 className="font-bold text-base md:text-lg mb-2 group-hover:text-[#2eb886] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] text-center">
                    {service.desc}
                  </p>
                </Link>
              )
            }
            return (
              <div key={idx} className="flex flex-col items-center">
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-[#2eb886] mb-3 md:mb-4" strokeWidth={1.5} />
                <h3 className="font-bold text-base md:text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] text-center">
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section className="relative py-16 md:py-24 px-6 md:px-16 bg-[#111] text-white flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="md:w-1/2 relative z-10 mb-10 md:mb-0 pr-0 md:pr-12 text-center md:text-left">
          <p className="text-[#2eb886] font-semibold tracking-widest text-xs md:text-sm mb-3 md:mb-4">TENTANG KAMI</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            LKI Production<br />Lebih dari Sekadar Produksi
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Kami adalah tim kreatif yang berkomitmen untuk menghasilkan karya visual berkualitas, dengan pendekatan profesional, fleksibel, dan penuh ide segar. Setiap proyek adalah cerita yang kami bangun bersama klien, dari awal hingga hasil akhir.
          </p>
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition mx-auto md:mx-0 w-fit">
            Kenali Kami <ArrowRight size={18} />
          </button>
        </div>
        <div className="w-full md:w-1/2 h-[250px] md:h-[400px] relative rounded-xl overflow-hidden mt-8 md:mt-0">
           <Image 
             src="/assets/gudang.png" 
             alt="Fasilitas LKI Production" 
             fill 
             className="object-cover" 
           />
        </div>
      </section>

      {/* SOSIALMEDIA */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-gray-50 text-center">
        <p className="text-[#2eb886] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-4">SOSIALMEDIA</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Karya Kami</h2>
        <p className="text-gray-500 text-sm md:text-base mb-10 md:mb-12">
          Beberapa hasil karya terbaik yang telah kami kerjakan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { 
              title: "Instagram", 
              link: "https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
              image: "/assets/profile-ig.png"
            },
            { 
              title: "Tiktok", 
              link: "https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc",
              image: "/assets/profile-tiktok.png"
            }
          ].map((item, idx) => (
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx} 
              className="relative h-40 md:h-48 rounded-lg overflow-hidden group cursor-pointer block bg-gray-900"
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white z-20">
                <span className="font-bold text-left text-lg md:text-xl">{item.title}</span>
                <ArrowRight size={20} className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0f2820] py-12 md:py-16 px-6 md:px-16 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden text-center md:text-left">
        <div className="relative z-10 mb-8 md:mb-0">
          <p className="text-xs md:text-sm font-semibold tracking-widest mb-2 opacity-80">SIAP MEMULAI PROYEK ANDA?</p>
          <h2 className="text-2xl md:text-4xl font-bold max-w-lg leading-snug">
            Mari Wujudkan Ide Kreatif Anda Bersama LKI Production
          </h2>
        </div>

        <div className="relative z-10 flex flex-col items-center md:items-end gap-4">

          {/* Tombol WhatsApp (CTA) */}
          <a 
            href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20tertarik%20untuk%20meyewa%20LKI%20Production." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2eb886] hover:bg-[#24966d] text-white px-8 py-3 rounded-full font-medium flex items-center gap-3 transition cursor-pointer"
          >
            <Image
              src="/assets/wa-putih.png"
              alt="WhatsApp Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            Hubungi Kami
            <ArrowRight size={18} className="ml-1" />
          </a>
        </div>

        <div className="absolute right-[-10%] top-[-20%] md:top-[-50%] text-[150px] md:text-[300px] font-black text-white/5 select-none pointer-events-none">
          LKI
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