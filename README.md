- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Features](#features)
  - [Framework](#framework)
  - [HomePage](#homepage)
  - [TimeRangePage](#timerangepage)

# Introduction
Chase's CV website. List some intersting features from the projects I did before.

Build with `Next.js`, `Tailwind CSS`.

# Getting Started
```bash
yarn dev
```

# Features
Here's the development plan, and I'll also add some brief notes along the way.

## Framework
- [X] config TypeScript
  - with `create-next-app` init set up.
- [X] config Tailwind CSS
  - with `create-next-app` init set up.
- [X] config Eslint
  - `yarn add -D eslint-config-airbnb eslint eslint-config-next`
  - set the `.eslintrc.json` from my usual file
  - check the commit: `2cb2db0b36a92de0dc7ca76fa6df243c2f9f564f` and `035bc129413d28c0f951ac4ebeef9c890810e4d5` for details
- [X] config Redux
  - read the demo [Next's with-rext](https://github.com/vercel/next.js/tree/canary/examples/with-redux), which is also recommended by the Redux official docs
  - `yarn add @reduxjs/toolkit react-redux`
  - check the commit: `55b72effa3e7adf3ec2c0ca09b6f2b9f41f4dcc1`
- [X] config Jest
  - read the demo [Next's with-jest](https://github.com/vercel/next.js/tree/canary/examples/with-jest)
  - check the commit: `498bd961709e2d553c4af8a2b9744337ec7d3090`
- [ ] config i18n

## HomePage
- [X] add intersting cursor effect
- [ ] text editor
- [ ] change the Navbar to a transformed one when scrolling
- [ ] FlowChat, TimeZone, 

## TimeRangePage
- [X] basic UI/UE
- [ ] add a timer selector
- [ ] allow to select data to render
- [ ] save the data to localStorage
- [ ] impovement from WF
  - [ ] allow select the hour in the first row, show a dark green to it and the same ones in the rest rows
  - [ ] show the localtime of other drak green ones
