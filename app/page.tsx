"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Speaker, Zap, Play, ArrowRight, Menu, Truck, X, Layers, MessageCircle } from "lucide-react";
import Link from "next/link";

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

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [
    "/assets/loading/IMG_1070.png", 
    "/assets/loading/IMG_1081.png",  
    "/assets/loading/IMG_1073.png"  
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 3000); 
    return () => clearInterval(slideInterval);
  }, [slideImages.length]);

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
      {/* NAVBAR MOBILE & TOMBOL HAMBURGER */}
      {/* ====================================================== */}
      <div className="sm:hidden fixed top-6 left-6 right-6 flex items-center justify-between z-[999999]">
        {/* Badge Premium Event Production di Mobile (Sebelah kiri tombol hamburger) */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-wider text-[#00A859] uppercase whitespace-nowrap">
            PREMIUM EVENT PRODUCTION
          </span>
        </div>

        {/* Tombol Hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all shrink-0"
        >
          {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

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

      {/* NAVBAR DESKTOP (Badge Premium Event berada di sebelah kiri teks Beranda) */}
      <nav className={`hidden sm:flex fixed top-0 left-0 w-full z-[100] px-16 py-6 items-center justify-between transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg py-4" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
        <div className="hidden sm:block"></div>

        <div className="flex items-center gap-8 text-sm font-medium text-white/90">
          {/* Badge Desktop di sebelah kiri Beranda */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-[#00A859] uppercase whitespace-nowrap">
              PREMIUM EVENT PRODUCTION
            </span>
          </div>

          <Link href="/" className="hover:text-[#00A651] transition border-b-2 border-[#00A651] pb-1">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Tentang</Link>
          <Link href="/layanan" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#00A651] transition hover:border-b-2 hover:border-[#00A651]/50 pb-1">Kontak Kami</Link>
        </div>
      </nav>

      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative h-[90vh] md:h-screen min-h-[600px] flex items-center px-6 md:px-20 bg-black overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/halaman.png" 
            alt="LKI Production Background" 
            fill 
            priority 
            className="object-cover scale-105 transform origin-center transition-transform duration-[2000ms] hover:scale-125" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col justify-between h-full pt-32 pb-16">
          
          {/* Logo & Teks Utama */}
          <div className="max-w-3xl">
            <FadeIn direction="left" delay={200}>
              <div className="mb-6 max-w-xs md:max-w-md">
                <Image 
                  src="/assets/LOGO LKI PRO FORMAL-04.png" 
                  alt="LKI Production Logo" 
                  width={400} 
                  height={150} 
                  className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" 
                  priority 
                />
              </div>
            </FadeIn>
          </div>

          {/* Tombol Hubungi Kami: Posisi Kanan untuk Mobile & Laptop */}
          <FadeIn direction="up" delay={600} className="w-full flex justify-end">
            <a href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20tanya-tanya%20seputar%20LKI%20Production." target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 bg-[#00A859] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,168,89,0.4)] text-sm md:text-base">
              <span className="relative z-10 flex items-center gap-2">
                <Image 
                  src="/assets/wa-putih.png" 
                  alt="WhatsApp" 
                  width={20} 
                  height={20} 
                  className="group-hover:scale-110 transition-transform object-contain" 
                />
                Hubungi Kami Sekarang
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A859] to-[#00904d] opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
            </a>
          </FadeIn>

        </div>
      </section>

      {/* ====================================================== */}
      {/* LAYANAN KAMI */}
      {/* ====================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-16 text-center bg-gray-50 relative">
        <FadeIn direction="up">
          <p className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm mb-3">LAYANAN KAMI</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">Solusi Produksi Kreatif<br className="hidden md:block" /> untuk Kebutuhan Event</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            Menyediakan peralatan produksi event dengan kualitas standar internasional untuk memastikan acara Anda berjalan sempurna tanpa celah.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16 relative z-10">
          {[
            { icon: Speaker, title: "Sound System", desc: "Dukungan penuh tata suara line array untuk konser, festival, dan acara korporat." },
            { icon: Play, title: "LED Video Tron", desc: "Layar LED beresolusi tinggi siap memukau audiens dan menjadi pusat visual acara." },
            { icon: Zap, title: "Lighting", desc: "Tata cahaya spektakuler dan presisi untuk membangun atmosfer sempurna." },
            { icon: Layers, title: "Stage & Rigging", desc: "Instalasi panggung aluminium kokoh untuk menunjang performa skala besar." }
          ].map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 150} className="h-full">
                <Link href="/layanan" className="flex flex-col items-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#00A651]/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer h-full">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00A651] group-hover:rotate-6 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-gray-800 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#00A651] transition-colors">{srv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{srv.desc}</p>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* SLIDER FOTO EVENT & DESKRIPSI */}
        <div className="max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 text-left">
          <FadeIn direction="right" className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              {slideImages.map((src, index) => (
                <Image key={index} src={src} alt="Event" fill className={`object-cover transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                {slideImages.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? "w-8 bg-[#00A651]" : "w-3 bg-white/50"}`} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="w-full lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">Pengalaman Event <br/><span className="text-[#00A651]">Tak Terlupakan</span></h3>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              LKI Production tidak hanya menyewakan alat, tapi membangun atmosfer. Dari panggung konser berskala besar hingga acara korporat yang intim, kami memastikan setiap detail teknis berjalan sempurna.
            </p>
            <ul className="space-y-4 mb-10">
              {["Stage Ringlock dan Alumunium standar keamanan tinggi.", "Peralatan kelas dunia (JBL, RCF, Yamaha, dll).", "Perencanaan detail & eksekusi kru tepat waktu."].map((li, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-700 font-medium">
                  <div className="w-6 h-6 mt-0.5 rounded-full bg-[#00A651]/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#00A651]" />
                  </div>
                  {li}
                </li>
              ))}
            </ul>
            <Link href="/layanan" className="inline-flex items-center gap-2 text-white bg-gray-900 hover:bg-[#00A651] px-8 py-4 rounded-full font-bold transition-colors shadow-lg">
              Eksplorasi Katalog Alat <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TENTANG KAMI */}
      {/* ====================================================== */}
      <section className="relative py-20 md:py-32 px-6 md:px-16 bg-[#0a1914] text-white flex flex-col lg:flex-row items-center justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00A651] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00A651] rounded-full mix-blend-screen filter blur-[120px] opacity-20" />

        <FadeIn direction="right" className="w-full lg:w-1/2 relative z-10 mb-12 lg:mb-0 lg:pr-16 text-center lg:text-left">
          <p className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm mb-4">TENTANG KAMI</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Dedikasi Total<br />Untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A651] to-white">Kualitas Visual</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-light">
            Kami adalah tim ahli teknis dan kreatif yang berkomitmen menghasilkan karya produksi berkualitas. Setiap proyek adalah cerita yang kami bangun bersama klien, mengeksekusi ide paling ambisius menjadi realita teknis yang aman dan memukau.
          </p>
          <Link href="/tentang" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full hover:bg-[#00A651] hover:text-white transition-all duration-300 font-bold shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(46,184,134,0.4)]">
            Kenali Tim Kami <ArrowRight size={20} />
          </Link>
        </FadeIn>

        <FadeIn direction="left" className="w-full lg:w-1/2 h-[300px] md:h-[450px] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 group">
          <Image src="/assets/field of view.png" alt="Fasilitas LKI" fill className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </FadeIn>
      </section>

      {/* ====================================================== */}
      {/* GOOGLE MAPS SECTION */}
      {/* ====================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-gray-50 border-y border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 max-w-7xl mx-auto w-full">
          <FadeIn direction="right" className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm mb-3">LOKASI KAMI</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 tracking-tight">Kunjungi Gudang & <br/> Workshop Kami</h2>
            <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed font-light">
              Silakan datang langsung ke lokasi kami di Jl. Sebeng No.1945, Jugo, Kesamben, Blitar untuk melihat secara langsung kualitas peralatan dan berkonsultasi mengenai event Anda bersama tim kami.
            </p>
            <a href="https://maps.app.goo.gl/UBaekkn2udkQJT3N6?g_st=ic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00A651] text-white px-8 py-4 rounded-full font-bold transition hover:bg-[#24966d] hover:text-white shadow-lg">
              Buka di Google Maps <ArrowRight size={18} />
            </a>
          </FadeIn>
          
          <FadeIn direction="left" className="w-full md:w-1/2 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative group bg-gray-200">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
            <iframe src="https://maps.google.com/maps?q=LKI%20PRODUCTION,%20Jl.%20Sebeng%20No.1945,%20Jugo,%20Kesamben,%20Blitar&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute top-0 left-0 w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700"></iframe>
          </FadeIn>
        </div>
      </section>

      {/* ====================================================== */}
      {/* GALERI KEGIATAN */}
      {/* ====================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-white text-center">
        <FadeIn direction="up">
          <p className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm mb-3">PORTFOLIO</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-gray-900 tracking-tight">Momen & Kegiatan Event</h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {[
            "/assets/loading/IMG_1071.png", "/assets/loading/IMG_1070.png",
            "/assets/loading/IMG_1081.png", "/assets/loading/IMG_1073.png",
            "/assets/loading/IMG_1073.png", "/assets/loading/IMG_1081.png",
            "/assets/loading/IMG_1070.png", "/assets/loading/IMG_1071.png"
          ].map((src, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 100}>
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden group shadow-md cursor-pointer bg-black">
                <Image src={src} alt={`Galeri ${idx + 1}`} fill className="object-cover transition-all duration-700 opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="w-10 h-10 bg-[#00A651] rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowRight size={20} className="-rotate-45" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* SOSIALMEDIA & CARNAVAL */}
      {/* ====================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-gray-50 text-center border-t border-gray-200">
        <FadeIn direction="up">
          <p className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm mb-3">JEJARING SOSIAL</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-gray-900 tracking-tight">Karya Kreatif Kami</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full mb-16">
          {[
            { title: "Instagram", link: "https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==", img: "/assets/profile-ig.png" },
            { title: "Tiktok", link: "https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc", img: "/assets/profile-tiktok.png" },
            { title: "Youtube", link: "https://www.youtube.com/@LKIProduction", img: "/assets/profile-youtube.png" }
          ].map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 150} className="w-full">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="relative h-56 md:h-72 rounded-[2rem] overflow-hidden group cursor-pointer block bg-black w-full shadow-lg hover:shadow-2xl hover:shadow-[#00A651]/20 transition-all duration-500">
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white z-20">
                  <span className="font-bold text-2xl tracking-wide">{item.title}</span>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:border-[#00A651] group-hover:bg-[#00A651] transition-all duration-300">
                    <ArrowRight size={20} className="-rotate-45" />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={400} className="max-w-3xl mx-auto">
          <Link href="/carnaval" className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 transition-all duration-500 group shadow-lg hover:shadow-xl hover:border-[#00A651]/30 text-center md:text-left">
            <div className="w-20 h-20 bg-[#00A651]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#00A651] group-hover:rotate-6 transition-all duration-500">
              <Truck className="w-10 h-10 text-[#00A651] group-hover:text-white transition-colors" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="font-extrabold text-xl md:text-2xl mb-2 text-gray-900 group-hover:text-[#00A651] transition-colors">Layanan Logistik & Carnaval</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                Kami menyediakan persewaan logistik armada khusus untuk parade dan karnaval yang telah dimodifikasi agar aman dan optimal.
              </p>
              <span className="inline-flex items-center text-[#00A651] font-bold text-sm">Lihat Detail Carnaval <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/></span>
            </div>
          </Link>
        </FadeIn>
      </section>

      {/* ====================================================== */}
      {/* CALL TO ACTION */}
      {/* ====================================================== */}
      <section className="bg-gradient-to-br from-[#0a1914] to-[#123829] py-20 md:py-24 px-6 md:px-16 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 mb-10 md:mb-0">
          <p className="text-[#00A651] font-bold tracking-widest text-xs md:text-sm mb-4">SIAP MEMULAI PROYEK ANDA?</p>
          <h2 className="text-3xl md:text-5xl font-black max-w-2xl leading-tight">
            Mari Wujudkan Ide Kreatif Bersama LKI Production
          </h2>
        </div>
        <div className="relative z-10">
          <a href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20tertarik%20untuk%20berkolaborasi." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#0a1914] px-10 py-5 rounded-full font-extrabold text-lg transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <Image src="/assets/wa-putih.png" alt="WhatsApp" width={24} height={24} className="filter invert" />
            Hubungi Tim Kami
          </a>
        </div>
        <div className="absolute right-[-5%] top-[-20%] md:top-[-40%] text-[150px] md:text-[280px] font-black text-white/5 select-none pointer-events-none tracking-tighter">
          LKI PRO
        </div>
      </section>

      {/* ====================================================== */}
      {/* FOOTER */}
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