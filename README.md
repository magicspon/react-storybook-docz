# React - storybook and docz

## Getting Started

Install all of the dependencies

`npm install` or `yarn`

## Structure

- src/components
  Each component will live in itself own folder

- src/utils
  Helper functions and utilities

- src/icons
  SVG iconsicpons

- src/styles
  Global styles, resets and tailwind configuration ([What is Tailwind? - Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind))

## Styling

For the most part styling will be defined with tailwind utilities classes, for everything else styling will be applied with emotion ([emotion](https://emotion.sh)), which is one of the most popular css-in-js solutions.

## Linting

All of the code will be linted with eslint using a few of the most popular linting extensions

## Code Style

Prettier([GitHub - prettier/prettier: Prettier is an opinionated code formatter.](https://github.com/prettier/prettier)) will automatically format the code to a consistent style

### Scaffolding (optional)

Install [GitHub - FrancisVega/komp: Create files with boilerplate content](https://github.com/FrancisVega/komp)

To create a new component run `komp new MyNewComponent`

This will generate the following

##### src/components/MyNewComponent

Button.js
Button.mdx (used by docz)
Button.story.js (used by storybook)
Button.test.js (used by jest for snapshot/unit testing)

### Using storybook

Documentation ([Storybook](https://storybook.js.org/basics/guide-react/))

To start the storybook server run

`npm run storybook`

### Using docz

Documentation ([Docz](https://www.docz.site/documentation))

To start the docz server run `nom run docz:dev`

### Running Tests

Documentation ([Getting Started · Jest](https://jestjs.io/docs/en/getting-started))

To run tests

`npm run test`
