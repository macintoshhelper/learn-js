# React Component

## Usage:
```js
import React from 'react'

class ClassName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor
    };
  }

  render() {
    
  }
}
```

### Where:
- **`class`** is a *template definition of the methods and variables in a particular kind of object*
- **`extends React.Component`** is inheriting React's `Component` class

- `constructor` - in OOP - is a function that is called during initialisation of an object.
  - The `super` keyword calls the *constructor* of the parent *class*
