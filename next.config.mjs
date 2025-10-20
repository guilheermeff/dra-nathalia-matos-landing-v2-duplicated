/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações existentes
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async headers() {
    // Domínios necessários para Google Tag Manager, Analytics, Ads e outros serviços
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.googletagmanager.com https://*.google-analytics.com https://*.doubleclick.net https://*.gstatic.com;
      script-src-elem 'self' 'unsafe-inline' https://*.google.com https://*.googletagmanager.com https://*.google-analytics.com https://*.doubleclick.net https://*.gstatic.com;
      connect-src 'self' https://*.google.com https://*.google-analytics.com https://*.googletagmanager.com https://*.doubleclick.net https://wa.me/*;
      img-src 'self' data: blob: https:;
      style-src 'self' 'unsafe-inline';
      font-src 'self' data:;
      frame-src 'self' https://*.google.com https://*.doubleclick.net;
      object-src 'none';
      base-uri 'self';
      form-action 'self' https://*.google.com;
    `
    .replace(/\s{2,}/g, ' ')
    .trim();

    return [
      {
        // Aplica o cabeçalho a todas as rotas
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
