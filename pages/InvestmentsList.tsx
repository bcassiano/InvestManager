import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentsList: React.FC = () => {
    return (
        <div className="flex flex-col max-w-[1440px] w-full mx-auto p-4 md:p-8 gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                 <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Investimentos</h1>
                    <p className="text-slate-500 dark:text-text-secondary text-base">Acompanhe o desempenho da sua carteira.</p>
                 </div>
                 <Link to="/investments/new" className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Novo Investimento
                 </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Link key={i} to={`/investments/2024-00${i}`} className="flex flex-col bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6 hover:shadow-md transition-all hover:border-primary/50 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${i === 3 ? 'bg-red-500' : 'bg-primary'}`}>
                                    <span className="material-symbols-outlined">{i === 3 ? 'warning' : 'trending_up'}</span>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">Empresa Exemplo {i}</p>
                                    <p className="text-xs text-slate-500">Contrato #2024-00{i}</p>
                                </div>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${i === 3 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'}`}>
                                {i === 3 ? 'Atrasado' : 'Em dia'}
                            </span>
                        </div>
                        <div className="mt-auto">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Valor Principal</p>
                            <p className="text-2xl font-black text-slate-900 dark:text-white">R$ {(50000 * i).toLocaleString('pt-BR')},00</p>
                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                <div className={`h-full rounded-full ${i === 3 ? 'bg-red-500' : 'bg-primary'}`} style={{ width: `${Math.random() * 80 + 10}%` }}></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-right">Progresso do Pagamento</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default InvestmentsList;