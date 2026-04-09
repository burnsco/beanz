// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://beanz.coreyburns.ca",
  image: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
