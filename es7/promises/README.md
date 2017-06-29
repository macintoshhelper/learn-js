# Learn ES7 Promises and Async/Assert

## Get Started
Compatibility:
- NodeJS 0.12 or newer
- Chrome V32 or newer

## Promises

### Using a promise

Use a promise by method chaining `.then` and `.catch`

Minimum example:
```js
asyncFunction(input)
  .then((response) => {
    handleResponse(response);
  })
  .catch((reason) => {
    handleError(reason);
  });
```

### Wrapping Callbacks into a Promise Function

Return a promise object with `return new Promise(promiseCallback);`
Where promiseCallback uses a resolve, reject pattern.

Minimum example:
```js
function asyncFunction(input) {
  return new Promise((resolve, reject) => {
    http.request(options, (err, res) {
      if (err) return reject(err);
      
      return resolve(res);
    });
  });
}
```

MySQL example:
> Given an npm 'mysql' pool.getConnection method with a callback:

```js
function getConnectionAsync() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);

      return resolve(connection);
    });
  });
}

function makeQuery(query) {
  return new Promise((resolve, reject) => {
    getConnectionAsync().then((connection) => {
      connection.query(query, (err, results, fields) => {
        if (err) return reject(err);

        return resolve(results, fields);
      });
    }).catch((reason) => {
      reject(reason);
    });
  });
}
```
