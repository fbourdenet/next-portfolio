import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class", "[class~='dark']"],
    theme: {
        extend: {
            colors: {
                primary: "#EAD8C0",
                secondary: "#38220f",
                "primary-dark": "#171717",
                "secondary-dark": "#A2A2A2",
            },
            screens: {
                lg: "1440px",
                xl: "1920px",
                "2xl": "2440px",
            },
        },
    },
    plugins: [],
};
export default config;
