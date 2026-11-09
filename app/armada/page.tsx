"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowLeft, Truck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Komponen animasi Fade-In agar konsisten dengan halaman lain
function FadeIn({ 
  children, delay = 0, direction = "up", className = ""
}: { 
  children: React.ReactNode, delay?: number, direction?: "up" | "down" | "left" | "right" | "none", className?: string
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
    <div ref={domRef} className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${translateClass} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function ArmadaPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const armadaList = [
    {
      id: 1,
      name: "Truk HDL Los bak",
      desc: "Truk berkapasitas besar yang kerangkanya telah dimodifikasi khusus untuk menahan beban dan getaran sound system bertenaga maksimal selama rute karnaval.",
      img: "/assets/kendaraan/HDL-lossbak.png",
      specs: ["Kapasitas Ekstra Besar", "Modifikasi Rangka Baja", "Khusus Sound FOH Parade"]
    },
    {
      id: 2,
      name: "Truk Engkel Double",
      desc: "Armada serbaguna untuk mengangkut perlengkapan panggung, rigging, genset, atau lighting dengan aksesibilitas tinggi ke berbagai ukuran jalan.",
      img: "/assets/halaman.png",
      specs: ["Akses Rute Fleksibel", "Suspensi Ekstra Kuat", "Kapasitas Medium-High"]
    },
    {
      id: 3,
      name: "Grandmax#13",
      desc: "Kendaraan taktis untuk mobilitas kru, logistik ringan, atau peralatan pendukung seperti perkabelan yang membutuhkan pergerakan cepat dan lincah.",
      img: "/assets/kendaraan/grandmax13.png",
      specs: ["Pergerakan Lincah & Cepat", "Mobilitas Kru Teknis", "Logistik Ringan & Kabel"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-black font-sans text-white flex flex-col overflow-hidden">
      
      {/* TOMBOL HAMBURGER MOBILE */}
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

      {/* DROPDOWN MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-[85px] right-6 w-[200px] bg-[#0a1914]/90 backdrop-blur-2xl flex flex-col z-[999999] shadow-2xl rounded-3xl border border-white/10 overflow-hidden py-3 animate-in fade-in zoom-in-95 duration-300">
          {["Beranda", "Tentang", "Layanan", "Kontak Kami"].map((item, idx) => {
            const path = item === "Beranda" ? "/" : item === "Kontak Kami" ? "/kontak" : `/${item.toLowerCase()}`;
            return (
              <Link key={idx} href={path} className="py-3 px-6 text-white/80 text-sm font-semibold hover:bg-white/10 hover:text-[#2eb886] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </Link>
            );
          })}
        </div>
      )}

      {/* NAVBAR UTAMA */}
      <nav className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-16 py-4 md:py-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-lg shadow-lg py-4 border-b border-white/10" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
        <Link href="/" className="flex items-center">
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-36 md:w-52 h-auto object-contain" priority />
        </Link>
        <div className="hidden sm:flex items-center gap-10 text-sm font-medium text-white/90">
          <Link href="/" className="hover:text-[#2eb886] transition hover:border-b-2 hover:border-[#2eb886]/50 pb-1">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition hover:border-b-2 hover:border-[#2eb886]/50 pb-1">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#2eb886] transition hover:border-b-2 hover:border-[#2eb886]/50 pb-1">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#2eb886] transition hover:border-b-2 hover:border-[#2eb886]/50 pb-1">Kontak Kami</Link>
        </div>
      </nav>

      <div className="flex-grow">
        
        {/* HEADER ARMADA */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 text-center bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-20 z-0 pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <FadeIn direction="down">
              <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Truck className="w-10 h-10 text-[#2eb886]" strokeWidth={1.5} />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={150}>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">
                Katalog Armada LKI
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto font-light text-base md:text-lg">
                Armada logistik terawat yang siap mengawal kemeriahan acara jalanan, parade, dan distribusi perlengkapan event Anda dengan aman dan tepat waktu.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* DAFTAR ARMADA (GRID) */}
        <section className="py-16 md:py-24 px-6 md:px-16 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            
            {/* Tombol Kembali */}
            <FadeIn direction="down">
              <div className="mb-12">
                <Link 
                  href="/carnaval" 
                  className="inline-flex items-center text-gray-400 hover:text-[#2eb886] transition-colors font-medium text-sm md:text-base"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Kembali ke Halaman Carnaval
                </Link>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {armadaList.map((item, index) => (
                <FadeIn key={item.id} direction="up" delay={index * 100} className="h-full">
                  <div className="bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#2eb886]/50 shadow-sm hover:shadow-[0_8px_30px_rgba(46,184,134,0.15)] transition-all duration-500 group flex flex-col h-full">
                    
                    {/* Foto Truk */}
                    <div className="relative w-full h-60 md:h-72 overflow-hidden bg-black flex items-center justify-center p-4">
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        fill 
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    
                    {/* Detail Armada */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow bg-zinc-900 border-t border-zinc-800">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#2eb886] transition-colors">{item.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">{item.desc}</p>
                      
                      {/* Spesifikasi List */}
                      <div className="space-y-3 border-t border-zinc-800/80 pt-6">
                        {item.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="text-[#2eb886] shrink-0" size={18} />
                            <span className="text-sm font-medium text-gray-300">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="w-full mt-auto bg-[#111] text-gray-500 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left z-20 relative">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="inline-block">
            <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={180} height={40} className="w-32 md:w-40 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </Link>
        </div>
        <div className="text-xs md:text-sm mb-6 md:mb-0 font-medium tracking-wide">
          © 2026 LKI Production. All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:scale-110 transition-all">
            <Image src="/assets/ig-putih.png" alt="Instagram" width={20} height={20} className="object-contain" />
          </a>
          <a href="https://www.youtube.com/@LKIProduction" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:scale-110 transition-all">
            <Image src="/assets/youtube-putih.png" alt="YouTube" width={20} height={20} className="object-contain" />
          </a>
          <a href="https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 hover:scale-110 transition-all">
            <Image src="/assets/tiktok-putih.png" alt="TikTok" width={20} height={20} className="object-contain" />
          </a>
        </div>
      </footer>

    </main>
  );
}