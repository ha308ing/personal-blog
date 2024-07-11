+++
title = 'JavaScript. Configuration File Types'
date = 2024-07-11T12:50:18+04:00
draft = false
tags = ["js"]
+++


To get suggestion in configuration files (like webpack, vite) use JSDoc `@type`, like:

```js
/** @type {import('webpack').Configuration} */

module.exports = { ... }
```

or

```js
/** @type {import('vite').UserConfig} */

export default { ... }
```

## Sources

- [vite docs](https://vitejs.dev/config/#config-intellisense)
- [jsdoc docs](https://jsdoc.app/tags-type)
