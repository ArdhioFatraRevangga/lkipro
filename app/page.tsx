"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Video,
  Camera,
  Play,
  Film,
  Lightbulb,
  ArrowRight,
  Mail,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";

// Komponen Ikon Kustom
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const TiktokIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="absolute top-0 w-full z-50 px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between">
          
          {/* LOGO GANTI DENGAN GAMBAR */}
          <Link href="/" className="flex items-center">
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
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Beranda</Link>
            <Link href="#" className="hover:text-[#2eb886] transition">Tentang</Link>
            <Link href="#" className="hover:text-[#2eb886] transition">Layanan</Link>
            {/* <Link href="#" className="hover:text-[#2eb886] transition">Portofolio</Link> */}
            <Link href="#" className="hover:text-[#2eb886] transition">Kontak</Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm px-6 py-24 flex flex-col gap-6 text-center shadow-lg">
            <Link href="#" className="text-lg font-medium hover:text-[#2eb886]">Beranda</Link>
            <Link href="#" className="text-lg font-medium hover:text-[#2eb886]">Tentang</Link>
            <Link href="#" className="text-lg font-medium hover:text-[#2eb886]">Layanan</Link>
            <Link href="#" className="text-lg font-medium hover:text-[#2eb886]">Portofolio</Link>
            <Link href="#" className="text-lg font-medium hover:text-[#2eb886]">Kontak</Link>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] md:h-screen min-h-[500px] flex items-center px-6 md:px-16">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/halaman.png"
            alt="LKI Production Background"
            fill
            priority
            className="object-cover"
          />
          {/* 
            Overlay Gradient: 
            Kiri lebih gelap agar teks putih terbaca (from-black/80),
            Kanan transparan agar gambar gedung LKI tetap jelas (to-transparent)
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-2xl text-white mt-16 md:mt-0">
          {/* <p className="text-[#2eb886] font-semibold tracking-widest text-xs md:text-sm mb-3 md:mb-4">LKI PRODUCTION</p> */}
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Ide Kreatif, <br />
            Jadi <span className="text-[#2eb886]">Karya Nyata</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-lg leading-relaxed">
            LKI Production adalah partner kreatif Anda dalam menghadirkan visual yang berdampak, dari konsep hingga produksi.
          </p>
          <button className="bg-[#2eb886] hover:bg-[#24966d] text-white px-6 py-3 rounded-full font-medium flex items-center gap-3 transition w-fit">
            <Image
              src="/assets/wa-putih.png"
              alt="WhatsApp Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            Hubungi Kami
            <ArrowRight size={18} className="ml-1" />
          </button>
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

        {/* PERUBAHAN DI BARIS INI: md:grid-cols-3 dan penambahan max-w-5xl mx-auto */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
          
          {/* Array layanan kamu yang sudah disesuaikan */}
          {[
            { icon: Camera, title: "Sound System", desc: "Sound untuk carnival, konser, dll" },
            { icon: Play, title: "Content Result", desc: "Konten kreatif untuk brand dan media sosial." },
            { icon: Film, title: "Lightning", desc: "Lightning yang berbagai macam" },
          ].map((service, idx) => (
             <div key={idx} className="flex flex-col items-center">
              <service.icon className="w-10 h-10 md:w-12 md:h-12 text-[#2eb886] mb-3 md:mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-base md:text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] md:max-w-none text-center">
                {service.desc}
              </p>
            </div>
          ))}

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
        {/* Bagian Gambar Kanan (SUDAH DIPERBARUI) */}
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
              link: "https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==", // Ganti dengan link IG asli
              image: "/assets/profile-ig.png" // Sesuaikan dengan nama foto kamu
            },
            { 
              title: "Tiktok", 
              link: "https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc", // Ganti dengan link TikTok asli
              image: "/assets/profile-tiktok.png" // Sesuaikan dengan nama foto kamu
            }
          ].map((item, idx) => (
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx} 
              className="relative h-40 md:h-48 rounded-lg overflow-hidden group cursor-pointer block bg-gray-900"
            >
              {/* Gambar Background Kotak */}
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              
              {/* Overlay gelap agar teks putih tetap terbaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              
              {/* Teks dan Panah */}
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
          <button className="bg-[#2eb886] hover:bg-[#24966d] text-white px-8 py-3 rounded-full font-medium flex items-center gap-3 transition">
            <Image
              src="/assets/wa-putih.png"
              alt="WhatsApp Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            Hubungi Kami
            <ArrowRight size={18} className="ml-1" />
          </button>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2 opacity-80 text-sm">
            {/* <span className="flex items-center justify-center gap-2">
              <Mail size={16}/> hello@lkiproduction.com
            </span> 
            <span className="flex items-center justify-center gap-2">
              <Image 
                src="/assets/ig-putih.png" 
                alt="Instagram" 
                width={16} 
                height={16} 
                className="object-contain" 
              /> 
              @lkiproduction
            </span> */}
          </div>
        </div>

        <div className="absolute right-[-10%] top-[-20%] md:top-[-50%] text-[150px] md:text-[300px] font-black text-white/5 select-none pointer-events-none">
          LKI
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-gray-400 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left">
        
        {/* LOGO FOOTER KIRI BAWAH */}
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
        
        {/* IKON SOSIAL MEDIA KANAN BAWAH */}
        <div className="flex items-center justify-center gap-5">
          <Image 
            src="/assets/ig-putih.png" 
            alt="Instagram" 
            width={20} 
            height={20} 
            className="object-contain hover:opacity-75 cursor-pointer transition" 
          />
          <Image 
            src="/assets/youtube-putih.png" 
            alt="YouTube" 
            width={20} 
            height={20} 
            className="object-contain hover:opacity-75 cursor-pointer transition" 
          />
          <Image 
            src="/assets/tiktok-putih.png" 
            alt="TikTok" 
            width={20} 
            height={20} 
            className="object-contain hover:opacity-75 cursor-pointer transition" 
          />
        </div>
      </footer>
    </main>
  );
}