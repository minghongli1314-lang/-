
import React from 'react';
import { Icons } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { ViewState } from '../types';
import NetworkBackground from './NetworkBackground';

interface IndustriesPageProps {
  onNavigate: (view: ViewState) => void;
}

const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Mapping gods to icons
  const godIcons: Record<string, React.ReactNode> = {
    zeus: <Icons.Zap size={32} />,
    hera: <Icons.MonitorPlay size={32} />,
    athena: <Icons.BrainCircuit size={32} />,
    apollo: <Icons.Music size={32} />,
    aphrodite: <Icons.Sparkles size={32} />,
    ares: <Icons.Swords size={32} />,
    artemis: <Icons.Compass size={32} />,
    hermes: <Icons.Rocket size={32} />,
    dionysus: <Icons.Utensils size={32} />,
    demeter: <Icons.Leaf size={32} />,
    hephaestus: <Icons.Hammer size={32} />,
    poseidon: <Icons.Waves size={32} />,
  };

  const gods = t.olympians.gods as Record<string, { name: string; industry: string; desc: string }>;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0F1A] text-slate-900 dark:text-white relative overflow-hidden font-sans transition-colors duration-300">
      
      {/* Background (Optional, reused from Landing) */}
       <div className="fixed inset-0 z-0 opacity-20">
         <NetworkBackground />
       </div>

      <nav className="fixed top-0 w-full z-50 bg-[#0A0F1A]/95 backdrop-blur-md border-b border-[#1E293B] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <button 
             onClick={() => onNavigate(ViewState.LANDING)}
             className="flex items-center gap-2 text-white hover:text-brand-400 transition-colors font-display font-bold uppercase tracking-wide"
           >
             <Icons.ArrowRight className="rotate-180" size={20} /> Back to Home
           </button>
           <h1 className="text-xl font-display font-bold text-white uppercase tracking-widest hidden md:block">
             {t.olympians.title}
           </h1>
           <div className="w-8"></div> {/* Spacer for centering if needed */}
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 drop-shadow-sm dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              {t.olympians.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
              {t.olympians.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(gods).map(([key, god]) => (
              <div key={key} className="group bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-brand-500/50 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/10 transition-all"></div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                   <div className="p-3 bg-brand-50 dark:bg-[#020617] rounded-xl text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {godIcons[key] || <Icons.Hexagon />}
                   </div>
                   <div>
                      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white uppercase tracking-wide">{god.name}</h3>
                      <div className="text-xs font-mono text-brand-600 dark:text-brand-400 uppercase tracking-widest mt-1">{god.industry}</div>
                   </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6 min-h-[60px] relative z-10">
                  {god.desc}
                </p>

                <div className="bg-slate-50 dark:bg-[#020617] p-4 rounded-lg border border-slate-200 dark:border-slate-800 relative z-10">
                   <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      <span>Token Allocation</span>
                      <span className="text-brand-600 dark:text-brand-400">5.7%</span>
                   </div>
                   <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                      1,000,000 SEPT
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

    </div>
  );
};

export default IndustriesPage;
