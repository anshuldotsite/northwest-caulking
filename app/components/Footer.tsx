export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/50 text-sm text-center">
            © 2025 Northstar Caulking | Website:{" "}
            <a 
              href="https://www.instagram.com/crafted__by__ak/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Crafted by ak
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

