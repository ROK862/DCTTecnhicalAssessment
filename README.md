# DCT Tecnhical Assessment
Deep-catch Namibia Holdings - Developer Technical Assessment
Author: Robbins J. Kariseb, ALB Harvard. Senior Software Engineer

# Assessment Criteria:

Write a function that:
- retrieves the colors from the COLORS endpoint (use [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch]))
- filters the returned colors by:
  - name contains string (case insensitive)
  - hex code (without '#')
  - it contains a complementary color whose name contains a string (case insensitive)
  - it contains a complementary color whose hex code equals a given hex code (without '#')
  
  Examples:
  - give me all the colors that contain 'Blue' in their name
  - give me all the colors with hex code '9FAC58'
  - give me all the colors that have a complementary color whose name contains 'Blue'
  - give me all the colors that have a complementary color whose hex = '9FAC58'
 
```JS
// Example
// Calls to the fetchColors function are handled on an async thread.

const result = await fetchColors({
  name: 'Almond',
});

// should return 
[{
  "hex": "EFDECD",
  "name": "Almond",
  ...
}];
```

- Only ES6 syntax allowed (convert any non ES6 syntax to ES6)
- Provide documentation in the code to make it easy to follow
- Feel free to add more unit tests

Commands for running:
- `npm install` to install dependencies
- `npm start` runs `index.js`
- `npm test` runs tests in `main.test.js`

