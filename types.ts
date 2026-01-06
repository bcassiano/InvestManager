export interface KPICardProps {
    title: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
    trendLabel?: string;
    icon: string;
    iconColorClass?: string;
    isCritical?: boolean;
    criticalCount?: number;
}

export interface Client {
    id: string;
    initials: string;
    initialsColor: string;
    name: string;
    invoiceId: string;
    dueDate: string;
    amount: string;
    interest: string;
    status: 'Pendente' | 'Agendado' | 'Pago';
}

export interface Transaction {
    date: string;
    type: string;
    amount: string;
    remaining: string;
    status: 'Confirmado' | 'Não Pago' | 'Pendente';
}

export interface AlertChannel {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    icon: string;
    iconBgClass: string;
    iconColorClass: string;
    inputLabel: string;
    inputValue: string;
    inputType: string;
}
