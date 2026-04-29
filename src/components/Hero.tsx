import { Play, Activity, Clock, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
      {/* Background aurora effect using image */}
      <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] pointer-events-none -z-10 flex justify-center">
        <div className="absolute top-[10%] w-[600px] h-[300px] bg-brand/30 blur-[150px] rounded-[100%] mix-blend-screen opacity-80"></div>
        <div className="absolute top-[20%] w-[800px] h-[200px] bg-[#4ade80]/20 blur-[150px] rounded-[100%] mix-blend-screen opacity-50"></div>
      </div>
      
      {/* Swedish Flag badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-white text-sm font-medium mb-12 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-colors">
        <span className="text-base leading-none">🇸🇪</span>
        <span className="opacity-90 tracking-wide">Proudly Hosted in Sweden</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-12 text-white max-w-4xl drop-shadow-lg">
        Power Your <span className="text-brand">Game</span><br />
        Server Today
      </h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-24 z-10 w-full sm:w-auto">
        <button className="flex items-center justify-center gap-3 bg-brand hover:brightness-110 text-bg-base px-9 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(44,212,199,0.4)] w-full sm:w-auto group">
          Start Your Server
          <Play className="w-5 h-5 fill-current transition-transform group-hover:translate-x-1" />
        </button>
        <button className="px-9 py-4 rounded-full font-bold text-lg text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto">
          View Features
        </button>
      </div>

      {/* Stats Bar */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0a1120]/60 backdrop-blur-xl shadow-2xl p-1 z-10 hidden md:block">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand/5 via-transparent to-brand/5 pointer-events-none"></div>
        <div className="flex items-center justify-between px-6 py-5">
          
          <div className="flex flex-1 items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-brand shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-tight">99.9%</div>
              <div className="text-white/50 text-sm font-medium">Uptime SLA</div>
            </div>
          </div>

          <div className="w-px h-12 bg-white/10"></div>

          <div className="flex flex-1 items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-brand shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-tight">24/7</div>
              <div className="text-white/50 text-sm font-medium">Support</div>
            </div>
          </div>

          <div className="w-px h-12 bg-white/10"></div>

          <div className="flex flex-1 items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-brand shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-tight">&lt;20ms</div>
              <div className="text-white/50 text-sm font-medium">Latency</div>
            </div>
          </div>

          <div className="w-px h-12 bg-white/10"></div>

          <div className="flex flex-1 items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-brand shrink-0">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-tight">WSS</div>
              <div className="text-white/50 text-sm font-medium">Technology</div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Islands Placeholder (Removed since we don't have actual images, but added CSS glowing orbs instead to match the theme) */}
      <div className="absolute left-[5%] top-[30%] w-64 h-64 bg-brand/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute right-[5%] top-[10%] w-80 h-80 bg-brand/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </section>
  );
}
