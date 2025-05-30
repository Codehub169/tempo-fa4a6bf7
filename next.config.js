/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // If you plan to use Unsplash for images
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_TO_EMAIL: process.env.SENDGRID_TO_EMAIL,
  }
}

module.exports = nextConfig