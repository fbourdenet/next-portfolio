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
                primary: "#ece0d1",
                secondary: "#38220f",
                "primary-dark": "#171717",
                "secondary-dark": "#bababa",
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
