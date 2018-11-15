import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'
import '@/styles/style.css'

storiesOf('Button', module).add('with text', () => (
	<Button>Hello Button</Button>
))
