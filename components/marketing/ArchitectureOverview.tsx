import { Activity, Cpu, RefreshCw } from 'lucide-react';

export function ArchitectureOverview() {
  const layers = [
    {
      icon: <Activity className="h-8 w-8 text-secondary" />,
      title: "1. Telemetry & Ingestion",
      description: "Non-invasive IoT edge sensors capture real-time telemetry on solar yield and machine-level power draw without tapping into legacy SCADA systems."
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "2. Load Shifting Engine",
      description: "Our proprietary forecasting models compute optimal state parameters, dispatching autonomous scheduling decisions to align flexible machine loads with peak solar windows."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-accent" />,
      title: "3. Reinforcement Learning",
      description: "The system ingests micro-climatic weather data and historical factory throughput, continuously retraining itself to maximize energy arbitrage."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display text-[#091210] sm:text-4xl mb-4">
            Autonomous Energy Pipeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A secure, closed-loop AI architecture designed to optimize heavy industrial loads without violating production safety constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0" />

          {layers.map((layer, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="h-24 w-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 relative transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-slate-50 opacity-50 m-2" />
                <div className="relative z-10">
                  {layer.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#091210] mb-3">{layer.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}