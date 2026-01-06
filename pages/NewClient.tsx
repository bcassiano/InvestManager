import React from 'react';
import { Link } from 'react-router-dom';

const NewClient: React.FC = () => {
    return (
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex mb-6">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link to="/" className="text-text-secondary-light dark:text-text-secondary hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">Dashboard</Link>
                    </li>
                    <li><span className="text-text-secondary-light dark:text-text-secondary/50 text-sm">/</span></li>
                    <li>
                        <a href="#" className="text-text-secondary-light dark:text-text-secondary hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">Clientes</a>
                    </li>
                    <li><span className="text-text-secondary-light dark:text-text-secondary/50 text-sm">/</span></li>
                    <li><span aria-current="page" className="text-slate-900 dark:text-white text-sm font-medium">Novo Cliente</span></li>
                </ol>
            </nav>

            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Cadastro de Cliente</h1>
                    <p className="text-text-secondary-light dark:text-text-secondary text-base">Preencha os dados abaixo para registrar um novo investidor.</p>
                </div>
                <div className="flex gap-3">
                    <Link to="/" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-white bg-white dark:bg-transparent border border-border-light dark:border-border-dark rounded-lg hover:bg-gray-50 dark:hover:bg-[#1e2a36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                        Cancelar
                    </Link>
                </div>
            </div>

            {/* Form Container */}
            <form className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
                {/* Section 1: Dados Pessoais */}
                <div className="p-6 md:p-8 border-b border-border-light dark:border-border-dark">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary">person</span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Dados Pessoais</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-6">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="full-name">Nome Completo <span className="text-primary">*</span></label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="full-name" placeholder="Ex: João da Silva" type="text"/>
                        </div>
                        <div className="lg:col-span-3">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="document-id">CPF / CNPJ <span className="text-primary">*</span></label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="document-id" placeholder="000.000.000-00" type="text"/>
                        </div>
                        <div className="lg:col-span-3">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="birth-date">Data de Nascimento</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4 [color-scheme:light] dark:[color-scheme:dark]" id="birth-date" type="date"/>
                        </div>
                    </div>
                </div>

                {/* Section 2: Contato */}
                <div className="p-6 md:p-8 border-b border-border-light dark:border-border-dark">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary">contacts</span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contato</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-6">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="email">E-mail <span className="text-primary">*</span></label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary-light dark:text-text-secondary">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </div>
                                <input className="w-full h-12 pl-10 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="email" placeholder="cliente@email.com" type="email"/>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="phone">Telefone / WhatsApp <span className="text-primary">*</span></label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary-light dark:text-text-secondary">
                                    <span className="material-symbols-outlined text-[20px]">call</span>
                                </div>
                                <input className="w-full h-12 pl-10 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="phone" placeholder="(00) 00000-0000" type="tel"/>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="zip">CEP</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="zip" placeholder="00000-000" type="text"/>
                        </div>
                        <div className="lg:col-span-7">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="street">Logradouro</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="street" placeholder="Rua, Avenida..." type="text"/>
                        </div>
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="number">Número</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="number" placeholder="123" type="text"/>
                        </div>
                        <div className="lg:col-span-5">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="district">Bairro</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="district" placeholder="Centro" type="text"/>
                        </div>
                        <div className="lg:col-span-5">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="city">Cidade</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="city" placeholder="São Paulo" type="text"/>
                        </div>
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="state">UF</label>
                            <select className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="state">
                                <option value="">--</option>
                                <option value="SP">SP</option>
                                <option value="RJ">RJ</option>
                                <option value="MG">MG</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Section 3: Dados Bancários */}
                <div className="p-6 md:p-8 border-b border-border-light dark:border-border-dark">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary">account_balance</span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Dados Bancários (Opcional)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="bank">Banco</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="bank" placeholder="Ex: Nubank" type="text"/>
                        </div>
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="agency">Agência</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="agency" placeholder="0001" type="text"/>
                        </div>
                        <div className="lg:col-span-3">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="account">Conta</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="account" placeholder="0000000-0" type="text"/>
                        </div>
                        <div className="lg:col-span-3">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="pix">Chave PIX</label>
                            <input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-[#111a22] text-slate-900 dark:text-white placeholder-text-secondary-light dark:placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4" id="pix" placeholder="CPF/Email/Tel" type="text"/>
                        </div>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="p-6 md:p-8 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row sm:justify-end gap-4 bg-surface-light dark:bg-surface-dark">
                    <button className="w-full sm:w-auto px-6 py-3 text-base font-medium text-slate-700 dark:text-white bg-transparent border border-border-light dark:border-border-dark rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e2a36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors" type="button">
                        Salvar e Adicionar Outro
                    </button>
                    <button className="w-full sm:w-auto px-8 py-3 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-primary/25 transition-all flex justify-center items-center gap-2" type="submit">
                        <span className="material-symbols-outlined text-[20px]">save</span>
                        Salvar Cliente
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewClient;