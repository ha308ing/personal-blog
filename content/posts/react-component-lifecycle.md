+++
title = 'React Component Lifecycle'
date = 2023-12-24T21:58:01+04:00
draft = false
tags = ["react"]
+++

1. Mounting
2. Updating
3. Unmounting

\* is required, others will be called if defined

## Mounting phase - putting elements into the DOM

1. `constructor(props)`
   - called when component is initiated
   - set initial `state`
2. `getDerivedStateFromProps( props, state )`
   - set `state` based on the initial `props`
   - (updates `state` from initial before render)
   - returns state object
3. \*`render()`
4. `componentDidMount()`
   - run statements that requires that the component
     is already placed in the DOM

## Updating phase - when component is updated

1. `getDerivedStateFromProps( props, state )`
2. `shouldComponentUpdate()`
   - return a Boolean that specifies whether
     React should continue with the rendering or not
     default is true
3. \*`render()`
4. `getSnapshotBeforeUpdate( prevProps, prevState )`
   - gives access to the `props` and `state`
     before the update
     (i.e. even after the update, you can check what the values were before the update)
     requires `componentDidUpdate()` method
5. `componentDidUpdate()`

## Unmounting - when a component is removed from the DOM

1. `componentWillUnmount()`
   - is called when a component is about to be unmounted

## Example

```js
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.color };
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "blue" });
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const div1 = document.getElementById("div1");
    div1.textContent = `Before the update Header color was: ${prevState.color}`;
    return null;
  }

  componentDidUpdate() {
    const div2 = document.getElementById("div2");

    div2.textContent = `The updated Header color is: ${this.state.color}`;
  }

  componentWillUnmount() {
    alert("the component named Header is about to be unmounted");
  }

  handleClick = () => {
    this.setState({ color: "cyan" });
  };

  render() {
    return (
      <div style={{ color: this.state.color }} onClick={this.handleClick}>
        <h1 className="title">Header {this.state.color}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
```

## Source

- [w3schools.com](https://www.w3schools.com/react/react_class.asp)
