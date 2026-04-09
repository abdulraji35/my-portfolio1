import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        mist: "#c7d3ea",
        line: "rgba(199, 211, 234, 0.16)",
        panel: "rgba(11, 19, 33, 0.72)",
        gold: "#d8bf79",
        teal: "#4fd1c5",
        highlight: "#8ec5ff"
      },
      boxShadow: {
        halo: "0 20px 80px rgba(79, 209, 197, 0.18)",
        card: "0 24px 90px rgba(0, 0, 0, 0.22)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(79, 209, 197, 0.2), transparent 35%), radial-gradient(circle at 80% 20%, rgba(216, 191, 121, 0.16), transparent 28%), linear-gradient(180deg, #08111f 0%, #0d1627 40%, #08111f 100%)"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-manrope)"]
      }
    }
  },
  plugins: []
};

export default config;
