+++
title = 'React Hooks'
date = 2023-12-24T22:29:46+04:00
draft = false
tags = ["react"]
+++

There are 3 rules for hooks:

1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional

### useState

to track state in a component

```js
const [state,setState] = useState(<initial state>)
updateState(newState) = setState( previousState => newState )
```

### useEffect

to perform side effects (e.g. fetching data, directly updating the DOM, and timers.)

`useEffect(<function>, <dependency>)`

### Context

`createContext`, `useContext`, `<context-name>.Provider`

to manage state globally

### useRef

allows to persist values between re-renders

to store mutable values and not to cause re-renders on updates

to have direct access to the DOM

### useReducer

is like `useState`, but allows to implement custom state logic

```js
useReducer(<reducer>, <initial state>)
returns [<state>, <dispatch>]
```

### useCallback

returns a memoized callback function (that doesn't need to be recalculated)

to isolate resource intensive functions so that they will not automatically run on every render

only runs when one of its dependencies update

function are recreated on each render, to prevent the function from being recreated unless necessary, use `useCallback`

### useMemo

returns a memoized value

## Source

- [w3schools.com](https://www.w3schools.com/react/react_hooks.asp)
