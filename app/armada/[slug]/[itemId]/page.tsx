"use client";

import Image from "next/image";
import { useState } from "react"; 
import { Menu, X, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { armadaDetails } from "@/app/data/armada";

export default function SpesifikasiPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const params = useParams();
  
  // Menerjemahkan kode URL (%20, dll) kembali ke teks normal
  const slug = decodeURIComponent(params.slug as string);
  const itemId = decodeURIComponent(params.itemId as string);

  const armada = armadaDetails[slug];
  if (!armada) notFound();

  const item = armada.gallery.find((g) => g.id === itemId);
  if (!item) notFound();

  return (
    <main className="relative min-h-screen bg-white font-sans text-gray-900 pb-20">
      
      {/* NAVBAR */}
      <button type="button" onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden fixed top-6 right-6 w-12 h-12 bg-black/30 border border-white/20 rounded-lg flex items-center justify-center z-[99999] cursor-pointer shadow-lg">
        {isMobileMenuOpen ? <X size={32} className="text-white pointer-events-none" /> : <Menu size={32} className="text-white pointer-events-none" />}
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[85px] right-6 w-[140px] bg-[#757575] flex flex-col z-[99999] shadow-2xl rounded border border-white/20">
          <Link href="/" className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
          <Link href="/tentang" className="py-3 text-center text-white text-base font-semibold border-b border-white/50 hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
          <Link href="/armada" className="py-3 text-center text-white text-base font-semibold hover:bg-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Armada</Link>
        </div>
      )}

      <nav className="absolute top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
        <Link href="/" className="flex items-center pointer-events-auto">
          <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-40 md:w-56 h-auto object-contain" priority />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium pointer-events-auto">
          <Link href="/" className="hover:text-[#2eb886] transition">Beranda</Link>
          <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
          <Link href="/armada" className="hover:text-[#2eb886] transition border-b-2 border-[#2eb886] pb-1">Armada</Link>
        </div>
      </nav>

      <section className="relative pt-32 pb-12 px-6 md:px-16 text-center bg-black">
        <div className="relative z-20 text-white max-w-3xl mx-auto mt-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-300 text-base">Spesifikasi Detail Peralatan LKI Production</p>
        </div>
      </section>

      <section className="pt-8 pb-16 md:py-16 px-6 md:px-16 max-w-5xl mx-auto">
        <Link href={`/armada/${slug}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-medium">
          <ArrowLeft size={20} />
          <span>Kembali ke Galeri {armada.name}</span>
        </Link>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          
          {/* Gambar Besar Kiri (Sekarang pakai object-contain & padding) */}
          <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 flex items-center justify-center p-8">
            <Image src={item.img} alt={item.title} fill className="object-contain p-8" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center pt-2 md:pt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{item.title}</h2>
            <div className="w-16 h-1.5 bg-[#2eb886] rounded-full mb-8"></div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Spesifikasi Teknis:</h3>
            <ul className="space-y-5">
              {item.specs.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#2eb886] shrink-0 mt-0.5" size={24} />
                  <span className="text-gray-700 text-lg leading-relaxed">{spec}</span>
                </li>
              ))}
            </ul>

            <a 
              href={`https://wa.me/6281234567890?text=Halo%20LKI%20Production,%20saya%20tertarik%20menyewa%20${encodeURIComponent(item.title)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-12 bg-[#2eb886] hover:bg-[#24966d] text-white px-8 py-4 rounded-xl font-semibold transition text-center w-full md:w-fit"
            >
              Pesan Alat Ini Sekarang
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}