export default function Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center py-2">
          <p className="text-sm text-white/80">
            Call for estimate: <a href="tel:4165253747" className="text-white font-semibold hover:text-white/80 transition-colors">(416) 525-3747</a>
          </p>
        </div>
      </div>
    </div>
  );
}


