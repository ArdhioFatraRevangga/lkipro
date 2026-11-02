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
      { id: "JBL EON 715", img: "/assets/sound-system/JBL-EON715.png", title: "JBL EON 715", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)"], category: "Speaker" },
      { id: "JBL 718 S", img: "/assets/sound-system/JBL-718.png", title: "JBL 718 S", specs: ["Bass reflex system", "Daya puncak: 4000 Watt", "Suara menggelegar dan padat"], category: "Speaker" },
      { id: "JBL PRX 918 XLF", img: "/assets/sound-system/JBL-PRX-918-XLF.png", title: "JBL PRX 918 XLF", specs: ["Audio resolusi tinggi 96kHz", "Motorized faders", "Built-in efek studio"], category: "Speaker" },
      { id: "JBL PRX 535", img: "/assets/sound-system/JBL-PRX-535.png", title: "JBL PRX 535", specs: ["Jangkauan sinyal hingga 100m", "Anti-feedback system", "Baterai tahan 10 jam"], category: "Speaker" },
      { id: "JBL PRX 925", img: "/assets/sound-system/JBL-PRX-925.png", title: "JBL PRX 925", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)"], category: "Speaker" },
      { id: "JBL SRX 725", img: "/assets/sound-system/JBL-SRX-725.png", title: "JBL SRX 725", specs: ["Bass reflex system", "Daya puncak: 4000 Watt", "Suara menggelegar dan padat"], category: "Speaker" },
      { id: "JBL SRX 918 SF", img: "/assets/sound-system/jbl-srx-918.png", title: "JBL SRX 918 SF", specs: ["Audio resolusi tinggi 96kHz", "Motorized faders", "Built-in efek studio"], category: "Speaker" },
      { id: "JBL SRX 928 S", img: "/assets/sound-system/JBL-SRX-928-S.png", title: "JBL SRX 928 S", specs: ["Jangkauan sinyal hingga 100m", "Anti-feedback system", "Baterai tahan 10 jam"], category: "Speaker" },
      { id: "JBL SRX 910 LA", img: "/assets/sound-system/JBL-SRX-910-LA.png", title: "JBL SRX 910 LA", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)"], category: "Speaker" },
      { id: "JBL SRX 728 S", img: "/assets/sound-system/JBL-SRX-728-S.png", title: "JBL SRX 728 S", specs: ["Bass reflex system", "Daya puncak: 4000 Watt", "Suara menggelegar dan padat"], category: "Speaker" },
      { id: "4 accoustic 210", img: "/assets/sound-system/4-accoustic-210.png", title: "4 accoustic 210", specs: ["Audio resolusi tinggi 96kHz", "Motorized faders", "Built-in efek studio"], category: "Speaker" },
      { id: "4 accoustic 212", img: "/assets/sound-system/4-accoustic-212.png", title: "4 accoustic 212", specs: ["Jangkauan sinyal hingga 100m", "Anti-feedback system", "Baterai tahan 10 jam"], category: "Speaker" },
      { id: "4 accoustic 218 HB", img: "/assets/sound-system/4-accoustic-218-HB.png", title: "4 accoustic 218 HB", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)"], category: "Speaker" },
      
      // PERBAIKAN: Mengganti nama id dan title Ashley (sebelumnya duplikat dengan 4 acoustic)
      { id: "ASHLEY Linearray VR 36", img: "/assets/sound-system/ASHLEY Linearray VR 36.png", title: "Ashley Linearray VR 36", specs: ["Sistem Line Array Custom", "Tembakan suara jauh", "Desain rigging aman"], category: "Speaker" },
      { id: "ASHLEY Subwoofer VR 36", img: "/assets/sound-system/ASHLEY Subwoofer VR 36.png", title: "Ashley Subwoofer VR 36", specs: ["Subwoofer performa tinggi", "Bass presisi", "Material kokoh"], category: "Speaker" },
      { id: "ASHLEY Subwoofer Zoom 2186", img: "/assets/sound-system/ASHLEY Subwoofer Zoom 2186.png", title: "Ashley Subwoofer Zoom 2186", specs: ["Subwoofer Double 18 Inch", "Low-frequency extended", "Cocok untuk konser besar"], category: "Speaker" },
      
      // Nanti kalau foto aslinya sudah ada, tinggal ganti img, title, dan spesifikasinya
      // FOH MOH
      { id: "dummy-foh", img: "/assets/sound-system/audio-system-FOH-MOH/Allen & Heath C3500.png", title: "Mixer FOH", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-backline", img: "/assets/sound-system/audio-system-FOH-MOH/Allen & Heath DL CDM64.png", title: "Ampli Gitar", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-cable", img: "/assets/sound-system/audio-system-FOH-MOH/Behringer Wing Compact.png", title: "Snake Cable", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-mic-drum", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS DL 32.png", title: "Mic Drum Kit", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS DL 231.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-power", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS DL 251.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-foh", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS HD96 .png", title: "Mixer FOH", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-backline", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS M32 .png", title: "Ampli Gitar", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-cable", img: "/assets/sound-system/audio-system-FOH-MOH/MIDAS M32R .png", title: "Snake Cable", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-mic-drum", img: "/assets/sound-system/audio-system-FOH-MOH/Relacart IEM Sistem 320 + TA C4.png", title: "Mic Drum Kit", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/audio-system-FOH-MOH/RIO DL 3224 DM7.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-power", img: "/assets/sound-system/audio-system-FOH-MOH/Yamaha DM3.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },
      { id: "dummy-power", img: "/assets/sound-system/audio-system-FOH-MOH/Yamaha DM7.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Audio System FOH & MOH" },

      // MICROPHONE SISTEM 
      { id: "dummy-power", img: "/assets/sound-system/microphone-system/QLXD-4U Wireless.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Sistem" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-system/Sennheiser EW-D SKM-S MMD 835.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Sistem" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-system/Shure SLX Wireless.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Sistem" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-system/Shure SM57 Dynamic.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Sistem" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-system/Shure SM58 Dynamic.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Sistem" },

      // MICROPHONE DRUMSET
      { id: "dummy-power", img: "/assets/sound-system/microphone-drumset/AKG Mic Set.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Drumset" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-drumset/AUDIX D6.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Drumset" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-drumset/Sennheiser e 604.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Drumset" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-drumset/Sennheiser e 904.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Drumset" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-drumset/SHURE BETA 91A.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Drumset" },
      { id: "dummy-power", img: "/assets/sound-system/microphone-drumset/SHURE SM81.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Microphone Drumset" },
      
      // POWER
      { id: "dummy-mic-sistem", img: "/assets/sound-system/power/ASHLEY V5 Pro.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/power/ASHLEY V6 Pro.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/power/Phaselab NX 14000.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/power/Phaselab NX 20000.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/power/Soft Digam.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Power" },

      // BACKLINE
      { id: "dummy-power", img: "/assets/sound-system/backline/DW Collector Series.png", title: "Power Amplifier", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/Fender Stratocaster.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/GK CX 410 + 700 RB.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/GK RBX + 700 RB.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/Marshall JCM 900 100W.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/Marshall JCM 900 SL-X.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/Marshall MG 100 FX.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/Peavey 300 KB.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/RD 700.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/RD 2000.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/Roland Jazz Chorus 120.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" },
      { id: "dummy-mic-sistem", img: "/assets/sound-system/backline/Yamaha Tour Custom.png", title: "Mic Wireless", specs: ["Detail menyusul"], category: "Backline" }
    ],
  },

  "lighting": {
    name: "Lighting",
    desc: "Galeri detail perangkat pencahayaan panggung canggih kami.",
    gallery: [
      { id: "moving-head", img: "/assets/light1.png", title: "Moving Head Beam 230W", specs: ["Cahaya super tajam", "14 warna + 17 gobo", "Pergerakan sangat cepat"] },
      { id: "par-led", img: "/assets/light2.png", title: "Par LED 54x3W RGBW", specs: ["Warna sangat cerah", "Bisa diprogram via DMX", "Cocok untuk wash panggung"] },
      { id: "follow-spot", img: "/assets/light3.png", title: "Follow Spot 1500W", specs: ["Jangkauan hingga 50 meter", "Fokus manual", "Stand kokoh"] },
      { id: "smoke-machine", img: "/assets/light4.png", title: "Smoke Machine 1500W", specs: ["Semburan asap tebal", "Kendalikan via remote", "Warming up cepat"] }
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

  // PERBAIKAN: Mengembalikan Data Truk yang hilang
  "truk-box": {
    name: "Kendaraan",
    desc: "Galeri armada transportasi logistik kelas berat kami.",
    gallery: [
      { id: "HDL-los-bak", img: "/assets/kendaraan/HDL-lossbak.png", title: "Truk Los Bak ", specs: ["Kapasitas angkut 8 Ton", "Box anti bocor", "Dimensi box 6 x 2.4 meter"] },
      { id: "engkel-box", img: "/assets/kendaraan/truk2.png", title: "Truk Engkel Box", specs: ["Kapasitas angkut 2 Ton", "Bisa masuk area perumahan", "Sangat lincah"] },
      { id: "grandmax", img: "/assets/kendaraan/grandmax13.png", title: "Grand max Operasional", specs: ["Kendaraan taktis kru", "Bak terbuka multifungsi", "Siap siaga 24 jam"] },
      { id: "gudang", img: "/assets/kendaraan/truk4.png", title: "Area Loading Gudang", specs: ["Akses bongkar muat luas", "Peralatan selalu dirawat", "Keamanan CCTV 24 jam"] }
    ],
  }
};