
import React, { useState } from 'react';
import { Icons } from './Icons';
import { Proposal, Asset } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const mockProposals: Proposal[] = [
  {
    id: 'SEPT-ACT-2024-001',
    title: 'Apollo Sector: "Neon Beats" Music Festival',
    description: 'Community proposal to launch a global virtual music festival in the Apollo sector. Budget request: 50,000 SEPT.',
    status: 'active',
    votesFor: 850000,
    votesAgainst: 120000,
    endDate: '2024-11-15',
  },
  {
    id: 'SEPT-AST-2024-002',
    title: 'New Asset Launch: "GreenTech" Corporate NFT',
    description: 'Proposal to list GreenTech Corp\'s equity NFT in the Demeter sector for sustainable agriculture funding.',
    status: 'passed',
    votesFor: 1200000,
    votesAgainst: 50000,
    endDate: '2024-10-30',
  },
  {
    id: 'SEPT-GOV-2024-003',
    title: 'Protocol Upgrade v2.1',
    description: 'Technical upgrade to increase transaction throughput for the Hermes Game E-commerce sector.',
    status: 'active',
    votesFor: 450000,
    votesAgainst: 10000,
    endDate: '2024-11-20',
  }
];

const mockAssets: Asset[] = [
  { id: '1', name: 'SEPT Eco Token', type: 'Token', price: '$1.25', change: 12.5, image: 'https://placehold.co/200x200/0f172a/0ea5e9.png?text=SEPT' },
  { id: '2', name: 'Creator Asset: CyberArtist X', type: 'NFT', price: '500 SEPT', change: 5.2, image: 'https://picsum.photos/id/20/200/200' },
  { id: '3', name: 'Enterprise: TechCorp Share', type: 'Equity', price: '1200 SEPT', change: -1.2, image: 'https://picsum.photos/id/30/200/200' },
  { id: '4', name: 'Event Ticket: Major S15', type: 'NFT', price: '50 SEPT', change: 8.9, image: 'https://picsum.photos/id/40/200/200' },
  { id: '5', name: 'Land: Sector 7', type: 'NFT', price: '15000 SEPT', change: 2.1, image: 'https://picsum.photos/id/50/200/200' },
  { id: '6', name: 'Zeus Skin: Thunder', type: 'NFT', price: '25 SEPT', change: 0.5, image: 'https://picsum.photos/id/60/200/200' },
];

const chartData = [
  { name: '00:00', value: 0.8 },
  { name: '04:00', value: 0.95 },
  { name: '08:00', value: 0.90 },
  { name: '12:00', value: 1.1 },
  { name: '16:00', value: 1.05 },
  { name: '20:00', value: 1.2 },
  { name: '24:00', value: 1.25 },
];

