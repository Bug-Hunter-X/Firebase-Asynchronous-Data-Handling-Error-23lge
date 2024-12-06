The corrected version uses promises or async/await to correctly handle the asynchronous operation:

```javascript
// Correct asynchronous handling using async/await
async function getUserData() {
  const snapshot = await db.ref('users').once('value');
  const userData = snapshot.val();
  console.log(userData.name); // This will work correctly
}

getUserData();

console.log('This line runs after userData is populated.');
```

Alternatively, using `.then()`:

```javascript
// Correct asynchronous handling using .then()
db.ref('users').once('value').then(function(snapshot) {
  const userData = snapshot.val();
  console.log(userData.name); //This will work correctly
});

console.log('This line runs after userData is populated.');
```
This approach ensures that `userData` is only accessed within the callback or after the promise resolves, avoiding the `undefined` error.