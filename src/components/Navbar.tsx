import { Hexagon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-50 relative">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
          <Hexagon className="w-6 h-6 text-brand" />
        </div>
        <span className="text-[1.35rem] font-bold tracking-tight text-white">ElvioNode</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-white/70">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <a href="#panel" className="hover:text-white transition-colors">Control Panel</a>
        <a href="#migration" className="hover:text-white transition-colors">Migration</a>
        <a href="#datacenters" className="hover:text-white transition-colors">Datacenters</a>
      </div>

      <div className="flex items-center gap-6 text-[15px] font-medium">
        <a href="#login" className="text-white/70 hover:text-white transition-colors hidden md:block">
          Login
        </a>
        <a href="#get-started" className="bg-brand hover:brightness-110 text-bg-base px-7 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(44,212,199,0.3)]">
          Get Started
        </a>
      </div>
    </nav>
  );
}
