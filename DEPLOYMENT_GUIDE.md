# 🚀 OWONA Control Panel - Deployment Guide

## Schritt-für-Schritt Anleitung zum Deployment auf Vercel mit owonamedia.de Domain

### Phase 1: Vorbereitung

#### 1.1 GitHub Repository erstellen

```bash
# Repository initialisieren
cd /Users/salomon/Documents/MASTER_PANEL
git init
git add .
git commit -m "Initial commit: OWONA Control Panel"

# Zu GitHub pushen
git remote add origin https://github.com/YOUR_USERNAME/owona-control-panel.git
git branch -M main
git push -u origin main
```

#### 1.2 Umgebungsvariablen konfigurieren

Erstellen Sie auf Ihrem lokalen Rechner eine `.env.local` Datei:

```env
# .env.local
NEXT_PUBLIC_N8N_API_URL=https://flowkraft.app.n8n.cloud/api/v1
NEXT_PUBLIC_SERVER_URL=173.249.2.158
```

**Wichtig:** Diese Datei wird NICHT committed (steht in `.gitignore`).

### Phase 2: Vercel Setup

#### 2.1 Vercel Konto erstellen/anmelden
- Gehen Sie zu https://vercel.com
- Melden Sie sich mit GitHub an
- Autorisieren Sie Vercel

#### 2.2 Projekt auf Vercel importieren

1. **Dashboard → "New Project" → "Import Git Repository"**
2. Wählen Sie `owona-control-panel` Repository
3. **Configure Project:**
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

#### 2.3 Environment Variables in Vercel einstellen

Im Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_N8N_API_URL = https://flowkraft.app.n8n.cloud/api/v1
NEXT_PUBLIC_SERVER_URL = 173.249.2.158
```

**Deployment starten:**
- Klicken Sie "Deploy"
- Vercel kompiliert und deployed das Projekt
- Sie erhalten eine `.vercel.app` URL (z.B. `owona-control-panel-xyz.vercel.app`)

### Phase 3: Domain Connection

#### 3.1 Domain zu Vercel hinzufügen

1. **Vercel Dashboard → Project → Settings → Domains**
2. **"Add Domain" klicken**
3. Geben Sie ein: `owonamedia.de`
4. Vercel zeigt die DNS-Einstellungen an

#### 3.2 DNS bei Domain-Registrar konfigurieren

**Bei Ihrer aktuellen Domain-Verwaltung (z.B. OVH, Namecheap, etc.):**

**Option A: CNAME (Empfohlen für Subdomains)**
```
Subdomain: www
Type: CNAME
Value: cname.vercel-dns.com
```

**Option B: A Record (Für Root Domain owonamedia.de)**
```
Type: A
Value: 76.76.19.89  (Vercel IP)
```

**Zusätzlich: WWW CNAME**
```
Subdomain: www
Type: CNAME
Value: cname.vercel-dns.com
```

#### 3.3 SSL/TLS Certificate

- Vercel erstellt automatisch ein kostenloses SSL-Zertifikat
- Dies kann bis zu 48 Stunden dauern
- Sie werden per E-Mail benachrichtigt

### Phase 4: Überprüfung & Testing

#### 4.1 Vercel Status prüfen

```bash
# Deployment-Log ansehen
vercel logs owona-control-panel
```

#### 4.2 Domain testen

```bash
# DNS Propagation prüfen
nslookup owonamedia.de

# HTTPS testen
curl -I https://owonamedia.de
```

#### 4.3 Browser Test

- Öffnen Sie https://owonamedia.de
- Control Panel sollte laden
- Alle Reiter sollten funktionieren

### Phase 5: Continuous Deployment Setup

#### 5.1 Auto-Deployment konfigurieren

1. **Vercel Dashboard → Project Settings → Git**
2. **Production Branch:** `main`
3. **Preview Deployments:** Enabled

Jetzt wird mit jedem Push zu `main` automatisch deployed!

#### 5.2 Lokale Entwicklung

```bash
# Änderungen machen
echo "// change" >> src/app/page.tsx

# Commit & Push
git add .
git commit -m "Update: New feature"
git push origin main

# Vercel deployted automatisch!
```

### Phase 6: Monitoring & Maintenance

#### 6.1 Analytics

Im Vercel Dashboard:
- Real-time Anfragen
- Performance Metrics
- Errors & Warnings

#### 6.2 Logs

```bash
# Realtime Logs ansehen
vercel logs --follow

# Fehler-Logs
vercel logs --errors
```

#### 6.3 Updates durchführen

```bash
# Dependencies aktualisieren
npm update

# Teste lokal
npm run dev

# Commit & Push
git add .
git commit -m "Update dependencies"
git push origin main
```

### Phase 7: Backend Integration (Optional)

Wenn Sie API-Integration brauchen, können Sie Vercel Serverless Functions verwenden:

```typescript
// src/pages/api/custom-endpoint.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ihre Logik hier
  res.status(200).json({ message: 'Hello' });
}
```

### 🔧 Troubleshooting

#### Problem: Domain zeigt Vercel Error Limbo

**Lösung:**
```bash
# Warten Sie 24-48 Stunden für DNS Propagation
# Oder:
vercel --prod
```

#### Problem: Build fehlgeschlagen

```bash
# Lokal testen
npm run build

# Logs anschauen
vercel logs --errors
```

#### Problem: Environment Variablen nicht gesetzt

1. Vercel Dashboard → Settings → Environment Variables
2. Stellen Sie sicher, dass diese auch für "Production" gesetzt sind
3. Neuer Deployment erforderlich: `vercel --prod`

#### Problem: 404 auf Routes

Vercel braucht:
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/$1"
    }
  ]
}
```

### 📊 Finales Deployment Checklist

- [ ] GitHub Repository erstellt
- [ ] Code committed und gepusht
- [ ] Vercel Projekt erstellt
- [ ] Environment Variables in Vercel gesetzt
- [ ] Domain zu Vercel hinzugefügt
- [ ] DNS eingestellt (A oder CNAME Records)
- [ ] SSL Zertifikat gültig
- [ ] https://owonamedia.de lädt Control Panel
- [ ] Alle Tabs funktionieren
- [ ] Performance akzeptabel
- [ ] Analytics konfiguriert
- [ ] Error Monitoring aktiv

### 🎉 Sie sind fertig!

Ihr Control Panel ist jetzt:
- ✅ Live auf https://owonamedia.de
- ✅ Mit HTTPS gesichert
- ✅ Automatisch deployed bei Code-Änderungen
- ✅ Global verteilt (Vercel Edge Network)
- ✅ Mit automatischem Fallback bei Errors

### 📝 Kommende Features

Nach dem Deployment:
1. LiveAPI-Integration mit N8N Cloud
2. Echtzeit-Server-Daten statt Mock-Daten
3. WebSocket für Live-Updates
4. Zwei-Wege-Synchronisierung
5. Mobile-responsive Verbesserungen
6. Dunkler/Heller Modus Toggle

---

**Support & Fragen:**
- Vercel Dokumentation: https://vercel.com/docs
- Next.js Dokumentation: https://nextjs.org/docs
- Ihr Server-Admin kontaktieren für Backend-Integration

