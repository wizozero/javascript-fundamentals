# JavaScript Utility Library

Collection of useful utility functions built with modern ES6+ JavaScript.

## Functions

- **capitalize(str)** - Capitalizes first letter of a string
- **unique(arr)** - Returns array with unique values (removes duplicates)
- **groupBy(arr, key)** - Groups array of objects by a property
- **deepClone(obj)** - Creates a shallow copy of an object
- **pick(obj, keys)** - Selects specific properties from an object
- **delay(ms)** - Creates a Promise-based delay
- **chunk(arr, size)** - Divides array into chunks of specified size
- **flatten(arr)** - Flattens array one level deep

## Usage

```javascript
const { capitalize, unique, groupBy } = require('./utils.js')

// Capitalize
capitalize('hello') // 'Hello'

// Unique values
unique([1, 2, 2, 3]) // [1, 2, 3]

// Group by property
const people = [
	{ name: 'John', age: 20 },
	{ name: 'Jane', age: 20 },
	{ name: 'Bob', age: 30 },
]
groupBy(people, 'age')
// { '20': [{...}, {...}], '30': [{...}] }
```

## Running Tests

```bash
node test.js
```

## Technologies

- JavaScript ES6+
- Node.js

---
