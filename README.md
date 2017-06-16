> Rejects a promise that takes too much time

[![Build Status](https://travis-ci.org/benjick/before-timeout.svg?branch=master)](https://travis-ci.org/benjick/before-timeout)


## Install

```
$ npm install before-timeout
```


## Usage

```js
const beforeTimeout = require('before-timeout');

// Print "good boy! 🐶"
beforeTimeout(Promise.resolve('good boy! 🐶'), 1000)
  .then(res => console.log(res))
  .catch(() => console.log('2 slow 🐾'))

// prints "2 slow 🐾""
const sleep = require('sleep-promise')
beforeTimeout(sleep(2000), 1000)
  .then(res => console.log('🐶'))
  .catch(() => console.log('2 slow 🐾'))

// async/await
try {
  const res = await beforeTimeout(Promise.resolve('good boy! 🐶'), 1000)
  console.log(res)
} catch (e) {
  console.log('2 slow 🐾')
}

```

## API

### beforeTimeout(promise, timeout)

Creates a race between the promise and the timeout. If the promise takes longer than the time the promise will be rejected.

## License

MIT © [Max Malm](https://maxmalm.se)
