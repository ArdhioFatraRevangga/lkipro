"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

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

export default function KontakPage() {
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
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* TOMBOL MENU MOBILE */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="sm:hidden fixed top-6 right-6 w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center z-[999999] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all hover:bg-black/80"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-white pointer-events-none" />
        ) : (
          <Menu size={24} className="text-white pointer-events-none" />
        )}
      </button>

      {/* DROPDOWN MENU MOBILE */}
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

      {/* NAVBAR UTAMA (Transparan & Interaktif) */}
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
          <Link href="/tentang" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#00A651] transition border-b-2 border-[#00A651] pb-1">Kontak Kami</Link>
        </div>
      </nav>

      {/* TAG MAIN */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-16 text-center bg-black overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-20 z-0 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00A651] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <FadeIn direction="up">
              <span className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm block mb-4 uppercase">
                HUBUNGI KAMI
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Mari Bicara Tentang <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A651] to-[#60d6a9]">Proyek Anda</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={400}>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Tim LKI Production siap membantu kebutuhan sound system, lighting, videotron, dan armada event Anda secara profesional dan presisi.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* GRID KARTU KONTAK */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            
            {/* WhatsApp / Phone */}
            <FadeIn direction="up" delay={100} className="h-full">
              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#00A651]/50 transition-all duration-500 group h-full shadow-xl">
                <div className="w-16 h-16 bg-[#00A651]/10 text-[#00A651] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00A651] group-hover:text-black group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Customer Service</h3>
                <p className="text-gray-400 text-sm mb-6 font-light">Konsultasi cepat via WhatsApp</p>
                <a 
                  href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20konsultasi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#00A651] font-bold text-base hover:underline inline-flex items-center gap-2 mt-auto"
                >
                  <span>+62 812 233 777</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </FadeIn>

            {/* Location */}
            <FadeIn direction="up" delay={250} className="h-full">
              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#00A651]/50 transition-all duration-500 group h-full shadow-xl">
                <div className="w-16 h-16 bg-[#00A651]/10 text-[#00A651] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00A651] group-hover:text-black group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Lokasi Gudang & Workshop</h3>
                <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">Plampangan, Jugo, Kesamben, Kabupaten Blitar, Jawa Timur</p>
                <span className="text-[#00A651] font-bold text-sm mt-auto">Indonesia</span>
              </div>
            </FadeIn>

            {/* Operational Hours */}
            <FadeIn direction="up" delay={400} className="h-full">
              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#00A651]/50 transition-all duration-500 group h-full shadow-xl">
                <div className="w-16 h-16 bg-[#00A651]/10 text-[#00A651] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00A651] group-hover:text-black group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Jam Operasional</h3>
                <p className="text-gray-400 text-sm mb-2 font-light">Senin - Sabtu: 08:00 - 17:00</p>
                <p className="text-[#00A651] text-sm font-medium mt-auto bg-[#00A651]/10 px-4 py-1.5 rounded-full">Layanan Event: 24 Jam</p>
              </div>
            </FadeIn>

          </div>

          {/* SECTION PETA DAN KONSULTASI QUICK ACTION */}
          <FadeIn direction="up" delay={500}>
            <div className="bg-gradient-to-r from-[#0a1914] via-[#123829] to-[#0a1914] border border-white/10 rounded-[2.5rem] p-8 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A651] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>
              
              <div className="max-w-xl relative z-10">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight">Butuh Penawaran Harga Khusus Event?</h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                  Diskusikan skala event Anda bersama tim kami. Kami siap memberikan saran paket sound system, lighting, dan panggung yang paling efisien dan memukau.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0">
                <a
                  href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20meminta%20penawaran%20harga%20event"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#00A651] hover:bg-[#24966d] text-black font-extrabold px-8.5 py-4.5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(46,184,134,0.4)]"
                >
                  <Image 
                    src="/assets/wa-putih.png" 
                    alt="WhatsApp Logo" 
                    width={22} 
                    height={22} 
                    className="object-contain filter invert"
                  />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
              </div>
            </div>
          </FadeIn>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-black text-gray-500 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left z-20 relative">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/LOGO LKI PRO FORMAL-02.png" 
              alt="LKI Production Logo"
              width={180}
              height={40}
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