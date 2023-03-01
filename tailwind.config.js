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
			neutralGlassHover: "var(--neutral-glass-hover)",
			neutralStrong: "var(--neutral-strong)",
			borderWeak: "var(--border-weak)",
			tagsPrimary: "var(--tags-primary)",
			tagsSecondary: "var(--tags-secondary)",
			gradientLogo: "var(--gradient-logo)",
			gradientPageBg: "var(--gradient-page-bg)",
			gradientHeroBg: "var(--gradient-hero-bg)",
		},
	},
	plugins: [],
};
