'use client';

import { MessageCircle, Users, MessageSquare, TrendingUp, AlertCircle } from 'lucide-react';

export default function WhatsAppTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">WhatsApp Integration</h2>
        <p className="text-gray-400">Verwalten Sie Ihre WhatsApp Automationen und Integrationen</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <p className="text-sm text-gray-400 mb-1">Kontakte</p>
          <p className="text-3xl font-bold text-white">1,234</p>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <p className="text-sm text-gray-400 mb-1">Nachrichten heute</p>
          <p className="text-3xl font-bold text-green-400">456</p>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <p className="text-sm text-gray-400 mb-1">Automatisierungen</p>
          <p className="text-3xl font-bold text-blue-400">12</p>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <p className="text-sm text-gray-400 mb-1">API Status</p>
          <p className="text-lg font-bold text-green-400">✓ Online</p>
        </div>
      </div>

      {/* WhatsApp Business Accounts */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <MessageCircle className="text-green-400" size={20} />
          Business Accounts
        </h3>
        <div className="space-y-3">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-white">OWONA Media</p>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">● Aktiv</span>
            </div>
            <p className="text-sm text-gray-400">Nummer: +49 XXX XXXXXXX</p>
            <p className="text-sm text-gray-400 mt-1">Verifizierungsstatus: ✓ Verifiziert</p>
          </div>
        </div>
      </div>

      {/* Message Templates */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <MessageSquare className="text-blue-400" size={20} />
          Nachrichtenvorlagen
        </h3>
        <div className="space-y-3">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 cursor-pointer transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Welcome Message</p>
                <p className="text-sm text-gray-400">Willkommensnachricht für neue Kontakte</p>
              </div>
              <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs">Template</span>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 cursor-pointer transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Order Confirmation</p>
                <p className="text-sm text-gray-400">Bestellbestätigung mit Tracking-Link</p>
              </div>
              <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs">Template</span>
            </div>
          </div>
        </div>
      </div>

      {/* Automations */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="text-purple-400" size={20} />
          Automatisierungen
        </h3>
        <div className="space-y-3">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-white">Auto-Reply Bot</p>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">● Aktiv</span>
            </div>
            <p className="text-sm text-gray-400">Antwortet automatisch auf eingehende Nachrichten</p>
            <div className="mt-3 flex gap-2">
              <button className="text-sm px-3 py-1 bg-blue-900 text-blue-300 rounded hover:bg-blue-800 transition-colors">Bearbeiten</button>
              <button className="text-sm px-3 py-1 bg-red-900 text-red-300 rounded hover:bg-red-800 transition-colors">Deaktivieren</button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-white">Support Ticket System</p>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">● Aktiv</span>
            </div>
            <p className="text-sm text-gray-400">Erstellt Support-Tickets aus WhatsApp Anfragen</p>
            <div className="mt-3 flex gap-2">
              <button className="text-sm px-3 py-1 bg-blue-900 text-blue-300 rounded hover:bg-blue-800 transition-colors">Bearbeiten</button>
              <button className="text-sm px-3 py-1 bg-red-900 text-red-300 rounded hover:bg-red-800 transition-colors">Deaktivieren</button>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Dashboard Link */}
      <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Intern Dashboard</h3>
        <p className="text-gray-400 mb-4">Zugriff auf das ausführliche WhatsApp Management Dashboard</p>
        <a 
          href="https://whatsapp.owona.de/de/intern" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
        >
          <MessageCircle size={18} />
          Zum Intern Dashboard
        </a>
      </div>
    </div>
  );
}
