export type GalleryItem = {
  id: string;
  img: string;
  title: string;
  specs: string[];
  // 1. Tambahkan properti kategori di sini agar TypeScript tidak error
  category?: string;
};

export const armadaDetails: Record<string, { name: string; desc: string; gallery: GalleryItem[] }> = {
  "sound-system": {
    name: "Sound System",
    desc: "Galeri detail perangkat Sound System profesional kami.",
    gallery: [
      // KATEGORI: SPEAKER
      { id: "JBL EON 715", img: "/assets/sound-system/JBL-EON715.png", title: "JBL EON 715", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)", "SPL Maksimal: 128 dB"], category: "Speaker" },
      { id: "JBL 718 S", img: "/assets/sound-system/JBL-718.png", title: "JBL 718 S", specs: ["Tipe: Powered 18-inch PA subwoofer", "SPL Maksimal: 131 dB", "Respons Frekuensi: 40 – 120 Hz (-3 dB); 31 – 150 Hz (-10 dB)"], category: "Speaker" },
      { id: "JBL PRX 918 XLF", img: "/assets/sound-system/JBL-PRX-918-XLF.png", title: "JBL PRX 918 XLF", specs: ["Jenis: Subwoofer aktif 18 inci (18-Inch Powered Subwoofer)", "SPL Maksimum: 134 dB Peak", "Respon Frekuensi: 35 Hz – 92 Hz (±3 dB) / 30 Hz – 110 Hz (-10 dB)"], category: "Speaker" },
      { id: "JBL PRX 535", img: "/assets/sound-system/JBL-PRX-535.png", title: "JBL PRX 535", specs: ["Jenis Sistem: Self-powered 15-inch 3-way bass-reflex", "Max SPL: 134 dB peak", "Respons Frekuensi: 46 Hz – 20 kHz (±3 dB); Rentang frekuensi 39 Hz – 20 kHz (-10 dB)"], category: "Speaker" },
      { id: "JBL PRX 925", img: "/assets/sound-system/JBL-PRX-925.png", title: "JBL PRX 925", specs: ["Daya: 2.000W Peak / 1.000W RMS (Amplifikasi Class D", "Respon Frekuensi: 43 Hz – 20 kHz (-10 dB)", "Max SPL: 137.7 dB"], category: "Speaker" },
      { id: "JBL SRX 725", img: "/assets/sound-system/JBL-SRX-725.png", title: "JBL SRX 725", specs: ["Respon Frekuensi: 37 Hz – 20 kHz", "Max SPL: 136 dB Pea"], category: "Speaker" },
      { id: "JBL SRX 918 FS", img: "/assets/sound-system/JBL SRX 918 FS.png", title: "JBL SRX 918 FS", specs: ["Max SPL (Sound Pressure Level): 134 dB", "Rentang Frekuensi (-10 dB): 35 Hz – 100 Hz"], category: "Speaker" },
      { id: "JBL SRX 928 S", img: "/assets/sound-system/JBL-SRX-928-S.png", title: "JBL SRX 928 S", specs: ["Respon Frekuensi (-10 dB): 31 Hz – 100 Hz.", "Maksimum SPL (Tingkat Tekanan Suara): 140 dB Peak."], category: "Speaker" },
      { id: "JBL SRX 910 LA", img: "/assets/sound-system/JBL-SRX-910-LA.png", title: "JBL SRX 910 LA", specs: ["Tipe Sistem: Line array aktif 2-arah ", "DSP & Kontrol: Dibekali DSP onboard, suite limiter LevelMax, dan kontrol jaringan TCP/IP via Harman HControl lewat port etherCON ganda"], category: "Speaker" },
      { id: "JBL SRX 728 S", img: "/assets/sound-system/JBL-SRX-728-S.png", title: "JBL SRX 728 S", specs: ["Tipe Sistem: Subwoofer pasif vented (bass-reflex)", "Daya Peak (Puncak): 6400W", "Respon Frekuensi (±3 dB): 33 Hz — 220 Hz", "Max SPL: 136 dB peak"], category: "Speaker" },
      { id: "4 accoustic 210", img: "/assets/sound-system/4-accoustic-210.png", title: "4 accoustic 210", specs: ["Kekuatan Daya (Power Handling): 800W AES / 1600W program / 3200W peak.", "Impedansi: 8 Ohm.", "MAX SPL 136 dB."], category: "Speaker" },
      { id: "4 accoustic 212", img: "/assets/sound-system/4-accoustic-212.png", title: "4 accoustic 212", specs: ["Konfigurasi: Dual 12 Neodymium woofers, 4 x 6.5 Midrange, dan 2 x 1.4 Neodymium High Frequency drivers.", "Power Rating: Low/Mid: 1000 W AES (4000 W Peak); Mid/High: 1200 W AES (4800 W Peak)", "Respon Frekuensi & SPL: 50 Hz - 20 kHz, Max SPL 143 dB Peak."], category: "Speaker" },
      { id: "4 accoustic 218 HB", img: "/assets/sound-system/4-accoustic-218-HB.png", title: "4 accoustic 218 HB", specs: ["Tipe Sistem: Dual 18 Hybrid / Bandpass Subwoofer", "Rentang Frekuensi (±3 dB): 34 Hz – 220 Hz", "Maximum SPL: 144 dB"], category: "Speaker" },

      // PERBAIKAN: Mengganti nama id dan title Ashley (sebelumnya duplikat dengan 4 acoustic)
      { id: "ASHLEY Linearray VR 36", img: "/assets/sound-system/ASHLEY Linearray VR 36.png", title: "Ashley Linearray VR 36", specs: ["Tipe Speaker: 3-Way Line Array Speaker (Pasif)", "Respon Frekuensi: 48 Hz – 18.000 Hz", "Max SPL / 1M: 110 dB"], category: "Speaker" },
      { id: "ASHLEY Subwoofer VR 36", img: "/assets/sound-system/ASHLEY Subwoofer VR 36.png", title: "Ashley Subwoofer VR 36", specs: ["Respon Frekuensi: 33 - 120 Hz", "Power Handling: Total Program/Peak: 2400W / 4800W", "Max SPL / 1M: 99 dB"], category: "Speaker" },
      { id: "ASHLEY Subwoofer Zoom 2186", img: "/assets/sound-system/ASHLEY Subwoofer Zoom 2186.png", title: "Ashley Subwoofer Zoom 2186", specs: ["Rated Power: 4000 Watt", "Maximum Power: 8000 Watt", "Frequency Response: 28 Hz – 360 Hz", "Voice Coil: 6 inci (tipe speaker Ashley Orange186Neo)"], category: "Speaker" },

      // Nanti kalau foto aslinya sudah ada, tinggal ganti img, title, dan spesifikasinya
      // FOH MOH
      { id: "Allen & Heath C3500", img: "/assets/sound-system/audio-system-FOH-MOH/Allen & Heath C3500.png", title: "Allen & Heath C3500", specs: ["Layar: 2x layar sentuh kapasitif 12 inci dengan antarmuka Harmony UI", "Fader & Kontrol: 24 fader fisik dengan 6 layer", "Antarmuka Tampilan: Sppl/Scribble strip virtual untuk nama dan warna kanal yang dapat dikustomisasi."], category: "Audio System FOH & MOH" },
      { id: "Allen & Heath DL CDM64", img: "/assets/sound-system/audio-system-FOH-MOH/Allen & Heath DL CDM64.png", title: "Allen & Heath DL CDM64", specs: ["Mic/Line Inputs: 64 analog (XLR)", "Line Outputs: 32 analog (XLR)", "Total Input Channels: 128 input channels dengan pemrosesan penuh", "Mix Outputs: 64 mix outputs"], category: "Audio System FOH & MOH" },
      { id: "Behringer Wing Compact", img: "/assets/sound-system/audio-system-FOH-MOH/Behringer Wing Compact.png", title: "Behringer Wing Compact", specs: ["Saluran & Bus: 48 Flex Channels, 28 Stereo Buses", "Preamp & I/O: 24 MIDAS PRO Mic Preamps, 8 MIDAS PRO XLR Outputs", "Layar & Kontrol: Layar sentuh kapasitif 10,1 inci (10.1-inch touchscreen) dan 13 fader bermotor 100 mm (motorized fader)", "Efek & Mesin: 16 Stereo FX Engines"], category: "Audio System FOH & MOH" },
      { id: "MIDAS DL 32", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS DL 32.png", title: "MIDAS DL 32", specs: ["Tipe Perangkat: Digital Stage Box", "Konektivitas Jaringan AES50: Dual AES50 SuperMAC ports (Koneksi hingga 100 meter menggunakan kabel Cat-5e yang terlindung / shielded)", "Mic Preamp: 32 buah preamplifier mikrofon kelas dunia Midas PRO yang dapat Midas PRO yang dapat dikontrol dari jarak jauh"], category: "Audio System FOH & MOH" },
      { id: "MIDAS DL 231", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS DL 231.png", title: "MIDAS DL 231", specs: ["Jenis Perangkat: 24-Input, 24-Output Active Microphone Splitter", "Analog input mic/line: Gain -2.5 dB s.d. +45 dB (max +24 dBu)", "Layar LCD konfigurasi dan indikator LED status PSU/phantom power"], category: "Audio System FOH & MOH" },
      { id: "MIDAS DL 251", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS DL 251.png", title: "MIDAS DL 251", specs: ["Konfigurasi I/O: 48 mic/line input", "reamp & Gain: Rentang gain -2,5 dB hingga +45 dB dengan kelipatan 2,5 dB", "Jarak kendali hingga 100 meter melalui kabel CAT5/CAT5e."], category: "Audio System FOH & MOH" },
      { id: "MIDAS HD96", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS HD96 .png", title: "MIDAS HD96", specs: ["Kanal Input: Hingga 144 simultaneous input channels", "Mix Buses: 123 time-aligned dan phase-coherent mix buses", "Layar (Touchscreen): Layar sentuh kapasitif 21 inci (multi-touch hingga 10 sentuhan simultan pada versi konsol fisik)"], category: "Audio System FOH & MOH" },
      { id: "MIDAS M32", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS M32 .png", title: "MIDAS M32", specs: ["Channel Input: 40 saluran input simultan (32 preamp mikrofon Midas PRO)", "Mix Bus: 25 mix bus (termasuk 16 aux bus, 6 matrix bus, dan 1 main (LCR)", "Fader: 25 fader motorized 100mm berteknologi Midas PRO", "Phantom Power: +48V dapat dialihkan per input", "Scene Memory: 100 scenes recall"], category: "Audio System FOH & MOH" },
      { id: "MIDAS M32R", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS M32R .png", title: "MIDAS M32R", specs: ["Channel & Input/Output: 40 channel input simultan, 16 preamp mic Midas PRO, 25 mix bus", "Fader & Kontrol: 17 fader motorisasi 100mm (16 channel + 1 master), Layar TFT 5 inci di panel atas", "DSP & Prosesing: 40-bit floating point DSP, Konverter ADC/DAC 192 kHz, 8 efek stereo internal (atau 16 mono)"], category: "Audio System FOH & MOH" },
      { id: "Relacart IEM Sistem 320 + TA C4", img: "/assets/sound-system/audio-system-FOH-MOH/Relacart IEM Sistem 320 + TA C4.png", title: "Relacart IEM Sistem 320 + TA C4", specs: ["Rentang Frekuensi UHF: 470 MHz – 936 MHz", "Switching Bandwidth: 32 MHz.", "Ketersediaan Frekuensi: Hingga 1.280 frekuensi yang dapat disesuaikan (317 presetsaluran dalam 20 grup)."], category: "Audio System FOH & MOH" },
      { id: "RIO DL 3224 DM7", img: "/assets/sound-system/audio-system-FOH-MOH/RIO DL 3224 DM7.png", title: "RIO DL 3224 DM7", specs: ["Analog Input: 32 Channel (Mic/Line XLR dengan Head Amp internal yang bisa dikontrol langsung dari DM7).", "Analog Output: 16 Channel (XLR).", "Digital Output: 8 Channel (4 pasang AES/EBU XLR).", "Dukungan Sampling Rate: 44.1 kHz, 48 kHz, 88.2 kHz, dan 96 kHz"], category: "Audio System FOH & MOH" },
      { id: "Yamaha DM3", img: "/assets/sound-system/audio-system-FOH-MOH/Yamaha DM3.png", title: "Yamaha DM3", specs: ["Kapasitas Channel: 22 channel (16 mono, 1 stereo, 2 FX return)", "Bus: 6 Mix, 2 Matrix, 2 FX, 1 Stereo, 1 Cue", "Input Analog: 16 Mic/Line (12 XLR + 4 XLR/TRS Combo)", "Layar Sentuh: 9 inci multi-touch", "Sampling Rate: 48 kHz / 96 kHz"], category: "Audio System FOH & MOH" },
      { id: "Yamaha DM7", img: "/assets/sound-system/audio-system-FOH-MOH/Yamaha DM7.png", title: "Yamaha DM7", specs: ["Input Channels: 120 channel mono", "Buses: 48 Mix, 12 Matrix, 2 Stereo, 1 Mono, dan 2 Cue buses", "Layar (Display): 2 layar multi-touch 12.1 inci + 1 layar 7 inci"], category: "Audio System FOH & MOH" },

      // MICROPHONE SISTEM 
      { id: "QLXD-4U Wireless", img: "/assets/sound-system/microphone-system/QLXD-4U Wireless.png", title: "QLXD-4U Wireless", specs: ["Jenis Microphone: Professional Wireless Microphone dengan 2 buah mic genggam", "Jarak Jangkauan: Sinyal kuat dengan jangkauan maksimal berkisar hingga 100 meter", "Frekuensi: Frekuensi UHF (dapat diubah-ubah / multi-channel)."], category: "Microphone Sistem" },
      { id: "Sennheiser EW-D SKM-S MMD 835", img: "/assets/sound-system/microphone-system/Sennheiser EW-D SKM-S MMD 835.png", title: "Sennheiser EW-D SKM-S MMD 835", specs: ["Tipe Transduser Kapsul (MMD 835): Dinamis (Dynamic)", "Sensitivitas: 2.1 mV/Pa", "Tingkat Tekanan Suara Maksimum (Max SPL): 154 dB SPL", "Daya Transmisi (RF): 10 mW ERP (dan 12 mW ERP pada rentang tertentu seperti Y1-3"], category: "Microphone Sistem" },
      { id: "Shure SLX Wireless", img: "/assets/sound-system/microphone-system/Shure SLX Wireless.png", title: "Shure SLX Wireless", specs: ["Auto Frequency Selection: Pemilihan frekuensi otomatis.", "Auto Transmitter Setup: Sinkronisasi pemancar dan penerima melalui inframerah", "Kapasitas Sistem: Hingga 20 sistem kompatibel yang bisa digunakan bersamaan"], category: "Microphone Sistem" },
      { id: "Shure SM57 Dynamic", img: "/assets/sound-system/microphone-system/Shure SM57 Dynamic.png", title: "Shure SM57 Dynamic", specs: ["Jenis / Transduser: Dinamis (moving coil / kumparan bergerak)", "Respons Frekuensi: 40 hingga 15.000 Hz", "Pola Kutub (Polar Pattern): Kardioid"], category: "Microphone Sistem" },
      { id: "Shure SM58 Dynamic", img: "/assets/sound-system/microphone-system/Shure SM58 Dynamic.png", title: "Shure SM58 Dynamic", specs: ["Jenis Transduser: Dinamis (kumparan bergerak)", "Respons Frekuensi: 50 Hz – 15.000 Hz", "Sensitivitas: −54,5 dBV/Pa (1,85 mV) pada 1 kHz (terbuka)"], category: "Microphone Sistem" },

      // MICROPHONE DRUMSET
      { id: "AKG Mic Set", img: "/assets/sound-system/microphone-drumset/AKG Mic Set.png", title: "AKG Mic Set", specs: ["Konstruksi bodi dari logam (metal casing) yang tahan lama.", "Gril baja tahan benturan dan tahan bising (high max SPL).", "Cocok untuk live performance, rekaman drum, perkusi, amplif, maupun alat musik tiup (brass)"], category: "Microphone Drumset" },
      { id: "AUDIX D6", img: "/assets/sound-system/microphone-drumset/AUDIX D6.png", title: "AUDIX D6", specs: ["Tipe Mikrofon: Dinamis (Dynamic Instrument Microphone)", "Pola Penangkapan (Polar Pattern): Kardioid (Cardioid – fokus dari depan dan meredam suara dari samping/belakang)", "Respon Frekuensi: 30 Hz – 15 kHz", "Impedansi Output: 200 ohm", "Kemampuan Tekanan Suara (SPL Handling): Lebih dari 144 dB"], category: "Microphone Drumset" },
      { id: "Sennheiser e 604", img: "/assets/sound-system/microphone-drumset/Sennheiser e 604.png", title: "Sennheiser e 604", specs: ["Prinsip Transduser: Dinamis (moving-coil)", "Pola Kutub (Pickup Pattern): Cardioid", "Respon Frekuensi: 40 – 18.000 Hz", "Sensitivitas (lapangan bebas, tanpa beban): 1,8 mV/Pa pada 1 kHz"], category: "Microphone Drumset" },
      { id: "Sennheiser e 904", img: "/assets/sound-system/microphone-drumset/Sennheiser e 904.png", title: "Sennheiser e 904", specs: ["Jenis Mikrofon: Dinamis (Dynamic)", "Pola Kutub (Pickup Pattern): Cardioid", "Respon Frekuensi: 40 Hz – 18.000 Hz", "Sensitivitas: 2,0 mV/Pa (pada 1 kHz)"], category: "Microphone Drumset" },
      { id: "SHURE BETA 91A", img: "/assets/sound-system/microphone-drumset/SHURE BETA 91A.png", title: "SHURE BETA 91A", specs: ["Tipe Transduser: Electret Condenser (Boundary / Half-cardioid)", "Pola Kutub (Polar Pattern): Half-cardioid", "Respons Frekuensi: 20 Hz – 20.000 Hz", "Max SPL: Beban 1000 Ω: 151 dB, Beban 2500 Ω: 155 dB"], category: "Microphone Drumset" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-drumset/SHURE SM81.png", title: "SHURE SM81", specs: ["Detail menyusul"], category: "Microphone Drumset" },

      // // POWER
      // { id: "dummy-mic-sistem", img: "/assets/sound-system/power/ASHLEY V5 Pro.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },
      // { id: "dummy-mic-sistem", img: "/assets/sound-system/power/ASHLEY V6 Pro.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },
      // { id: "dummy-mic-sistem", img: "/assets/sound-system/power/Phaselab NX 14000.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },
      // { id: "dummy-mic-sistem", img: "/assets/sound-system/power/Phaselab NX 20000.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },
      // { id: "dummy-mic-sistem", img: "/assets/sound-system/power/Soft Digam.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },

      // BACKLINE
      { id: "DW Collector Series", img: "/assets/sound-system/backline/DW Collector Series.png", title: "DW Collector Series", specs: ["Lug: Desain Turret Lugs khas DW.", "Mounting Tom: Sistem suspensi STM (Suspension Tom Mount) yang membuat tom bebas beresonansi", "Hoop: Steel Triple Flange atau True Hoops™.", "uning Rod: True-Pitch® Tuning Rods"], category: "Backline" },
      { id: "Fender Stratocaster", img: "/assets/sound-system/backline/Fender Stratocaster.png", title: "Fender Stratocaster", specs: ["Radius Fretboard: 9,5 inci (241 mm) yang memberikan kenyamanan untuk chording maupun bending.", "Jumlah Fret: 22 fret", "Tremolo / Jembatan (Bridge): Sistem 2-point atau 6-screw vintage-style synchronized tremolo dengan tremolo arm."], category: "Backline" },
      { id: "GK CX 410 + 700 RB", img: "/assets/sound-system/backline/GK CX 410 + 700 RB.png", title: "GK CX 410 + 700 RB", specs: ["Head Amp: Gallien-Krueger 700RB-II", "Equalizer (EQ): Active 4-Band EQ (Bass, Low Mid, High Mid, Treble)", "G.I.V.E. Technology (Gate Induced Valve Effect) untuk memberikan simulasi kehangatan tabung dan distorsi growl saat gain dinaikkan."], category: "Backline" },
      { id: "GK RBX + 700 RB", img: "/assets/sound-system/backline/GK RBX + 700 RB.png", title: "GK RBX + 700 RB", specs: ["Daya Woofer (LF): 480 Watt ke beban 4 Ohm (atau 320 Watt ke 8 Ohm) pada 1 kHz.", "Daya Horn/Tweeter (HF): 50 Watt ke beban 8 Ohm pada 5 kHz (Sistem Bi-amp).", "Preamp: Solid State dengan Integrated Circuit dan arus tinggi (high-current power supply and amp circuitry)."], category: "Backline" },
      { id: "Marshall JCM 900 100W", img: "/assets/sound-system/backline/Marshall JCM 900 100W.png", title: "Marshall JCM 900 100W", specs: ["Jenis Amplifier: All-tube (tabung penuh)", "Daya Output: 100 Watt (dapat diubah/diturunkan ke 50 Watt)", "Equalizer: Shared 4-band EQ (3-band EQ: Bass, Middle, Treble, serta kontrol Precence)", "Tabung Preamp: 3 x ECC83 / 12AX7", "Tabung Power: 4 x 5881"], category: "Backline" },
      { id: "Marshall JCM 900 SL-X", img: "/assets/sound-system/backline/Marshall JCM 900 SL-X.png", title: "Marshall JCM 900 SL-X", specs: ["Tipe Amplifier: All-Valve (Full Tube / Tabung murni tanpa diode clipping", "Keluaran Daya (Power Output): Model 2100: 100 Watts, Model 2500: 50 Watts"], category: "Backline" },
      { id: "Marshall MG 100 FX", img: "/assets/sound-system/backline/Marshall MG 100 FX.png", title: "Marshall MG 100 FX", specs: ["Daya Output: 100 Watt RMS", "Tipe: Solid-state", "Kanal (Channels): 4 kanal (Clean, Crunch, OD1, OD2) yang dapat diprogram/disimpan (store presets)", "Kontrol EQ: Bass, Middle (Mid), Treble, dan Gain"], category: "Backline" },
      { id: "Peavey 300 KB", img: "/assets/sound-system/backline/Peavey 300 KB.png", title: "Peavey 300 KB", specs: ["Daya Output (Power): 150 Watt RMS (pada beban 4 Ohm, dengan sistem proteksi DDT compression).", "Konfigurasi Speaker: 1 buah speaker 15 inci + high-frequency horn (tweeter).", "Kanal / Input: Multi-kanal", "Equalizer (EQ): Active EQ per kanal (Low, Mid, High).", "Respons Frekuensi: 30 Hz – 40 kHz"], category: "Backline" },
      { id: "RD 700", img: "/assets/sound-system/backline/RD 700.png", title: "RD 700", specs: ["Tuts: 88 tuts dengan mekanisme Progressive Hammer-Action Keyboard (sensitif terhadap velocity dan aftertouch).", "Polifoni Maksimal: 128 suara / 16 bagian (multitimbral).", "Tampilan: Layar LCD grafis.", "Ekspansi: 2 slot ekspansi gelombang seri SRX (SRX-Series)."], category: "Backline" },
      { id: "RD 2000", img: "/assets/sound-system/backline/RD 2000.png", title: "RD 2000", specs: ["Tipe Tuts: Keyboard PHA-50 (Struktur Hibrida Kayu dan Plastik, dengan Escapement dan nuansa Ebony/Ivory).", "Jumlah Tuts: 88 tuts.", "Dimensi: 1.412 x 367 x 140 mm.", "Konsumsi Daya: 23 W."], category: "Backline" },
      { id: "Roland Jazz Chorus 120", img: "/assets/sound-system/backline/Roland Jazz Chorus 120.png", title: "Roland Jazz Chorus 120", specs: ["Tipe Ampli: Solid-state stereo guitar amplifier (120 watt total, 60W + 60W untuk masing-masing 2 channel).", "Speaker: 2 x 12 inci (silver-cone speakers).", "Konsumsi Daya: 130W – 132W"], category: "Backline" },
      { id: "Yamaha Tour Custom", img: "/assets/sound-system/backline/Yamaha Tour Custom.png", title: "Yamaha Tour Custom", specs: ["Sistem Mount: Y.E.S.S. (Yamaha Enhanced Sustain System)", "Lug: Absolute Lugs dengan sistem penguncian satu baut (single-bolt secure mounting).", "Hoop / Ring: 2.3mm Inverse Dyna Hoop pada Tom dan Floor Tom (membantu pengaturan overtone)."], category: "Backline" }
    ],
  },

  "lighting": {
    name: "Lighting",
    desc: "Galeri detail perangkat pencahayaan panggung canggih kami.",
    gallery: [
      // KATEGORI LIGHTING
      { id: "420 BSW", img: "/assets/lighting/lighting euipment /420 BSW.png", title: "420 BSW", specs: ["Sumber Cahaya (Light Source): Lampu USHIO 420W / LED 420W / Philips MSD Silver 420W (Temperatur warna ±7500K - 7800K)", "Warna (Color Wheel): 1 Roda Warna (14 warna + putih, efek pelangi, atau sistem CMY + CTO pada beberapa versi)"], category: "Lighting" },
      { id: "par led", img: "/assets/lighting/lighting euipment /All Par Led.png", title: "All Par Led", specs: ["Warna sangat cerah", "Bisa diprogram via DMX", "Cocok untuk wash panggung"], category: "Lighting" },
      { id: "Fresnel 200W", img: "/assets/lighting/lighting euipment /Fresnel 200W.png", title: "Fresnel 200W", specs: ["Jangkauan hingga 50 meter", "Fokus manual", "Stand kokoh"], category: "Lighting" },
      { id: "Minibrute 4 Cells", img: "/assets/lighting/lighting euipment /Minibrute 4 Cells.png", title: "Minibrute 4 Cells", specs: ["Semburan asap tebal", "Kendalikan via remote", "Warming up cepat"], category: "Lighting" },
      { id: "Spark Waterproof Beam", img: "/assets/lighting/lighting euipment /Spark Waterproof Beam.png", title: "Spark Waterproof Beam", specs: ["Cahaya super tajam", "14 warna + 17 gobo", "Pergerakan sangat cepat"], category: "Lighting" },
      { id: "TUNA 650 King Prism", img: "/assets/lighting/lighting euipment /TUNA 650 King Prism.png", title: "TUNA 650 King Prism", specs: ["Warna sangat cerah", "Bisa diprogram via DMX", "Cocok untuk wash panggung"], category: "Lighting" },
      { id: "Wallwasher + Led Bar", img: "/assets/lighting/lighting euipment /Wallwasher + Led Bar.png", title: "Wallwasher + Led Bar", specs: ["Jangkauan hingga 50 meter", "Fokus manual", "Stand kokoh"], category: "Lighting" },
      { id: "XM Lite Beam", img: "/assets/lighting/lighting euipment /XM Lite Beam.png", title: "XM Lite Beam", specs: ["Semburan asap tebal", "Kendalikan via remote", "Warming up cepat"], category: "Lighting" },

      // KATEGORI MIXER
      { id: "Avolites Tiger Touch II", img: "/assets/lighting/mixer/Avolites Tiger Touch II.png", title: "Spark Waterproof Beam", specs: ["Cahaya super tajam", "14 warna + 17 gobo", "Pergerakan sangat cepat"], category: "Mixer" },
      { id: "Grand MA 3", img: "/assets/lighting/mixer/Grand MA 3.png", title: "TUNA 650 King Prism", specs: ["Warna sangat cerah", "Bisa diprogram via DMX", "Cocok untuk wash panggung"], category: "Mixer" },
      { id: "Mini Pearl 1024 B", img: "/assets/lighting/mixer/Mini Pearl 1024 B.png", title: "Wallwasher + Led Bar", specs: ["Jangkauan hingga 50 meter", "Fokus manual", "Stand kokoh"], category: "Mixer" },

      // KATEGORI SISTEM
      { id: "Artnet", img: "/assets/lighting/sistem/Artnet.png", title: "Artnet", specs: ["Cahaya super tajam", "14 warna + 17 gobo", "Pergerakan sangat cepat"], category: "Sistem" },
      { id: "NPU Grand MA 2", img: "/assets/lighting/sistem/NPU Grand MA 2.png", title: "NPU Grand MA 2", specs: ["Warna sangat cerah", "Bisa diprogram via DMX", "Cocok untuk wash panggung"], category: "Sistem" },
      { id: "Spliter DMX", img: "/assets/lighting/sistem/Spliter DMX.png", title: "Spliter DMX", specs: ["Jangkauan hingga 50 meter", "Fokus manual", "Stand kokoh"], category: "Sistem" },
    ],
  },

  "video-tron": {
    name: "LED Video Tron",
    desc: "Galeri detail layar LED resolusi tinggi kami.",
    gallery: [
      { id: "led-outdoor", img: "/assets/videotron1.png", title: "LED Screen P3.9 Outdoor", specs: ["Tahan air & cuaca (IP65)", "Tingkat kecerahan 5000 nits", "Ukuran custom per panel"] },
      { id: "led-indoor", img: "/assets/videotron2.png", title: "LED Screen P2.5 Indoor", specs: ["Resolusi ultra HD", "Refresh rate 3840Hz (anti-flicker)", "Warna sangat natural"] },
      { id: "video-processor", img: "/assets/videotron3.png", title: "Video Processor", specs: ["Mendukung input 4K", "Transisi seamless", "Bisa multiple layer"] },
      { id: "rigging-fiber", img: "/assets/videotron4.png", title: "Kabel Fiber Optik & Rigging", specs: ["Transmisi data zero-delay", "Struktur rigging aluminium", "Aman dan kokoh"] }
    ],
  },

  
  "rigging-stage": {
    name: "Reagging / Stage",
    desc: "srriittt.",
    gallery: [
      // RINGLOCK
      { id: "Rigging-Ring-Lock", img: "/assets/rigging-stage/IMG_1074.png", title: "Rigging Ring-Lock", specs: ["Ring Lock"] },

      // ALUMUNIUM
      { id: "Rigging-alumunium", img: "/assets/loading/loading.png", title: "Rigging Alumunium", specs: ["Alumunium"] },

    ],
  }
};