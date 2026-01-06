import React from 'react';
import { Link } from 'react-router-dom';

const ClientsList: React.FC = () => {
    const clients = [
        { id: 1, name: 'João Lima ME', email: 'joao@lima.com', phone: '(11) 99999-0000', status: 'Ativo' },
        { id: 2, name: 'AgroTech Sul', email: 'contato@agrotech.com', phone: '(51) 98888-1111', status: 'Ativo' },
        { id: 3, name: 'Empresa XYZ Ltda', email: 'financeiro@xyz.com', phone: '(21) 97777-2222', status: 'Inadimplente' },
        { id: 4, name: 'TechSolutions S.A.', email: 'admin@techsolutions.com', phone: '(31) 96666-3333', status: 'Ativo' },
        { id: 5, name: 'Padaria Central', email: 'padaria@central.com.br', phone: '(11) 3333-4444', status: 'Pendente' },
    ];

    return (
        <div className="flex flex-col max-w-[1440px] w-full mx-auto p-4 md:p-8 gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                 <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Clientes</h1>
                    <p className="text-slate-500 dark:text-text-secondary text-base">Gerencie sua base de clientes e investidores.</p>
                 </div>
                 <Link to="/clients/new" className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Novo Cliente
                 </Link>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 dark:bg-[#15202b] border-b border-slate-200 dark:border-border-dark">
                            <tr>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Nome / Empresa</th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Contato</th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {clients.map((client) => (
                                <tr key={client.id} className="hover:bg-slate-50 dark:hover:bg-[#233648]/30 transition-colors group">
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900 dark:text-white">{client.name}</span>
                                            <span className="text-xs text-slate-500">ID: #{client.id.toString().padStart(4, '0')}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col text-sm">
                                            <span className="text-slate-700 dark:text-slate-300">{client.email}</span>
                                            <span className="text-slate-500 text-xs">{client.phone}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            client.status === 'Ativo' 
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                            : client.status === 'Inadimplente'
                                            ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                            : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                                        }`}>
                                            {client.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ClientsList;