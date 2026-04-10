import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161311",
        mist: "#6f675f",
        line: "#d9d2c8",
        panel: "rgba(255, 250, 244, 0.84)",
        gold: "#8a6d3b",
        teal: "#2f6ae0",
        highlight: "#e7efff",
        paper: "#f5f0e8",
        shell: "#ebe3d8",
      },
      boxShadow: {
        halo: "0 28px 90px rgba(47, 106, 224, 0.14)",
        card: "0 20px 60px rgba(27, 22, 18, 0.08)",
        float: "0 14px 40px rgba(27, 22, 18, 0.12)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 12% 14%, rgba(47, 106, 224, 0.1), transparent 28%), radial-gradient(circle at 86% 18%, rgba(138, 109, 59, 0.1), transparent 24%), linear-gradient(180deg, #f8f4ee 0%, #f4efe6 46%, #f7f2eb 100%)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};

export default config;
