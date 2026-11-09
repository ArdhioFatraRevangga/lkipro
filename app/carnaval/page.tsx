"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Truck, Speaker, Calendar, Lightbulb } from "lucide-react";
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

export default function CarnavalPage() {
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
        <main className="relative min-h-screen bg-black font-sans text-white flex flex-col overflow-hidden">

            {/* ====================================================== */}
            {/* 1. TOMBOL HAMBURGER VIP */}
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

            {/* ====================================================== */}
            {/* 2. MENU DROPDOWN MOBILE */}
            {/* ====================================================== */}
            {isMobileMenuOpen && (
                <div className="sm:hidden fixed top-[85px] right-6 w-[200px] bg-[#0a1914]/90 backdrop-blur-2xl flex flex-col z-[999999] shadow-2xl rounded-3xl border border-white/10 overflow-hidden py-3 animate-in fade-in zoom-in-95 duration-300">
                    {["Beranda", "Tentang", "Layanan", "Kontak Kami"].map((item, idx) => {
                        const path = item === "Beranda" ? "/" : item === "Kontak Kami" ? "/kontak" : `/${item.toLowerCase()}`;
                        return (
                            <Link
                                key={idx}
                                href={path}
                                className="py-3 px-6 text-white/80 text-sm font-semibold hover:bg-white/10 hover:text-[#2eb886] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>
            )}

            {/* ====================================================== */}
            {/* 3. NAVBAR UTAMA DESKTOP (Transparan & Interaktif) */}
            {/* ====================================================== */}
            <nav className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-16 py-4 md:py-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-black/70 backdrop-blur-lg shadow-lg py-4" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
                <Link href="/" className="flex items-center pointer-events-auto">
                    <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-36 md:w-52 h-auto object-contain" priority />
                </Link>
                <div className="hidden sm:flex items-center gap-10 text-sm font-medium pointer-events-auto text-white/90">
                    <Link href="/" className="hover:text-[#2eb886] transition hover:border-b-2 hover:border-[#2eb886]/50 pb-1">Beranda</Link>
                    <Link href="/tentang" className="hover:text-[#2eb886] transition hover:border-b-2 hover:border-[#2eb886]/50 pb-1">Tentang</Link>
                    <Link href="/layanan" className="hover:text-[#2eb886] transition hover:border-b-2 hover:border-[#2eb886]/50 pb-1">Layanan</Link>
                    <Link href="/kontak" className="hover:text-[#2eb886] transition hover:border-b-2 hover:border-[#2eb886]/50 pb-1">Kontak Kami</Link>
                </div>
            </nav>

            {/* ====================================================== */}
            {/* KONTEN UTAMA HALAMAN */}
            {/* ====================================================== */}
            <div className="flex-grow">

                {/* HERO CARNAVAL */}
                <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-16 text-center overflow-hidden bg-black">
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src="/assets/loading/IMG_1071.png" 
                            alt="Background Carnaval LKI" 
                            fill 
                            className="object-cover object-center opacity-50 scale-105 transform origin-center transition-transform duration-[20000ms] hover:scale-110" 
                            priority 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px] opacity-20 z-10"></div>
                    </div>

                    <div className="relative z-20 text-white max-w-4xl mx-auto mt-4">
                        <FadeIn direction="up">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-2xl">
                                <Truck className="w-10 h-10 text-[#2eb886]" strokeWidth={1.5} />
                            </div>
                        </FadeIn>
                        
                        <FadeIn direction="up" delay={200}>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
                                Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb886] to-[#60d6a9]">Carnaval</span>
                            </h1>
                        </FadeIn>

                        <FadeIn direction="up" delay={400}>
                            <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                                Solusi persewaan armada truk yang dimodifikasi khusus dan sound system bertenaga besar untuk memeriahkan parade jalanan Anda.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* SECTION LAYANAN CARNAVAL (MODE GELAP) */}
                <section className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">

                    <FadeIn direction="up">
                        <div className="text-center mb-16">
                            <p className="text-[#2eb886] font-bold tracking-widest text-xs md:text-sm mb-3 uppercase">Pilihan Layanan</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">Fasilitas Carnaval Kami</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                                LKI Production siap mendukung mobilitas dan kemeriahan acara jalanan Anda dengan armada yang terawat, kokoh, dan kru yang handal.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">

                        {/* Kartu 1: Armada Truk */}
                        <FadeIn direction="up" delay={150} className="h-full">
                            <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 shadow-xl hover:border-[#2eb886]/50 hover:shadow-[0_0_30px_rgba(46,184,134,0.15)] transition-all duration-500 group flex flex-col hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-[#2eb886] group-hover:rotate-6 transition-all duration-500 shadow-md">
                                    <Truck className="w-8 h-8 text-gray-400 group-hover:text-[#2eb886]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#2eb886] transition-colors">Armada Carnaval</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed flex-grow font-light">
                                    Truk bak terbuka dan box yang dimodifikasi khusus untuk mengangkut sound system berskala besar, genset, dan kru secara aman selama rute karnaval.
                                </p>
                                <Link href="/armada" className="inline-flex items-center font-bold text-[#2eb886] hover:text-white transition-colors mt-auto w-fit gap-2">
                                    Lihat Katalog Armada <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Kartu 2: Sound System Parade */}
                        <FadeIn direction="up" delay={300} className="h-full">
                            <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 shadow-xl hover:border-[#2eb886]/50 hover:shadow-[0_0_30px_rgba(46,184,134,0.15)] transition-all duration-500 group flex flex-col hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-[#2eb886] group-hover:rotate-6 transition-all duration-500 shadow-md">
                                    <Speaker className="w-8 h-8 text-gray-400 group-hover:text-[#2eb886]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#2eb886] transition-colors">Sound System Carnaval</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed flex-grow font-light">
                                    Instalasi audio bertenaga ekstra tinggi yang dirancang khusus untuk membelah keramaian dan kondisi jalanan terbuka tanpa kehilangan kejernihan suara.
                                </p>
                                <Link href="/soundcarnaval" className="inline-flex items-center font-bold text-[#2eb886] hover:text-white transition-colors mt-auto w-fit gap-2">
                                    Lihat Katalog Sound <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Kartu 3: Konsep Terbaik Carnaval */}
                        <FadeIn direction="up" delay={450} className="h-full">
                            <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 shadow-xl hover:border-[#2eb886]/50 hover:shadow-[0_0_30px_rgba(46,184,134,0.15)] transition-all duration-500 group flex flex-col hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-[#2eb886] group-hover:rotate-6 transition-all duration-500 shadow-md">
                                    <Lightbulb className="w-8 h-8 text-gray-400 group-hover:text-[#2eb886]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#2eb886] transition-colors">Konsep Terbaik</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed flex-grow font-light">
                                    Temukan inspirasi rancangan tata letak armada, dekorasi visual, hingga referensi desain pencahayaan terbaik untuk karnaval yang tak terlupakan.
                                </p>
                                <Link href="/konsep" className="inline-flex items-center font-bold text-[#2eb886] hover:text-white transition-colors mt-auto w-fit gap-2">
                                    Lihat Konsep <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>

                    </div>
                </section>

                {/* CTA SECTION (Premium Glow Style) */}
                <section className="py-16 px-6 md:px-16 mb-16 max-w-5xl mx-auto">
                    <FadeIn direction="up" delay={200}>
                        <div className="bg-gradient-to-r from-[#0a1914] via-[#123829] to-[#0a1914] border border-white/10 rounded-[2.5rem] p-10 md:p-14 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
                            {/* Efek Cahaya Belakang */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2eb886] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>
                            
                            <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center mb-6 border border-white/10 relative z-10">
                                <Calendar className="w-8 h-8 text-[#2eb886]" />
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10 tracking-tight">Amankan Jadwal Karnavalmu!</h2>
                            <p className="text-gray-300 text-sm md:text-base font-light max-w-2xl mb-10 leading-relaxed relative z-10">
                                Jadwal armada karnaval kami sering penuh di musim perayaan. Hubungi kami sekarang untuk memastikan ketersediaan truk dan sound system untuk acara Anda.
                            </p>
                            
                            <a
                                href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20tanya%20seputar%20persewaan%20armada%20untuk%20karnaval."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#2eb886] hover:bg-[#24966d] text-black font-extrabold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(46,184,134,0.4)] relative z-10"
                            >
                                <Image 
                                    src="/assets/wa-putih.png" 
                                    alt="WhatsApp" 
                                    width={20} 
                                    height={20} 
                                    className="object-contain filter invert" 
                                />
                                <span>Hubungi via WhatsApp</span>
                            </a>
                        </div>
                    </FadeIn>
                </section>

            </div>

            {/* ====================================================== */}
            {/* 3. FOOTER FULL WIDTH */}
            {/* ====================================================== */}
            <footer className="w-full bg-[#111] text-gray-500 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left mt-auto z-20 relative">
                <div className="mb-6 md:mb-0">
                    <Link href="/" className="inline-block">
                        <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={180} height={40} className="w-32 md:w-40 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
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

        </main>
    );
}