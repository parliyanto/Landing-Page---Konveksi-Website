"use client";
import Image from "next/image";

export default function DesignSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Kiri: Teks */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-500 uppercase leading-snug italic">
            Visualisasi Ide Anda <br /> Menjadi Sebuah Desain
          </h2>

          <p className="mt-6 text-gray-700 text-lg">
            Setiap seragam yang kami buat merupakan hasil dari kolaborasi erat dengan Anda.
          </p>

          <p className="mt-4 text-gray-700 text-lg italic">
            <span className="font-bold not-italic">Custom1n siap membantu Anda</span> 
            dalam mengolah ide Anda menjadi sebuah desain yang kreatif dan fungsional sehingga siap untuk diproduksi.
          </p>

          {/* Tombol */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* <a
              href="#referensi"
              className="border-2 border-teal-500 text-teal-500 px-6 py-2 rounded-full font-medium hover:bg-teal-500 hover:text-white transition text-center"
            >
              Referensi Desain
            </a> */}
            <a
              href="https://wa.me/6281387705284?text=Halo%20Admin,%20saya%20butuh%20bantuan%20desain."
              className="bg-gradient-to-r from-teal-400 to-blue-600 text-white px-6 py-2 rounded-full font-medium shadow hover:opacity-90 transition text-center"
            >
              Bantuan Desain
            </a>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow">
          <Image
            src="/design3.jpg"
            alt="Visualisasi Desain"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
