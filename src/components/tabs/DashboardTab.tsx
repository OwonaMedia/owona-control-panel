'use client';

import { BarChart3, TrendingUp, Activity, Clock } from 'lucide-react';
import StatCard from '@/components/StatCard';

interface DashboardTabProps {
  stats: {
    workflows: number;
    syncStatus: string;
    serverStatus: string;
    lastSync: string | null;
  };
}

export default function DashboardTab({ stats }: DashboardTabProps) {
  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          icon={<BarChart3 size={24} className="text-blue-400" />}
          label="Workflows"
          value="116"
          change="+2 heute"
        />
        <StatCard
          icon={<Activity size={24} className="text-green-400" />}
          label="Sync Status"
          value="Aktiv"
          change="Letzter: vor 5 min"
        />
        <StatCard
          icon={<TrendingUp size={24} className="text-purple-400" />}
          label="N8N Cloud"
          value="Online"
          change="✓ Verbunden"
        />
        <StatCard
          icon={<Clock size={24} className="text-orange-400" />}
          label="Server"
          value="Online"
          change="✓ Verfügbar"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* N8N Status */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">N8N Cloud Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">API Status</span>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">● Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Workflows</span>
              <span className="font-semibold text-white">116/116</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Credentials</span>
              <span className="font-semibold text-white">42</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Executions</span>
              <span className="font-semibold text-white">663</span>
            </div>
          </div>
        </div>

        {/* Sync Status */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Synchronisation</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Status</span>
              <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">● Aktiv</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Interval</span>
              <span className="font-semibold text-white">30 Minuten</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Letzte Sync</span>
              <span className="font-semibold text-white">vor 5 min</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Lokal synced</span>
              <span className="font-semibold text-white">102/116</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">System Information</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-gray-400 mb-1">Backup Größe</p>
            <p className="text-lg font-semibold text-white">14.1 MB</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Workflows Backup</p>
            <p className="text-lg font-semibold text-white">116</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">DB Records</p>
            <p className="text-lg font-semibold text-white">4,342</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Uptime</p>
            <p className="text-lg font-semibold text-white">45d 12h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
