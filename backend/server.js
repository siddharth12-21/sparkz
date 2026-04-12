// ============================================================
//  Sparkz Backend
//  Real-time online counter + foundation for future features
//  Stack: Node.js · Express · Socket.io
// ============================================================

const express   = require('express');
const http      = require('http');
const { Server} = require('socket.io');
const cors      = require('cors');

const app    = express();
const server = http.createServer(app);

// ── Allowed origins ──────────────────────────────────────────
// Add your production domain here after deploying
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)
    .concat([
    'https://sparkz.quest',
    'https://www.sparkz.quest',
    'http://localhost:8765',
    'http://127.0.0.1:8765',
  ]);

// ── Socket.io ────────────────────────────────────────────────
const io = new Server(server, {
  cors: {
    origin: ALLOWED_ORIGINS,
    methods: ['GET', 'POST'],
  },
  // Fall back to long-polling if WebSocket is blocked (e.g. some proxies)
  transports: ['websocket', 'polling'],
});

// ── State ────────────────────────────────────────────────────
let onlineCount = 0;

// Simple in-memory page-view log (resets on server restart)
// Swap for a database later when you want persistence
const pageViews = { total: 0, math: 0, apwh: 0 };

// ── Socket events ─────────────────────────────────────────────
io.on('connection', (socket) => {
  onlineCount = Math.max(0, onlineCount + 1);

  // Send current count to the newly connected client immediately
  socket.emit('online-count', onlineCount);
  // Broadcast new count to everyone else
  socket.broadcast.emit('online-count', onlineCount);

  // Client can report which tab they opened
  socket.on('page-view', (tab) => {
    pageViews.total++;
    if (tab === 'math')  pageViews.math++;
    if (tab === 'apwh')  pageViews.apwh++;
  });

  socket.on('disconnect', () => {
    onlineCount = Math.max(0, onlineCount - 1);
    io.emit('online-count', onlineCount);
  });
});

// ── REST endpoints ────────────────────────────────────────────
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json());

// Health check — used by Railway to verify the server is up
app.get('/health', (req, res) => {
  res.json({ status: 'ok', online: onlineCount, views: pageViews });
});

// Stats endpoint — frontend can poll this as a fallback
app.get('/stats', (req, res) => {
  res.json({ online: onlineCount, views: pageViews });
});

// ── Start ─────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Sparkz backend running on port ${PORT}`);
  console.log(`Allowed origins: ${ALLOWED_ORIGINS.join(', ')}`);
});
