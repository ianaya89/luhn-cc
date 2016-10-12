# 💳✅❌ luhn-cc

[![npm version](https://badge.fury.io/js/luhn-cc.svg)](https://badge.fury.io/js/luhn-cc)
[![CircleCI](https://circleci.com/gh/ianaya89/luhn-cc.svg?style=svg)](https://circleci.com/gh/ianaya89/luhn-cc)
[![Coverage Status](https://coveralls.io/repos/github/ianaya89/luhn-cc/badge.svg?branch=master)](https://coveralls.io/github/ianaya89/luhn-cc?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/ianaya89/luhn-cc/badges/score.svg)](https://www.bithound.io/github/ianaya89/luhn-cc)
[![bitHound Dependencies](https://www.bithound.io/github/ianaya89/luhn-cc/badges/dependencies.svg)](https://www.bithound.io/github/ianaya89/luhn-cc/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/ianaya89/luhn-cc/badges/devDependencies.svg)](https://www.bithound.io/github/ianaya89/luhn-cc/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/ianaya89/luhn-cc/badges/code.svg)](https://www.bithound.io/github/ianaya89/luhn-cc)


> JavaScript library to validate credit card numbers using luhn algorithm


## Installation
```bash
$ npm i -S luhn-cc
```

## Usage

```javascript
import luhnCC from 'luhn-cc';

luhnCC.isValid('378282246310005'); // true
luhnCC.isValid('378282246'); // false
```

## Tested Cards
| Credit Card Type     | Credit Card Number | Tested |
|----------------------|--------------------|--------|
| AMEX                 | 378282246310005    | ✅      |
| AMEX Corporate       | 378734493671000    | ✅      |
| Australian Bank Card | 5610591081018250   | ✅      |
| Diners Club          | 30569309025904     | ✅      |
| Discover             | 6011111111111117   | ✅      |
| JCB                  | 3530111333300000   | ✅      |
| Master Card          | 5555555555554444   | ✅      |
| VISA                 | 4111111111111111   | ✅      |
| Switch/Solo          | 6331101999990016   | ✅      |

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
