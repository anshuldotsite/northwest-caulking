export default function Features() {
  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Why Choose Us</h2>
            <div className="w-24 h-px bg-white/20"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1 flex flex-col gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-3">15+ Years Experience</h3>
                <p className="text-white/70 leading-relaxed">
                  Over a decade and a half of expertise in weatherproofing and sealing solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">High-Grade Materials</h3>
                <p className="text-white/70 leading-relaxed">
                  We only use premium, high-grade materials to ensure lasting protection for your property.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-3">10-Year Warranty</h3>
                <p className="text-white/70 leading-relaxed">
                  Every job comes with our comprehensive 10-year warranty for your peace of mind.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Expert Craftsmanship</h3>
                <p className="text-white/70 leading-relaxed">
                  Professional installation and attention to detail in every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

