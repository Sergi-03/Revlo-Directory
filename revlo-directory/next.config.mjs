/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['localhost', 'bjnxmiarsbyxkkqxjvmd.supabase.co'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    serverActions: {}
  }
};

export default nextConfig;