'use client';

import { useState } from 'react';
import { Play, Pause, Trash2, Eye, Edit, Copy, Plus } from 'lucide-react';

export default function N8NTab() {
  const [workflows] = useState([
    { id: 1, name: 'Email Notifications', active: true, executions: 234, lastRun: '5 min ago' },
    { id: 2, name: 'Data Sync', active: true, executions: 156, lastRun: '15 min ago' },
    { id: 3, name: 'Report Generation', active: false, executions: 89, lastRun: '2 hours ago' },
    { id: 4, name: 'WhatsApp Auto-Reply', active: true, executions: 512, lastRun: '1 min ago' },
    { id: 5, name: 'Database Cleanup', active: true, executions: 12, lastRun: '1 day ago' },
  ]);

  const [selectedWorkflow, setSelectedWorkflow] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Header with Action Buttons */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">N8N Workflows</h2>
          <p className="text-gray-400">Verwalten und überwachen Sie Ihre Automatisierungen</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <Plus size={18} />
          Neuer Workflow
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <p className="text-sm text-gray-400 mb-1">Gesamt Workflows</p>
          <p className="text-3xl font-bold text-white">116</p>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <p className="text-sm text-gray-400 mb-1">Aktiv</p>
          <p className="text-3xl font-bold text-green-400">98</p>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <p className="text-sm text-gray-400 mb-1">Inaktiv</p>
          <p className="text-3xl font-bold text-orange-400">18</p>
        </div>
      </div>

      {/* Workflows List */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Executions</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Letzte Ausführung</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Aktionen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {workflows.map((workflow) => (
                <tr key={workflow.id} className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{workflow.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      workflow.active 
                        ? 'bg-green-900 text-green-300' 
                        : 'bg-gray-800 text-gray-400'
                    }`}>
                      {workflow.active ? '● Aktiv' : '○ Inaktiv'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{workflow.executions}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{workflow.lastRun}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-800 rounded transition-colors" title="Bearbeiten">
                        <Edit size={16} className="text-blue-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-800 rounded transition-colors" title="Ausführen">
                        <Play size={16} className="text-green-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-800 rounded transition-colors" title="Anzeigen">
                        <Eye size={16} className="text-purple-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Import Export */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg p-4 transition-colors text-left">
          <p className="font-semibold text-white mb-1">Workflows Exportieren</p>
          <p className="text-sm text-gray-400">Laden Sie alle Workflows als JSON herunter</p>
        </button>
        <button className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg p-4 transition-colors text-left">
          <p className="font-semibold text-white mb-1">Workflows Importieren</p>
          <p className="text-sm text-gray-400">Laden Sie Workflows aus einer JSON-Datei hoch</p>
        </button>
      </div>
    </div>
  );
}
