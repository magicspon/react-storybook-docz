import React from 'react'
import { render } from 'react-testing-library'

import Button from './Button'

it('renders correctly', () => {
	const tree = render(<Button />)
	expect(tree).toMatchSnapshot()
})
