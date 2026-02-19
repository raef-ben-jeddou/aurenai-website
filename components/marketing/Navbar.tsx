import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-transparent">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <Image 
            src="/logo.svg" 
            alt="AurenAI Logo" 
            width={36} 
            height={36} 
            className="h-9 w-auto"
            priority // Tells Next.js to load this image immediately (LCP optimization)
          />
          <span className="text-2xl font-display font-bold text-white tracking-wide">
            AurenAI
          </span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#problem" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            The Problem
          </Link>
          <Link href="/#solution" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Architecture
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-[#091210] bg-accent px-5 py-2.5 rounded-md hover:bg-accent/90 transition-colors">
            Request Demo
          </Link>
        </nav>
        
      </div>
    </header>
  );
}