import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Sidebar: React.FC = () => {
    const location = useLocation();
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    
    const isActive = (path: string) => {
        return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const navItems = [
        { path: '/', icon: 'dashboard', label: 'Dashboard' },
        { path: '/clients', icon: 'group', label: 'Clientes' },
        { path: '/investments', icon: 'payments', label: 'Investimentos' },
        { path: '/reports', icon: 'monitoring', label: 'Relatórios' },
        { path: '/settings', icon: 'settings', label: 'Configurações' },
    ];

    return (
        <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200 dark:border-border-dark bg-surface-light dark:bg-surface-darker">
            <div className="flex h-full flex-col justify-between p-4">
                <div className="flex flex-col gap-6">
                    {/* Branding */}
                    <div className="flex flex-col px-3 pt-2">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white">
                                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                            </div>
                            <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">InvestManager</h1>
                        </div>
                        <p className="text-slate-500 dark:text-text-secondary text-xs font-medium pl-10">Gestão de Ativos</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                                    isActive(item.path)
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#233648] hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                <span 
                                    className={`material-symbols-outlined ${isActive(item.path) ? 'material-symbols-filled' : ''}`}
                                >
                                    {item.icon}
                                </span>
                                <p className={`text-sm leading-normal ${isActive(item.path) ? 'font-bold' : 'font-medium'}`}>
                                    {item.label}
                                </p>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* User Profile */}
                <div className="flex items-center justify-between px-3 py-3 border-t border-slate-200 dark:border-border-dark mt-auto bg-slate-50 dark:bg-[#111a22] rounded-xl">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-9 h-9 min-w-9 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden relative flex items-center justify-center text-slate-500 dark:text-slate-400">
                             <span className="material-symbols-outlined text-[20px]">person</span>
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <p className="text-slate-900 dark:text-white text-sm font-bold truncate w-32">
                                {currentUser?.email?.split('@')[0] || 'Usuário'}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-xs truncate w-32">
                                {currentUser?.email || 'user@email.com'}
                            </p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors" title="Sair">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;