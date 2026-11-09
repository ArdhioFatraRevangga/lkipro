"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";

// ==========================================
// 1. KOMPONEN ANIMASI ADVANCED (Multi-Arah)
// ==========================================
function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up",
  className = ""
}: { 
  children: React.ReactNode, 
  delay?: number, 
  direction?: "up" | "down" | "left" | "right" | "none",
  className?: string
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { rootMargin: "0px 0px -50px 0px" });

    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.disconnect(); };
  }, []);

  const translateClass = isVisible 
    ? "opacity-100 translate-y-0 translate-x-0" 
    : direction === "up" ? "opacity-0 translate-y-16"
    : direction === "down" ? "opacity-0 -translate-y-16"
    : direction === "left" ? "opacity-0 -translate-x-16"
    : direction === "right" ? "opacity-0 translate-x-16"
    : "opacity-0 scale-95";

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${translateClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function LayananPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek Navbar Background saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const layananList = [
    {
      name: "Sound System",
      desc: "Paket sound system profesional dengan kualitas audio jernih dan bertenaga. Sangat cocok untuk konser skala besar, festival, hingga acara korporat.",
      img: "/assets/loading/IMG_1079.png",
      slug: "sound-system"
    },
    {
      name: "Lighting",
      desc: "Sistem pencahayaan canggih untuk menciptakan atmosfer spektakuler. Didesain secara presisi untuk menghidupkan setiap momen acara Anda.",
      img: "/assets/loading/IMG_1072.png",
      slug: "lighting"
    },
    {
      name: "LED Video Tron",
      desc: "Layar LED Videotron beresolusi tinggi yang memastikan visual Anda tersampaikan dengan sempurna, tajam, dan memukau seluruh audiens.",
      img: "/assets/loading/IMG_1081.png",
      slug: "video-tron"
    },
    {
      name: "Rigging / Stage",
      desc: "Konstruksi panggung kokoh bersertifikasi standar keamanan tinggi. Meliputi stage rigging, dan barikade untuk acara indoor maupun outdoor.",
      img: "/assets/loading/IMG_1074.png",
      slug: "rigging-stage"
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-white font-sans text-gray-900 overflow-hidden">

      {/* ====================================================== */}
      {/* 1. TOMBOL HAMBURGER VIP & MENU MOBILE */}
      {/* ====================================================== */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="sm:hidden fixed top-6 right-6 w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center z-[999999] cursor-pointer touch-manipulation shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all hover:bg-black/80"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-white pointer-events-none" />
        ) : (
          <Menu size={24} className="text-white pointer-events-none" />
        )}
      </button>

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-[85px] right-6 w-[200px] bg-[#0a1914]/90 backdrop-blur-2xl flex flex-col z-[999999] shadow-2xl rounded-3xl border border-white/10 overflow-hidden py-3 animate-in fade-in zoom-in-95 duration-300">
          {["Beranda", "Tentang", "Layanan", "Kontak Kami"].map((item, idx) => {
            const path = item === "Beranda" ? "/" : item === "Kontak Kami" ? "/kontak" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={idx}
                href={path}
                className="py-3 px-6 text-white/80 text-sm font-semibold hover:bg-white/10 hover:text-[#00A651] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}

      {/* ====================================================== */}
      {/* 2. NAVBAR UTAMA (Transparan & Interaktif) */}
      {/* ====================================================== */}
      <nav className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-16 py-4 md:py-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-black/70 backdrop-blur-lg shadow-lg py-4" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
        <Link href="/" className="flex items-center">
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-36 md:w-52 h-auto object-contain" priority />
        </Link>
        <div className="hidden sm:flex items-center gap-10 text-sm font-medium text-white/90">
          <Link href="/" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#00A651] transition border-b-2 border-[#00A651] pb-1">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Kontak Kami</Link>
        </div>
      </nav>

      {/* 3. TAG MAIN */}
      <main className="flex-grow">
        
        {/* ====================================================== */}
        {/* HERO SECTION LAYANAN */}
        {/* ====================================================== */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-16 text-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/loading/IMG_1071.png"
              alt="Background Layanan LKI Production"
              fill
              className="object-cover object-center opacity-60 scale-105 transform origin-center transition-transform duration-[20000ms] hover:scale-110"
              priority
            />
            {/* Overlay Premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px] opacity-20 z-10"></div>
          </div>

          <div className="relative z-20 text-white max-w-4xl mx-auto mt-4">
            <FadeIn direction="up">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-2xl">
                <Settings className="w-10 h-10 text-[#00A651]" strokeWidth={1.5} />
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
                Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A651] to-[#60d6a9]">Event Support</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={400}>
              <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Katalog komprehensif perlengkapan acara berstandar internasional yang disesuaikan untuk mewujudkan ambisi kreatif Anda.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ====================================================== */}
        {/* KATALOG ZIG-ZAG (Tanpa garis ijo mengganggu) */}
        {/* ====================================================== */}
        <section className="py-20 md:py-32 px-6 md:px-16 bg-gray-50 relative">
          
          <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24 relative z-10">
            {layananList.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <FadeIn 
                  key={idx} 
                  direction={isEven ? "right" : "left"} 
                  delay={idx * 150}
                >
                  <Link
                    href={`/layanan/${item.slug}`}
                    className={`group flex flex-col items-center gap-10 lg:gap-20 bg-white md:bg-transparent md:hover:bg-white rounded-3xl md:p-8 transition-all duration-700 cursor-pointer overflow-hidden ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    
                    {/* Kotak Gambar */}
                    <div className="w-full md:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg relative shrink-0 border border-gray-100/50">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                      
                      {/* Label Hover */}
                      <div className="absolute bottom-6 right-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-black text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                        Lihat Katalog
                      </div>
                    </div>

                    {/* Area Teks */}
                    <div className="flex-1 flex flex-col justify-center text-center md:text-left px-6 md:px-0 pb-8 md:pb-0">
                      <div className="inline-block text-[#00A651] font-bold text-sm tracking-widest uppercase mb-3 opacity-80">0{idx + 1} // PRODUKSI</div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight group-hover:text-[#00A651] transition-colors">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 mb-8 leading-relaxed text-base md:text-lg font-light max-w-lg mx-auto md:mx-0">
                        {item.desc}
                      </p>

                      <div className="inline-flex items-center justify-center md:justify-start text-gray-900 font-bold group-hover:text-[#00A651] transition-colors gap-2">
                        <span>Eksplorasi Katalog</span>
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>

      </main>

      {/* ====================================================== */}
      {/* 4. FOOTER */}
      {/* ====================================================== */}
      <footer className="w-full mt-auto bg-[#111] text-gray-400 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left z-20 relative">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/LOGO LKI PRO FORMAL-02.png"
              alt="LKI Production Logo"
              width={200}
              height={45}
              className="w-32 md:w-40 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
        <div className="text-xs md:text-sm mb-6 md:mb-0 font-medium tracking-wide">
          © 2026 LKI Production. <span className="hidden md:inline">All rights reserved.</span>
        </div>
        <div className="flex items-center justify-center gap-6">
          {[
            { href: "https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==", src: "/assets/ig-putih.png", alt: "Instagram" },
            { href: "https://www.youtube.com/@LKIProduction", src: "/assets/youtube-putih.png", alt: "YouTube" },
            { href: "https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc", src: "/assets/tiktok-putih.png", alt: "TikTok" }
          ].map((soc, i) => (
            <a key={i} href={soc.href} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:scale-110 transition-all">
              <Image src={soc.src} alt={soc.alt} width={20} height={20} className="object-contain" />
            </a>
          ))}
        </div>
      </footer>

    </div>
  );
}