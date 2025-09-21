"use client";
import { useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  desc: string; // deskripsi panjang → hanya di modal
  price: string;
  image: string;
  details?: {
    sizeRange?: string;
    minOrder?: string;
    bahan?: string[];
  };
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<"deskripsi" | "detail">("deskripsi");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 mb-10">
          {title}
        </h2>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="text-center cursor-pointer group"
              onClick={() => {
                setSelectedProduct(product);
                setActiveTab("deskripsi");
              }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-lg group-hover:scale-105 transition"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-black">
                {product.name}
              </h3>

              {/* Hanya tampilkan size range & min order */}
              {product.details?.sizeRange && (
                <p className="text-sm text-gray-500">
                  Size: {product.details.sizeRange}
                </p>
              )}
              {product.details?.minOrder && (
                <p className="text-sm text-gray-500">
                  Min Order: {product.details.minOrder}
                </p>
              )}

              <p className="text-sm font-semibold text-teal-600">
                Harga Mulai {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Produk */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative">
            {/* Tombol close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Gambar */}
              <div className="relative w-full h-96">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Detail */}
              <div>
                <h2 className="text-2xl font-bold mb-2 text-black">
                  {selectedProduct.name}
                </h2>
                <p className="text-lg text-teal-600 mb-4">
                  Mulai {selectedProduct.price}
                </p>

                {/* Tabs */}
                <div className="flex gap-6 border-b mb-4">
                  <button
                    onClick={() => setActiveTab("deskripsi")}
                    className={`pb-2 ${
                      activeTab === "deskripsi"
                        ? "text-teal-600 border-b-2 border-teal-600 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    Deskripsi
                  </button>
                  <button
                    onClick={() => setActiveTab("detail")}
                    className={`pb-2 ${
                      activeTab === "detail"
                        ? "text-teal-600 border-b-2 border-teal-600 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    Detail Produk
                  </button>
                </div>

                {/* Konten Tab */}
                {activeTab === "deskripsi" && (
                  <p className="text-gray-700 mb-6">{selectedProduct.desc}</p>
                )}
                {activeTab === "detail" && (
                  <ul className="text-gray-700 mb-6 list-disc pl-4">
                    {selectedProduct.details?.sizeRange && (
                      <li>Size Range: {selectedProduct.details.sizeRange}</li>
                    )}
                    {selectedProduct.details?.minOrder && (
                      <li>Minimal Order: {selectedProduct.details.minOrder}</li>
                    )}
                    {selectedProduct.details?.bahan && (
                      <li>
                        Pilihan Bahan:{" "}
                        {selectedProduct.details.bahan.join(", ")}
                      </li>
                    )}
                  </ul>
                )}

              <a
                href={`https://wa.me/6281387705284?text=${encodeURIComponent(
                  `Halo Admin, saya tertarik dengan produk ${selectedProduct.name}. 
              Boleh dibantu dengan informasi detail dan penawaran harganya?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition"
              >
                Order / Konsultasi
              </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
