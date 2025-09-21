"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Konveksi Baju Logo"
            width={160}
            height={20}
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a href="#produk" className="hover:text-teal-500 transition">
              Produk
            </a>
          </li>
          <li>
            <a href="#cara-order" className="hover:text-teal-500 transition">
              Cara Order
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-teal-500 transition">
              FAQ
            </a>
          </li>
          <li>
            <a href="#kontak" className="hover:text-teal-500 transition">
              Kontak
            </a>
          </li>
        </ul>

        {/* Tombol WhatsApp */}
        <a
          href="https://wa.me/6281387705284?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20lebih%20lanjut%20soal%20Custom1n.co."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
        >
          Hubungi Kami
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5 w-8 h-8 focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col font-medium text-gray-700 text-center items-center">
          <li className="py-2">
            <a
              href="#produk"
              className="hover:text-teal-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Produk
            </a>
          </li>
          <li className="py-2">
            <a
              href="#cara-order"
              className="hover:text-teal-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Cara Order
            </a>
          </li>
          <li className="py-2">
            <a
              href="#faq"
              className="hover:text-teal-500 transition"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li className="py-2">
            <a
              href="#kontak"
              className="hover:text-teal-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </a>
          </li>
          <li className="py-2">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-5 py-2 rounded-full font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
