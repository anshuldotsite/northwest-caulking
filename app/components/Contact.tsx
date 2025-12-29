export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Get Your Free Quote</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Ready to protect your property? Contact us today for a consultation and free estimate.
          </p>
          <a 
            href="tel:4165253747" 
            className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-white/80 transition-colors"
          >
            (416) 525-3747
          </a>
          <p className="text-lg text-white/60">
            Trusted by property owners for over 15 years
          </p>
        </div>
      </div>
    </section>
  );
}

