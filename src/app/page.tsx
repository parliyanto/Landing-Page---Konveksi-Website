import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
// import VideoSection from "../component/VideoSection";
// import ImageSlider from "../component/ImageSlider";
import ServicesSection from "../component/ServicesSection";
import ProductSection from "../component/ProductSection";
import AboutSection from "@/component/AboutSection";
import DesignSection from "@/component/DesignSection";
import ExpertiseSection from "@/component/ExpertiseSection";
import QualitySection from "@/component/QualitySection";
import OrderSteps from "@/component/OrderSteps";
import Faq from "@/component/Faq";
import CallToAction from "@/component/CallToAction";
import TrustedBy from "@/component/TrustedBy";
import Footer from "@/component/Footer";

export default function Home() {
  const kaos = [
    { 
    name: "Kaos Polos", 
    desc: "Kaos polos cocok untuk event atau seragam komunitas dengan bahan nyaman.", 
    price: "Rp33.000", 
    image: "/kaos1.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Cotton Combed 30s", "Cotton Carded", "Polyester Hyget"]
    }
  },
    // { name: "Kaos", desc: "S-3XL | Min. Order 24 pcs", price: "Rp60.000", image: "/kaos2.jpg" },
    { 
    name: "Kaos Lengan Panjang", 
    desc: "Kaos Raglan yang kami produksi menggunakan kualitas terbaik, hasil dari kurasi tim Custom1n. Kaos custom dengan bahan dan kualitas terbaik, cocok untuk melengkapi kegiatan kamu sehari hari baik untuk acara indoor maupun outdoor. ", 
    price: "Rp68.000", 
    image: "/kaos3.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Cotton Carded 30s", "Cotton Combed Soft 30s", "Cotton Premium", "Cotton Bamboo 30s"]
    }
  },
  { 
    name: "Kaos Polo", 
    desc: "Butuh Konveksi Kaos Polo yang bisa produksi kaos untuk kebutuhan brand/ perusahaan mu?, Mulai dari kaos polo basic sampai kaos polo sport, Custom1n siap mewujudkan kreasi Kaos Custom kamu. ", 
    price: "Rp65.000", 
    image: "/kaos4.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Polyester 30s Soft", "Cotton Combed 30s Soft", "Cotton Combed 24s Soft", "Lacoste CVC Soft 24s"]
    }
  },
  { 
    name: "Jersey", 
    desc: "Jersey yang kami produksi menggunakan kualitas terbaik, hasil dari kurasi tim Custom1n. Kaos custom dengan bahan dan kualitas terbaik, cocok untuk melengkapi kegiatan kamu sehari hari baik untuk acara indoor maupun outdoor. Kami juga menyediakan berbagai macam bahan kaos yang bisa disesuaikan dengan kebutuhan", 
    price: "Rp90.000", 
    image: "/kaos5.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Dry Fit Polyester"]
    }
  },
  ];

  const kemeja = [
    { 
    name: "Kemeja Printing Lengan Pendek", 
    desc: "Kemeja Printing Lengan Pendek yang diproduksi oleh konveksi Custom1n merupakan pilihan tepat untuk komunitas atau perusahaan yang menginginkan pakaian seragam yang nyaman dan trendy.", 
    price: "Rp156.000", 
    image: "/asset/kemeja1.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Polycotton", "high Twist"]
    }
  },
   { 
    name: "Kemeja Kerah Terbuka", 
    desc: "Mau bikin Kemeja Lengan Pendek Kerah Terbuka ?, Konveksi Bikin.co merupakan pilihan tepat untuk komunitas atau perusahaan yang menginginkan produksi pakaian seragam yang nyaman dan trendy, yang sesuai dengan karakter dan identitas perusahaan atau komunitas Anda.", 
    price: "Rp132.000", 
    image: "/asset/kemeja2.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Rayon Twill", "Oxford", "American Drill", "Twist Premium"]
    }
  },
  { 
    name: "Kemeja Lengan Pendek", 
    desc: "Kemeja Lengan Pendek yang diproduksi oleh konveksi Custom1n merupakan pilihan tepat untuk komunitas atau perusahaan yang menginginkan pakaian seragam yang nyaman dan trendy.", 
    price: "Rp111.500", 
    image: "/asset/kemeja3.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Japan Cotton", "American Drill", "Nagata Drill", "High Twist Premium"]
    }
  },
    // { name: "Kemeja PDH Lengan Panjang", desc: "S-3XL | Min. Order 24 pcs", price: "Rp128.000", image: "/asset/kemeja4.jpg" },
    // { name: "Kemeja PDL Lengan Pendek", desc: "S-3XL | Min. Order 24 pcs", price: "Rp117.500", image: "/asset/kemeja5.jpg" },
    // { name: "Kemeja PDL Lengan Panjang", desc: "S-3XL | Min. Order 24 pcs", price: "Rp136.000", image: "/asset/kemeja6.jpg" },
    // { name: "Kemeja Tactical Lengan Pendek", desc: "S-3XL | Min. Order 24 pcs", price: "Rp156.500", image: "/asset/kemeja7.jpg" },
    // { name: "Kemeja Tactical Lengan Panjang", desc: "S-3XL | Min. Order 24 pcs", price: "Rp176.500", image: "/asset/kemeja8.jpg" },
    // { name: "Kemeja Denim Lengan Panjang", desc: "S-3XL | Min. Order 24 pcs", price: "Rp160.000", image: "/asset/kemeja9.jpg" },
  ];

  const Jaket = [
      { 
    name: "Jaket hoodie Jumperk", 
    desc: "Jaket Jumper Hoodie produksi Custom1n adalah pilihan yang tepat bagi komunitas dan perusahaan yang ingin menunjukkan identitasnya dengan trendy dan nyaman dipakai, Jaket ini dapat di custom sablon dan bordir dengan logo atau teks sesuai keinginan.", 
    price: "Rp139.500", 
    image: "/asset/Jaket1.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Fieece PE Soft (280 gsm)", "Fleece CVC (280 gsm)", "Fleece Cotton (280 gsm)", "Fleece Cotton (330 gsm)"]
    }
  },
    { 
    name: "Jaket hoodie Zipper", 
    desc: "Dengan jaket zipper hoodie dari Konveksi Custom1n, komunitas atau perusahaan Anda dapat terlihat lebih keren dan terlindungi dari cuaca buruk, Jaket ini merupakan pilihan yang tepat untuk kegiatan sosial, promosi, atau hanya sekedar hangout bersama teman, Tersedia berbagai ukuran dan warna, sehingga dapat disesuaikan dengan kebutuhan komunitas atau perusahaan Anda.", 
    price: "Rp154.000", 
    image: "/asset/jaket2.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Fieece PE Soft (280 gsm)", "Fleece CVC (280 gsm)", "Fleece Cotton (280 gsm)", "Fleece Cotton (330 gsm)"]
    }
  },
    { 
    name: "Crewneck Sweater", 
    desc: "Crewneck Sweater produksi Custom1n merupakan pilihan tepat bagi komunitas atau perusahaan yang ingin terlihat lebih keren dan nyaman sepanjang hari. Crewneck ini dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari, serta memiliki desain yang elegan dan sporty.", 
    price: "Rp119.000", 
    image: "/asset/jaket3.jpg",
    details: {
      sizeRange: "S – 3XL",
      minOrder: "24 pcs",
      bahan: ["Fieece PE Soft (280 gsm)", "Fleece CVC (280 gsm)", "Fleece Cotton (280 gsm)", "Fleece Cotton (330 gsm)"]
    }
  },
    
    // { name: "Quarter Zip Sweater", desc: "S-3XL | Min. Order 24 pcs", price: "Rp127.000", image: "/asset/jaket4.jpg" },
    // { name: "Jaket Coach", desc: "S-3XL | Min. Order 24 pcs", price: "Rp135.000", image: "/asset/jaket5.jpg" },
    // { name: "Jaket Bomber", desc: "S-3XL | Min. Order 24 pcs", price: "Rp153.500", image: "/asset/jaket6.jpg" },
    // { name: "Jaket Varsity", desc: "S-3XL | Min. Order 24 pcs", price: "Rp145.000", image: "/asset/jaket7.png" },
    // { name: "Jaket Varsity Oversize", desc: "S-3XL | Min. Order 24 pcs", price: "Rp157.000", image: "/asset/jaket8.jpg" },
    // { name: "Jaket Safety", desc: "S-3XL | Min. Order 24 pcs", price: "Rp239.000", image: "/asset/jaket9.jpg" },
    // { name: "Jaket Parka", desc: "S-3XL | Min. Order 24 pcs", price: "Rp176.000", image: "/asset/jaket10.jpg" },
    // { name: "Jaket Training", desc: "S-3XL | Min. Order 24 pcs", price: "Rp165.000", image: "/asset/jaket11.jpg" },
    // { name: "Jaket Anorak Hoodie", desc: "S-3XL | Min. Order 24 pcs", price: "Rp175.000", image: "/asset/jaket12.jpg" },
    // { name: "Jaket Puffer", desc: "S-3XL | Min. Order 24 pcs", price: "Rp214.500", image: "/asset/jaket13.jpg" },
    // { name: "Jaket Coach Hoodie", desc: "S-3XL | Min. Order 24 pcs", price: "Rp175.000", image: "/asset/jaket14.jpg" },
    // { name: "Jaket Harrington", desc: "S-3XL | Min. Order 24 pcs", price: "Rp154.000", image: "/asset/jaket15.jpg" },
  ];

  // const Rompi = [
  //   { name: "Rompi", desc: "S-3XL | Min. Order 24 pcs", price: "Rp150.000", image: "/asset/rompi1.jpg" },
  //   { name: "Rompi Puffer", desc: "S-3XL | Min. Order 24 pcs", price: "Rp150.000", image: "/asset/rompi2.png" },
  // ]

  return (
    <main>
  <Navbar />

  {/* Hero */}
  <section id="hero">
    <Hero />
  </section>

  {/* Video Section */}
  {/* <section id="video">
    <VideoSection />
  </section> */}

  {/* Slider */}
  {/* <section id="slider">
    <ImageSlider />
  </section> */}

  {/* Services */}
  <section id="services">
    <ServicesSection />
  </section>

  {/* Produk */}
  <section id="produk">
    <ProductSection title="Kaos" products={kaos} />
    <ProductSection title="Kemeja" products={kemeja} />
    <ProductSection title="Jaket" products={Jaket} />
    {/* <ProductSection title="Rompi" products={Rompi} /> */}
  </section>

  {/* Tentang Kami */}
  <section id="about">
    <AboutSection />
  </section>

  {/* Design */}
  <section id="design">
    <DesignSection />
  </section>

  {/* Expertise */}
  <section id="expertise">
    <ExpertiseSection />
  </section>

  {/* Quality */}
  <section id="quality">
    <QualitySection />
  </section>

  {/* Cara Order */}
  <section id="cara-order">
    <OrderSteps />
  </section>

  {/* FAQ */}
  <section id="faq">
    <Faq />
  </section>

  {/* CTA */}
  <section id="cta">
    <CallToAction />
  </section>

  {/* Trusted By */}
  <section id="trusted">
    <TrustedBy />
  </section>

  {/* Kontak */}
  <section id="kontak">
    <Footer />
  </section>
</main>

  );
}
