import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
  { name: 'JAN', value: 300000 },
  { name: 'FEV', value: 380000 },
  { name: 'MAR', value: 340000 },
  { name: 'ABR', value: 480000 },
  { name: 'MAI', value: 410000 },
  { name: 'JUN', value: 502000 },
];

const Dashboard: React.FC = () => {
    return (
        <div className="flex flex-col max-w-[1440px] w-full mx-auto p-4 md:p-8 gap-6 md:gap-8">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight">Dashboard Financeiro</h1>
                    <p className="text-slate-500 dark:text-text-secondary text-base font-normal">Visão geral da sua carteira de investimentos</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-surface-light dark:bg-[#233648] text-slate-700 dark:text-white text-sm font-bold border border-slate-200 dark:border-transparent hover:bg-slate-50 dark:hover:bg-[#2d465e] transition-colors">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        <span className="hidden sm:inline">Exportar</span>
                    </button>
                    <Link to="/investments/new" className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        <span>Novo Investimento</span>
                    </Link>
                </div>
            </header>

            {/* KPI Stats Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Investido */}
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-text-secondary text-sm font-medium">Total Investido</p>
                        <span className="material-symbols-outlined text-primary">trending_up</span>
                    </div>
                    <div>
                        <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">R$ 450.000,00</p>
                        <p className="text-emerald-500 text-sm font-semibold flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                            +5.2% <span className="text-slate-400 font-normal ml-1">vs. mês anterior</span>
                        </p>
                    </div>
                </div>
                
                {/* Retorno Projetado */}
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-text-secondary text-sm font-medium">Retorno Projetado</p>
                        <span className="material-symbols-outlined text-purple-500">pie_chart</span>
                    </div>
                    <div>
                        <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">R$ 52.000,00</p>
                        <p className="text-emerald-500 text-sm font-semibold flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                            +2.1% <span className="text-slate-400 font-normal ml-1">projeção anual</span>
                        </p>
                    </div>
                </div>

                {/* Em Atraso (Critical) */}
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-red-200 dark:border-red-900/30 shadow-sm relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-16 h-16 bg-red-500/10 rounded-bl-full -mr-4 -mt-4"></div>
                    <div className="flex items-center justify-between relative z-10">
                        <p className="text-slate-500 dark:text-text-secondary text-sm font-medium">Em Atraso (Crítico)</p>
                        <span className="material-symbols-outlined text-red-500">warning</span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">R$ 12.500,00</p>
                        <p className="text-red-500 text-sm font-semibold flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[16px]">priority_high</span>
                            3 Clientes <span className="text-slate-400 font-normal ml-1">precisam atenção</span>
                        </p>
                    </div>
                </div>

                {/* A Receber */}
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-text-secondary text-sm font-medium">A Receber (7d)</p>
                        <span className="material-symbols-outlined text-emerald-500">calendar_today</span>
                    </div>
                    <div>
                        <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">R$ 8.400,00</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal mt-1">
                            Próximo: <span className="text-slate-900 dark:text-white font-medium">Amanhã</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Grid: Charts & Lists */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Chart Section */}
                <div className="xl:col-span-2 flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Performance da Carteira</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Evolução do patrimônio nos últimos 6 meses</p>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#111a22] rounded-lg p-1">
                            <button className="px-3 py-1 rounded-md bg-white dark:bg-[#233648] text-slate-900 dark:text-white text-xs font-bold shadow-sm">6M</button>
                            <button className="px-3 py-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors">1A</button>
                            <button className="px-3 py-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors">YTD</button>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">R$ 502.000,00</span>
                        <span className="text-sm font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">+12.5%</span>
                    </div>
                    
                    <div className="w-full h-[240px] mt-auto">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#137fec" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#1c252e', borderColor: '#233648', color: '#fff' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                                    dy={10}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="value" 
                                    stroke="#137fec" 
                                    strokeWidth={3}
                                    fillOpacity={1} 
                                    fill="url(#colorValue)" 
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Overdue Payments */}
                <div className="xl:col-span-1 flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-200 dark:border-border-dark bg-red-50 dark:bg-red-900/10 flex items-center justify-between">
                        <h3 className="text-red-700 dark:text-red-400 text-lg font-bold">Atenção Necessária</h3>
                        <span className="bg-red-200 dark:bg-red-900/40 text-red-800 dark:text-red-300 text-xs font-bold px-2 py-1 rounded-full">3 Atrasados</span>
                    </div>
                    <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
                        {[
                            { name: 'Carlos Mendes Transportes', amount: 'R$ 4.200,00', days: 5 },
                            { name: 'TechSoluções LTDA', amount: 'R$ 2.800,00', days: 12 },
                            { name: 'Padaria Central', amount: 'R$ 5.500,00', days: 2 },
                        ].map((item, i) => (
                            <Link key={i} to={`/investments/${i}`} className="p-4 hover:bg-slate-50 dark:hover:bg-[#233648]/50 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-slate-900 dark:text-white font-bold text-sm">{item.name}</p>
                                    <p className="text-red-600 dark:text-red-400 font-bold text-sm">{item.amount}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Vencido há {item.days} dias</p>
                                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-600 text-lg group-hover:text-primary transition-colors">chevron_right</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto p-3 border-t border-slate-200 dark:border-border-dark">
                        <button className="w-full py-2 text-sm text-primary font-bold hover:bg-primary/5 rounded transition-colors">Ver todos os atrasos</button>
                    </div>
                </div>
            </div>

            {/* Upcoming Payments Table */}
            <div className="flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm overflow-hidden mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 pb-2 gap-4">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold">Pagamentos Próximos</h3>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-[20px]">search</span>
                            <input className="h-9 pl-9 pr-4 rounded-lg bg-slate-100 dark:bg-[#111a22] border-none text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-1 focus:ring-primary w-full sm:w-64" placeholder="Buscar cliente..." type="text"/>
                        </div>
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-[#111a22] text-slate-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">filter_list</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto p-2">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 dark:border-border-dark">
                                <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Cliente</th>
                                <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Vencimento</th>
                                <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Valor Parcela</th>
                                <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Juros Estimado</th>
                                <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Status</th>
                                <th className="p-4 text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                            <tr className="group hover:bg-slate-50 dark:hover:bg-[#233648]/30 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-xs">JL</div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">João Lima ME</p>
                                            <p className="text-xs text-slate-500">Inv. #4920</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-slate-700 dark:text-slate-300">15 Set 2024 (Amanhã)</td>
                                <td className="p-4 font-bold text-slate-900 dark:text-white">R$ 3.500,00</td>
                                <td className="p-4 text-emerald-500 font-medium">+ R$ 120,00</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                        Pendente
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="group hover:bg-slate-50 dark:hover:bg-[#233648]/30 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold text-xs">AG</div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">AgroTech Sul</p>
                                            <p className="text-xs text-slate-500">Inv. #4855</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-slate-700 dark:text-slate-300">16 Set 2024</td>
                                <td className="p-4 font-bold text-slate-900 dark:text-white">R$ 12.800,00</td>
                                <td className="p-4 text-emerald-500 font-medium">+ R$ 450,00</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                        Agendado
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;