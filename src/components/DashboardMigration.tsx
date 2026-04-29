import { Box, ArchiveRestore, Clock, Server, ArrowUpRight } from 'lucide-react';

export default function DashboardMigration() {
  return (
    <section className="w-full relative z-10 py-32 px-6" id="panel">
      {/* Dashboard Section */}
      <div className="max-w-[1200px] mx-auto text-center mb-40 relative">
        <p className="text-white/60 font-medium mb-3 text-[15px] tracking-wide">Dashboard Preview & Migration Flow</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white drop-shadow-md">The ElvioNode Panel</h2>
        
        {/* Dashboard Placeholder - Simulated glassmorphic panel */}
        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(44,212,199,0.15)] border border-white/10 bg-[#0a1120]/80 backdrop-blur-2xl flex items-center justify-center">
            {/* Inner Dashboard UI Mock */}
            <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            </div>
            <div className="text-white/20 font-bold text-2xl tracking-widest mt-8">PANEL PREVIEW</div>
            
            {/* CSS decorative floating islands */}
            <div className="absolute -left-[10%] top-[40%] w-[400px] h-[400px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -right-[10%] top-[20%] w-[400px] h-[400px] bg-[#4ade80]/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </div>

      {/* Migration Section */}
      <div className="max-w-6xl mx-auto text-center relative" id="migration">
        <h2 className="text-[2.5rem] font-bold mb-10 text-white tracking-tight drop-shadow-sm">Bring your world to ElvioNode in minutes</h2>
        <div className="relative inline-block mb-28">
           <div className="absolute inset-0 bg-brand/30 blur-2xl rounded-full pointer-events-none"></div>
           <button className="relative bg-[#0a1120] text-brand border border-brand/40 px-7 py-2.5 rounded-full font-bold hover:bg-[#0f1a2e] transition-colors shadow-inner">
             Migrate your server
           </button>
        </div>

        {/* Flow Steps */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-6 relative mb-20 px-4 w-full max-w-[1300px] mx-auto">
          
          {/* Start Icon (Minecraft Block Placeholder) */}
          <div className="shrink-0 w-20 h-20 bg-[#1e293b] rounded-xl border-t-8 border-t-[#4ade80] border-[#334155] shadow-[0_10px_30px_rgba(44,212,199,0.15)] relative overflow-hidden xl:mr-10">
              <div className="absolute bottom-0 w-full h-1/2 bg-[#475569]/50"></div>
          </div>

          {/* Dotted Line Background */}
          <div className="hidden xl:block absolute top-1/2 translate-y-[-50%] left-[10%] right-[10%] h-0 border-t-[3px] border-brand/40 border-dotted -z-10"></div>

          {/* Step 1 */}
          <div className="flex-1 bg-[#0a1120]/80 border border-white/10 rounded-3xl p-8 py-10 text-center max-w-[320px] relative backdrop-blur-xl shadow-xl mt-8 xl:mt-0 pt-12">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#0a1120] border border-white/10 flex items-center justify-center text-brand shadow-lg">
              <ArrowUpRight className="w-7 h-7" />
            </div>
            <h3 className="text-[17px] font-bold mb-3 text-white">Move the important stuff</h3>
            <p className="text-white/60 text-[14px] leading-relaxed font-medium">Worlds, playerdata, plugins/mods, configs, permissions, and core server files are transferred to your new node.</p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-[#0a1120]/80 border border-white/10 rounded-3xl p-8 py-10 text-center max-w-[320px] relative backdrop-blur-xl shadow-xl mt-8 xl:mt-0 pt-12">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#0a1120] border border-white/10 flex items-center justify-center text-brand shadow-lg">
              <ArchiveRestore className="w-7 h-7" />
            </div>
            <h3 className="text-[17px] font-bold mb-3 text-white">Choose the jar</h3>
            <p className="text-white/60 text-[14px] leading-relaxed font-medium">Pick the exact server type and version for fewer crashes, cleaner updates, and easier support.</p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-[#0a1120]/80 border border-white/10 rounded-3xl p-8 py-10 text-center max-w-[320px] relative backdrop-blur-xl shadow-xl mt-8 xl:mt-0 pt-12">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#0a1120] border border-white/10 flex items-center justify-center text-brand shadow-lg">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-[17px] font-bold mb-3 text-white">Fast cutover, minimal downtime</h3>
            <p className="text-white/60 text-[14px] leading-relaxed font-medium">We perform a final sync in a short maintenance window, then you boot on ElvioNode and you're live.</p>
          </div>

          {/* End Target */}
          <div className="shrink-0 flex flex-col items-center xl:ml-10 mt-8 xl:mt-0 group gap-4">
            <div className="w-[4.5rem] h-[4.5rem] rounded-[1.25rem] bg-[#0a1120] border border-white/10 text-brand flex items-center justify-center shadow-[0_0_30px_rgba(44,212,199,0.2)] group-hover:scale-105 transition-transform">
              <Server className="w-8 h-8" />
            </div>
            <span className="font-bold tracking-tight text-brand text-lg">ElvioNode</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10 mt-16">
          <button className="w-full sm:w-auto bg-brand hover:brightness-110 text-bg-base px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(44,212,199,0.3)] text-[15px]">
            Continue to Migration
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-[15px]">
            Back to Pricing
          </button>
        </div>

        <p className="text-[13px] text-white/50 max-w-xl mx-auto font-medium">
          Migration focuses on server files, Additional services (databases,<br className="hidden sm:block" />
          DNS, etc.) need to be moved separately.
        </p>

      </div>
    </section>
  );
}
