# Lesson 2 — Testing Basics

Automated tests let you change code confidently.

## Install a test runner

```sh
pnpm add -D vitest
```

## Write your first test

```js
// sum.test.js
import { expect, test } from 'vitest'

function sum(a, b) {
  return a + b
}

test('adds two numbers', () => {
  expect(sum(1, 2)).toBe(3)
})
```

Run the suite:

```sh
pnpm exec vitest run
```

All tests should pass. You have reached the end of Chapter 2 — well done!
