"use client";
import Image from "next/image";

interface Product {
  name: string;
  desc: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: ProductSectionProps) {
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
            <div key={index} className="text-center">
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.desc}</p>
              <p className="text-sm font-semibold text-gray-800">
                Harga Mulai {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
