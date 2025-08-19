/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: false },
  async headers(){
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy-Report-Only', value: "default-src 'self'; img-src * data: blob:; media-src * blob:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src *; worker-src 'self' blob:; frame-ancestors 'none';" },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Permissions-Policy', value: "geolocation=(self), microphone=(), camera=()" },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
        ]
      }
    ];
  }
};
module.exports = nextConfig;
