import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Banner />
      <Header />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
