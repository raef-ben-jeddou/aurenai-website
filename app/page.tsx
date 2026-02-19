import { Navbar } from '@/components/marketing/Navbar';
import { HeroSection } from '@/components/marketing/HeroSection';
import { ProblemBento } from '@/components/marketing/ProblemBento';
import { ArchitectureOverview } from '@/components/marketing/ArchitectureOverview';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { BottomCTA } from '@/components/marketing/BottomCTA';

export default function Home() {
  // JSON-LD Structured Data for Technical SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'AurenAI',
    url: 'https://aurenai.tech',
    logo: 'https://aurenai.tech/logo.svg',
    description: 'AI-driven load shifting and solar forecasting for industrial energy optimization.',
    industry: 'Artificial Intelligence, Energy Technology',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
        {/* Injected Global Navigation */}
        <Navbar />
        
        <main className="flex-grow w-full">
          <section aria-label="Hero" className="w-full">
            <HeroSection />
          </section>
          
          <section aria-label="The Problem" className="bg-muted/30 border-y border-border py-24 w-full">
            <ProblemBento />
          </section>
          
          <section aria-label="System Architecture" className="w-full">
            <ArchitectureOverview />
          </section>
          
          <section aria-label="Core Features" className="bg-[#091210] text-white py-24 w-full">
            <FeatureGrid />
          </section>
          
          <section aria-label="Call to Action" className="w-full">
            <BottomCTA />
          </section>
        </main>
      </div>
    </>
  );
}