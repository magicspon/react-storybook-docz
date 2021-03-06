const R = require('ramda')
const { colors } = require('./colors')
const { msRange, px2em, ms2rem, px2rem } = require('./tailwind.utils')

const range = {
	minvw: px2em('320px'),
	maxvw: px2em('2000px')
}

const stripUnits = value =>
	Number((value || '').toString().replace(/[^\d\.-]/gi, '')) || null

const rem2px = R.compose(
	R.multiply(16),
	stripUnits
)

const pt2px = 1.13

const sizes = R.compose(
	R.reduce((acc, [key, value]) => {
		acc[key] = { ...value, ...range }

		return acc
	}, {}),
	Object.entries
)({
	xxl: {
		min: px2rem(45 * pt2px),
		max: px2rem(90 * pt2px),
		debug: `${rem2px(px2rem(45 * pt2px))}px || ${rem2px(px2rem(90 * pt2px))}px`
	},

	'xxl-adjust': {
		min: px2rem(45 * pt2px * 0.8),
		max: px2rem(90 * pt2px * 0.8),
		debug: `${rem2px(px2rem(45 * pt2px * 0.8))}px || ${rem2px(
			px2rem(90 * pt2px * 0.8)
		)}px`
	},

	xl: {
		min: px2rem(30 * pt2px),
		max: px2rem(65 * pt2px),
		debug: `${rem2px(px2rem(30 * pt2px))}px || ${rem2px(px2rem(65 * pt2px))}px`
	},

	lg: {
		min: px2rem(22 * pt2px),
		max: px2rem(28 * pt2px),
		debug: `${rem2px(px2rem(22 * pt2px))}px || ${rem2px(px2rem(28 * pt2px))}px`
	},

	md: {
		min: px2rem(17 * pt2px),
		max: px2rem(24 * pt2px),
		debug: `${rem2px(px2rem(17 * pt2px))}px || ${rem2px(px2rem(24 * pt2px))}px`
	},

	body: {
		min: px2rem(16 * pt2px),
		max: px2rem(20 * pt2px),
		debug: `${rem2px(px2rem(16 * pt2px))}px || ${rem2px(px2rem(20 * pt2px))}px`
	},

	sm: {
		min: px2rem(15 * pt2px),
		max: px2rem(17 * pt2px),
		debug: `${rem2px(px2rem(15 * pt2px))}px || ${rem2px(px2rem(17 * pt2px))}px`
	},

	xs: {
		min: px2rem(12 * pt2px),
		max: px2rem(15 * pt2px),
		debug: `${rem2px(px2rem(12 * pt2px))}px || ${rem2px(px2rem(15 * pt2px))}px`
	},

	xxs: {
		min: px2rem(11 * pt2px),
		max: px2rem(12 * pt2px),
		debug: `${rem2px(px2rem(11 * pt2px))}px || ${rem2px(px2rem(12 * pt2px))}px`
	},

	h1: {
		min: ms2rem(5),
		max: ms2rem(20),
		debug: `${rem2px(ms2rem(5))}px ${rem2px(ms2rem(20))}px`
	},

	h2: {
		min: ms2rem(4),
		max: ms2rem(19),
		debug: `${rem2px(ms2rem(4))}px ${rem2px(ms2rem(19))}px`
	},

	h3: {
		min: ms2rem(3),
		max: ms2rem(18),
		debug: `${rem2px(ms2rem(3))}px ${rem2px(ms2rem(18))}px`
	},

	h4: {
		min: ms2rem(3),
		max: ms2rem(16),
		debug: `${rem2px(ms2rem(3))}px ${rem2px(ms2rem(16))}px`
	},

	h5: {
		min: ms2rem(3),
		max: ms2rem(15),
		debug: `${rem2px(ms2rem(3))}px ${rem2px(ms2rem(15))}px`
	},

	h6: {
		min: ms2rem(3),
		max: ms2rem(12),
		debug: `${rem2px(ms2rem(3))}px ${rem2px(ms2rem(12))}px`
	}
})
/*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

R.compose(
	R.map(([key, { debug }]) => ({
		[key]: debug
	})),
	Object.entries
)(sizes) // ?

const textSizes = {
	...msRange(-2, 10),
	...sizes
}

/*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

const fonts = {
	sans: ['sofia-pro', 'Roboto', 'Helvetica Neue', 'sans-serif']
}

/*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

const fontWeights = {
	light: 300,
	regular: 400,
	medium: 500,
	bold: 700
}

/*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

const leading = {
	none: 1,
	tight: 1.25,
	normal: 1.5,
	loose: 2
}

/*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

const tracking = {
	tight: '-0.05em',
	normal: '0',
	wide: '0.05em'
}

/*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

const textColors = colors

module.exports = {
	fonts,
	fontWeights,
	leading,
	textSizes,
	tracking,
	textColors
}
