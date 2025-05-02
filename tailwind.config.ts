/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "background-primary": "#050505",
                "background-secondary": "#0F0F10",
                "background-tertiary": "#19191A",
                "content-body": "#CDCBCC",
                "content-placeholder": "#827d7f",
                "content-headline": "#B2b2b2",
                "border-primary": "#19191A",
                "border-secondary": "#323234",
                "border-tertiary": "#97979B",
                "accent-purple": "#4b2dbb",
                "accent-green": "#87bb2d",
                "accent-red": "#b5446b",
            }
        },
    },
    plugins: [],
}