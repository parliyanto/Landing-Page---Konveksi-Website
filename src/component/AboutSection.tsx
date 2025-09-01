"use client";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-light text-teal-500 uppercase tracking-wide italic">
          Konveksi Baju Berkualitas di Indonesia
        </h2>

        {/* Paragraf 1 */}
        <p className="mt-6 text-gray-700 text-lg italic leading-relaxed">
          Dari <span className="font-bold not-italic">baju perusahaan </span> 
          hingga <span className="font-bold not-italic">baju sekolah </span>, 
          dari <span className="font-bold not-italic">baju industri </span> 
          hingga <span className="font-bold not-italic">baju olahraga </span>, 
          Custom1n.co hadir untuk menjawab setiap kebutuhan konveksi baju Anda. 
          Jadikan setiap momen bersama kami sebagai langkah menuju kesuksesan Anda.
        </p>

        {/* Paragraf 2 */}
        <p className="mt-6 text-gray-700 text-lg italic leading-relaxed">
          Apa saja yang bisa diproduksi di Custom1n.co? Segala produk dari kategori konveksi baju 
          seperti kaos sablon, jersey, kaos polo, seragam kemeja kantor, kemeja casual, kemeja PDL, 
          kemeja PDH, kemeja tactical, jaket bomber, jaket varsity, jaket jumper hoodie, jaket zipper hoodie, 
          jas lab, blazer, jas almamater, celana kantor, celana chinos, celana jeans.
        </p>
      </div>
    </section>
  );
}
