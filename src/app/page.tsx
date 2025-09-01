import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import VideoSection from "../component/VideoSection";
import ImageSlider from "../component/ImageSlider";
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
    { name: "Kaos Partai", desc: "S-3XL | Min. Order 200 pcs", price: "Rp33.000", image: "/kaos1.jpg" },
    { name: "Kaos", desc: "S-3XL | Min. Order 24 pcs", price: "Rp60.000", image: "/kaos2.jpg" },
    { name: "Kaos Raglan", desc: "S-3XL | Min. Order 24 pcs", price: "Rp68.000", image: "/kaos3.jpg" },
    { name: "Kaos Polo", desc: "S-3XL | Min. Order 24 pcs", price: "Rp65.000", image: "/kaos4.jpg" },
    { name: "Jersey", desc: "S-3XL | Min. Order 24 pcs", price: "Rp90.000", image: "/kaos5.jpg" },
  ];

  const kemeja = [
    { name: "Kemeja Printing Lengan Pendek", desc: "S-3XL | Min. Order 24 pcs", price: "Rp156.000", image: "/asset/kemeja1.jpg" },
    { name: "Kemeja Kerah Terbuka", desc: "S-3XL | Min. Order 24 pcs", price: "Rp132.000", image: "/asset/kemeja2.jpg" },
    { name: "Kemeja PDH Lengan Pendek", desc: "S-3XL | Min. Order 24 pcs", price: "Rp111.500", image: "/asset/kemeja3.jpg" },
    { name: "Kemeja PDH Lengan Panjang", desc: "S-3XL | Min. Order 24 pcs", price: "Rp128.000", image: "/asset/kemeja4.jpg" },
    { name: "Kemeja PDL Lengan Pendek", desc: "S-3XL | Min. Order 24 pcs", price: "Rp117.500", image: "/asset/kemeja5.jpg" },
    { name: "Kemeja PDL Lengan Panjang", desc: "S-3XL | Min. Order 24 pcs", price: "Rp136.000", image: "/asset/kemeja6.jpg" },
    { name: "Kemeja Tactical Lengan Pendek", desc: "S-3XL | Min. Order 24 pcs", price: "Rp156.500", image: "/asset/kemeja7.jpg" },
    { name: "Kemeja Tactical Lengan Panjang", desc: "S-3XL | Min. Order 24 pcs", price: "Rp176.500", image: "/asset/kemeja8.jpg" },
    { name: "Kemeja Denim Lengan Panjang", desc: "S-3XL | Min. Order 24 pcs", price: "Rp160.000", image: "/asset/kemeja9.jpg" },
  ];

  const Jaket = [
    { name: "Jaket Hoodie Jumper", desc: "S-3XL | Min. Order 24 pcs", price: "Rp139.500", image: "/asset/Jaket1.jpg" },
    { name: "Jaket Hoodie Zipper", desc: "S-3XL | Min. Order 24 pcs", price: "Rp154.000", image: "/asset/jaket2.jpg" },
    { name: "Sweater", desc: "S-3XL | Min. Order 24 pcs", price: "Rp119.000", image: "/asset/jaket3.jpg" },
    { name: "Quarter Zip Sweater", desc: "S-3XL | Min. Order 24 pcs", price: "Rp127.000", image: "/asset/jaket4.jpg" },
    { name: "Jaket Coach", desc: "S-3XL | Min. Order 24 pcs", price: "Rp135.000", image: "/asset/jaket5.jpg" },
    { name: "Jaket Bomber", desc: "S-3XL | Min. Order 24 pcs", price: "Rp153.500", image: "/asset/jaket6.jpg" },
    { name: "Jaket Varsity", desc: "S-3XL | Min. Order 24 pcs", price: "Rp145.000", image: "/asset/jaket7.png" },
    { name: "Jaket Varsity Oversize", desc: "S-3XL | Min. Order 24 pcs", price: "Rp157.000", image: "/asset/jaket8.jpg" },
    { name: "Jaket Safety", desc: "S-3XL | Min. Order 24 pcs", price: "Rp239.000", image: "/asset/jaket9.jpg" },
    { name: "Jaket Parka", desc: "S-3XL | Min. Order 24 pcs", price: "Rp176.000", image: "/asset/jaket10.jpg" },
    { name: "Jaket Training", desc: "S-3XL | Min. Order 24 pcs", price: "Rp165.000", image: "/asset/jaket11.jpg" },
    { name: "Jaket Anorak Hoodie", desc: "S-3XL | Min. Order 24 pcs", price: "Rp175.000", image: "/asset/jaket12.jpg" },
    { name: "Jaket Puffer", desc: "S-3XL | Min. Order 24 pcs", price: "Rp214.500", image: "/asset/jaket13.jpg" },
    { name: "Jaket Coach Hoodie", desc: "S-3XL | Min. Order 24 pcs", price: "Rp175.000", image: "/asset/jaket14.jpg" },
    { name: "Jaket Harrington", desc: "S-3XL | Min. Order 24 pcs", price: "Rp154.000", image: "/asset/jaket15.jpg" },
  ];

  const Rompi = [
    { name: "Rompi", desc: "S-3XL | Min. Order 24 pcs", price: "Rp150.000", image: "/asset/rompi1.jpg" },
    { name: "Rompi Puffer", desc: "S-3XL | Min. Order 24 pcs", price: "Rp150.000", image: "/asset/rompi2.png" },
  ]

  return (
    <main>
  <Navbar />

  {/* Hero */}
  <section id="hero">
    <Hero />
  </section>

  {/* Video Section */}
  <section id="video">
    <VideoSection />
  </section>

  {/* Slider */}
  <section id="slider">
    <ImageSlider />
  </section>

  {/* Services */}
  <section id="services">
    <ServicesSection />
  </section>

  {/* Produk */}
  <section id="produk">
    <ProductSection title="Kaos" products={kaos} />
    <ProductSection title="Kemeja" products={kemeja} />
    <ProductSection title="Jaket" products={Jaket} />
    <ProductSection title="Rompi" products={Rompi} />
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
