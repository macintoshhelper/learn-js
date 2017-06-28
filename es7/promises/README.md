# Learn ES7 Promises and Async/Assert

## Get Started
Compatibility:
- NodeJS 0.12 or newer
- Chrome V32 or newer

## Wrapping Callbacks into a Promise Function

MySQL example
```js
Given an npm 'mysql' pool.getConnection method with a callback:

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
