"use client";
import Image from "next/image";

export default function QualitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Kiri: Teks */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-500 uppercase leading-snug italic">
            Kualitas Produk pada <br /> Setiap Produksi
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Dengan pengalaman bertahun-tahun dalam industri konveksi, kami memahami pentingnya 
            baju yang tidak hanya menarik secara visual, tetapi juga nyaman dan tahan lama.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Inilah mengapa <span className="font-semibold">Custom1n.co mengutamakan kualitas dalam setiap tahap produksi</span>, 
            dari desain hingga pengiriman akhir.
          </p>
        </div>

        {/* Kanan: Gambar */}
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow">
          <Image
            src="/design5.jpg" // ganti dengan path gambar kamu di folder public
            alt="Kualitas Produksi"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
