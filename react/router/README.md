# Learn React Router

## Get Started

### Setup:
```sh
npm i -s react-router-dom
```

### Imports:
Import into `index.js`
```js
import { Router, BrowserRouter, Route, IndexRoute, browserHistory } from 'react-router-dom';
```


### Minimum Usage:
```js
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/other-route" component={OtherRoute} />
    </div>
  </BrowserRouter>
))
```
