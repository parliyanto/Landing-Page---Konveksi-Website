"use client";

import Image from "next/image";

export default function TrustedBy() {
  const logos = [
    { src: "/asset/client/alkhairiyah.webp", alt: "alkhairiyah" },
    { src: "/asset/client/cabin.jpg", alt: "cabinHotel" },
    { src: "/asset/client/dimas.jpg", alt: "dimasSenopati" },
    { src: "/asset/client/dirjen.jpg", alt: "dirjen" },
    { src: "/asset/client/nurul.jpg", alt: "nurul" },
    { src: "/asset/client/sany.jpg", alt: "sany" },
    { src: "/asset/client/yappenda.jpg", alt: "yappenda" },
    { src: "/asset/krakatau.png", alt: "Krakatau Engineering" },
    { src: "/asset/greenlab.png", alt: "GreenLab" },
    { src: "/asset/bia.png", alt: "BIA" },
    { src: "/asset/kalbar.png", alt: "Bank Kalbar" },
    { src: "/asset/satya.png", alt: "Kejaksaan" },
    { src: "/asset/pemko.png", alt: "Pemko Batam" },
    { src: "/asset/medika.png", alt: "Medika Stannia" },
    { src: "/asset/uny.jpg", alt: "Universitas Negeri Yogyakarta" },
    { src: "/asset/nothing.jpg", alt: "UGM" },
    { src: "/asset/uce.jpg", alt: "Universitas Cenderawasih" },
    { src: "/asset/uin.png", alt: "Universitas Islam Indonesia" },
  ];

  return (
    <section className="bg-white py-16 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold italic text-teal-600 mb-10">
          TELAH DIPERCAYA OLEH :
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
