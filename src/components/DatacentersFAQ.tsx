import { ChevronDown, RefreshCw, Activity } from 'lucide-react';

export default function DatacentersFAQ() {
  return (
    <section className="w-full max-w-[1000px] mx-auto px-6 py-24 pb-32 text-center" id="datacenters">
      {/* Global Datacenters */}
      <h2 className="text-3xl md:text-[2.25rem] font-bold mb-3 tracking-tight text-white drop-shadow-sm">Global Datacenters</h2>
      <p className="text-white/60 mb-16 text-[15px] font-medium tracking-wide">Low-latency infrastructure deployed worldwide for optimal gaming performance.</p>
      
      {/* Map Image Placeholder simulated with CSS network dots */}
      <div className="relative w-full aspect-[2.2/1] max-w-4xl mx-auto flex items-center justify-center mb-16 pointer-events-none">
        
        {/* CSS Map Simulation */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
            {/* Some CSS generated dots connected to center */}
            <div className="w-[10px] h-[10px] bg-brand rounded-full absolute left-[30%] top-[40%] shadow-[0_0_15px_rgba(44,212,199,1)]"></div>
            <div className="w-[10px] h-[10px] bg-brand rounded-full absolute left-[45%] top-[55%] shadow-[0_0_15px_rgba(44,212,199,1)]"></div>
            <div className="w-[10px] h-[10px] bg-brand rounded-full absolute right-[35%] top-[35%] shadow-[0_0_15px_rgba(44,212,199,1)]"></div>
            <div className="w-[10px] h-[10px] bg-brand rounded-full absolute right-[25%] top-[60%] shadow-[0_0_15px_rgba(44,212,199,1)]"></div>
            <div className="w-[10px] h-[10px] bg-brand rounded-full absolute right-[45%] top-[20%] shadow-[0_0_15px_rgba(44,212,199,1)]"></div>
            
            {/* Arcs (rough representation) */}
            <svg className="absolute inset-0 w-full h-full opacity-30" overflow="visible">
                <path d="M 30% 40% Q 50% 10% 45% 55%" fill="none" stroke="#2cd4c7" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 45% 55% Q 60% 0% 65% 35%" fill="none" stroke="#2cd4c7" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 45% 55% Q 70% 20% 75% 60%" fill="none" stroke="#2cd4c7" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            <div className="w-full max-w-[800px] h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-center bg-no-repeat opacity-10 blur-[1px]"></div>
        </div>

        {/* Ping Test Floating Box */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[550px] bg-[#0c1627] border border-brand/20 rounded-[1.25rem] p-6 pointer-events-auto shadow-[0_0_50px_rgba(44,212,199,0.1)] backdrop-blur-xl">
          <div className="flex items-center justify-between mb-5 px-1">
            <h3 className="font-bold text-white tracking-wide">Ping Test</h3>
            <button className="text-white/40 hover:text-white transition-colors">
              <RefreshCw className="w-[18px] h-[18px]" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="relative">
              <select className="w-full appearance-none bg-[#142033] border border-white/5 rounded-xl px-5 py-3.5 text-[14px] font-medium text-white/80 focus:outline-none focus:border-brand/50 transition-colors">
                <option>Select Location</option>
                <option>Europe (Frankfurt)</option>
                <option>North America (Ashburn)</option>
                <option>Asia (Singapore)</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-white/40 pointer-events-none" />
            </div>
            <button className="bg-brand hover:brightness-110 text-bg-base font-bold text-[15px] rounded-xl px-4 py-3.5 transition-all shadow-inner">
              Start Test
            </button>
          </div>

          <div className="flex items-center justify-between bg-[#080d18] border border-white/5 rounded-2xl p-5 shadow-inner">
            <div className="flex items-center gap-3 text-brand">
              <Activity className="w-5 h-5 shrink-0" />
              <div className="flex gap-1 h-5 items-center opacity-80 pl-2">
                 {/* fake sine wave animating */}
                 <div className="w-[3px] h-3 bg-brand rounded-full animate-pulse"></div>
                 <div className="w-[3px] h-5 bg-brand rounded-full animate-pulse delay-75"></div>
                 <div className="w-[3px] h-2 bg-brand rounded-full animate-pulse delay-150"></div>
                 <div className="w-[3px] h-4 bg-brand rounded-full animate-pulse delay-75"></div>
              </div>
            </div>
            <div className="flex gap-8 divide-x divide-white/5">
              <div className="text-right">
                <div className="text-[11px] text-white/40 uppercase tracking-widest font-bold mb-1">Latency</div>
                <div className="font-bold text-[17px] text-white">— ms</div>
              </div>
              <div className="pl-8 text-right">
                <div className="text-[11px] text-white/40 uppercase tracking-widest font-bold mb-1">Jitter</div>
                <div className="font-bold text-[17px] text-white">— ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <h2 className="text-3xl md:text-[2.25rem] font-bold mb-12 mt-40 tracking-tight text-white">Frequently Asked Questions</h2>
      
      <div className="max-w-[700px] mx-auto space-y-4 text-left">
        {/* Active Accordion */}
        <div className="bg-[#102428] border border-brand/40 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(44,212,199,0.05)]">
          <button className="w-full flex items-center justify-between p-6 py-5 font-bold text-left hover:bg-[#142c31] transition-colors text-white text-[15px]">
             How do I migrate my server to ElvioNode?
             <ChevronDown className="w-5 h-5 text-brand rotate-180 transition-transform shrink-0" strokeWidth={2.5} />
          </button>
          <div className="px-6 pb-6 pt-2 text-brand text-[14px] leading-relaxed font-medium">
            Our team handles the migration for free. Simply open a ticket and provide your previous host's details.
          </div>
        </div>

        {/* Inactive Accordions */}
        {[
          "What are the hardware specifications?",
          "Is DDoS protection included?",
          "Can I upgrade my plan later?"
        ].map((q, i) => (
          <div key={i} className="bg-[#0c1627]/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
            <button className="w-full flex items-center justify-between p-6 py-5 font-bold text-left hover:bg-[#0c1627] transition-colors text-white/80 text-[15px]">
              {q}
              <ChevronDown className="w-5 h-5 text-white/30 transition-transform shrink-0" strokeWidth={2.5} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
