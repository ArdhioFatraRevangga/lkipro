"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, CheckCircle2, Eye, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

// ==========================================
// KOMPONEN ANIMASI ADVANCED (Multi-Arah)
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

export default function TentangPage() {
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

  return (
    <main className="relative min-h-screen bg-white font-sans text-gray-900 overflow-hidden">
      
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
          <Image 
            src="/assets/LOGO LKI PRO FORMAL-02.png" 
            alt="LKI Production Logo" 
            width={220} 
            height={50} 
            className="w-36 md:w-52 h-auto object-contain"
            priority
          />
        </Link>
        <div className="hidden sm:flex items-center gap-10 text-sm font-medium text-white/90">
          <Link href="/" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#00A651] transition border-b-2 border-[#00A651] pb-1">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Kontak Kami</Link>
        </div>
      </nav>

      {/* ====================================================== */}
      {/* 3. HERO SECTION (Video Background Estetik) */}
      {/* ====================================================== */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-16 px-6 md:px-16 overflow-hidden bg-black">
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            src="/assets/LKI Production - Logo Reveal.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105 transform origin-center transition-transform duration-[20000ms] hover:scale-110"
          />
          {/* Overlay Gradient Gelap */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px] opacity-20 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto text-left text-white mt-12 md:mt-0">
          <FadeIn direction="left" delay={200}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00A651] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-widest text-[#00A651] uppercase">Tentang LKI Production</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              One Stop Service <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">For Event Support.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={600}>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-light">
              Kami menggabungkan teknologi mutakhir, tim profesional, dan eksekusi presisi untuk memastikan acara Anda berjalan sempurna tanpa cela dari awal hingga akhir.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ====================================================== */}
      {/* 4. DESKRIPSI UTAMA (Modern Layout) */}
      {/* ====================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center bg-white relative">
        
        {/* Bagian Gambar Kiri */}
        <FadeIn direction="right" className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6 relative">
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#00A651] rounded-full mix-blend-multiply filter blur-[60px] opacity-20 animate-pulse"></div>
          
          <div className="w-full h-[220px] md:h-[300px] relative rounded-[2rem] overflow-hidden shadow-2xl group">
            <Image 
              src="/assets/loading/IMG_1081.png" 
              alt="Halaman Depan LKI Production" 
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          <div className="w-full h-[220px] md:h-[300px] relative rounded-[2rem] overflow-hidden shadow-2xl group ml-0 md:ml-12 mt-0 md:-mt-16 border-4 border-white">
            <Image 
              src="/assets/loading/IMG_1070.png" 
              alt="Fasilitas Dalam LKI Production" 
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </FadeIn>

        {/* Bagian Teks Kanan */}
        <FadeIn direction="left" className="w-full md:w-1/2">
          <p className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm mb-3">SIAPA KAMI</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">
            Dedikasi Untuk <br/> <span className="text-[#00A651]">Kualitas Visual</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed font-light">
            LKI Production berdedikasi untuk menghadirkan pengalaman produksi acara dan visual terbaik. Berlokasi di Plampangan, Indonesia, kami menyediakan layanan menyeluruh untuk memastikan setiap acara dan kebutuhan kreatif Anda berjalan dengan sempurna dan berkesan.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Stage & Rigging", "LED Video tron", "Professional Sound System", "Lighting System"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-[#00A651]/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#00A651]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-[#00A651] w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ====================================================== */}
      {/* 5. VISI & MISI (Premium Dark Glassmorphism) */}
      {/* ====================================================== */}
      <section className="relative py-20 md:py-32 px-6 md:px-16 bg-[#0a1914] text-white overflow-hidden border-t border-white/10">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#00A651] rounded-full mix-blend-screen filter blur-[150px] opacity-10 -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-white rounded-full mix-blend-screen filter blur-[150px] opacity-5 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeIn direction="up">
            <p className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm mb-3">LANDASAN KAMI</p>
            <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Visi & Misi LKI Production</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Kartu Visi */}
            <FadeIn direction="up" delay={200}>
              <div className="bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-[2rem] border border-white/10 hover:border-[#00A651]/50 transition-all duration-500 shadow-2xl group h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00A651] group-hover:border-[#00A651] transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <Eye className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-white">Visi Kami</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  Menjadi partner produksi dan visual terdepan di Indonesia yang dikenal karena inovasi teknis, kualitas tanpa kompromi, dan profesionalisme tinggi dalam setiap karya panggung dan visual.
                </p>
              </div>
            </FadeIn>

            {/* Kartu Misi */}
            <FadeIn direction="up" delay={400}>
              <div className="bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-[2rem] border border-white/10 hover:border-[#00A651]/50 transition-all duration-500 shadow-2xl group h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00A651] group-hover:border-[#00A651] transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <Target className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-white">Misi Kami</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  Memberikan solusi <span className="text-white font-medium">end-to-end</span> untuk event dan produksi kreatif, menghadirkan peralatan berstandar internasional, dan membangun kolaborasi yang solid dengan setiap klien.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* 6. FOOTER (Sama dengan Halaman Beranda) */}
      {/* ====================================================== */}
      <footer className="bg-black text-gray-500 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left">
        <Link href="/" className="mb-6 md:mb-0">
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="Logo" width={180} height={40} className="w-32 md:w-40 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
        </Link>
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

    </main>
  );
}