"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  // Daftar gambar hero
  const images = ["/konveksi3.jpg", "/konveksi4.jpg", "/konveksi5.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Daftar kata yang berganti
  const words = ["Bergaransi", "Berkualitas", "Terpercaya", "Cepat"];
  const [currentWord, setCurrentWord] = useState(0);

  // Ganti gambar tiap 7 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Ganti kata tiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-start text-white overflow-hidden"
    >
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Konveksi Baju"
          fill
          priority={index === currentIndex}
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Content */}
      <div className="max-w-xl px-8 md:px-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Konveksi Baju{" "}
          <span
            key={currentWord}
            className="text-teal-400 inline-block animate-slide-fade"
          >
            {words[currentWord]}
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Apapun kebutuhan baju anda, bikin di Custom1n aja!
        </p>

{/* Buttons */}
<div className="mt-8 flex flex-col sm:flex-row gap-4">
  {/* Outline Button */}
  <a
    href="#services"
    className="w-auto min-w-[300px] border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-white hover:text-black transition text-sm md:text-base text-center whitespace-nowrap"
  >
    Cek Layanan CUSTOM
  </a>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/6281387705284?text=Halo%20Admin,%20saya%20ingin%20order%20beberapa%20produk%20di%20Custom1n.co."
    target="_blank"
    rel="noopener noreferrer"
    className="w-auto min-w-[300px] flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium shadow hover:opacity-90 transition text-sm md:text-base whitespace-nowrap"
  >
    <FaWhatsapp className="text-base md:text-lg" /> Order By Whatsapp
  </a>
</div>



      </div>
    </section>
  );
}
