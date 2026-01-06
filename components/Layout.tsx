import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />
            
            <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between p-4 bg-surface-light dark:bg-surface-darker border-b border-slate-200 dark:border-border-dark">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">InvestManager</span>
                    </div>
                    <button className="text-slate-500">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Page Content */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;