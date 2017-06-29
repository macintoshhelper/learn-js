# Learn browser API / XHR

## Get Started
Use a browser...

## XHR Object
Browsers have an XMLHttpRequest object which provides methods that can be used to send `GET` or `POST` requests to a server.

```js
var xhr = new XMLHttpRequest();
console.log(xhr);
```

## TODO

## Creating an XHR callback method
This allows you to easily send XHR requests by using a modular function.

```js
function makeRequest(method, url, callback, value) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) { // Where readyState means the request has been sent to and response received from the server and xhr.status is the status code from the server's response
      callback(xhr.responseText);
    }
  }
  xhr.open(method, url);
  xhr.send(value);  // value should be null/falsy for GET requests
}
```

### Calling the makeRequest callback function
```js
makeRequest('GET', 'https://127.0.0.1:8000/api/url', function(responseText) {
  var response = JSON.parse(responseText);

  console.log(response);
})
```
