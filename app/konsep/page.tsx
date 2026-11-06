"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Sparkles, Layout, Zap } from "lucide-react";

export default function KonsepCarnavalPage() {
  // Data Dummy untuk Galeri Konsep
  const konsepList = [
    {
      id: 1,
      title: "Tata Letak Armada & FOH",
      desc: "Desain penempatan rigging, mixer FOH, dan speaker di atas truk agar seimbang, aman, dan menghasilkan suara merata sepanjang jalan.",
      icon: <Layout className="w-6 h-6 text-[#2eb886]" />,
      img: "/assets/gudang.png" // Ganti dengan foto referensi layout LKI
    },
    {
      id: 2,
      title: "Desain Lighting & Visual",
      desc: "Konsep tata cahaya outdoor menggunakan moving head, par LED, dan strobe yang disinkronisasi untuk memukau penonton di malam hari.",
      icon: <Zap className="w-6 h-6 text-[#2eb886]" />,
      img: "/assets/halaman.png" // Ganti dengan foto referensi lighting
    },
    {
      id: 3,
      title: "Dekorasi & Rigging Custom",
      desc: "Inspirasi kerangka aluminium (rigging) kustom yang kokoh untuk menopang LED screen, banner panggung, dan properti karnaval.",
      icon: <Sparkles className="w-6 h-6 text-[#2eb886]" />,
      img: "/assets/gudang.png" // Ganti dengan foto referensi rigging
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a1914] font-sans text-white">
      
      <main className="flex-grow pt-16 pb-20 px-6 md:px-16">
        
        {/* HEADER */}
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          <div>
            <Link href="/carnaval" className="inline-flex items-center text-gray-400 hover:text-[#2eb886] transition-colors mb-6 md:mb-8 font-medium">
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Halaman Carnaval
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#2eb886]/20 rounded-full flex items-center justify-center border border-[#2eb886]/30">
                <Lightbulb className="w-6 h-6 text-[#2eb886]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Konsep Terbaik</h1>
            </div>
            
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Temukan referensi dan inspirasi rancangan tata letak armada, visual, hingga sistem pencahayaan spektakuler untuk memeriahkan karnaval Anda.
            </p>
          </div>

          <div className="md:mt-4">
            <Image
              src="/assets/LOGO LKI PRO FORMAL-02.png" 
              alt="LKI Production Logo"
              width={220}
              height={50}
              className="w-48 md:w-56 h-auto object-contain brightness-0 invert" // Logo dipaksa putih agar kontras
              priority
            />
          </div>
        </div>

        {/* GRID KONSEP */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {konsepList.map((item) => (
              <div key={item.id} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden group hover:border-[#2eb886]/50 transition-all duration-300 flex flex-col">
                
                {/* Gambar Konsep */}
                <div className="relative w-full h-56 md:h-64 overflow-hidden bg-zinc-800">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  />
                  {/* Overlay gradien agar menyatu dengan latar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
                </div>
                
                {/* Deskripsi */}
                <div className="p-8 flex flex-col flex-grow relative z-10 -mt-10 bg-zinc-900/80 backdrop-blur-md rounded-t-3xl border-t border-zinc-800/50">
                  <div className="w-12 h-12 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-5 group-hover:border-[#2eb886] transition-colors shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2eb886] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {item.desc}
                  </p>

                  <a 
                    href={`https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20tertarik%20berkonsultasi%20mengenai%20${encodeURIComponent(item.title)}%20untuk%20Carnaval.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-white/5 hover:bg-[#2eb886] text-white py-3.5 rounded-xl font-semibold transition-all border border-white/10 hover:border-[#2eb886]"
                  >
                    Konsultasi Konsep Ini
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="w-full mt-auto bg-black text-gray-400 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-zinc-800 text-center md:text-left">
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
          <a href="https://www.instagram.com/lki.production?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Image src="/assets/ig-putih.png" alt="Instagram" width={20} height={20} className="object-contain" />
          </a>
          <a href="https://www.youtube.com/@LKIProduction" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Image src="/assets/youtube-putih.png" alt="YouTube" width={20} height={20} className="object-contain" />
          </a>
          <a href="https://www.tiktok.com/@lki.production?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Image src="/assets/tiktok-putih.png" alt="TikTok" width={20} height={20} className="object-contain" />
          </a>
        </div>
      </footer>

    </div>
  );
}