
import React, { useState } from 'react';
import { Icons } from './Icons';
import NetworkBackground from './NetworkBackground';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

interface LandingPageProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'zh_CN', label: '简体中文' },
    { code: 'zh_TW', label: '繁體中文' },
    { code: 'en', label: 'English' },
  ];

  const getGodConfig = (key: string) => {
    const map: Record<string, { icon: any, color: string, bg: string, border: string, shadow: string }> = {
      zeus: { icon: Icons.Zap, color: 'text-yellow-400', bg: 'bg-yellow-400/5', border: 'border-yellow-400/30', shadow: 'shadow-yellow-400/20' },
      hera: { icon: Icons.MonitorPlay, color: 'text-purple-400', bg: 'bg-purple-400/5', border: 'border-purple-400/30', shadow: 'shadow-purple-400/20' },
      athena: { icon: Icons.BrainCircuit, color: 'text-blue-400', bg: 'bg-blue-400/5', border: 'border-blue-400/30', shadow: 'shadow-blue-400/20' },
      apollo: { icon: Icons.Music, color: 'text-orange-400', bg: 'bg-orange-400/5', border: 'border-orange-400/30', shadow: 'shadow-orange-400/20' },
      aphrodite: { icon: Icons.Sparkles, color: 'text-pink-400', bg: 'bg-pink-400/5', border: 'border-pink-400/30', shadow: 'shadow-pink-400/20' },
      ares: { icon: Icons.Swords, color: 'text-red-500', bg: 'bg-red-500/5', border: 'border-red-500/30', shadow: 'shadow-red-500/20' },
      artemis: { icon: Icons.Compass, color: 'text-emerald-400', bg: 'bg-emerald-400/5', border: 'border-emerald-400/30', shadow: 'shadow-emerald-400/20' },
      hermes: { icon: Icons.Rocket, color: 'text-cyan-400', bg: 'bg-cyan-400/5', border: 'border-cyan-400/30', shadow: 'shadow-cyan-400/20' },
      dionysus: { icon: Icons.Utensils, color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/5', border: 'border-fuchsia-400/30', shadow: 'shadow-fuchsia-400/20' },
      demeter: { icon: Icons.Leaf, color: 'text-green-500', bg: 'bg-green-500/5', border: 'border-green-500/30', shadow: 'shadow-green-500/20' },
      hephaestus: { icon: Icons.Hammer, color: 'text-amber-600', bg: 'bg-amber-600/5', border: 'border-amber-600/30', shadow: 'shadow-amber-600/20' },
      poseidon: { icon: Icons.Waves, color: 'text-blue-600', bg: 'bg-blue-600/5', border: 'border-blue-600/30', shadow: 'shadow-blue-600/20' },
    };
    return map[key] || map['zeus'];
  };

  // Replace this URL with your actual SEPT Logo URL
  const LOGO_URL = "https://placehold.co/200x200/050b14/ffffff?text=SEPT+LOGO";

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden font-sans selection:bg-brand-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
             <img 
               src={LOGO_URL} 
               alt="SEPT Logo" 
               className="h-14 w-14 object-contain drop-shadow-[0_0_10px_rgba(14,165,233,0.5)] group-hover:scale-110 transition-transform duration-300"
             />
             <div className="hidden sm:block">
               <h1 className="text-2xl font-bold tracking-tighter text-white font-mono leading-none">SEPT</h1>
               <p className="text-[10px] text-brand-400 uppercase tracking-widest leading-none opacity-80">International Esports Committee</p>
             </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#olympians" className="hover:text-brand-400 transition-colors hover:scale-105 transform">{t.nav.industries}</a>
            <a href="#roadmap" className="hover:text-brand-400 transition-colors hover:scale-105 transform">{t.nav.roadmap}</a>
            <a href="#governance" className="hover:text-brand-400 transition-colors hover:scale-105 transform">{t.nav.governance}</a>
            <a href="#assets" className="hover:text-brand-400 transition-colors hover:scale-105 transform">{t.nav.assets}</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={toggleLangMenu}
                className="flex items-center gap-2 text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors border border-transparent hover:border-slate-700 hover:bg-slate-800"
              >
                <Icons.Languages size={18} />
                <span className="text-sm uppercase font-mono">{language === 'zh_CN' ? 'CN' : language === 'zh_TW' ? 'TW' : 'EN'}</span>
                <Icons.ChevronDown size={14} />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-50 animate-fade-in-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white flex items-center justify-between"
                    >
                      {lang.label}
                      {language === lang.code && <Icons.Check size={14} className="text-brand-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={onEnterApp}
              className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:-translate-y-0.5"
            >
              {t.nav.enter} <Icons.ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        <NetworkBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full flex flex-col items-center">
          {/* Logo Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-bold mb-8 animate-fade-in-up backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            {t.hero.tag}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-tight animate-fade-in-up [animation-delay:200ms]">
            {t.hero.title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-brand-400 animate-border-flow bg-[length:200%_auto]">{t.hero.title_highlight}</span> <br />
            {t.hero.title_suffix}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms] font-light">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md animate-fade-in-up [animation-delay:600ms]">
            <button 
              onClick={onEnterApp}
              className="w-full px-8 py-4 bg-gradient-to-r from-brand-600 to-blue-700 rounded-lg font-bold text-lg hover:from-brand-500 hover:to-blue-600 transition-all shadow-lg shadow-brand-900/50 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
              <span className="relative flex items-center gap-2">{t.hero.launch} <Icons.LayoutDashboard className="group-hover:rotate-12 transition-transform" /></span>
            </button>
            <button className="w-full px-8 py-4 bg-slate-900/50 border border-slate-700 rounded-lg font-bold text-lg hover:bg-slate-800 transition-all backdrop-blur-sm hover:border-slate-500">
              {t.hero.whitepaper}
            </button>
          </div>
        </div>

        {/* Live Stats Strip */}
        <div className="absolute bottom-0 w-full bg-slate-950/80 backdrop-blur-md border-t border-white/5 py-4 z-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex justify-between md:grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start border-r border-white/5 last:border-0 pr-8">
               <span className="text-xs text-slate-500 uppercase tracking-widest">{t.hero.stats.price}</span>
               <span className="text-xl font-mono font-bold text-brand-400 flex items-center gap-2">$1.24 <span className="text-xs text-green-500">+5.2%</span></span>
            </div>
            <div className="hidden md:flex flex-col border-r border-white/5 last:border-0 pr-8">
               <span className="text-xs text-slate-500 uppercase tracking-widest">{t.hero.stats.supply}</span>
               <span className="text-xl font-mono font-bold text-white">450,000,000</span>
            </div>
            <div className="hidden md:flex flex-col border-r border-white/5 last:border-0 pr-8">
               <span className="text-xs text-slate-500 uppercase tracking-widest">{t.hero.stats.proposals}</span>
               <span className="text-xl font-mono font-bold text-white">1,204</span>
            </div>
            <div className="hidden md:flex flex-col">
               <span className="text-xs text-slate-500 uppercase tracking-widest">{t.hero.stats.nodes}</span>
               <span className="text-xl font-mono font-bold text-white">12 <span className="text-xs text-slate-500">Global</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Olympian Industries Section */}
      <section id="olympians" className="py-24 bg-[#050b14] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-brand-400 to-purple-400 animate-border-flow bg-[length:200%_auto]">
              {t.olympians.title}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4 font-light">
              {t.olympians.subtitle}
            </p>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {t.olympians.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(t.olympians.gods).map(([key, god]) => {
              const config = getGodConfig(key);
              const IconComponent = config.icon;
              const godData = god as { name: string; industry: string; desc: string };
              return (
                <div key={key} className={`glass-card p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-2`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${config.bg} rounded-bl-full opacity-50 transition-all group-hover:scale-150`}></div>
                  
                  <div className={`relative w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-slate-900/80 ${config.color} border border-white/5 ${config.shadow} shadow-lg group-hover:shadow-2xl transition-all`}>
                    <IconComponent size={28} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-1 ${config.color} group-hover:text-glow transition-all`}>
                    {godData.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-3 border-l-2 border-slate-700 pl-2 uppercase tracking-wider">
                    {godData.industry}
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {godData.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section (New) */}
      <section id="roadmap" className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.roadmap.title}</h2>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-purple-500 to-slate-900 md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {['q1', 'q2', 'q3', 'q4'].map((q, index) => {
                const item = t.roadmap[q as keyof typeof t.roadmap] as { title: string, desc: string };
                return (
                  <div key={q} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                     <div className="flex-1 w-full md:w-1/2"></div>
                     <div className="w-8 h-8 rounded-full bg-slate-950 border-4 border-brand-500 z-10 shadow-[0_0_15px_rgba(14,165,233,0.5)] shrink-0 absolute left-0 md:left-1/2 md:-translate-x-1/2"></div>
                     <div className={`flex-1 w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                       <div className="glass-card p-6 rounded-xl hover:border-brand-500/50 transition-colors">
                         <h3 className="text-xl font-bold text-brand-400 mb-2">{item.title}</h3>
                         <p className="text-slate-400 text-sm">{item.desc}</p>
                       </div>
                     </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="governance" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{t.features.title}</h2>
              <p className="text-slate-400 mb-8 text-lg font-light">
                {t.features.desc}
              </p>
              
              <div className="space-y-6">
                <div className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-brand-900/50 rounded-lg flex items-center justify-center shrink-0 border border-brand-500/30 group-hover:scale-110 transition-transform shadow-lg shadow-brand-500/20">
                    <Icons.Vote className="text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover:text-brand-400 transition-colors">{t.features.governance_title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.features.governance_desc}
                    </p>
                  </div>
                </div>

                <div className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center shrink-0 border border-purple-500/30 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                    <Icons.Cpu className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover:text-purple-400 transition-colors">{t.features.assets_title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.features.assets_desc}
                    </p>
                  </div>
                </div>

                <div className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center shrink-0 border border-green-500/30 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                    <Icons.Shield className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover:text-green-400 transition-colors">{t.features.treasury_title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.features.treasury_desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative transform lg:translate-x-12 perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="relative bg-[#0b1221] border border-slate-700/50 rounded-2xl p-8 shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
                {/* Mock Governance Interface */}
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm text-green-400">Mainnet Live</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Block #18,293,034</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-900/80 p-5 rounded-lg border-l-4 border-brand-500 shadow-md">
                    <div className="flex justify-between text-xs mb-2 font-mono">
                      <span className="text-slate-400">Proposal #201</span>
                      <span className="text-brand-400 animate-pulse">Voting Ends in 24h</span>
                    </div>
                    <h4 className="font-bold mb-4">Apollo Sector: Global Music Festival Funding</h4>
                    <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden flex mb-2">
                      <div className="w-[75%] bg-brand-500 shadow-[0_0_10px_#0ea5e9]"></div>
                      <div className="w-[15%] bg-red-500/50"></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Yes: 1.2M SEPT</span>
                      <span>No: 240k SEPT</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 p-5 rounded-lg border-l-4 border-green-500 shadow-md opacity-70">
                    <div className="flex justify-between text-xs mb-2 font-mono">
                      <span className="text-slate-400">Proposal #200</span>
                      <span className="text-green-400">Passed</span>
                    </div>
                    <h4 className="font-bold mb-4">New Asset Listing: GreenTech Corp</h4>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex">
                      <div className="w-[92%] bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="assets" className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-brand-900/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.showcase.title} <span className="text-brand-400">{t.showcase.title_highlight}</span>
            </h2>
            <p className="text-slate-400 text-lg">
              {t.showcase.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-800 hover:border-brand-500/50">
                <img src={`https://picsum.photos/id/${i * 25 + 10}/600/800`} alt="NFT Asset" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-brand-500/20 backdrop-blur-md border border-brand-500/30 w-fit px-3 py-1 rounded-full text-[10px] font-bold text-brand-300 uppercase tracking-wider">
                      Verified Asset
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">Divine Series #{i}04</h3>
                  <div className="flex justify-between items-center bg-slate-900/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
                    <span className="text-slate-300 text-xs uppercase font-bold">Floor Price</span>
                    <span className="font-mono text-brand-400 font-bold text-lg">500 SEPT</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <button 
                onClick={onEnterApp}
                className="relative w-full md:w-auto px-12 py-4 bg-white text-slate-950 font-bold text-lg rounded-lg hover:bg-brand-50 transition-colors flex items-center justify-center gap-3"
              >
                {t.showcase.btn} <Icons.ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                 <img src={LOGO_URL} alt="SEPT" className="h-8 w-8 object-contain" />
                 <span className="font-bold text-lg tracking-widest">SEPT</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                Empowering the future of digital economy through the 12 Olympian Industries.
              </p>
            </div>
            
            <div className="flex gap-8 text-slate-400">
              <a href="#" className="hover:text-brand-400 transition-colors"><Icons.Globe size={24} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Icons.Menu size={24} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Icons.Zap size={24} /></a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
            &copy; 2024 SEPT Platform / International Esports Committee. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
