import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const monthlyData = [
  { name: 'Jan', valor: 12500 },
  { name: 'Fev', valor: 15000 },
  { name: 'Mar', valor: 11000 },
  { name: 'Abr', valor: 18000 },
  { name: 'Mai', valor: 14500 },
  { name: 'Jun', valor: 19000 },
  { name: 'Jul', valor: 22000 },
  { name: 'Ago', valor: 21500 },
];

const statusData = [
  { name: 'Em Dia', value: 65 },
  { name: 'Atrasado', value: 15 },
  { name: 'Em Negociação', value: 20 },
];

const STATUS_COLORS = ['#10b981', '#ef4444', '#f59e0b'];

const reportsList = [
    { id: 1, title: 'Relatório Mensal - Agosto 2024', type: 'PDF', size: '2.4 MB', date: '01/09/2024' },
    { id: 2, title: 'Balanço Trimestral Q2 2024', type: 'XLSX', size: '1.1 MB', date: '05/07/2024' },
    { id: 3, title: 'Análise de Risco - Clientes', type: 'PDF', size: '3.8 MB', date: '15/06/2024' },
    { id: 4, title: 'Extrato de Rendimentos 2023', type: 'PDF', size: '5.2 MB', date: '10/01/2024' },
];

const Reports: React.FC = () => {
    return (
        <div className="flex flex-col max-w-[1440px] w-full mx-auto p-4 md:p-8 gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                 <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Relatórios</h1>
                    <p className="text-slate-500 dark:text-text-secondary text-base">Análise detalhada de performance e documentos fiscais.</p>
                 </div>
                 <div className="flex items-center gap-3 bg-white dark:bg-surface-dark p-1 rounded-lg border border-slate-200 dark:border-border-dark shadow-sm">
                    <button className="px-4 py-2 text-sm font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-md shadow-sm">Mensal</button>
                    <button className="px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Trimestral</button>
                    <button className="px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Anual</button>
                 </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                            <span className="material-symbols-outlined">bar_chart</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Lucro Líquido (Mês)</p>
                    </div>
                    <p className="text-3xl font-black text-slate-900 dark:text-white">R$ 21.500,00</p>
                    <p className="text-emerald-500 text-sm font-bold flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                        +12% vs. mês anterior
                    </p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                            <span className="material-symbols-outlined">receipt_long</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Impostos Estimados</p>
                    </div>
                    <p className="text-3xl font-black text-slate-900 dark:text-white">R$ 3.225,00</p>
                    <p className="text-slate-400 text-sm mt-1">Base de cálculo: 15%</p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-lg">
                            <span className="material-symbols-outlined">account_balance</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Patrimônio Total</p>
                    </div>
                    <p className="text-3xl font-black text-slate-900 dark:text-white">R$ 518.000,00</p>
                    <p className="text-emerald-500 text-sm font-bold flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                        Crescimento constante
                    </p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Bar Chart */}
                <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Evolução de Rendimentos</h3>
                    <div className="flex-1 w-full min-h-[300px]">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                                <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94a3b8' }} 
                                    dy={10}
                                />
                                <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94a3b8' }} 
                                    tickFormatter={(value) => `R$${value/1000}k`}
                                />
                                <Tooltip 
                                    cursor={{fill: 'transparent'}}
                                    contentStyle={{ backgroundColor: '#1c252e', borderColor: '#233648', color: '#fff', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Bar dataKey="valor" fill="#137fec" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="lg:col-span-1 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Status da Carteira</h3>
                    <div className="flex-1 w-full min-h-[300px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={statusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {statusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                     contentStyle={{ backgroundColor: '#1c252e', borderColor: '#233648', color: '#fff', borderRadius: '8px' }}
                                     itemStyle={{ color: '#fff' }}
                                />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-8">
                             <div className="text-center">
                                <p className="text-3xl font-black text-slate-900 dark:text-white">100%</p>
                                <p className="text-xs text-slate-500">Total</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Documents List */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-border-dark flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Documentos Recentes</h3>
                    <button className="text-sm font-bold text-primary hover:text-primary-hover">Ver todos</button>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {reportsList.map((report) => (
                        <div key={report.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-[#233648]/30 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
                                    <span className="material-symbols-outlined">picture_as_pdf</span>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">{report.title}</p>
                                    <p className="text-xs text-slate-500">{report.date} • {report.size}</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">download</span>
                                Baixar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reports;