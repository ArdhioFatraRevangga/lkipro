"use client";

import Image from "next/image";
import { useState } from "react";
// PERUBAHAN: Menambahkan Lightbulb ke import
import { Menu, X, ArrowRight, Truck, Speaker, Calendar } from "lucide-react";
import Link from "next/link";

export default function CarnavalPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <main className="relative min-h-screen bg-black font-sans text-white flex flex-col">

            {/* ====================================================== */}
            {/* 1. TOMBOL HAMBURGER VIP */}
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
            {/* 2. MENU DROPDOWN MOBILE */}
            {/* ====================================================== */}
            {isMobileMenuOpen && (
                <div className="sm:hidden fixed top-[85px] right-6 w-[180px] bg-black/70 backdrop-blur-lg flex flex-col z-[999999] shadow-2xl rounded-2xl border border-white/10 overflow-hidden py-2 animate-in fade-in duration-200">
                    <Link href="/" className="py-3 px-6 text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
                    <Link href="/tentang" className="py-3 px-6 text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
                    <Link href="/layanan" className="py-3 px-6 text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
                    <Link href="/kontak" className="py-3 px-6 text-white text-base font-medium hover:bg-white/10 hover:text-[#2eb886] transition-all" onClick={() => setIsMobileMenuOpen(false)}>Kontak Kami</Link>
                </div>
            )}

            {/* ====================================================== */}
            {/* 3. NAVBAR UTAMA DESKTOP */}
            {/* ====================================================== */}
            <nav className="absolute top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 text-white bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between pointer-events-none">
                <Link href="/" className="flex items-center pointer-events-auto">
                    <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={220} height={50} className="w-40 md:w-56 h-auto object-contain" priority />
                </Link>
                <div className="hidden sm:flex items-center gap-8 text-sm font-medium pointer-events-auto">
                    <Link href="/" className="hover:text-[#2eb886] transition">Beranda</Link>
                    <Link href="/tentang" className="hover:text-[#2eb886] transition">Tentang</Link>
                    <Link href="/layanan" className="hover:text-[#2eb886] transition">Layanan</Link>
                    <Link href="/kontak" className="hover:text-[#2eb886] transition">Kontak Kami</Link>
                </div>
            </nav>

            {/* ====================================================== */}
            {/* KONTEN UTAMA HALAMAN */}
            {/* ====================================================== */}
            <div className="flex-grow">

                {/* HEADER CARNAVAL DENGAN BACKGROUND FOTO */}
                <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-6 md:px-16 text-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src="/assets/loading/IMG_1071.png" alt="Background Carnaval LKI" fill className="object-cover object-center" priority />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>

                    <div className="relative z-20 text-white max-w-3xl mx-auto mt-4">
                        <div className="w-20 h-20 bg-[#2eb886]/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-[#2eb886]/30">
                            <Truck className="w-10 h-10 text-[#2eb886] drop-shadow-lg" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
                            Carnaval
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg drop-shadow max-w-2xl mx-auto">
                            Solusi persewaan armada truk dan sound system bertenaga besar untuk memeriahkan parade dan karnaval Anda.
                        </p>
                    </div>
                </section>

                {/* SECTION LAYANAN CARNAVAL (MODE GELAP) */}
                <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Fasilitas Carnaval Kami</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            LKI Production siap mendukung mobilitas dan kemeriahan acara jalanan Anda dengan armada yang terawat dan kru yang handal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">

                        {/* Kartu 1: Armada Truk */}
                        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-sm hover:border-[#2eb886]/50 transition-all duration-300 group flex flex-col hover:-translate-y-1">
                            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-[#2eb886] transition-colors">
                                <Truck className="w-7 h-7 text-gray-400 group-hover:text-[#2eb886]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#2eb886] transition-colors">Armada Carnaval</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                Truk bak terbuka dan box yang dimodifikasi khusus untuk mengangkut sound system berskala besar, genset, dan kru secara aman selama rute karnaval.
                            </p>
                            <Link href="/armada" className="inline-flex items-center text-[#2eb886] font-semibold hover:text-[#22996e] transition-colors mt-auto w-fit">
                                Lihat Katalog Armada <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>

                        {/* Kartu 2: Sound System Parade */}
                        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-sm hover:border-[#2eb886]/50 transition-all duration-300 group flex flex-col hover:-translate-y-1">
                            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-[#2eb886] transition-colors">
                                <Speaker className="w-7 h-7 text-gray-400 group-hover:text-[#2eb886]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#2eb886] transition-colors">Sound System Carnaval</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                Instalasi audio bertenaga ekstra tinggi yang dirancang khusus untuk membelah keramaian dan kondisi jalanan terbuka tanpa kehilangan kejernihan suara.
                            </p>
                            <Link href="/soundcarnaval" className="inline-flex items-center text-[#2eb886] font-semibold hover:text-[#22996e] transition-colors mt-auto w-fit">
                                Lihat Katalog Sound <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>

                        {/* Kartu 3: Konsep Terbaik Carnaval */}
                        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-sm hover:border-[#2eb886]/50 transition-all duration-300 group flex flex-col hover:-translate-y-1">
                            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-[#2eb886] transition-colors">
                                <Truck className="w-7 h-7 text-gray-400 group-hover:text-[#2eb886]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#2eb886] transition-colors">Konsep Terbaik</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                Temukan inspirasi rancangan tata letak armada, dekorasi visual, hingga referensi desain pencahayaan terbaik untuk karnaval yang tak terlupakan.
                            </p>
                            <Link href="/konsep" className="inline-flex items-center text-[#2eb886] font-semibold hover:text-[#22996e] transition-colors mt-auto w-fit">
                                Lihat Konsep <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>

                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-zinc-900 py-16 px-6 md:px-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <Calendar className="w-12 h-12 text-[#2eb886] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Amankan Jadwal Karnavalmu!</h2>
                        <p className="text-gray-400 mb-8">
                            Jadwal armada karnaval kami sering penuh di musim perayaan. Hubungi kami sekarang untuk memastikan ketersediaan truk dan sound system untuk acara Anda.
                        </p>
                        <a
                            href="https://wa.me/62812233777?text=Halo%20LKI%20Production,%20saya%20ingin%20tanya%20seputar%20persewaan%20armada%20untuk%20karnaval."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex bg-[#2eb886] hover:bg-[#24966d] text-white px-8 py-3.5 rounded-full font-medium transition cursor-pointer"
                        >
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </section>

            </div>

            {/* ====================================================== */}
            {/* 3. FOOTER FULL WIDTH */}
            {/* ====================================================== */}
            <footer className="w-full bg-[#111] text-gray-400 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-center md:text-left mt-auto">
                <div className="mb-4 md:mb-0">
                    <Link href="/" className="inline-block">
                        <Image src="/assets/LOGO LKI PRO FORMAL-02.png" alt="LKI Production Logo" width={200} height={45} className="w-36 md:w-48 h-auto object-contain" />
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

        </main>
    );
}