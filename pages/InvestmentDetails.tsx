import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const InvestmentDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Form States
    const [clientName, setClientName] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');

    useEffect(() => {
        const fetchInvestment = async () => {
            if (id && id !== 'new') {
                setLoading(true);
                try {
                    const docRef = doc(db, "investments", id);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setClientName(data.clientName || '');
                        setDate(data.date || '');
                        setPrincipal(data.principal || '');
                        setRate(data.rate || '');
                    }
                } catch (error) {
                    console.error("Error fetching document:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchInvestment();
    }, [id]);

    const handleSave = async () => {
        setLoading(true);
        try {
            const investmentData = {
                clientName,
                date,
                principal,
                rate,
                status: 'active', // Default status
                createdAt: new Date().toISOString()
            };

            if (id === 'new') {
                await addDoc(collection(db, "investments"), investmentData);
            } else if (id) {
                const docRef = doc(db, "investments", id);
                await updateDoc(docRef, investmentData);
            }

            navigate('/investments'); // Redirect to list after save
        } catch (error) {
            console.error("Error saving document:", error);
            alert("Erro ao salvar informações");
        } finally {
            setLoading(false);
        }
    };

    // Calculate preview based on inputs
    const principalVal = parseFloat(principal.replace(',', '.') || '0');
    const rateVal = parseFloat(rate.replace(',', '.') || '0');
    // Simple verification calc (mock) for display purposes if wanted, or just keep hardcoded for now
    // For now we focused on INPUT fields.

    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
            {/* Breadcrumbs */}
            <nav className="flex text-sm font-medium">
                <ol className="flex flex-wrap items-center gap-2">
                    <li><Link to="/" className="text-text-secondary hover:text-primary transition-colors">Início</Link></li>
                    <li className="text-text-secondary">/</li>
                    <li><Link to="/investments" className="text-text-secondary hover:text-primary transition-colors">Investimentos</Link></li>
                    <li className="text-text-secondary">/</li>
                    <li className="text-slate-900 dark:text-white text-opacity-90">{id === 'new' ? 'Novo Investimento' : `#${id}`}</li>
                </ol>
            </nav>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-200 dark:border-border-dark pb-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {id === 'new' ? 'Novo Contrato' : 'Detalhes do Contrato'}
                    </h1>
                    <p className="text-text-secondary text-base">Gerencie os dados financeiros e o histórico de pagamentos.</p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Edit Form */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-border-dark flex justify-between items-center">
                            <h2 className="text-slate-900 dark:text-white text-lg font-bold">Dados do Contrato</h2>
                        </div>
                        <form className="p-6 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Cliente / Empresa</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined" style={{ fontSize: '20px' }}>business</span>
                                    <input
                                        className="w-full bg-gray-50 dark:bg-[#111a22] border border-gray-300 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-500"
                                        placeholder="Nome do cliente"
                                        type="text"
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Data do Empréstimo</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined" style={{ fontSize: '20px' }}>calendar_today</span>
                                    <input
                                        className="w-full bg-gray-50 dark:bg-[#111a22] border border-gray-300 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all [color-scheme:light] dark:[color-scheme:dark]"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Valor Principal</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">R$</span>
                                    <input
                                        className="w-full bg-gray-50 dark:bg-[#111a22] border border-gray-300 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-slate-900 dark:text-white font-mono focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        type="text"
                                        value={principal}
                                        onChange={(e) => setPrincipal(e.target.value)}
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Taxa de Juros (Mensal)</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined" style={{ fontSize: '20px' }}>percent</span>
                                    <input
                                        className="w-full bg-gray-50 dark:bg-[#111a22] border border-gray-300 dark:border-border-dark rounded-lg py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(e.target.value)}
                                        placeholder="0.0"
                                    />
                                </div>
                            </div>

                            <button
                                className="mt-2 w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="button"
                                onClick={handleSave}
                                disabled={loading}
                            >
                                <span className="material-symbols-outlined">save</span>
                                {loading ? 'Salvando...' : 'Salvar Alterações'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column: Placeholder for now as we focus on saving data */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl p-8 flex flex-col items-center justify-center text-center text-text-secondary gap-4 min-h-[400px]">
                        <span className="material-symbols-outlined text-6xl opacity-20">analytics</span>
                        <p>Gráficos e Histórico estarão disponíveis após salvar o investimento.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentDetails;