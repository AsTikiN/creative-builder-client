# Vite Template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This Vite template provides a foundational boilerplate for building robust single-page applications

## Prerequisites

- Node.js version X.Y.Z (check with `node -v`)

## Installation

1. Clone this repository
2. Install dependencies
3. Generate API via RTK Query Codegen

## Scripts

### Development mode

Kickstart your development journey with a hot-reloading development server for swift iterations:

```bash
yarn dev
```

### Production build

Ready to deploy? Generate an optimized production build:

```bash
yarn build
```

### Running production build

Serve your production build:

```bash
yarn start
```

### Linting code

Keep your codebase clean and consistent with ESLint:

```bash
yarn lint
```

Fix linting issues:

```bash
yarn lint --fix
```

### Formatting code

Ensure code readability and maintainability with Prettier:

```bash
yarn format
```

### Regenerating API

Sync your API code with the OpenAPI schema using RTK Query Codegen:

```bash
yarn api:generate
```

## Contribution

### Commitizen

Make sure to install Commitizen on your machine:

```bash
npm install -g commitizen
```

Then follow Commitizen instructions after creating a new commit with the following command:

```bash
cz
```

### Precommit hooks

Please, note that precommit hooks are in place to maintain code quality standards. Before each commit, your code is processed by Prettier and ESLint according to project configurations
