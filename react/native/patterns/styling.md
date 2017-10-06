# React Native Styling Pattern

## Defining a style:
React Native exposes a `StyleSheet` object as an abstraction for styling.

This is best practise because:
  - **Performance:**
    - Making a stylesheet from a style object makes it possible to refer to it by ID instead of creating a new style object every time.
    
### Patterns:

**Defining a stylesheet**

```js
import { StyleSheet } from 'react-native/*-web*/'

const styles = StyleSheet.create({
  styleName: {
    // style key/value pairs such as paddingTop: 10
  }
};
```

**Using a stylesheet**

```jsx
import { Text } from 'react-native/*-web*/'

<Text style={styles.styleName}>Some text/string here<Text>
```
    
## References / Resources:
- [React Native Doc: StyleSheet](https://facebook.github.io/react-native/docs/stylesheet.html)
