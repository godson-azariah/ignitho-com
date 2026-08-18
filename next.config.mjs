/** @type {import('next').NextConfig} */
const nextConfig = {
  // the ngrok tunnel used to preview dev builds on other devices; without this
  // Next blocks its requests to /_next/* as cross-origin
  allowedDevOrigins: ["morse-gazing-spirits.ngrok-free.dev"],

  images: {
    /*
      Next 16 only honours qualities listed here; anything else warns and is
      rejected. 88 is used where a photo is downscaled hard by object-cover
      (the industry cards and the Why Ignitho portrait).
    */
    qualities: [75, 88],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
