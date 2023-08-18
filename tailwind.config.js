/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      primaryWeak: "var(--primary-weak)",
      primaryMedium: "var(--primary-medium)",
      primaryStrong: "var(--primary-strong)",
      neutralWhite: "var(--neutral-white)",
      neutralHeader: "var(--neutral-header)",
      neutralGlass: "var(--neutral-glass)",
      buttonGlass: "var(--button-glass)",
      neutralGlassHover: "var(--neutral-glass-hover)",
      neutralStrong: "var(--neutral-strong)",
      borderWeak: "var(--border-weak)",
      tagsPrimary: "var(--tags-primary)",
      tagsSecondary: "var(--tags-secondary)",
      gradientLogo: "var(--gradient-logo)",
      gradientPageBg: "var(--gradient-page-bg)",
      gradientHeroBg: "var(--gradient-hero-bg)",
      // Dark Themes
      darkNeutralStrong: "var(--dark-neutral-strong)",
      darkTagsPrimary: "var(--dark-tags-primary)",
      darkTagsSecondary: "var(--dark-tags-secondary)",

      darkLogo: "var(--dark-logo)",
      darkPageBG: "var(--gradient-page-bg-dark)",
      darkHeroBG: "var(--gradient-hero-bg-dark)",
    },
    screens: {
      phone: "400px",

      tablet: "600px",

      laptop: "900px",

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
