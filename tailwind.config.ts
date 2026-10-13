import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#191b1d", blue: "#1648ea", lemon: "#e7f477", mist: "#f1f4f6", coral: "#ed896e" } } }, plugins: []
} satisfies Config;
