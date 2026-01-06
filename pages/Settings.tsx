import React from 'react';

const Settings: React.FC = () => {
    return (
        <div className="mx-auto max-w-5xl flex flex-col gap-8 pb-10 p-4 lg:p-10">
            {/* Page Heading */}
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">Configurações de Alertas</h1>
                <p className="text-text-secondary-light dark:text-text-secondary text-base font-normal leading-normal max-w-2xl">
                    Gerencie como você é notificado sobre pagamentos pendentes, recebidos e vencimentos de contratos. 
                    Mantenha-se atualizado sem sobrecarregar sua caixa de entrada.
                </p>
            </div>

            {/* Channel Settings */}
            <section className="flex flex-col gap-4">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Canais de Comunicação</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* WhatsApp Card */}
                    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                                    <span className="material-symbols-outlined">chat</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-slate-900 dark:text-white">WhatsApp</p>
                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary">Alertas instantâneos</p>
                                </div>
                            </div>
                            <label className="relative flex h-[24px] w-[44px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-[#233648] p-0.5 has-[:checked]:bg-primary transition-colors">
                                <input defaultChecked className="peer invisible absolute" type="checkbox"/>
                                <div className="h-[20px] w-[20px] rounded-full bg-white shadow-sm transition-all peer-checked:translate-x-[20px]"></div>
                            </label>
                        </div>
                        <div className="mt-2">
                            <label className="mb-2 block text-xs font-medium text-text-secondary-light dark:text-text-secondary uppercase tracking-wider">Número Cadastrado</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 text-text-secondary-light dark:text-text-secondary material-symbols-outlined text-[20px]">smartphone</span>
                                <input className="w-full rounded-lg border border-gray-300 dark:border-border-dark bg-gray-50 dark:bg-[#101922] py-2.5 pl-10 pr-3 text-sm text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder-text-secondary/50" type="text" defaultValue="+55 11 99999-8888"/>
                            </div>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-slate-900 dark:text-white">E-mail</p>
                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary">Resumos detalhados</p>
                                </div>
                            </div>
                            <label className="relative flex h-[24px] w-[44px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-[#233648] p-0.5 has-[:checked]:bg-primary transition-colors">
                                <input defaultChecked className="peer invisible absolute" type="checkbox"/>
                                <div className="h-[20px] w-[20px] rounded-full bg-white shadow-sm transition-all peer-checked:translate-x-[20px]"></div>
                            </label>
                        </div>
                        <div className="mt-2">
                            <label className="mb-2 block text-xs font-medium text-text-secondary-light dark:text-text-secondary uppercase tracking-wider">Endereço de E-mail</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 text-text-secondary-light dark:text-text-secondary material-symbols-outlined text-[20px]">alternate_email</span>
                                <input className="w-full rounded-lg border border-gray-300 dark:border-border-dark bg-gray-50 dark:bg-[#101922] py-2.5 pl-10 pr-3 text-sm text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder-text-secondary/50" type="email" defaultValue="roberto.silva@investmanager.com"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequency */}
            <section className="flex flex-col gap-4">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Frequência e Horário</h2>
                <div className="rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6">
                    <p className="mb-4 text-sm text-text-secondary-light dark:text-text-secondary">Com que frequência você deseja receber o resumo de movimentações?</p>
                    <div className="space-y-4">
                        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 dark:border-border-dark/50 bg-gray-50 dark:bg-[#101922] p-4 transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                            <input className="h-5 w-5 border-gray-300 dark:border-border-dark bg-white dark:bg-[#233648] text-primary focus:ring-primary focus:ring-offset-gray-50 dark:focus:ring-offset-[#111a22]" name="frequency" type="radio"/>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-white">Tempo Real</span>
                                <span className="text-xs text-text-secondary-light dark:text-text-secondary">Receba uma notificação assim que um evento ocorrer.</span>
                            </div>
                        </label>
                        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 dark:border-border-dark/50 bg-gray-50 dark:bg-[#101922] p-4 transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                            <input defaultChecked className="h-5 w-5 border-gray-300 dark:border-border-dark bg-white dark:bg-[#233648] text-primary focus:ring-primary focus:ring-offset-gray-50 dark:focus:ring-offset-[#111a22]" name="frequency" type="radio"/>
                            <div className="flex flex-1 items-center justify-between gap-4 flex-wrap">
                                <div className="flex flex-col">
                                    <span className="font-medium text-slate-900 dark:text-white">Diário</span>
                                    <span className="text-xs text-text-secondary-light dark:text-text-secondary">Um resumo único todos os dias.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-text-secondary-light dark:text-text-secondary">Horário:</span>
                                    <input className="rounded border border-gray-300 dark:border-border-dark bg-white dark:bg-[#233648] p-1 text-sm text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" type="time" defaultValue="09:00"/>
                                </div>
                            </div>
                        </label>
                        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 dark:border-border-dark/50 bg-gray-50 dark:bg-[#101922] p-4 transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                            <input className="h-5 w-5 border-gray-300 dark:border-border-dark bg-white dark:bg-[#233648] text-primary focus:ring-primary focus:ring-offset-gray-50 dark:focus:ring-offset-[#111a22]" name="frequency" type="radio"/>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-white">Semanal</span>
                                <span className="text-xs text-text-secondary-light dark:text-text-secondary">Um relatório completo toda segunda-feira.</span>
                            </div>
                        </label>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Settings;