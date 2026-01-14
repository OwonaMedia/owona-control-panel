# 🎛️ OWONA Control Panel

Ein modernes, einheitliches Control Panel zur Verwaltung von N8N Workflows, Servereinstellungen, Synchronisierung und WhatsApp Integration.

## 🌟 Features

### 📊 Dashboard
- Überblick über alle Systeme
- Echtzeit-Statistiken
- System-Informationen
- Status-Überwachung

### 🤖 N8N Management
- Workflow-Übersicht
- Status-Management (aktiv/inaktiv)
- Execution-Tracking
- Import/Export Funktionalität

### 🖥️ Server Management
- Echtzeit-Ressourcentracking (CPU, RAM, Disk)
- Service-Management (N8N, PostgreSQL, Redis)
- Backup-Verwaltung
- System-Informationen

### 🔄 Synchronisation
- Automatische Workflow-Synchronisierung
- Change-Detection basierend auf Hash
- Synchronisierungsverlauf
- 30-Minuten Interval (konfigurierbar)

### 💬 WhatsApp Integration
- Business Account Management
- Message Templates
- Automatisierungen
- Analytics
- Link zum internen Dashboard

### ⚙️ Einstellungen
- API-Konfiguration
- Synchronisierungs-Parameter
- Wartungsfunktionen
- System-Informationen

## 🚀 Schnellstart

### Voraussetzungen
- Node.js 18+
- npm oder yarn

### Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

### Produktions-Deployment auf Vercel

```bash
# Bauen
npm run build

# Testen
npm start
```

**Vercel Deployment:**
1. Push zu GitHub
2. Verbinden Sie mit Vercel
3. Automatisches Deployment bei jedem Push

## 📁 Projektstruktur

```
MASTER_PANEL/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── stats/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── tabs/
│       │   ├── DashboardTab.tsx
│       │   ├── N8NTab.tsx
│       │   ├── ServerTab.tsx
│       │   ├── SyncTab.tsx
│       │   ├── WhatsAppTab.tsx
│       │   └── SettingsTab.tsx
│       └── StatCard.tsx
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 🔧 Konfiguration

### Umgebungsvariablen

Erstellen Sie eine `.env.local` Datei:

```env
NEXT_PUBLIC_N8N_API_URL=https://flowkraft.app.n8n.cloud/api/v1
NEXT_PUBLIC_SERVER_URL=https://173.249.2.158
N8N_API_KEY=your_api_key_here
```

### API-Integration

Die Anwendung verbindet sich mit:
- **N8N Cloud API**: Workflow-Management
- **Server**: Backup und Sync-Status
- **WhatsApp**: Integration und Automationen

## 📋 Verwendete Technologien

- **Next.js 14**: React Framework
- **TypeScript**: Typsicherheit
- **Tailwind CSS**: Styling
- **Lucide React**: Icons
- **Recharts**: Datenvisualisierung (optional)
- **Axios**: HTTP-Client (optional)

## 🌐 Deployment zur Domain

### Domain Setup bei owonamedia.de

1. **DNS Einstellungen** (bei Ihrem Domain-Registrar):
   ```
   CNAME: www.owonamedia.de → owona-control-panel.vercel.app
   ```

2. **Vercel Domain Configuration**:
   - Vercel Dashboard → Project Settings → Domains
   - Fügen Sie `owonamedia.de` und `www.owonamedia.de` hinzu

3. **SSL/TLS**:
   - Automatisch durch Vercel (kostenlos)

## 🔒 Sicherheit

- HTTPS/TLS überall aktiviert
- API Keys in Environment-Variablen
- CORS-Policy eingerichtet
- Rate Limiting auf API-Routen

## 📊 API Endpoints

### GET /api/stats
Gibt Echtzeit-Statistiken zurück:

```json
{
  "workflows": 116,
  "syncStatus": "active",
  "serverStatus": "online",
  "lastSync": "2026-01-14T14:30:00Z",
  "n8nCloud": {
    "status": "online",
    "workflows": 116,
    "credentials": 42
  }
}
```

## 🔄 Synchronisierungsprozess

```
N8N Cloud → Local Storage → Server
    ↓
Hash-basierte Change Detection
    ↓
Manifest Updates
    ↓
Log Creation
```

## 📝 Logging

Logs werden im `/tmp/n8n-sync.log` gespeichert (macOS) oder im konfigurierten Verzeichnis.

## 🐛 Troubleshooting

### Verbindungsprobleme
```bash
# API Verbindung testen
curl -H "X-N8N-API-KEY: your_key" https://flowkraft.app.n8n.cloud/api/v1/workflows
```

### Build-Fehler
```bash
# Cache löschen
rm -rf .next node_modules

# Neu installieren
npm install
npm run build
```

## 📞 Support

Für Fragen oder Probleme:
- Überprüfen Sie die Logs
- Verifizieren Sie die API-Konfiguration
- Kontaktieren Sie den Administrator

## 📄 Lizenz

OWONA Media © 2026

## 🎯 Nächste Schritte

- [ ] Live API-Integration mit Server
- [ ] Echtzeit-Benachrichtigungen
- [ ] Zwei-Wege-Synchronisierung
- [ ] Backup-Visualisierung
- [ ] Advanced Monitoring/Alerting
- [ ] Mobile App Version

---

**Status**: Production Ready ✅
**Letzte Aktualisierung**: 14.01.2026