// Replace this URL with your actual SEPT Logo URL
const LOGO_URL = "https://placehold.co/200x200/050b14/ffffff?text=SEPT+LOGO";

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'governance' | 'assets'>('overview');

  return (
    <div className="flex h-screen bg-[#050b14] text-white overflow-hidden font-sans">
      {/* Sidebar - Terminal Style */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3 border-b border-slate-900">
          <div className="w-10 h-10 flex-shrink-0">
             <img src={LOGO_URL} alt="SEPT" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]" />
          </div>
          <div>
             <span className="font-bold text-lg tracking-wider font-mono">SEPT</span>
             <span className="block text-[10px] text-slate-500 tracking-widest">TERMINAL v1.0</span>
          </div>
        </div>
        
        <nav className="flex-1 px-3 space-y-1 mt-6">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-md transition-all text-sm font-medium ${activeTab === 'overview' ? 'bg-brand-500/10 text-brand-400 border-l-2 border-brand-500' : 'text-slate-400 hover:bg-slate-900 hover:text-white border-l-2 border-transparent'}`}
          >
            <Icons.LayoutDashboard size={18} />
            {t.dashboard.overview}
          </button>
          <button 
            onClick={() => setActiveTab('governance')}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-md transition-all text-sm font-medium ${activeTab === 'governance' ? 'bg-brand-500/10 text-brand-400 border-l-2 border-brand-500' : 'text-slate-400 hover:bg-slate-900 hover:text-white border-l-2 border-transparent'}`}
          >
            <Icons.Vote size={18} />
            {t.dashboard.governance}
          </button>
          <button 
            onClick={() => setActiveTab('assets')}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-md transition-all text-sm font-medium ${activeTab === 'assets' ? 'bg-brand-500/10 text-brand-400 border-l-2 border-brand-500' : 'text-slate-400 hover:bg-slate-900 hover:text-white border-l-2 border-transparent'}`}
          >
            <Icons.Wallet size={18} />
            {t.dashboard.assets}
          </button>
        </nav>

        <div className="p-4 border-t border-slate-900">
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center font-bold text-brand-400 border border-brand-500/30">U</div>
            <div className="flex-1 overflow-hidden">
              <div className="text-xs font-bold text-slate-300 truncate">User_Creator</div>
              <div className="text-[10px] text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                {t.dashboard.connected}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Bar */}
        <header className="h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 border-r border-slate-700 pr-4">
                {activeTab === 'overview' ? t.dashboard.overview : activeTab === 'governance' ? t.dashboard.governance : t.dashboard.assets}
             </h2>
             <span className="text-xs text-slate-600 font-mono">System Status: Optimal</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded text-xs font-mono border border-slate-800 text-slate-400">
               <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
               Mainnet: Block 18,245
            </div>
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-1.5 rounded text-xs font-bold transition-colors shadow-[0_0_10px_rgba(14,165,233,0.3)]">
              {t.nav.connect}
            </button>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Overview Tab Content */}
            {activeTab === 'overview' && (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-[#0b1221] border border-slate-800 p-5 rounded-lg relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icons.TrendingUp size={48} />
                    </div>
                    <h3 className="text-slate-500 text-[10px] uppercase tracking-wider mb-1 font-bold">{t.dashboard.tvl}</h3>
                    <div className="text-2xl font-bold font-mono text-white">$142,593,000</div>
                    <div className="text-green-400 text-xs mt-2 flex items-center gap-1 font-mono">
                      +15.4% <span className="text-slate-600">/ 24h</span>
                    </div>
                  </div>

                  <div className="bg-[#0b1221] border border-slate-800 p-5 rounded-lg relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icons.Users size={48} />
                    </div>
                    <h3 className="text-slate-500 text-[10px] uppercase tracking-wider mb-1 font-bold">{t.dashboard.active_members}</h3>
                    <div className="text-2xl font-bold font-mono text-white">52,405</div>
                    <div className="text-brand-400 text-xs mt-2 font-mono">
                      +1,203 New
                    </div>
                  </div>

                  <div className="bg-[#0b1221] border border-slate-800 p-5 rounded-lg relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icons.Trophy size={48} />
                    </div>
                    <h3 className="text-slate-500 text-[10px] uppercase tracking-wider mb-1 font-bold">{t.dashboard.issued_assets}</h3>
                    <div className="text-2xl font-bold font-mono text-white">1,854</div>
                    <div className="text-purple-400 text-xs mt-2 font-mono">Total Created</div>
                  </div>

                  <div className="bg-[#0b1221] border border-slate-800 p-5 rounded-lg relative overflow-hidden group">
                     <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icons.Zap size={48} />
                    </div>
                    <h3 className="text-slate-500 text-[10px] uppercase tracking-wider mb-1 font-bold">SEPT Price</h3>
                    <div className="text-2xl font-bold font-mono text-brand-400">$1.25</div>
                    <div className="text-xs mt-2 text-slate-500 font-mono">Vol: $45M</div>
                  </div>
                </div>

                {/* Main Layout Split */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Chart Section - Takes up 2/3 */}
                  <div className="lg:col-span-2 bg-[#0b1221] border border-slate-800 rounded-lg p-6 min-h-[400px]">
                    <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 overflow-hidden p-0.5">
                           <img src={LOGO_URL} alt="SEPT" className="w-full h-full object-cover rounded-full" />
                         </div>
                         <div>
                           <h3 className="text-sm font-bold flex items-center gap-2">
                             {t.dashboard.chart_title}
                           </h3>
                           <span className="text-[10px] text-slate-500 font-mono">SEPT / USDT • BINANCE</span>
                         </div>
                       </div>
                       <div className="flex gap-2">
                          {['1H', '4H', '1D', '1W'].map(tf => (
                            <button key={tf} className={`px-2 py-1 text-[10px] rounded border ${tf === '1D' ? 'bg-brand-500 text-white border-brand-500' : 'border-slate-700 text-slate-400 hover:text-white'}`}>
                              {tf}
                            </button>
                          ))}
                       </div>
                    </div>
                    
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                          <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                          <YAxis stroke="#64748b" prefix="$" tick={{fontSize: 10}} axisLine={false} tickLine={false} domain={['dataMin - 0.1', 'dataMax + 0.1']} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                            itemStyle={{ color: '#38bdf8' }}
                          />
                          <Area type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Quick Trade / Activity - Takes up 1/3 */}
                  <div className="bg-[#0b1221] border border-slate-800 rounded-lg p-6 flex flex-col">
                     <h3 className="text-sm font-bold mb-4 uppercase text-slate-400 tracking-wider">{t.dashboard.trade}</h3>
                     
                     <div className="flex-1 flex flex-col gap-4">
                        <div className="bg-slate-900/50 p-4 rounded border border-slate-800">
                           <div className="flex justify-between text-xs text-slate-400 mb-1">
                              <span>Pay</span>
                              <span>Balance: 0.00</span>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-xl font-mono font-bold">0.00</span>
                              <span className="bg-slate-800 px-2 py-1 rounded text-xs font-bold">USDT</span>
                           </div>
                        </div>
                        <div className="flex justify-center -my-2 z-10">
                           <div className="bg-slate-800 p-1.5 rounded-full border border-slate-700">
                              <Icons.ArrowRight className="rotate-90 text-slate-400" size={14} />
                           </div>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded border border-slate-800">
                           <div className="flex justify-between text-xs text-slate-400 mb-1">
                              <span>Receive</span>
                              <span>~</span>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-xl font-mono font-bold text-brand-400">0.00</span>
                              <span className="bg-slate-800 px-2 py-1 rounded text-xs font-bold">SEPT</span>
                           </div>
                        </div>

                        <button className="w-full mt-auto bg-brand-600 hover:bg-brand-500 py-3 rounded font-bold text-sm shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all">
                           {t.dashboard.trade}
                        </button>
                     </div>
                  </div>
                </div>
              </>
            )}

            {/* Governance Tab Content */}
            {(activeTab === 'governance' || activeTab === 'overview') && (
              <div className="bg-[#0b1221] border border-slate-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <Icons.Vote className="text-purple-500" size={16} /> {t.dashboard.recent_proposals}
                  </h3>
                  {activeTab === 'overview' && (
                    <button onClick={() => setActiveTab('governance')} className="text-xs text-brand-400 hover:text-white transition-colors">{t.dashboard.view_all} &rarr;</button>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {mockProposals.map(proposal => (
                    <div key={proposal.id} className="bg-slate-900/40 border border-slate-800 rounded p-4 hover:bg-slate-800/60 transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <div className="flex-1">
                         <div className="flex items-center gap-2 mb-1">
                            <span className={`px-1.5 py-0.5 text-[10px] rounded font-bold uppercase tracking-wider ${proposal.status === 'active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-slate-600/10 text-slate-400 border border-slate-600/20'}`}>
                              {proposal.status === 'active' ? t.dashboard.active : t.dashboard.passed}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">{proposal.id}</span>
                         </div>
                         <h4 className="font-bold text-sm text-slate-200">{proposal.title}</h4>
                      </div>
                      
                      <div className="w-full md:w-1/3 flex flex-col gap-1">
                         <div className="flex justify-between text-[10px] uppercase text-slate-500 font-bold">
                            <span>{t.dashboard.votes_for}</span>
                            <span>{t.dashboard.votes_against}</span>
                         </div>
                         <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                            <div className="bg-green-500 h-full" style={{ width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` }}></div>
                         </div>
                         <div className="text-right text-[10px] text-slate-500">
                           {((proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100).toFixed(1)}% Approval
                         </div>
                      </div>

                      <button className="hidden md:block px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded text-xs text-slate-300 font-medium transition-colors border border-slate-700">
                        {t.dashboard.view_details}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Assets Tab Content */}
            {(activeTab === 'assets' || activeTab === 'overview') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <Icons.Wallet className="text-green-500" size={16} /> {t.dashboard.trending_assets}
                  </h3>
                  {activeTab === 'overview' && (
                    <button onClick={() => setActiveTab('assets')} className="text-xs text-brand-400 hover:text-white transition-colors">{t.dashboard.go_market} &rarr;</button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockAssets.map(asset => (
                    <div key={asset.id} className="bg-[#0b1221] border border-slate-800 rounded-lg p-3 hover:border-brand-500/30 transition-all group">
                      <div className="flex items-start gap-3">
                         <div className="w-12 h-12 rounded bg-slate-900 border border-slate-800 overflow-hidden shrink-0 group-hover:shadow-[0_0_10px_rgba(14,165,233,0.2)] transition-shadow">
                            <img src={asset.image} alt={asset.name} className="w-full h-full object-cover" />
                         </div>
                         <div className="overflow-hidden">
                            <h4 className="font-bold text-sm truncate text-white">{asset.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                               <span className="text-xs bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">{asset.type}</span>
                            </div>
                         </div>
                      </div>
                      <div className="mt-3 flex items-end justify-between border-t border-slate-800/50 pt-2">
                         <div>
                            <div className="text-[10px] text-slate-500 uppercase">Price</div>
                            <div className="text-sm font-mono font-bold text-brand-300">{asset.price}</div>
                         </div>
                         <div className={`text-xs font-mono font-bold ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                           {asset.change > 0 ? '+' : ''}{asset.change}%
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
          
          <footer className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-600 text-xs font-mono">
             <div>CONNECTED TO MAINNET • LATENCY: 24ms</div>
             <div className="mt-1">&copy; 2024 SEPT DECENTRALIZED PLATFORM</div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
