/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    supabaseUrl: "https://rmsmqoifdpcskikhhbkz.supabase.co",
    supabaseKey: process.env.SUPABASE_KEY,
    jwtKey: process.env.JWTKEY,
  },
};

export default nextConfig;
