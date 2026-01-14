'use client';

import { useState } from 'react';
import { Activity, Zap, CheckCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react';

export default function SyncTab() {
  const [syncHistory] = useState([
    { id: 1, time: '14:30:00', status: 'success', workflows: 116, duration: '23s' },
    { id: 2, time: '14:00:00', status: 'success', workflows: 116, duration: '21s' },
    { id: 3, time: '13:30:00', status: 'success', workflows: 116, duration: '25s' },
    { id: 4, time: '13:00:00', status: 'success', workflows: 116, duration: '22s' },
    { id: 5, time: '12:30:00', status: 'success', workflows: 116, duration: '24s' },
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Workflow Synchronisation</h2>
        <p className="text-gray-400">Verwalten Sie die Synchronisierung zwischen N8N Cloud und Server</p>
      </div>

      {/* Current Sync Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 border border-green-800/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Sync Status</h3>
            <CheckCircle className="text-green-400" size={24} />
          </div>
          <p className="text-3xl font-bold text-green-400 mb-2">Aktiv</p>
          <p className="text-sm text-gray-400">Nächste Sync: in 22 Minuten</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-800/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Workflows</h3>
            <TrendingUp className="text-blue-400" size={24} />
          </div>
          <p className="text-3xl font-bold text-blue-400 mb-2">102/116</p>
          <p className="text-sm text-gray-400">Lokal synchronisiert</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-800/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Interval</h3>
            <Clock className="text-purple-400" size={24} />
          </div>
          <p className="text-3xl font-bold text-purple-400 mb-2">30 Min</p>
          <p className="text-sm text-gray-400">Automatische Synchronisierung</p>
        </div>
      </div>

      {/* Sync Configuration */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Sync Konfiguration</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-white">Automatische Synchronisierung</p>
              <p className="text-sm text-gray-400">Workflows automatisch alle 30 Minuten synchronisieren</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
          <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-white">Change Detection</p>
              <p className="text-sm text-gray-400">Nur geänderte Workflows synchronisieren</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
          <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-white">Server Upload</p>
              <p className="text-sm text-gray-400">Workflows nach Synchronisierung zum Server hochladen</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Sync History */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-lg font-semibold text-white">Synchronisierungsverlauf</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Zeit</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Workflows</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Dauer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {syncHistory.map((sync) => (
                <tr key={sync.id} className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-white">{sync.time}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                      <CheckCircle size={14} />
                      Erfolgreich
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{sync.workflows}</td>
                  <td className="px-6 py-4 text-gray-400">{sync.duration}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Anzeigen</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Sync */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Manuelle Synchronisierung</h3>
        <p className="text-gray-400 mb-4">Starten Sie eine Synchronisierung sofort</p>
        <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium">
          <Zap size={18} />
          Jetzt Synchronisieren
        </button>
      </div>
    </div>
  );
}
