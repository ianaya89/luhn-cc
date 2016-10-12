# luhn-cc

[![CircleCI](https://circleci.com/gh/ianaya89/luhn-cc.svg?style=svg)](https://circleci.com/gh/ianaya89/luhn-cc)
[![Coverage Status](https://coveralls.io/repos/github/ianaya89/luhn-cc/badge.svg?branch=master)](https://coveralls.io/github/ianaya89/luhn-cc?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/ianaya89/luhn-cc/badges/score.svg)](https://www.bithound.io/github/ianaya89/luhn-cc)
[![bitHound Dependencies](https://www.bithound.io/github/ianaya89/luhn-cc/badges/dependencies.svg)](https://www.bithound.io/github/ianaya89/luhn-cc/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/ianaya89/luhn-cc/badges/devDependencies.svg)](https://www.bithound.io/github/ianaya89/luhn-cc/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/ianaya89/luhn-cc/badges/code.svg)](https://www.bithound.io/github/ianaya89/luhn-cc)


> JavaScript library to validate credit card numbers using luhn algorithm

## Getting Started

### Installation
```bash
$ npm i -S luhn-cc
```

### Usage

```javascript
  import luhnCC from 'luhn-cc';

  luhnCC.isValid('378282246310005'); // true
  luhnCC.isValid('378282246'); // false
```

### Tested Cards

## Development Setup

```bash
# install dependencies
$ npm install

# dev mode
$ npm run dev

# test
$ npm run test

# build
$ npm run build
```
