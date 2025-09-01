"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageSlider() {
  const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-2xl mx-auto px-6">
        {/* Container Slider */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Slide ${index}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Dots Navigasi */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === currentIndex ? "bg-teal-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
