module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      clipPath: {
        // 'rectangle': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }
  },
  plugins: [],
}