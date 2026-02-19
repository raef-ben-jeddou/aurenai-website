import { Zap, Sun, AlertTriangle, TrendingUp } from 'lucide-react';

export function ProblemBento() {
  return (
    <section id="problem" className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold font-display tracking-tight text-[#091210] sm:text-4xl mb-4">
          The Industrial Energy Mismatch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Installing solar is only step one. Without intelligent load shifting, heavy industries fail to capture the actual ROI of their renewable assets.
        </p>
      </div>

      {/* Perfected Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[minmax(180px,auto)]">
        
        {/* Card 1: The Core Mismatch */}
        <div className="md:col-span-2 bg-white rounded-xl p-8 border border-gray-200 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sun size={160} />
          </div>
          <div className="relative z-10">
            <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-orange-600" size={20} />
            </div>
            <h3 className="text-xl font-bold text-[#091210] mb-2">Supply vs. Demand Desync</h3>
            <p className="text-muted-foreground max-w-lg">
              Solar generation peaks at noon, but industrial kilns and mills operate 24/7. 
              Plants end up exporting clean energy at low rates, only to buy back expensive, fossil-heavy grid power during peak production loads.
            </p>
          </div>
        </div>

        {/* Card 2: CBAM Pressure (Tall/Side) */}
        <div className="md:col-span-1 md:row-span-2 bg-[#091210] rounded-xl p-8 border border-gray-800 shadow-sm flex flex-col justify-between relative overflow-hidden group">
           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
           
           <div className="relative z-10">
             <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
               <TrendingUp className="text-primary" size={20} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">EU CBAM Risk</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               The Carbon Border Adjustment Mechanism (CBAM) is closing the door on high-emission exporters. Failing to demonstrably decarbonize onsite operations means losing access to European markets and facing severe carbon tariffs.
             </p>
           </div>
           
           <div className="mt-8 pt-8 border-t border-gray-800 relative z-10">
             <div className="text-4xl font-display font-bold text-white">59%</div>
             <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-medium">Of Total Energy Share is Industrial (Tunisia)</div>
           </div>
        </div>

        {/* Card 3: Fossil Fuel Reliance */}
        <div className="md:col-span-1 bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:border-primary/50 transition-colors flex flex-col justify-center">
          <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <AlertTriangle className="text-red-600" size={20} />
          </div>
          <h3 className="text-lg font-bold text-[#091210] mb-2">Carbon Inefficiency</h3>
          <p className="text-muted-foreground text-sm">
            Grid reliance inherently means burning fossil fuels. Static production schedules negate the environmental benefits of your CAPEX solar investments.
          </p>
        </div>

        {/* Card 4: Lost ROI */}
        <div className="md:col-span-1 bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:border-primary/50 transition-colors flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-gray-50">
           <div className="text-5xl font-display font-bold text-primary mb-2">30%</div>
           <p className="text-sm font-medium text-[#091210]">
             Target Reduction in Grid Reliance
           </p>
        </div>

      </div>
    </section>
  );
}