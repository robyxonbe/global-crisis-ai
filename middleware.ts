import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const allow = (process.env.ALLOW_ORIGINS || '').split(',').map(s=>s.trim()).filter(Boolean);
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith('/api')) return NextResponse.next();
  if (req.method === 'OPTIONS') {
    const res = new NextResponse(null, { status: 204 });
    res.headers.set('Access-Control-Allow-Origin', allow.includes('*') ? '*' : (allow.find(o => o) || '*'));
    res.headers.set('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH,OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-send-secret, x-seed-secret');
    res.headers.set('Access-Control-Max-Age', '86400');
    return res;
  }
  const origin = req.headers.get('origin') || '';
  if (allow.length && !allow.includes('*') && origin && !allow.includes(origin)) {
    return new NextResponse(JSON.stringify({ error:'CORS blocked' }), { status: 403, headers: { 'content-type':'application/json' } });
  }
  const res = NextResponse.next();
  res.headers.set('Access-Control-Allow-Origin', allow.includes('*') ? '*' : (origin || '*'));
  res.headers.set('Vary','Origin');
  return res;
}
export const config = { matcher: ['/api/:path*'] };
