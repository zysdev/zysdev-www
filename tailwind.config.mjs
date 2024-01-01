/** @type {import('tailwindcss').Config} */

import headlessui from "@headlessui/tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [headlessui],
};
