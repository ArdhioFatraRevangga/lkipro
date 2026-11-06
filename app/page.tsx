"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Speaker,
  Zap,
  Play,
  ArrowRight,
  Menu,
  Truck,
  X,
  Layers
} from "lucide-react";
import Link from "next/link";

// ==========================================
// KOMPONEN ANIMASI FADE-UP SAAT DI-SCROLL
// ==========================================
function FadeUp({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Jika elemen mulai masuk ke dalam layar
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Hentikan observasi agar animasi tidak berulang-ulang saat scroll naik turun
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, {
      // Animasi terpicu saat elemen masuk 50px dari bawah layar
      rootMargin: "0px 0px -50px 0px"
    });

    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // LOGIKA UNTUK SLIDER FOTO EVENT (Ganti otomatis tiap 2 detik)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [
    "/assets/loading/IMG_1070.png", // Nanti ganti dengan foto event 1
    "/assets/loading/IMG_1081.png",  // Nanti ganti dengan foto event 2
    "/assets/loading/IMG_1073.png"  // Nanti ganti dengan foto event 3
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 2000); // 2000 ms = 2 detik

    return () => clearInterval(slideInterval);
  }, [slideImages.length]);

  return (
    <main className="relative min-h-screen bg-white font-sans text-gray-900">

      {/* ====================================================== */}
      {/* 1. TOMBOL HAMBURGER VIP (Desain Bulat Elegan) */}
      {/* ====================================================== */}
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

      {/* ====================================================== */}
      {/* 2. MENU DROPDOWN (Desain Glassmorphism Modern) */}
      {/* ====================================================== */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-[85px] right-6 w-[180px] bg-black/70 backdrop-blur-lg flex flex-col z-[999999] shadow-2xl rounded-2xl border border-white/10 overflow-hidden py-2 animate-in fade-in duration-400">
          <Link
            href="/"
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link
            href="/tentang"
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tentang
          </Link>
          <Link
            href="/layanan"
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Layanan
          </Link>
          <Link
            href="/kontak"
            className="py-3 px-6 text-left text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontak Kami
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
          <Link href="/layanan" className="hover:text-[#2eb886] transition">Layanan</Link>
          <Link href="/kontak" className="hover:text-[#2eb886] transition">Kontak Kami</Link>
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
            One Stop <br />
            Service <span className="text-[#2eb886]">For Event Support</span>
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
      <FadeUp>
        <section className="py-16 md:py-24 px-6 md:px-16 text-center">
          <p className="text-[#2eb886] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-4">LAYANAN KAMI</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Solusi Produksi Kreatif<br className="hidden md:block" /> untuk Kebutuhan Event
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-12 md:mb-16">
            Kami menyediakan layanan produksi event dan konten kreatif dengan kualitas terbaik, untuk berbagai kebutuhan brand, perusahaan, atau individu.
          </p>

          {/* 
          Grid Layanan Utama (Fokus pada Event)
        */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">

            {/* LAYANAN 1: EVENT (Fokus Utama) */}
            <Link href="/layanan" className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#2eb886]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2eb886]/20 transition-colors">
                <Speaker className="w-8 h-8 text-[#2eb886] group-hover:text-[#22996e] transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-[#2eb886] transition-colors text-center">Sound System</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] text-center">
                Dukungan penuh sound system, rigging, dan panggung untuk konser, festival, dan acara korporat.
              </p>
            </Link>

            {/* LAYANAN 2: VIDEO TRON */}
            <Link href="/layanan" className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#2eb886]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2eb886]/20 transition-colors">
                <Play className="w-8 h-8 text-[#2eb886] group-hover:text-[#22996e] transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-[#2eb886] transition-colors text-center">LED Video Tron</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] text-center">
                Layar LED beresolusi tinggi siap memukau audiens dan menjadi pusat perhatian acara Anda.
              </p>
            </Link>

            {/* LAYANAN 3: LIGHTING */}
            <Link href="/layanan" className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#2eb886]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2eb886]/20 transition-colors">
                <Zap className="w-8 h-8 text-[#2eb886] group-hover:text-[#22996e] transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-[#2eb886] transition-colors text-center">Lighting</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] text-center">
                Tata cahaya spektakuler dan profesional untuk membangun atmosfer sempurna di setiap momen.
              </p>
            </Link>

            {/* LAYANAN 4: STAGE */}
            <Link href="/layanan" className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#2eb886]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2eb886]/20 transition-colors">
                <Layers className="w-8 h-8 text-[#2eb886] group-hover:text-[#22996e] transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-[#2eb886] transition-colors text-center">Stage</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] text-center">
                Instalasi panggung aluminium presisi, aman, dan kokoh untuk menunjang performa acara berskala besar.
              </p>
            </Link>

          </div>
          {/* ====================================================== */}
          {/* SLIDER FOTO EVENT & DESKRIPSI (Kiri-Kanan) */}
          {/* ====================================================== */}
          <div className="max-w-6xl mx-auto mt-20 mb-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 text-left">

            {/* Bagian Kiri: Slider Foto Otomatis */}
            <div className="w-full md:w-[60%] relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
              {slideImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <Image
                    src={src}
                    alt={`Dokumentasi Event ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Indikator Titik (Dots) di bawah slider */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {slideImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-500 ${idx === currentSlide ? "w-6 bg-[#2eb886]" : "w-2 bg-white/60"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Bagian Kanan: Deskripsi Terkait Event */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Pengalaman Event Tak Terlupakan
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                LKI Production tidak hanya menyewakan alat, tapi kami membangun atmosfer. Dari panggung konser berskala besar hingga acara korporat yang intim, tim kami memastikan setiap detail teknis—mulai dari kejernihan suara, kekuatan rigging, hingga tata cahaya yang memukau—berjalan sempurna.
              </p>
              <ul className="text-gray-600 text-sm md:text-base space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2eb886]/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2eb886]" />
                  </div>
                  Stage Ringlock dan Alumunium
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2eb886]/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2eb886]" />
                  </div>
                  Peralatan kelas atas (JBL, RCF, Yamaha, dll).
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2eb886]/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2eb886]" />
                  </div>
                  Perencanaan & eksekusi tepat waktu.
                </li>
              </ul>

              <Link
                href="/layanan"
                className="inline-block bg-[#2eb886] hover:bg-[#24966d] text-white px-8 py-3 rounded-full font-medium transition shadow-md"
              >
                Lihat Detail Layanan Event
              </Link>
            </div>

          </div>
        </section>
      </FadeUp>

      {/* TENTANG KAMI */}
      <FadeUp>
        <section className="relative py-16 md:py-24 px-6 md:px-16 bg-[#2eb886] text-gray-900 flex flex-col md:flex-row items-center justify-between overflow-hidden">

          {/* Kolom Kiri: Teks */}
          <div className="md:w-1/2 relative z-10 mb-10 md:mb-0 pr-0 md:pr-12 text-center md:text-left">
            <p className="text-black/80 font-bold tracking-widest text-xs md:text-sm mb-3 md:mb-4">
              TENTANG KAMI
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-black mb-4 md:mb-6 leading-snug">
              One Stop Servive<br />For Event Support
            </h2>
            <p className="text-gray-900 text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              Kami adalah tim kreatif yang berkomitmen untuk menghasilkan karya visual berkualitas, dengan pendekatan profesional, fleksibel, dan penuh ide segar. Setiap proyek adalah cerita yang kami bangun bersama klien, dari awal hingga hasil akhir.
            </p>

            {/* Tombol Kenali Kami (Warna Hitam Solid agar Kontras di Latar Hijau) */}
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 group shadow-lg font-semibold"
            >
              <span>Kenali Kami</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Kolom Kanan: Gambar Gudang */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[400px] relative rounded-xl overflow-hidden mt-8 md:mt-0 shadow-2xl border border-black/10">
            <Image
              src="/assets/field of view.png"
              alt="Fasilitas LKI Production"
              fill
              className="object-cover"
            />
          </div>

        </section>
      </FadeUp>

      {/* ====================================================== */}
      {/* GOOGLE MAPS / LOKASI KAMI */}
      {/* ====================================================== */}
      <FadeUp>
        <section className="py-16 md:py-24 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 max-w-7xl mx-auto">

          {/* Bagian Kiri: Teks & Deskripsi */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-[#2eb886] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-4">LOKASI KAMI</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">Kunjungi Gudang Kami</h2>
            <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Silakan datang langsung ke lokasi kami di Jl. Sebeng No.1945, Jugo, Kesamben, Blitar untuk melihat peralatan dan berkonsultasi mengenai event Anda. Kami selalu siap menyambut kedatangan Anda!
            </p>

            {/* Tambahan Tombol Arahkan ke Aplikasi G-Maps */}
            <a
              href="https://maps.app.goo.gl/UBaekkn2udkQJT3N6?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2eb886] hover:bg-[#24966d] text-white px-8 py-3 rounded-full font-medium transition cursor-pointer"
            >
              Buka di Google Maps
            </a>
          </div>

          {/* Bagian Kanan: Container Map */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 relative">
            <iframe
              src="https://maps.google.com/maps?q=LKI%20PRODUCTION,%20Jl.%20Sebeng%20No.1945,%20Jugo,%20Kesamben,%20Blitar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </section>
      </FadeUp>

      {/* ====================================================== */}
      {/* GALERI KEGIATAN (4 Kolom x 2 Baris) */}
      {/* ====================================================== */}
      <FadeUp>
        <section className="py-16 md:py-24 px-6 md:px-16 bg-white text-center border-t border-gray-100">
          <p className="text-[#2eb886] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-4">GALERI KAMI</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-12">Momen & Kegiatan Event</h2>

          {/* 
          Grid 8 Foto (4 Kolom di Desktop, 2 Kolom di HP)
        */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto mb-16">
            {[
              { id: 1, src: "/assets/loading/IMG_1071.png" },
              { id: 2, src: "/assets/loading/IMG_1070.png" },
              { id: 3, src: "/assets/loading/IMG_1081.png" },
              { id: 4, src: "/assets/loading/IMG_1073.png" },
              { id: 5, src: "/assets/loading/IMG_1073.png" },
              { id: 6, src: "/assets/loading/IMG_1081.png" },
              { id: 7, src: "/assets/loading/IMG_1070.png" },
              { id: 8, src: "/assets/loading/IMG_1071.png" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group shadow-sm bg-gray-100"
              >
                <Image
                  src={item.src}
                  alt={`Dokumentasi Kegiatan LKI ${item.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* SOSIALMEDIA */}
      <FadeUp>
        <section className="py-16 md:py-24 px-6 md:px-16 bg-white text-center">
          <p className="text-[#2eb886] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-4">SOSIALMEDIA</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Karya Kami</h2>
          <p className="text-gray-500 text-sm md:text-base mb-10 md:mb-12">
            Kenali kami dan lihat karya kami.
          </p>

          {/* Grid Sosmed Utama */}
          {/* PERUBAHAN DI SINI: max-w-7xl agar kotaknya punya ruang untuk melebar ke samping */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 max-w-9xl mx-auto w-full">
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
              },
              {
                title: "Youtube",
                link: "https://www.youtube.com/@LKIProduction",
                image: "/assets/profile-youtube.png"
              }
            ].map((item, idx) => (
              <div key={idx} className="w-full">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // PERUBAHAN DI SINI: h-48 untuk HP, md:h-60 untuk desktop (agar bentuknya memanjang ke samping / landscape)
                  className="relative h-48 md:h-60 rounded-2xl overflow-hidden group cursor-pointer block bg-gray-900 w-full shadow-sm hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white z-20">
                    <span className="font-bold text-left text-xl md:text-2xl tracking-wide">{item.title}</span>
                    <ArrowRight size={24} className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:group-hover:translate-x-2" />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* 
          Layanan Tambahan (Carnival) 
          Dipindah ke bawah galeri dengan style warna hijau
        */}
          <div className="max-w-3xl mx-auto mt-10 md:mt-12">
            {/* PERUBAHAN DI SINI: href diganti menjadi /carnaval */}
            <Link href="/carnaval" className="flex items-center gap-5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-5 md:p-6 transition-all duration-300 group shadow-sm text-left">
              <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center shrink-0">
                <Truck className="w-7 h-7 text-[#2eb886]" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base md:text-lg mb-1 text-[#2eb886]">Layanan Logistik & Carnival</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Kami juga menyediakan persewaan logistik untuk parade dan karnaval.
                </p>
              </div>
              <ArrowRight size={20} className="text-[#2eb886] shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </FadeUp>

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
            className="bg-[#2eb886] hover:bg-[#2eb886] text-white px-8 py-3 rounded-full font-medium flex items-center gap-3 transition cursor-pointer"
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
          {/* Link Instagram */}
          <a
            href="https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Image src="/assets/ig-putih.png" alt="Instagram" width={20} height={20} className="object-contain" />
          </a>

          {/* Link YouTube */}
          <a
            href="https://www.youtube.com/@LKIProduction"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Image src="/assets/youtube-putih.png" alt="YouTube" width={20} height={20} className="object-contain" />
          </a>

          {/* Link TikTok */}
          <a
            href="https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Image src="/assets/tiktok-putih.png" alt="TikTok" width={20} height={20} className="object-contain" />
          </a>
        </div>
      </footer>
    </main>
  );
}