# 🚀 Quick Start - OWONA Control Panel

## ⚡ 5 Minuten Setup

### 1. Projekt vorbereiten

```bash
cd /Users/salomon/Documents/MASTER_PANEL
npm install
```

### 2. Lokal starten

```bash
npm run dev
```

→ Browser: http://localhost:3000

### 3. Features erkunden

**Reitertabs:**
- 📊 **Dashboard** - Überblick & Statistiken
- 🤖 **N8N** - Workflow Management (116 Workflows)
- 🖥️ **Server** - Ressourcen & Status
- 🔄 **Sync** - Synchronisierungs-Status
- 💬 **WhatsApp** - Integration & Automationen
- ⚙️ **Einstellungen** - Konfiguration

### 4. Zu GitHub pushen

```bash
cd /Users/salomon/Documents/MASTER_PANEL
git init
git add .
git commit -m "Initial: OWONA Control Panel"
git remote add origin https://github.com/YOUR_USERNAME/owona-control-panel.git
git push -u origin main
```

### 5. Auf Vercel deployen

1. Gehen Sie zu https://vercel.com
2. Import Project → GitHub Repository wählen
3. Deploy klicken
4. Domain verbinden: owonamedia.de

## 🎯 Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| `src/app/page.tsx` | Hauptseite mit Tab-Navigation |
| `src/components/tabs/*.tsx` | Einzelne Tab-Seiten |
| `src/app/api/stats/route.ts` | Backend API |
| `tailwind.config.ts` | Design-Konfiguration |
| `.env.local` | Geheime API Keys (lokal) |

## 📝 Commands

```bash
# Lokal entwickeln
npm run dev

# Production-Build
npm run build

# Production starten
npm start

# Linting
npm run lint

# Zu Vercel deployen
vercel --prod
```

## 🔧 Häufige Änderungen

### Neuen Tab hinzufügen

1. Datei erstellen: `src/components/tabs/MyTab.tsx`
2. In `src/app/page.tsx` importieren:
   ```typescript
   import MyTab from '@/components/tabs/MyTab';
   ```
3. Zum `tabs` Array hinzufügen:
   ```typescript
   { id: 'mytab', label: 'Mein Tab', icon: <Icon size={18} /> }
   ```
4. Im Content-Bereich rendern:
   ```typescript
   {activeTab === 'mytab' && <MyTab />}
   ```

### Farben ändern

In `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0066FF',  // Ändern Sie die Hex-Farbe
  // ...
}
```

### API-Endpunkte hinzufügen

Neue Datei: `src/app/api/mein-endpoint/route.ts`

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ data: 'value' });
}
```

## ✨ Was ist bereits gebaut?

✅ Responsive UI mit Tailwind CSS  
✅ 6 Hauptreitertabs  
✅ Mock-API Endpoints  
✅ Dark Mode Design  
✅ TypeScript Support  
✅ ESLint Konfiguration  
✅ Production-ready auf Vercel  
✅ Custom Icons (Lucide)  
✅ Responsive Grid Layout  

## 🔐 Sicherheit

- Keine Hardcoded Secrets in Git
- Environment Variables für API Keys
- HTTPS/TLS auf Vercel
- CORS-ready API Routes

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎨 Design System

- **Hintergrund:** `bg-gray-900` (Dark)
- **Text:** `text-white`
- **Akzent:** `text-blue-400`
- **Borders:** `border-gray-800`
- **Hover:** `hover:border-gray-700`

## 🚀 Nächste Schritte

1. [ ] GitHub Repository verbinden
2. [ ] Vercel Projekt erstellen
3. [ ] Domain zu Vercel hinzufügen
4. [ ] DNS einstellungen vornehmen
5. [ ] Live-API Integration
6. [ ] Monitoring einrichten

## 💡 Pro Tipps

- **Lokale Entwicklung:** `npm run dev` im Terminal laufen lassen
- **Live-Reload:** Änderungen erscheinen sofort im Browser
- **TypeScript:** Nutzen Sie es für sauberen Code!
- **Vercel CLI:** `npm i -g vercel` für lokale Deployment-Tests

## 📞 Support

- **Probleme?** Schauen Sie in `DEPLOYMENT_GUIDE.md`
- **Dokumentation:** https://nextjs.org/docs
- **Icons:** https://lucide.dev

---

**Version:** 1.0.0  
**Status:** 🟢 Ready for Production  
**Letzte Aktualisierung:** 14.01.2026

