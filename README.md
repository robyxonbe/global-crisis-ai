# Global Crisis AI — Everything Consolidated

**Includes:** Live world map, multiple global feeds (USGS, EONET, ACLED*, Tsunami, Volcano, Wildfires*, GDACS), PWA + Web Push (VAPID), Android helper + FCM endpoints, Auth + DB + Admin (status/quotes/audits), security headers, CORS/CSP, CI workflow, Docker/Compose, OpenAPI + Postman, 30+ languages.

(*) ACLED/FIRMS require keys/URLs; code is ready.

## Quick start (dev)
```bash
npm install
cp .env.example .env.local
npx prisma migrate dev --name init
npm run dev
# http://localhost:3000
# Seed admin (one time)
curl -X POST http://localhost:3000/api/dev/seed-admin -H "x-seed-secret: seedme"
# Login: http://localhost:3000/auth/signin  (admin@example.com / admin1234)
```

## Build/Run (prod)
```bash
npx prisma migrate deploy
npm run build && npm start
```

See `DEPLOY_CHECKLIST.md` for one-shot deploy on Vercel/Docker.
