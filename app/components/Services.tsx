export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Our Services</h2>
          <div className="w-24 h-px bg-white/20"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 max-w-5xl mx-auto">
          <div className="flex-1 flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Commercial</h3>
            <p className="text-white/70 leading-relaxed text-lg">
              Professional weatherproofing solutions for commercial buildings. We ensure your property is protected from the elements with our expert sealing services.
            </p>
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Residential</h3>
            <p className="text-white/70 leading-relaxed text-lg">
              Protect your home with our residential caulking and sealing services. Quality workmanship that stands the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

