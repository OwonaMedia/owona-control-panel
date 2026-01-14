'use client';

import { useState } from 'react';
import { Settings, Copy, RefreshCw, Trash2, Eye, EyeOff } from 'lucide-react';

export default function SettingsTab() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [settings, setSettings] = useState({
    syncInterval: '30',
    autoBackup: true,
    changeDetection: true,
    serverUpload: true,
    notifications: true,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Einstellungen</h2>
        <p className="text-gray-400">Konfigurieren Sie das Control Panel und die Synchronisierung</p>
      </div>

      {/* General Settings */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Allgemeine Einstellungen</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Synchronisierungs-Interval (Minuten)</label>
            <input
              type="number"
              value={settings.syncInterval}
              onChange={(e) => setSettings({ ...settings, syncInterval: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
            />
            <p className="text-xs text-gray-400 mt-1">Standard: 30 Minuten</p>
          </div>

          <div className="pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Automatische Sicherungen</p>
                <p className="text-sm text-gray-400">Tägliche Backups durchführen</p>
              </div>
              <input
                type="checkbox"
                checked={settings.autoBackup}
                onChange={(e) => setSettings({ ...settings, autoBackup: e.target.checked })}
                className="w-5 h-5"
              />
            </div>

            <div className="border-t border-gray-800 pt-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Change Detection</p>
                <p className="text-sm text-gray-400">Nur geänderte Workflows synchronisieren</p>
              </div>
              <input
                type="checkbox"
                checked={settings.changeDetection}
                onChange={(e) => setSettings({ ...settings, changeDetection: e.target.checked })}
                className="w-5 h-5"
              />
            </div>

            <div className="border-t border-gray-800 pt-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Server Upload</p>
                <p className="text-sm text-gray-400">Workflows zum Server hochladen</p>
              </div>
              <input
                type="checkbox"
                checked={settings.serverUpload}
                onChange={(e) => setSettings({ ...settings, serverUpload: e.target.checked })}
                className="w-5 h-5"
              />
            </div>

            <div className="border-t border-gray-800 pt-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Benachrichtigungen</p>
                <p className="text-sm text-gray-400">Benachrichtigungen bei Synchronisierungsfehlern</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>

        <button className="w-full mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
          Einstellungen Speichern
        </button>
      </div>

      {/* API Configuration */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">API Konfiguration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">N8N API Key</label>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 flex items-center">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  readOnly
                  className="flex-1 bg-transparent text-white outline-none"
                />
              </div>
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 transition-colors"
              >
                {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 transition-colors">
                <Copy size={18} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Server Adresse</label>
            <input
              type="text"
              value="173.249.2.158"
              readOnly
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Backup Verzeichnis</label>
            <input
              type="text"
              value="/root/supabase-complete-backup/"
              readOnly
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-400"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium">
            Verbindung Testen
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            Neu Konfigurieren
          </button>
        </div>
      </div>

      {/* Maintenance */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Wartung</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors">
            <span className="text-white font-medium">Cache löschen</span>
            <Trash2 size={18} className="text-orange-400" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors">
            <span className="text-white font-medium">Logs zurücksetzen</span>
            <RefreshCw size={18} className="text-blue-400" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors">
            <span className="text-white font-medium">Datenbank reparieren</span>
            <Settings size={18} className="text-purple-400" />
          </button>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Systeminformationen</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-400 mb-1">Panel Version</p>
            <p className="font-semibold text-white">1.0.0</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Node Version</p>
            <p className="font-semibold text-white">18.17.0</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Next.js Version</p>
            <p className="font-semibold text-white">14.0.0</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Uptime</p>
            <p className="font-semibold text-white">45d 12h</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Zuletzt aktualisiert</p>
            <p className="font-semibold text-white">14.01.2026</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Environment</p>
            <p className="font-semibold text-white">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
}
