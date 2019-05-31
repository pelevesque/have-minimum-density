[![Build Status](https://travis-ci.org/pelevesque/have-minimum-density.svg?branch=master)](https://travis-ci.org/pelevesque/have-minimum-density)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/have-minimum-density/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/have-minimum-density?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# have-minimum-density

Checks if substrings have a minimum density in a string.

@see https://www.npmjs.com/package/@pelevesque/have-minimum-occurrences for minimum occurrences.

## Node Repository

https://www.npmjs.com/package/@pelevesque/have-minimum-density

## Installation

`npm install @pelevesque/have-minimum-density`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

```js
const haveMinimumDensity = require('@pelevesque/have-minimum-density')
```

```js
const str = 'aaaabbbb'
const checks = [['a', 0.5]]
const result = haveMinimumDensity(str, checks)
// result === true
```

```js
const str = 'aaaabbbb'
const checks = [['a', 0.8]]
const result = haveMinimumDensity(str, checks)
// result === false
```

```js
const str = 'aaaabbbbccccdddd'
const checks = [['a', 0.25], ['?', 0.1], ['b', 0.5]]
const result = haveMinimumDensity(str, checks)
// result === false
```

```js
const str = 'aaaabbbbccccdddd'
const checks = [['a', 0.1], ['b', 0.25], ['c', 0.05], ['d', 0.02]]
const result = haveMinimumDensity(str, checks)
// result === true
```

```js
const str = 'aabaacaabaad'
const checks = [['aab', 0.5]]
const result = haveMinimumDensity(str, checks)
// result === true
```
