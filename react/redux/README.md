# Learn React Redux

## Setup
Run these bash commands:
```sh
npm i -s redux react-redux
```


## How Redux works

Everything is stored in a `store` as **one** large JavaScript object. Each store child such as 'users', 'profiles' is stored as a separate reducer.

### Reducers
File structure:
  - index.js
  - reducers/
    - index.js
    - users.js

Where each reducer (`users.js`) has this format:
```js
export default (state = {}, action) => {
  switch(action.type) {
    case ADD_USER:
      return {
        ...state, // Take existing state and change it in below line(s)
        users: (state.users || []).concat(action.payload.user), // Take existing users array and if null, create an empty users array -> then concat the new user from action.payload
      };
    default:
      return state;
  }
}
```

and `reducers/index.js` has this format:
```js
import { combineReducers } from 'redux';
import Users from './users';  // Where users is the reducer name

const allReducers = combineReducers({
  users: Users, // Where users is the reducer name
});

export default allReducers;
```
with each reducer listed in this file and mapped into the 'global' store object.


and `index.js` registers the store like this:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { allReducers } from './reducers';
import App from './components/App';

const store = createStore(allReducers);

// Rest of the file below
```

where createStore is imported from 'redux' with `import { createStore } from 'redux'`
and the store object is created from 'allReducers' with `const store = createStore(allReducers)`
