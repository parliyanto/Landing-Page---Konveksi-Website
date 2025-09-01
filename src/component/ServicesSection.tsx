"use client";
import { FaTshirt, FaPalette, FaBoxOpen, FaShieldAlt, FaPlane } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";

export default function ServicesSection() {
  const services = [
    { icon: <MdAssignment size={50} className="text-teal-500" />, title: "Custom Order Min. Order 24 pcs" },
    { icon: <FaPalette size={50} className="text-teal-500" />, title: "Free Desain *" },
    { icon: <FaBoxOpen size={50} className="text-teal-500" />, title: "Pengiriman Sample Bahan" },
    { icon: <FaTshirt size={50} className="text-teal-500" />, title: "Pembuatan Sample Produk *" },
    { icon: <FaShieldAlt size={50} className="text-teal-500" />, title: "Garansi Produk" },
    { icon: <FaPlane size={50} className="text-teal-500" />, title: "Pengiriman ke Seluruh Indonesia" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-left">
        {/* Section Title */}
        <p className="text-sm text-gray-500 flex items-start justify-start text-left gap-2">
          <span className="w-12 h-[1px] bg-gray-400 text-left"></span> What We Serve
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-light text-gray-800 italic">
          Our <span className="text-teal-500 font-semibold">Service</span>
        </h2>

        {/* Service Items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {service.icon}
              <p className="mt-4 text-gray-700">{service.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-gray-800 italic text-sm md:text-base">
          <span className="font-bold not-italic">Custom1n.co</span> hadir untuk memberikan solusi terbaik 
          dengan layanan konveksi baju yang berkualitas dan terpercaya.
        </p>
      </div>
    </section>
  );
}
