# React Native Web Project

1. 
```sh
create-react-app my-hybrid-app && cd my-hybrid-app

npm install --save-dev babel-plugin-transform-object-rest-spread babel-plugin-transform-react-jsx-source flow-bin react-test-renderer

npm install --save react react-native react-native-web
```

2. Create `.babelrc`:
```json
{
  "presets": ["react-native"],
  "env": {
    "development": {
      "plugins": ["transform-object-rest-spread", "transform-react-jsx-source"]
    }
  }
}
```

3. Create `.watchmanconfig`:
```js
{}
```
