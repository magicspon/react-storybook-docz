module.exports = {
	plugins: [
		require('precss'),
		require('tailwindcss')('./src/styles/tailwind.config.js'),
		require('autoprefixer')()
	]
}
