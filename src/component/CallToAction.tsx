"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-32 text-center text-white"
      style={{ backgroundImage: "url('/footer.jpg')" }} // ganti dengan file background kamu
    >
      <div className="absolute inset-0 bg-black/40  "></div>

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold italic mb-8 leading-relaxed">
          YUK BIKIN BAJU DI CUSOM1N.CO, <br /> KAMI SIAP MEMBANTU
        </h2>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/order"
            className="bg-white text-black font-medium py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            BIKIN BAJU
          </Link>

          <Link
            href="/referensi"
            className="border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:text-blue-700 transition"
          >
            CEK REFERENSI DESAIN
          </Link>
        </div>
      </div>
    </section>
  );
}
