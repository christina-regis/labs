## Web `Storage` APIs (`localStorage` and `sessionStorage`)

[Web Storage][mdn-storage] is a simple format for storing data in the 
browser. There are two stores available: `localStorage` and 
`sessionStorage`, both on the global object (`window`). Both of these 
stores implement the same API: simple key-value pairs, in which both the
keys and values must be strings. You can set values, get them, or remove
them. That's it!

[There are differences, however][so-storage]: `sessionStorage` is per 
domain, per tab/window, while `localstorage` is per domain, per browser.

Thus, `sessionStorage` is more volatile, basically a place to cache data
for a single instance of using a site, while `localStorage` sticks around
for that site for as long as you're using it from that browser.

# Learning Objectives

- Compare and contrast localStorage vs sessionStorage
- Store and retrieve data using localStorage
- cache a response using sessionStorage

# Activity

Read through the following two links on MDN

- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

Answer the following: 

- What's the syntax to store an item?
- What's the difference between localStorage and sessionStorage?

Read through the following link: 

https://developer.mozilla.org/en-US/docs/Web/API/Storage

Answer the following:

- What's the syntax to retrieve an item?
- What datatype are the key values stored as?
- What's the syntax to clear the storage?

# Practice

Checkout index.html. 
Create a todo list that saves to localstorage.

Bonus 
- implement a delete function to remove a todo from localStorage
- Create a button that triggers an ajax call to retrieve `/tasks.json` store the result to 
sessionStorage
- Any future requests to `/tasks.json` should retrieve the cached version in sessoinStorage

