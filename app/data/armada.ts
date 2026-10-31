// File: app/data/armada.ts

export type GalleryItem = {
  id: string;
  img: string;
  title: string;
  specs: string[];
};

export const armadaDetails: Record<string, { name: string; desc: string; gallery: GalleryItem[] }> = {
  "sound-system": {
    name: "Sound System",
    desc: "Galeri detail perangkat Sound System profesional kami.",
    gallery: [
      { id: "JBL EON 715", img: "/assets/sound-system/JBL-EON715.png", title: "JBL EON 715", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)"] },
      { id: "JBL 718 S", img: "/assets/sound-system/JBL-718.png", title: "JBL 718 S", specs: ["Bass reflex system", "Daya puncak: 4000 Watt", "Suara menggelegar dan padat"] },
      { id: "JBL PRX 918 XLF", img: "/assets/sound-system/JBL-PRX-918-XLF.png", title: "JBL PRX 918 XLF", specs: ["Audio resolusi tinggi 96kHz", "Motorized faders", "Built-in efek studio"] },
      { id: "JBL PRX 535", img: "/assets/sound-system/JBL-PRX-535.png", title: "JBL PRX 535", specs: ["Jangkauan sinyal hingga 100m", "Anti-feedback system", "Baterai tahan 10 jam"] },
      { id: "JBL PRX 925", img: "/assets/sound-system/JBL-PRX-925.png", title: "JBL PRX 925", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)"] },
      { id: "JBL SRX 725", img: "/assets/sound-system/JBL-SRX-725.png", title: "JBL SRX 725", specs: ["Bass reflex system", "Daya puncak: 4000 Watt", "Suara menggelegar dan padat"] },
      { id: "JBL SRX 918 SF", img: "/assets/sound-system/jbl-srx-918.png", title: "JBL SRX 918 SF", specs: ["Audio resolusi tinggi 96kHz", "Motorized faders", "Built-in efek studio"] },
      { id: "JBL SRX 928 S", img: "/assets/sound-system/JBL-SRX-928-S.png", title: "JBL SRX 928 S", specs: ["Jangkauan sinyal hingga 100m", "Anti-feedback system", "Baterai tahan 10 jam"] },
      { id: "JBL SRX 910 LA", img: "/assets/sound-system/JBL-SRX-910-LA.png", title: "JBL SRX 910 LA", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)"] },
      { id: "JBL SRX 728 S", img: "/assets/sound-system/JBL-SRX-728-S.png", title: "JBL SRX 728 S", specs: ["Bass reflex system", "Daya puncak: 4000 Watt", "Suara menggelegar dan padat"] },
      { id: "4 accoustic 210", img: "/assets/sound-system/4-accoustic-210.png", title: "4 accoustic 210", specs: ["Audio resolusi tinggi 96kHz", "Motorized faders", "Built-in efek studio"] },
      { id: "4 accoustic 212", img: "/assets/sound-system/4-accoustic-212.png", title: "4 accoustic 212", specs: ["Jangkauan sinyal hingga 100m", "Anti-feedback system", "Baterai tahan 10 jam"] },
      { id: "4 accoustic 218 HB", img: "/assets/sound-system/4-accoustic-218-HB.png", title: "4 accoustic 218 HB", specs: ["Daya: 1.300W Puncak / 650W RMS", "Frekuensi: 45 Hz – 20 kHz (-10 dB) / 55 Hz – 20 kHz (-3 dB)"] }
      // { id: "NA Coustic Double Linearray", img: "/assets/sound-system/NA Coustic Double Linearray.png", title: "NA Coustic Double Linearray", specs: ["Bass reflex system", "Daya puncak: 4000 Watt", "Suara menggelegar dan padat"] }
    ],
  },

  "Audio System FOH dan MOH": {
    name: "Lighting",
    desc: "Galeri detail perangkat pencahayaan panggung canggih kami.",
    gallery: [
      { id: "moving-head", img: "/assets/light1.png", title: "Moving Head Beam 230W", specs: ["Cahaya super tajam", "14 warna + 17 gobo", "Pergerakan sangat cepat"] },
      { id: "par-led", img: "/assets/light2.png", title: "Par LED 54x3W RGBW", specs: ["Warna sangat cerah", "Bisa diprogram via DMX", "Cocok untuk wash panggung"] },
      { id: "follow-spot", img: "/assets/light3.png", title: "Follow Spot 1500W", specs: ["Jangkauan hingga 50 meter", "Fokus manual", "Stand kokoh"] },
      { id: "smoke-machine", img: "/assets/light4.png", title: "Smoke Machine 1500W", specs: ["Semburan asap tebal", "Kendalikan via remote", "Warming up cepat"] }
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
};