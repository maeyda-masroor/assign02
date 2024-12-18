

const config= {
  content: [
    "./src/pages/**/*.{js,ts,jsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,mdx}",
  ],
  theme: {
    screens: {
       'sm': '640px',
       'md': '768px', 
       'lg': '1024px', 
       'xl': '1280px', 
       '2xl': '1536px'
    },
    extend: {
      colors: {
        blue: '#043873',
        lightblue:'#4F9CF9',
        pink:'#FB2E86',
        green:'#08D15F',
        blue:'#2F1AC4',
        lightpink:'#FFF6FB',
        gradientLeft: '#8e24aa',
        gradientRight: '#1e88e5',
      },
    },
  },
  plugins: [],
};
export default config;