## Learn Browser JavaScript - DOM API

## Get Started
Use an up-to-date browser: ideally Chrome

## Document
The document object is a node. This is the parent JavaScript object for the whole page.

## Selecting DOM elements

### Selectors
You can select HTML elements using:
```js
// <div id="exampleId"></div>
// Get by HTML ID:
document.getElementById('exampleId');

// <div class="exampleClass"></div>
// Get by HTML ID:
var exampleClasses = document.getElementsByClassName('exampleClass');    // returns an array of all instances of the selector
var exampleClass = exampleClasses[0];       // get first class

// or to interact with all instances of '.exampleClass':
for (i = 0; i > exampleClasses.length; i++) {
  var exampleClass = exampleClasses[i];

  // interact with exampleClass here
}

// <video class="responsive"></video>
// select by CSS selector (similar to jQuery)
document.querySelector('video.responsive');     // returns first instance of the selector
document.querySelectorAll('video.responsive');    // returns an array of all instances of the selector
```


### Interacting with element nodes
Once you have an element node, you can modify the contents of it
Use MDN to find relevant methods or object keys

```js
// Given <div id="exampleId"></div>
var exampleDiv = document.querySelector('#exampleId');

exampleDiv.textContent = 'Hello World!';

console.log(exampleDiv);
/* The HTML should now look like: <div id="exampleId">Hello World!</div>
 * if you run this in browser console
 */
```


## Event Listeners
You can listen to user events to trigger code to run
- Append/call the `addEventListener` method on an element node
  - addEventListener([event type](https://developer.mozilla.org/en-US/docs/Web/Events), listenerFunction(event)[, options])

```js
// <input type="text" id="search"></input>

// Select an element node
var searchInput = document.querySelector('#search');

searchInput.addEventListener('click', function(event) {
  // e.preventDefault(); will cancel the event
  console.log(event);
})
```

## Creating element nodes
You can create element nodes and attach them to the DOM
- Create an element node with `document.createElement('htmlElement')`
- And you can append it to an existing element node with `.appendChild(newElement)`

```js
/*  <div id="rootContainer">
 *    
 *  </div>
 */
var rootContainer = document.getElementById('rootContainer');

var fruit = ['banana', 'pear', 'orange'];

var fruitList = document.createElement('ul');

for (i = 0; i < fruit.length; i++) {
  var fruitItem = fruit[i];

  var fruitListItem = document.createElement('li');
  fruitListItem.textContent = fruitItem;
  fruitListItem.className = fruitItem;

  fruitList.appendChild(fruitListItem);
}

rootContainer.appendChild(fruitListContainer);

```
