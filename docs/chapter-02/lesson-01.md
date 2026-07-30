# Lesson 1 — Configuration

Good projects use explicit configuration rather than magic defaults.

## Create a config file

```js
// config.js
export default {
  port: 3000,
  debug: false,
}
```

## Load it at runtime

```js
import config from './config.js'

console.log(`Server will run on port ${config.port}`)
```

Use environment variables to override values without editing source files.
