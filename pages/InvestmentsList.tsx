import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Investment {
    id: string;
    clientName: string;
    date: string;
    principal: string;
    rate: string;
    status: string;
}

const InvestmentsList: React.FC = () => {
    const [investments, setInvestments] = useState<Investment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "investments"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const investmentsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Investment[];
            setInvestments(investmentsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col max-w-[1440px] w-full mx-auto p-4 md:p-8 gap-6 justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                <p className="text-text-secondary">Carregando investimentos...</p>
            </div>
        );
    }

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

            {investments.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 bg-surface-light dark:bg-surface-dark border border-dashed border-gray-300 dark:border-border-dark rounded-xl h-64 text-center">
                    <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">savings</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Nenhum investimento encontrado</h3>
                    <p className="text-text-secondary text-sm mt-1">Clique em "Novo Investimento" para começar.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {investments.map((investment) => {
                        // Safe formatting for currency
                        const valueFormatted = parseFloat(investment.principal?.replace(',', '.') || '0').toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                        const isLate = false; // Mock logic, could be based on date

                        return (
                            <Link key={investment.id} to={`/investments/${investment.id}`} className="flex flex-col bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6 hover:shadow-md transition-all hover:border-primary/50 group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${isLate ? 'bg-red-500' : 'bg-primary'}`}>
                                            <span className="material-symbols-outlined">{isLate ? 'warning' : 'trending_up'}</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{investment.clientName || 'Novo Cliente'}</p>
                                            <p className="text-xs text-slate-500 mt-1">{investment.date ? new Date(investment.date).toLocaleDateString('pt-BR') : 'Data n/a'}</p>
                                        </div>
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${isLate ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'}`}>
                                        {isLate ? 'Atrasado' : 'Em dia'}
                                    </span>
                                </div>
                                <div className="mt-auto">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Valor Principal</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">{valueFormatted}</p>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                        <div className={`h-full rounded-full ${isLate ? 'bg-red-500' : 'bg-primary'}`} style={{ width: `${Math.random() * 80 + 10}%` }}></div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 text-right">Progresso do Pagamento</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default InvestmentsList;