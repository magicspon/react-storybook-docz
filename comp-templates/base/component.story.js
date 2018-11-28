import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import @@name from './@@name'

import '@/styles/style.css'

storiesOf('@@name', module).add('with text', () => (
	<@@name />
))
