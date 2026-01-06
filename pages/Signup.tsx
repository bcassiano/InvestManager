import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError('As senhas não coincidem.');
        }
        
        try {
            setError('');
            setLoading(true);
            await signup(email, password);
            navigate('/');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                setError('Este e-mail já está em uso.');
            } else if (err.code === 'auth/weak-password') {
                setError('A senha deve ter pelo menos 6 caracteres.');
            } else {
                setError('Falha ao criar conta. Tente novamente.');
            }
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
            <div className="max-w-md w-full bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-slate-200 dark:border-border-dark overflow-hidden">
                <div className="p-8">
                    <div className="flex flex-col items-center mb-8 gap-2">
                         <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                            <span className="material-symbols-outlined text-[28px]">person_add</span>
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Criar Conta</h2>
                        <p className="text-slate-500 dark:text-text-secondary text-center text-sm">Comece a gerenciar seus investimentos hoje</p>
                    </div>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm" role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-white" htmlFor="email">E-mail</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">mail</span>
                                <input 
                                    className="w-full h-11 pl-10 rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                                    id="email" 
                                    type="email" 
                                    placeholder="seu@email.com" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-white" htmlFor="password">Senha</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">lock</span>
                                <input 
                                    className="w-full h-11 pl-10 rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                                    id="password" 
                                    type="password" 
                                    placeholder="••••••••" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-white" htmlFor="confirm-password">Confirmar Senha</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">lock_reset</span>
                                <input 
                                    className="w-full h-11 pl-10 rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                                    id="confirm-password" 
                                    type="password" 
                                    placeholder="••••••••" 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="mt-2 w-full h-11 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                            ) : (
                                <>
                                    <span>Criar Conta</span>
                                    <span className="material-symbols-outlined">check_circle</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-500 dark:text-text-secondary">
                            Já tem uma conta? <Link to="/login" className="font-bold text-primary hover:text-primary-hover">Fazer Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;