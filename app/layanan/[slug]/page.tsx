"use client";

import { notFound } from "next/navigation";
import { armadaDetails } from "../../data/armada"; 
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react"; 
import { ArrowLeft } from "lucide-react";

export default function CatalogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = decodeURIComponent(resolvedParams.slug);

  // Mengganti nama variabel armada menjadi kategoriLayanan
  const kategoriLayanan = armadaDetails[slug];
  if (!kategoriLayanan) notFound();

  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  // 1. Membaca pilihan terakhir dari memori browser saat halaman dimuat (reload)
  useEffect(() => {
    // Menggunakan slug sebagai nama kunci agar memori tiap halaman tidak tertukar
    const savedCategory = localStorage.getItem(`activeCategory-${slug}`);
    if (savedCategory) {
      setActiveCategory(savedCategory);
    }
  }, [slug]);

  // 2. Fungsi baru untuk mengubah kategori sekaligus menyimpannya ke memori browser
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    localStorage.setItem(`activeCategory-${slug}`, cat);
  };

  const categories = ["Semua", ...Array.from(new Set(kategoriLayanan.gallery.map(item => item.category).filter(Boolean)))];

  const filteredGallery = activeCategory === "Semua" 
    ? kategoriLayanan.gallery 
    : kategoriLayanan.gallery.filter(item => item.category === activeCategory);

  return (
    // 1. DIV PEMBUNGKUS (Bg-black dan text-white)
    <div className="flex flex-col min-h-screen bg-black font-sans text-white">
      
      {/* 2. KONTEN UTAMA */}
      <main className="flex-grow pt-16 pb-16 px-6 md:px-16 min-h-[100vh]">
        
        {/* HEADER KATALOG & LOGO KANAN */}
        <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          
          {/* Bagian Kiri: Tombol Kembali & Judul */}
          <div>
            <Link href="/layanan" className="inline-flex items-center text-gray-400 hover:text-[#2eb886] transition-colors mb-6 md:mb-8 font-medium">
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Katalog Layanan
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{kategoriLayanan.name}</h1>
            <p className="text-gray-400 text-lg">{kategoriLayanan.desc}</p>
          </div>

          {/* Bagian Kanan: Logo LKI */}
          <div className="md:mt-4">
            <Image
              src="/assets/LOGO LKI PRO FORMAL-02.png" 
              alt="LKI Production Logo"
              width={220}
              height={50}
              className="w-48 md:w-56 h-auto object-contain" 
              priority
            />
          </div>
          
        </div>

        <div className="max-w-7xl mx-auto">
          
          {/* TOMBOL FILTER KATEGORI */}
          {categories.length > 1 && (
            <div className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  // PERUBAHAN DI SINI: menggunakan handleCategoryChange agar tersimpan di browser 
                  onClick={() => handleCategoryChange(cat as string)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat 
                      ? "bg-[#2eb886] text-white shadow-md" 
                      : "bg-zinc-900 text-gray-400 border border-zinc-800 hover:border-[#2eb886] hover:text-[#2eb886]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* GRID BARANG (Kotak Putih untuk Kontras) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-12">
            {filteredGallery.map((item, index) => (
              <Link 
                href={`/layanan/${slug}/${item.id}`}
                key={index} 
                className="flex flex-col w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(46,184,134,0.3)] transition-all duration-300 group cursor-pointer"
              >
                {/* Bagian Gambar */}
                <div className="w-full aspect-square relative overflow-hidden bg-white border-b border-gray-100 flex items-center justify-center">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-contain p-3 md:p-6 group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Overlay Hitam Transparan & Tombol saat di-hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#2eb886] text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-[10px] md:text-xs shadow-lg">Lihat Spesifikasi</span>
                  </div>
                </div>

                {/* Bagian Teks Bawah */}
                <div className="p-3 md:p-5 text-center flex flex-col justify-center flex-grow bg-gray-50">
                  <h3 className="text-xs md:text-lg font-bold text-gray-900 group-hover:text-[#2eb886] transition-colors leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="hidden md:block text-sm text-gray-500 mt-2">
                    Klik untuk melihat detail teknis
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pesan jika kategori kosong */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              Belum ada peralatan di kategori ini.
            </div>
          )}

        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="w-full mt-auto bg-[#111] text-gray-400 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left">
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

    </div>
  );
}