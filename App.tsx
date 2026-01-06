import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import NewClient from './pages/NewClient';
import ClientsList from './pages/ClientsList';
import InvestmentDetails from './pages/InvestmentDetails';
import InvestmentsList from './pages/InvestmentsList';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Protected Route Component
const PrivateRoute = ({ children }: { children?: React.ReactNode }) => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-background-light dark:bg-background-dark">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Protected Routes */}
                    <Route path="/" element={
                        <PrivateRoute>
                            <Layout />
                        </PrivateRoute>
                    }>
                        <Route index element={<Dashboard />} />
                        <Route path="clients" element={<ClientsList />} />
                        <Route path="clients/new" element={<NewClient />} />
                        <Route path="investments" element={<InvestmentsList />} />
                        <Route path="investments/:id" element={<InvestmentDetails />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="settings" element={<Settings />} />
                        {/* Fallback for generic paths */}
                        <Route path="*" element={<Dashboard />} />
                    </Route>
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
};

export default App;