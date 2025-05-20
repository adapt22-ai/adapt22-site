/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/faq',
        destination: '/faqs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;