# Express.js Route Handler: Missing Null/Undefined Check

This repository demonstrates a common error in Express.js route handlers: failing to check for `null` or `undefined` values when fetching data from a database or other source.  The bug can lead to unexpected behavior or application crashes.

## Bug Description
The `bug.js` file contains an Express.js route that fetches user data. If the user data is not found, it correctly returns a 404 error. However, it doesn't check for `null` or `undefined` before sending the `userData`. If the query returns `null` or `undefined`, this will result in an error.

## Bug Solution
The `bugSolution.js` file provides a corrected version of the route handler. It explicitly checks if `userData` is `null` or `undefined` before sending the response. This ensures that the application behaves gracefully even when no data is found.