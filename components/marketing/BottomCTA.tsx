import { RequestDemoForm } from './RequestDemoForm';
import { CheckCircle2 } from 'lucide-react';

export function BottomCTA() {
  return (
    <section id="contact" className="bg-[#FAFAFA] py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Value Reinforcement */}
          <div>
            <div className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-[#091210] mb-6">
              Q2 2026 PILOT INITIATIVE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#091210] mb-6">
              Deploy autonomous energy intelligence in your facility.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are currently selecting three forward-thinking cement plants for our initial deployment. 
              Partner with AurenAI to empirically validate our load-shifting models against your baseline.
            </p>
            
            <ul className="space-y-5 mb-8">
              {[
                'Free 3-month strategic pilot implementation',
                'Edge IoT hardware kit & integration included',
                'Projected 15-30% reduction in grid dependency',
                'Guaranteed zero disruption to critical path operations'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#091210] font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            <h3 className="text-2xl font-bold text-[#091210] mb-2 text-center">
              Request Pilot Evaluation
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Submit your infrastructure details. Our engineering team will review your application within 24 hours.
            </p>
            <RequestDemoForm />
          </div>

        </div>
      </div>
    </section>
  );
}