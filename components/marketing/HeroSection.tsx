import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#091210] pt-32 pb-40 md:pt-48 md:pb-56">
      {/* Background Grid Pattern - subtle industrial texture */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      {/* Radial Gradient for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center animate-fade-in">
        
        {/* Hard-hitting B2B Headline */}
        <h1 className="mx-auto max-w-5xl font-display text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          AI-Driven Energy Optimization for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-primary">
            Heavy Industry
          </span>
        </h1>

        {/* Concrete Value Proposition */}
        <p className="mx-auto max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          AurenAI autonomously reschedules flexible industrial loads to align with peak onsite solar generation. 
          Reduce grid reliance by up to <span className="text-white font-semibold">30%</span>, lower OPEX, and accelerate 
          EU CBAM compliance—with zero disruption to core production.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Link 
            href="/#contact" 
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-bold text-[#091210] shadow transition-all hover:bg-accent/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Request Pilot Demo
          </Link>
          <Link 
            href="/#solution" 
            className="inline-flex h-12 items-center justify-center rounded-md border border-gray-700 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Explore Architecture
          </Link>
        </div>
      </div>
    </section>
  );
}