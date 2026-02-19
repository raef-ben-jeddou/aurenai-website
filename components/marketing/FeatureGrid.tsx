import { BarChart3, CloudSun, Factory, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: <CloudSun className="h-6 w-6" />,
    title: 'Hyper-Local Solar Forecasting',
    description:
      'Predict generation capacity up to 72 hours ahead using multi-variant weather models and localized historical plant data.',
  },
  {
    icon: <Factory className="h-6 w-6" />,
    title: 'Dynamic Load Shifting',
    description:
      'Autonomously reschedule energy-intensive, flexible operations (like cement milling) to strictly coincide with peak solar output.',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Carbon & Cost Telemetry',
    description:
      'Track real-time energy flows, grid import reductions, and verified Scope 2 emissions savings via a secure web dashboard.',
  },
  {
    icon: <ShieldAlert className="h-6 w-6" />,
    title: 'Strict Production Safeguards',
    description:
      'Programmatic hard constraints guarantee that critical, continuous processes (like kilns) are completely isolated and never interrupted.',
  },
];

export function FeatureGrid() {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold font-display text-white sm:text-4xl mb-4">
          Engineered for the Plant Floor
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Industrial environments do not tolerate beta software. Every module is architected around the physical realities and safety tolerances of heavy manufacturing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group rounded-xl border border-gray-800 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-primary/50 hover:-translate-y-1"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary/20">
              {feature.icon}
            </div>
            <h3 className="mb-3 text-lg font-bold text-white">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}