module.exports = function(variants = ['responsive']) {
	const utils = {
		'.t-50': {
			top: '50%'
		},

		'.l-50': {
			left: '50%'
		}
	}

	return function({ addUtilities }) {
		addUtilities(utils, variants)
	}
}
