import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentDetails: React.FC = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
            {/* Breadcrumbs */}
            <nav className="flex text-sm font-medium">
                <ol className="flex flex-wrap items-center gap-2">
                    <li><Link to="/" className="text-text-secondary hover:text-primary transition-colors">Início</Link></li>
                    <li className="text-text-secondary">/</li>
                    <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Investimentos</a></li>
                    <li className="text-text-secondary">/</li>
                    <li className="text-slate-900 dark:text-white text-opacity-90">#2024-001</li>
                </ol>
            </nav>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-200 dark:border-border-dark pb-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Investimento #2024-001</h1>
                    <p className="text-text-secondary text-base">Gerencie os dados financeiros e o histórico de pagamentos da Empresa XYZ Ltda.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex h-10 items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1">
                        <span className="material-symbols-outlined text-red-500" style={{ fontSize: '20px' }}>warning</span>
                        <span className="text-red-500 font-bold text-sm">Status: Em Atraso</span>
                    </div>
                </div>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Total Emprestado */}
                <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 flex flex-col gap-4 shadow-sm relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{ fontSize: '80px' }}>monetization_on</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg text-primary">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <p className="text-gray-500 dark:text-text-secondary font-medium">Total Emprestado</p>
                    </div>
                    <div>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">R$ 50.000,00</p>
                        <p className="text-xs text-green-500 dark:text-green-400 mt-1 flex items-center gap-1">
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span>
                            +2.5% ao mês
                        </p>
                    </div>
                </div>

                {/* Juros Acumulados */}
                <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 flex flex-col gap-4 shadow-sm relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{ fontSize: '80px' }}>savings</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                            <span className="material-symbols-outlined">account_balance</span>
                        </div>
                        <p className="text-gray-500 dark:text-text-secondary font-medium">Juros Acumulados</p>
                    </div>
                    <div>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">R$ 12.500,00</p>
                        <p className="text-xs text-gray-500 dark:text-text-secondary mt-1">Desde 10/01/2024</p>
                    </div>
                </div>

                {/* Saldo Devedor */}
                <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 flex flex-col gap-4 shadow-sm relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{ fontSize: '80px' }}>account_balance_wallet</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-red-500/20 p-2 rounded-lg text-red-400">
                            <span className="material-symbols-outlined">pending</span>
                        </div>
                        <p className="text-gray-500 dark:text-text-secondary font-medium">Saldo Devedor</p>
                    </div>
                    <div>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">R$ 62.500,00</p>
                        <p className="text-xs text-red-500 dark:text-red-400 mt-1 flex items-center gap-1">
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>warning</span>
                            Ação necessária
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Edit Form */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-border-dark flex justify-between items-center">
                            <h2 className="text-slate-900 dark:text-white text-lg font-bold">Dados do Contrato</h2>
                            <button className="text-primary hover:text-primary/80 text-sm font-medium">Editar</button>
                        </div>
                        <form className="p-6 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Cliente / Empresa</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined" style={{ fontSize: '20px' }}>business</span>
                                    <input className="w-full bg-gray-50 dark:bg-[#111a22] border border-gray-300 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-500" placeholder="Nome do cliente" type="text" defaultValue="Empresa XYZ Ltda"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Data do Empréstimo</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined" style={{ fontSize: '20px' }}>calendar_today</span>
                                    <input className="w-full bg-gray-50 dark:bg-[#111a22] border border-gray-300 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all [color-scheme:light] dark:[color-scheme:dark]" type="date" defaultValue="2024-01-10"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Valor Principal</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">R$</span>
                                    <input className="w-full bg-gray-50 dark:bg-[#111a22] border border-gray-300 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-slate-900 dark:text-white font-mono focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="text" defaultValue="50.000,00"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Taxa de Juros (Mensal)</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined" style={{ fontSize: '20px' }}>percent</span>
                                    <input className="w-full bg-gray-50 dark:bg-[#111a22] border border-gray-300 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="number" defaultValue="2.5"/>
                                </div>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-border-dark my-2"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-text-secondary">Previsão Total</span>
                                <span className="text-base font-bold text-slate-900 dark:text-white">R$ 65.000,00</span>
                            </div>
                            <button className="mt-2 w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2" type="button">
                                <span className="material-symbols-outlined">save</span>
                                Salvar Alterações
                            </button>
                        </form>
                    </div>

                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-red-500 font-bold">Zona de Perigo</span>
                            <span className="text-red-400/60 text-sm">Esta ação não pode ser desfeita.</span>
                        </div>
                        <button className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>

                {/* Right Column: History & Visuals */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Graphical Abstract */}
                    <div className="w-full h-48 rounded-xl overflow-hidden relative border border-gray-200 dark:border-border-dark">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ekL1KQxeESc5A2taLAbDGOQd8LYAOjUtrmCQ34CLFCA7jtD9ol0IGkzksGhCYdGZKNJPSk585ZS9rkuwFUKC_qkceCZNiX9v0RaoONyjf3PKHZQbfUt1Ln8GBrQuyVHf4CBMDUNc2sKCx_EbeorzZhMV1zZElEgxV8A6k9-xLuUcZPB8wBBT9GgfFoNXAjlYsWUHHHSMUNpJYIsjoYs98qV8lRP-0GBYFhgCnngqWrxKLHN34E7U9CtpyQzhdonGkKDvig4pTg4"
                            alt="Investment Growth Visualization"
                            className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-6">
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Desempenho do Investimento</h3>
                            <p className="text-slate-200 text-sm">Visualização do crescimento de juros compostos</p>
                        </div>
                    </div>

                    {/* Transactions */}
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl overflow-hidden flex-1">
                        <div className="p-6 border-b border-gray-200 dark:border-border-dark flex flex-wrap justify-between items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-100 dark:bg-[#111a22] p-2 rounded-lg text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined">history</span>
                                </div>
                                <h2 className="text-slate-900 dark:text-white text-lg font-bold">Histórico de Transações</h2>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-transparent border border-gray-300 dark:border-border-dark text-slate-700 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#111a22] transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                                    Exportar
                                </button>
                                <button className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                                    Registrar Pagamento
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-[#15202b] border-b border-gray-200 dark:border-border-dark">
                                        <th className="p-4 text-xs font-semibold tracking-wide text-gray-500 dark:text-text-secondary uppercase">Data</th>
                                        <th className="p-4 text-xs font-semibold tracking-wide text-gray-500 dark:text-text-secondary uppercase">Tipo</th>
                                        <th className="p-4 text-xs font-semibold tracking-wide text-gray-500 dark:text-text-secondary uppercase">Valor Pago</th>
                                        <th className="p-4 text-xs font-semibold tracking-wide text-gray-500 dark:text-text-secondary uppercase">Saldo Restante</th>
                                        <th className="p-4 text-xs font-semibold tracking-wide text-gray-500 dark:text-text-secondary uppercase text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-border-dark">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-[#111a22]/50 transition-colors">
                                        <td className="p-4 text-sm text-gray-700 dark:text-gray-300 font-medium">10 Fev 2024</td>
                                        <td className="p-4 text-sm text-gray-700 dark:text-gray-300">Parcela Mensal</td>
                                        <td className="p-4 text-sm text-slate-900 dark:text-white font-mono font-bold">R$ 1.250,00</td>
                                        <td className="p-4 text-sm text-gray-500 dark:text-text-secondary font-mono">R$ 61.250,00</td>
                                        <td className="p-4 text-right">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">Confirmado</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-[#111a22]/50 transition-colors">
                                        <td className="p-4 text-sm text-gray-700 dark:text-gray-300 font-medium">10 Mar 2024</td>
                                        <td className="p-4 text-sm text-gray-700 dark:text-gray-300">Parcela Mensal</td>
                                        <td className="p-4 text-sm text-slate-900 dark:text-white font-mono font-bold">R$ 0,00</td>
                                        <td className="p-4 text-sm text-gray-500 dark:text-text-secondary font-mono">R$ 62.500,00</td>
                                        <td className="p-4 text-right">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20">Não Pago</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-[#111a22]/50 transition-colors">
                                        <td className="p-4 text-sm text-gray-700 dark:text-gray-300 font-medium">10 Abr 2024</td>
                                        <td className="p-4 text-sm text-gray-700 dark:text-gray-300">Parcela Mensal</td>
                                        <td className="p-4 text-sm text-slate-900 dark:text-white font-mono font-bold">--</td>
                                        <td className="p-4 text-sm text-gray-500 dark:text-text-secondary font-mono">--</td>
                                        <td className="p-4 text-right">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">Pendente</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentDetails;