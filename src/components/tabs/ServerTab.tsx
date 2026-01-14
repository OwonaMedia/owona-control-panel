'use client';

import { Server, Cpu, HardDrive, Network, Zap, AlertCircle } from 'lucide-react';

export default function ServerTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Server Management</h2>
        <p className="text-gray-400">Verwalten Sie Ihren Produktionsserver</p>
      </div>

      {/* Server Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 border border-green-800/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Server Status</h3>
            <Server className="text-green-400" size={24} />
          </div>
          <p className="text-sm text-gray-300 mb-4">173.249.2.158</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Status</span>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">● Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Uptime</span>
              <span className="font-semibold text-green-300">45 Tage, 12h</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">OS</span>
              <span className="font-semibold text-white">Linux</span>
            </div>
          </div>
        </div>

        {/* System Resources */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-800/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">System Resources</h3>
            <Zap className="text-blue-400" size={24} />
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-400">CPU</span>
                <span className="text-sm font-semibold text-blue-300">45%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-400">RAM</span>
                <span className="text-sm font-semibold text-green-300">62%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-400">Disk</span>
                <span className="text-sm font-semibold text-orange-300">38%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center gap-3 mb-3">
            <Cpu size={20} className="text-blue-400" />
            <p className="text-sm text-gray-400">Prozessoren</p>
          </div>
          <p className="text-2xl font-bold text-white">4</p>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center gap-3 mb-3">
            <HardDrive size={20} className="text-green-400" />
            <p className="text-sm text-gray-400">RAM</p>
          </div>
          <p className="text-2xl font-bold text-white">16 GB</p>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center gap-3 mb-3">
            <Network size={20} className="text-purple-400" />
            <p className="text-sm text-gray-400">Bandbreite</p>
          </div>
          <p className="text-2xl font-bold text-white">500 MB/s</p>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center gap-3 mb-3">
            <HardDrive size={20} className="text-orange-400" />
            <p className="text-sm text-gray-400">Speicher</p>
          </div>
          <p className="text-2xl font-bold text-white">500 GB</p>
        </div>
      </div>

      {/* Backup & Maintenance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Backup Information</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Letzte Sicherung</span>
              <span className="font-semibold text-white">vor 2 Stunden</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Backup Größe</span>
              <span className="font-semibold text-white">14.1 MB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Backup Ort</span>
              <span className="font-semibold text-white">/root/supabase-complete-backup/</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Backup Erstellen
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">N8N</span>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">● Läuft</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">PostgreSQL</span>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">● Läuft</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Redis</span>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">● Läuft</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Services Verwalten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
