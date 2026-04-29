import { Check, Shield, Terminal, Zap, Headphones } from 'lucide-react';

export default function Features() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-6 py-24 pb-32 text-center relative z-10" id="pricing">
      <h2 className="text-4xl md:text-[2.75rem] font-bold mb-10 tracking-tight text-white drop-shadow-md">Features and Pricing Tiers</h2>
      
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-20">
        <span className="text-white/70 font-medium text-[15px]">Monthly</span>
        <div className="w-14 h-8 rounded-full bg-[#1e293b]/50 border border-white/10 flex items-center p-1 cursor-pointer transition-colors hover:bg-[#1e293b]">
          <div className="w-6 h-6 rounded-full bg-brand shadow-[0_0_10px_rgba(44,212,199,0.5)] translate-x-6"></div>
        </div>
        <span className="text-brand font-medium text-[15px]">Annual (20%)</span>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-5 mb-28 relative">
        <div className="bg-[#0a1120]/60 border border-white/10 rounded-3xl p-7 text-left flex gap-5 backdrop-blur-xl shadow-xl hover:bg-[#0a1120]/80 transition-all">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand">
            <Terminal className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">ElvioNode Panel</h3>
            <p className="text-white/60 text-[15px] leading-relaxed font-medium">A custom-built control panel with real-time communication. No legacy panels, built for speed.</p>
          </div>
        </div>

        <div className="bg-[#0a1120]/60 border border-white/10 rounded-3xl p-7 text-left flex gap-5 backdrop-blur-xl shadow-xl hover:bg-[#0a1120]/80 transition-all">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand">
            <Zap className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Blazing Fast WSS</h3>
            <p className="text-white/60 text-[15px] leading-relaxed font-medium">WebSocket-based technology delivering instant responses and real-time server control.</p>
          </div>
        </div>

        <div className="bg-[#0a1120]/60 border border-white/10 rounded-3xl p-7 text-left flex gap-5 backdrop-blur-xl shadow-xl hover:bg-[#0a1120]/80 transition-all">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">DDoS Protection</h3>
            <p className="text-white/60 text-[15px] leading-relaxed font-medium">Multi-layer DDoS mitigation helps keep your server online 24/7.</p>
          </div>
        </div>

        <div className="bg-[#0a1120]/60 border border-white/10 rounded-3xl p-7 text-left flex gap-5 backdrop-blur-xl shadow-xl hover:bg-[#0a1120]/80 transition-all">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand">
            <Headphones className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Expert Support</h3>
            <p className="text-white/60 text-[15px] leading-relaxed font-medium">Minecraft experts based in Sweden available 24/7 via live chat and tickets.</p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* Starter */}
        <div className="bg-[#0a1120]/60 border border-white/10 rounded-[2rem] p-9 text-left backdrop-blur-xl shadow-xl mt-8 flex flex-col relative overflow-hidden">
          <h3 className="text-[1.75rem] font-bold text-center mb-1 text-white relative z-10">Starter</h3>
          <p className="text-center text-white/50 mb-6 font-medium text-[15px] relative z-10">2 GB RAM</p>
          <div className="text-center mb-10">
            <span className="text-[2.75rem] font-bold leading-none text-white tracking-tight">$4.99</span>
            <span className="text-white/50 font-medium">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            {['Unlimited Player Slots', 'NVMe Storage', 'DDoS Protection', 'ElvioNode Panel Access', 'Daily Backups'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[15px] text-white/80 font-medium border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <Check className="w-5 h-5 text-brand shrink-0" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl font-bold bg-white/5 text-white/90 hover:bg-white/10 transition-colors border border-white/10">
            Get Started
          </button>
        </div>

        {/* Advanced - Most Popular */}
        <div className="bg-[#0a1120] border-2 border-brand rounded-[2rem] p-9 text-left relative shadow-[0_0_40px_rgba(44,212,199,0.15)] z-10 transform md:-translate-y-4 flex flex-col overflow-hidden">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-bg-base font-bold px-5 py-1.5 rounded-full text-sm shadow-[0_0_15px_rgba(44,212,199,0.4)] z-20">
            Most Popular
          </div>
          <h3 className="text-[1.75rem] font-bold text-center mb-1 mt-3 text-white relative z-10">Advanced</h3>
          <p className="text-center text-white/50 mb-6 font-medium text-[15px] relative z-10">6 GB RAM</p>
          <div className="text-center mb-10">
            <span className="text-[2.75rem] font-bold leading-none text-white tracking-tight">$13.99</span>
            <span className="text-white/50 font-medium">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            {['Hourly Backups', 'Priority Support', 'Light Modpack Support'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[15px] text-white/80 font-medium border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <Check className="w-5 h-5 text-brand shrink-0" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl font-bold bg-white/5 text-white shadow-inner hover:bg-white/10 transition-colors border border-white/10">
            Get Started
          </button>
        </div>

        {/* Premium */}
        <div className="bg-[#0a1120]/60 border border-white/10 rounded-[2rem] p-9 text-left backdrop-blur-xl shadow-xl mt-8 flex flex-col relative overflow-hidden">
          <h3 className="text-[1.75rem] font-bold text-center mb-1 text-white relative z-10">Premium</h3>
          <p className="text-center text-white/50 mb-6 font-medium text-[15px] relative z-10">12 GB RAM</p>
          <div className="text-center mb-10">
            <span className="text-[2.75rem] font-bold leading-none text-white tracking-tight">$25.99</span>
            <span className="text-white/50 font-medium">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            {['Real-time Backups', 'Dedicated Support', 'All Modpacks', 'Custom Domain'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[15px] text-white/80 font-medium border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <Check className="w-5 h-5 text-brand shrink-0" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl font-bold bg-white/5 text-white/90 hover:bg-white/10 transition-colors border border-white/10">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
