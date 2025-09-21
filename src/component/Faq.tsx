"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const faqs = [
    { q: "Minimal order berapa pcs?", a: "Minimal order adalah 24 pcs (untuk kaos reguler). Untuk partai besar bisa menyesuaikan." },
    // { q: "Apakah bisa dibuatkan Sample Produk?", a: "Ya, kami menyediakan sample produk sebelum produksi massal." },
    { q: "Berapa lama proses produksi di Custom1n.co?", a: "Waktu produksi normal adalah 7-14 hari kerja tergantung jumlah order." },
    { q: "Apakah bisa dibuatkan desain produk?", a: "Ya, kami memiliki tim desain untuk membantu visualisasi ide Anda." },
    { q: "Bagaimana cara Pembayarannya?", a: "Pembayaran melalui transfer bank atau e-wallet dengan sistem DP & pelunasan." },
    { q: "Apakah Custom1n.co melayani pembuatan baju?", a: "Ya, tersedia layanan label custom sesuai permintaan." },
    { q: "Custom1n.co lokasinya dimana?", a: "Kami berlokasi di Jakarta Utara, dengan layanan pengiriman ke seluruh Indonesia." },
    { q: "Pengirimannya menggunakan apa dan berapa lama?", a: "Pengiriman melalui ekspedisi JNE, J&T, atau kargo sesuai kebutuhan." },
    { q: "Apakah bisa dikirimkan keluar kota?", a: "Tentu saja, kami melayani pengiriman ke seluruh wilayah Indonesia." },
    // { q: "Apakah ada garansi?", a: "Ya, kami memberikan garansi kualitas produk dan pengerjaan rapi." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Bagi 2 kolom
  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold italic text-center mb-10 text-black">
          YANG SERING DITANYAKAN
        </h2>

        {/* FAQ Flex (2 Kolom) */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Kolom Kiri */}
          <div className="flex-1 space-y-6">
            {leftFaqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:shadow-md"
                onClick={() => toggleFaq(i)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-800">{faq.q}</p>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-teal-500" : "text-gray-400"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="mt-3 text-sm text-gray-600">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Kolom Kanan */}
          <div className="flex-1 space-y-6 mt-6 md:mt-0">
            {rightFaqs.map((faq, i) => {
              const idx = i + mid; // biar index unik
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:shadow-md"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-800">{faq.q}</p>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === idx ? "rotate-180 text-teal-500" : "text-gray-400"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="mt-3 text-sm text-gray-600">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
