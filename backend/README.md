# Sparkz Backend

Real-time online counter and analytics API for [Sparkz](https://sparkz.quest).

## Stack
- **Node.js** + **Express** — HTTP REST API  
- **Socket.io** — WebSocket real-time connection for the online counter

## Local Development

```bash
cd backend
npm install
npm run dev      # uses nodemon for auto-reload
```

Server starts on `http://localhost:3001`.  
Test it: `curl http://localhost:3001/health`

## Deploying to Railway (free tier, always-on)

1. **Push your repo to GitHub** (if not already):
   ```bash
   cd /path/to/wizard-mermaid-paradox
   git init
   git add .
   git commit -m "initial commit"
   gh repo create sparkz --public --push
   ```

2. **Create a Railway account**: [railway.app](https://railway.app) — log in with GitHub.

3. **New Project → Deploy from GitHub repo** → select `studyhub`.

4. In Railway **Settings → Build**:
   - Set **Root Directory** to `backend`

5. In Railway **Variables**, add:
   ```
   ALLOWED_ORIGINS=https://sparkz.quest,https://www.sparkz.quest
   ```

6. After deploy Railway gives you a URL like:
   ```
   https://studyhub-backend-production.up.railway.app
   ```

7. **Update `index.html`** — find this line near the top `<script>`:
   ```js
   window.BACKEND_URL = "";
   ```
   Change it to:
   ```js
   window.BACKEND_URL = "https://studyhub-backend-production.up.railway.app";
   ```
   Then redeploy your frontend (push to Vercel).

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Server status + live count |
| `GET` | `/stats` | Online count + page views |

## Socket.io Events

| Event | Direction | Payload | Description |
|-------|-----------|---------|-------------|
| `online-count` | Server → Client | `number` | Current online users |
| `page-view` | Client → Server | `"math"` or `"apwh"` | Tab opened |
