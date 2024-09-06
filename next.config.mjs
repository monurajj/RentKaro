/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/DashBoard', // The page you want to redirect to
        permanent: true, // Set to true if you want the redirect to be permanent (301)
      },
    ];
  },
  images: {
    domains: ['i.ibb.co'], // Add your external image domain here
  },
};

export default nextConfig;
