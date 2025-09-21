"use client";

import Image from "next/image";

export default function Timeline() {
  const steps = [
    { id: 1, img: "/asset/konten2.png", title: "Konsultasi & Mengisi Form", desc: "Informasikan kebutuhan Anda dan dapatkan penawaran harga terbaik dari Custom1n" },
    { id: 2, img: "/asset/konten4.png", title: "Pembayaran DP & Persetujuan SPK", desc: "Custom1n akan mengirimkan invoice DP dan SPK detail pesanan." },
    { id: 3, img: "/asset/konten1.png", title: "Proses Produksi", desc: "Pesanan Anda ditangani oleh tim profesional Custom1n" },
    { id: 4, img: "/asset/konten3.png", title: "Pelunasan & Pengiriman", desc: "Setelah pelunasan, pesanan akan dikirim ke alamat tujuan." },
  ];

  return (
    <section className="relative bg-gradient-to-r from-teal-400 to-blue-600 py-16">
      <div className="max-w-6xl mx-auto px-4 relative text-center text-white mb-12">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-semibold italic">
          Cara Mudah Order Baju
        </h2>
        {/* Deskripsi */}
        <p className="mt-4 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Kami tahu waktu anda sangat berharga. Tim <span className="font-semibold">Custom1n</span> siap membantu Anda setiap saat. 
          Kami mendengarkan setiap kebutuhan Anda dan berkomitmen untuk memberikan solusi terbaik 
          dengan penuh perhatian.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative items-stretch">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center text-white">
              {/* Lingkaran Nomor */}
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600 font-bold text-lg shadow-md">
                {step.id}
              </div>

              {/* Card */}
              <div className="mt-6 bg-white text-gray-800 p-6 rounded-lg shadow w-full h-full flex flex-col items-center">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={120}
                  height={120}
                  className="mb-4 object-contain"
                />
                <h3 className="font-bold">{step.title}</h3>
                <p className="text-sm mt-2 flex-grow">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
