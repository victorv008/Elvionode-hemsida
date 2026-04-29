import { Hexagon, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1120] pt-20 pb-8 px-6 border-t border-brand/5 relative mt-20">
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent"></div>
      
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-16 px-4">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                <Hexagon className="w-5 h-5 text-brand" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">ElvioNode</span>
            </div>
            <p className="text-white/60 text-[14px] leading-relaxed mb-6 max-w-[250px] font-medium">
              Premium Minecraft server hosting with a custom-built control panel.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-brand text-[#0a1120] flex items-center justify-center hover:brightness-110 transition-all shadow-[0_0_15px_rgba(44,212,199,0.3)]">
                 <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.946 2.4189-2.1568 2.4189Z"/></svg>
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-brand text-[#0a1120] flex items-center justify-center hover:brightness-110 transition-all shadow-[0_0_15px_rgba(44,212,199,0.3)]">
                 <Twitter className="w-[18px] h-[18px] fill-current" />
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-brand text-[#0a1120] flex items-center justify-center hover:brightness-110 transition-all shadow-[0_0_15px_rgba(44,212,199,0.3)]">
                 <Youtube className="w-[18px] h-[18px] fill-current -ml-0.5" />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-bold text-[13px] text-white tracking-widest uppercase mb-5">Product</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Features</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Control Panel</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Migration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[13px] text-white tracking-widest uppercase mb-5">Resources</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Help Center</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Status Page</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[13px] text-white tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Blog</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Careers</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[13px] text-white tracking-widest uppercase mb-5">Legal</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-white/60 font-medium hover:text-brand transition-colors">SLA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[2px] bg-gradient-to-r from-transparent via-brand/30 to-transparent shadow-[0_0_15px_rgba(44,212,199,0.5)]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a1120] px-4">
             {/* Small CSS representation of the dragon pixel icon since I don't have the image file */}
             <div className="w-10 h-10 flex items-center justify-center">
                 <div className="w-8 h-8 rounded-full bg-brand/20 blur-[10px] absolute"></div>
                 <div className="w-6 h-6 shrink-0 relative bg-[url('https://api.iconify.design/pixelarticons:dragon.svg?color=%232cd4c7')] bg-contain bg-center bg-no-repeat z-10 drop-shadow-[0_0_5px_rgba(44,212,199,0.8)]"></div>
             </div>
          </div>
          <p className="text-[13px] text-white/40 font-medium mt-4">
            &copy; 2026 ElvioNode. All rights reserved. Ljungby, Sweden.
          </p>
        </div>
      </div>
    </footer>
  );
}
