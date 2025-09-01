"use client";

import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/footer.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-16 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Kiri - Logo & Alamat */}
        <div>
          <Image src="/logo.png" alt="Bikin.co" width={60} height={60} />
          <p className="mt-4 font-semibold">PT CUSTOM1N INDONESIA</p>
          <p className="text-sm mt-2">
            CUSTOM1N.CO OUTLET <br />
            Tanjung Priok, Jakarta Utara
          </p>
          {/* Sosmed */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-white text-gray-800 hover:bg-teal-500 hover:text-white transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-gray-800 hover:bg-red-600 hover:text-white transition">
              <FaYoutube />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-gray-800 hover:bg-pink-500 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-gray-800 hover:bg-blue-600 hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-gray-800 hover:bg-green-600 hover:text-white transition">
              <FaPhone />
            </a>
          </div>
        </div>

        {/* Kanan - Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hubungi Kami</h3>
          <p>Email: info@custom1n.co</p>
          <p>Sales Indiani: 0811 8060 102</p>
          <p>Sales Anggi: 0852 8888 6020</p>
          <p>Sales Tania: 0821 8888 9042</p>
          <p>Keluhan Pelanggan: 0813 1184 8527</p>

          <a
            href="#"
            className="inline-block mt-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition"
          >
            Customer Service
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-900 text-center text-gray-400 py-4 text-sm">
        © PT. BIKIN INDONESIA BERDAYA — {new Date().getFullYear()} | INDONESIA
      </div>
    </footer>
  );
}
