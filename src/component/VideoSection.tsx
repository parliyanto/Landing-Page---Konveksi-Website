"use client";
import React from "react";

export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <div className="mb-6 text-left">
          <p className="text-sm text-gray-500 flex  gap-2 text-left">
            <span className="w-12 h-[1px] bg-gray-400 text-left"></span> Welcome
          </p>
          <h2 className="mt-4 text-2xl md:text-4xl italic text-gray-800">
            Making ideas real {" "}
            <p className="text-teal-500 font-semibold not-italic"> <span className="text-gray-800">with</span> Custom1n.</p>
          </h2>
        </div>

        {/* Video */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full md:w-3/4 aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tgbNymZ7vqY" // ganti dengan link video asli
              title="Bikin.co Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Description */}
        <p className="mt-10 text-gray-700 text-sm md:text-base italic text-left">
          <span className="font-semibold not-italic">Selamat datang di Custom1n</span>, 
          tempat di mana kreativitas bertemu dengan kenyamanan. Kami adalah mitra terpercaya Anda 
          dalam menciptakan seragam yang tidak hanya mencerminkan merek Anda dengan sempurna, 
          tetapi juga memberikan kenyamanan dan kepercayaan kepada setiap penggunanya.
        </p>
      </div>
    </section>
  );
}
