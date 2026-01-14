# OWONA Control Panel - GitHub Actions & Workflows

## Repository Setup

### Branches
- **main** - Production Branch (Auto-Deploy auf Vercel)
- **develop** - Development Branch
- **feature/** - Feature Branches

### Secrets einrichten

Im GitHub Repository Settings → Secrets and variables:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

### Branch Protection

Für `main`:
- Require pull request reviews
- Require status checks to pass
- Dismiss stale pull request approvals

## Contribution Guidelines

1. Feature Branch erstellen: `git checkout -b feature/my-feature`
2. Änderungen committed
3. Pull Request mit Beschreibung
4. Code Review + Approval
5. Merge auf main → Auto-Deploy!

## Commit Messages

Format:
```
type(scope): subject

type: feat, fix, docs, style, refactor, test, chore
scope: dashboard, n8n, server, sync, whatsapp, settings
subject: kurze Beschreibung
```

Beispiele:
```
feat(dashboard): add workflow count widget
fix(sync): correct hash comparison logic
docs(deployment): add vercel setup guide
```

## Release Process

1. Update `package.json` version
2. Erstelle Git Tag: `git tag v1.0.0`
3. Push: `git push origin main --tags`
4. GitHub Release erstellen

---

**Projekt Status:** 🟢 Active Development
