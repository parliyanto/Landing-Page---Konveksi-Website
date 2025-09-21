"use client";
import Image from "next/image";

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Kiri: Gambar */}
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow">
          <Image
            src="/design4.jpg" // ganti dengan path gambar di folder public
            alt="Konveksi Ahli"
            fill
            className="object-cover"
          />
        </div>

        {/* Kanan: Teks */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-500 uppercase leading-snug italic">
            Konveksi Baju Terbaik dari Ahlinya
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Dengan menggunakan teknologi terkini dan tim produksi yang terampil, 
            <span className="font-semibold"> Custom1n</span> menjamin proses produksi yang cepat 
            dan hasil yang memuaskan.
          </p>
        </div>
      </div>
    </section>
  );
}
