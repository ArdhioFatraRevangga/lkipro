"use client";

import { notFound } from "next/navigation";
import { armadaDetails } from "../../data/armada"; // Alamat folder sudah diperbaiki
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react"; // Tambahkan 'use' dari react
import { ArrowLeft } from "lucide-react";

export default function CatalogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Buka Promise params menggunakan fitur React.use() (Solusi Next.js 15)
  const resolvedParams = use(params);
  const slug = decodeURIComponent(resolvedParams.slug);

  // 2. Ambil data dari armada.ts
  const armada = armadaDetails[slug];
  if (!armada) notFound();

  // 3. State untuk menyimpan kategori yang sedang diklik
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  // 4. Mengambil daftar kategori unik dari data (Inilah variabel yang tadi dibilang 'not defined')
  const categories = ["Semua", ...Array.from(new Set(armada.gallery.map(item => item.category).filter(Boolean)))];

  // 5. Memfilter barang yang tampil
  const filteredGallery = activeCategory === "Semua" 
    ? armada.gallery 
    : armada.gallery.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-6 md:px-16 font-sans">
      
      {/* HEADER KATALOG */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link href="/armada" className="inline-flex items-center text-gray-500 hover:text-[#2eb886] transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Katalog
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{armada.name}</h1>
        <p className="text-gray-600 text-lg">{armada.desc}</p>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* TOMBOL FILTER KATEGORI */}
        {categories.length > 1 && (
          <div className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat as string)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-[#2eb886] text-white shadow-md" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#2eb886] hover:text-[#2eb886]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* GRID BARANG (Sudah difilter) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-12">
          {filteredGallery.map((item, index) => (
            <Link 
              href={`/armada/${slug}/${item.id}`}
              key={index} 
              className="flex flex-col w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-full aspect-square relative overflow-hidden bg-white border-b border-gray-50 flex items-center justify-center">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-contain p-3 md:p-6 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full font-semibold text-[10px] md:text-xs shadow-lg">Lihat Spesifikasi</span>
                </div>
              </div>

              <div className="p-3 md:p-5 text-center flex flex-col justify-center flex-grow bg-gray-50/50">
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
  );
}