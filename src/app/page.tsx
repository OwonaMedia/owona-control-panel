'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Settings, Workflow, Server, MessageCircle, Activity, Clock, Database, Zap } from 'lucide-react';
import DashboardTab from '@/components/tabs/DashboardTab';
import N8NTab from '@/components/tabs/N8NTab';
import ServerTab from '@/components/tabs/ServerTab';
import SyncTab from '@/components/tabs/SyncTab';
import WhatsAppTab from '@/components/tabs/WhatsAppTab';
import SettingsTab from '@/components/tabs/SettingsTab';

type TabType = 'dashboard' | 'n8n' | 'server' | 'sync' | 'whatsapp' | 'settings';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [stats, setStats] = useState({
    workflows: 0,
    syncStatus: 'idle',
    serverStatus: 'unknown',
    lastSync: null,
  });

  useEffect(() => {
    // Fetch stats on mount
    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const tabs: Array<{ id: TabType; label: string; icon: React.ReactNode }> = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={18} /> },
    { id: 'n8n', label: 'N8N', icon: <Workflow size={18} /> },
    { id: 'server', label: 'Server', icon: <Server size={18} /> },
    { id: 'sync', label: 'Synchronisation', icon: <Activity size={18} /> },
    { id: 'whatsapp', label: 'WhatsApp', icon: <MessageCircle size={18} /> },
    { id: 'settings', label: 'Einstellungen', icon: <Settings size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">OWONA Panel</h1>
              <p className="text-xs text-gray-400">Unified Control Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-400">Status</p>
              <p className="text-sm font-semibold text-green-400">● Online</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && <DashboardTab stats={stats} />}
        {activeTab === 'n8n' && <N8NTab />}
        {activeTab === 'server' && <ServerTab />}
        {activeTab === 'sync' && <SyncTab />}
        {activeTab === 'whatsapp' && <WhatsAppTab />}
        {activeTab === 'settings' && <SettingsTab />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          <p>© 2026 OWONA Media. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
