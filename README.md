# What Say Your MP Website
A website for checking on the involvement of each Singaporean MP in Parliament.

The steps below are all written for users with NPM set up in mind.

## Pre-requisites:
* NPM (Tested with version 10.2.3) - [Setup guide]( https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation Steps
1. Clone package
2. Install dependencies: `npm install`

## Local Testing Guide

### With Remote Backend
1. Add `DEVELOPER_API_KEY` into your `localStorage` - the key will be sent upon request
2. Run `npm run dev`

### With Backend Running Locally
1. Add `HOST=<yourLocalURL>` into the environment variable for the `dev:local` script.
2. Run `npm run dev:local`

## Additional Links
* [Contributing Guidelines](CONTRIBUTING.md)
* [Project Management](https://github.com/orgs/whatsayyourmp/projects/1)
* [How the backend works](docs/backend.md)

## References
* [GitHub Pages setup](https://github.com/gitname/react-gh-pages)
  * [How to deploy a Next.js App to GitHub Pages](https://github.com/gregrickaby/nextjs-github-pages)
* [Commitlint setup](https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup)
* [Next.js setup](https://nextjs.org/docs/getting-started/installation)
* [How to write unit tests in TypeScript](https://bootcamp.uxdesign.cc/how-to-write-test-cases-in-typescript-fa7a263b7833)