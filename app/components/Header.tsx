import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-8 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Northstar Caulking Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold tracking-tight">Northstar Caulking</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Why Us
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

