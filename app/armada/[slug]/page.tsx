"use client";

import Image from "next/image";
import { useState } from "react"; 
import { Menu, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

// Mengambil data dari Database Pusat
import { armadaDetails } from "@/app/data/armada";

export default function DetailArmadaPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const params = useParams();
  const slug = params.slug as string;
  const armada = armadaDetails[slug];

  if (!armada) notFound();

  return (
    <main className="relative min-h-screen bg-white font-sans text-gray-900 pb-20">
      
      {/* NAVBAR JALUR VIP */}
      <button type="button" onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden fixed top-6 right-6 w-12 h-12 bg-black/30 border border-white/20 rounded-lg flex items-center justify-center z-[99999] cursor-pointer shadow-lg">
        {isMobileMenuOpen ? <X size={32} className="text-white pointer-events-none" /> : <Menu size={32} className="text-white pointer-events-none" />}
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[85px] right-6 w-[140px] bg-[#757575] flex flex-col z-[99999] shadow-2xl rounded border border-white/20">
          <Link href="/" className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
          <Link href="/tentang" className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
          <Link href="/armada" className="py-3 text-center text-white text-base font-semibold hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
        </div>
      )}

      <nav className="absolute top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
        <Link href="/" className="flex items-center pointer-events-auto">
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-40 md:w-56 h-auto object-contain" priority />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium pointer-events-auto">
          <Link href="/" className="hover:text-[#2eb886] transition">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          <Link href="/armada" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Layanan</Link>
        </div>
      </nav>

      <section className="relative pt-32 pb-12 px-6 md:px-16 text-center bg-black">
        <div className="relative z-20 text-white max-w-3xl mx-auto mt-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{armada.name}</h1>
          <p className="text-gray-300 text-base">{armada.desc}</p>
        </div>
      </section>

      <section className="pt-8 pb-16 md:py-16 px-6 md:px-16 max-w-[1200px] mx-auto">
        <Link href="/armada" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-medium">
          <ArrowLeft size={20} />
          <span>Kembali ke Katalog</span>
        </Link>

       {/* GRID 3 KOLOM (Menyesuaikan dengan gambar referensi agar kotak lebih kecil) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {armada.gallery.map((item, index) => (
            <Link 
              href={`/armada/${slug}/${item.id}`}
              key={index} 
              className="flex flex-col w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Bagian Atas: Gambar dengan padding yang menyesuaikan kotak yang lebih kecil */}
              <div className="w-full aspect-square relative overflow-hidden bg-white border-b border-gray-50 flex items-center justify-center">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-semibold text-xs shadow-lg">Lihat Spesifikasi</span>
                </div>
              </div>

              {/* Bagian Bawah: Teks Judul */}
              <div className="p-4 md:p-5 text-center flex flex-col justify-center flex-grow bg-gray-50/50">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#2eb886] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-2">
                  Klik untuk melihat detail teknis
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* DESKRIPSI DI BAWAH GRID FOTO */}
        <div className="text-center max-w-2xl mx-auto px-4 mt-8 md:mt-12">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Seluruh peralatan LKI Production dirawat secara berkala oleh teknisi profesional kami untuk memastikan performa maksimal dan keamanan tanpa kompromi di setiap acara Anda.
          </p>
        </div>
      </section>

    </main>
  );
}