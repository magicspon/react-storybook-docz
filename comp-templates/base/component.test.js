import React from 'react'
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library'
import @@name from './@@name'


it('@@name renders correctly', () => {
	const tree = render(<@@name />)
	expect(tree).toMatchSnapshot()
});
