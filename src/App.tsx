import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardMigration from './components/DashboardMigration';
import DatacentersFAQ from './components/DatacentersFAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans selection:bg-[#2cd4c7] selection:text-[#070b14] overflow-hidden">
      {/* Global Background Glows */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#2cd4c7]/5 to-transparent pointer-events-none z-0"></div>
      
      <Navbar />
      <Hero />
      <Features />
      <DashboardMigration />
      <DatacentersFAQ />
      <Footer />
    </div>
  );
}
