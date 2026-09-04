# Things I learned, 09/03:

## Concatenation trick:

Instead of: 
```js
let usrName = "@kel"
let usrMsg = "Hello, " + usrName
```

Do 
```js
let usrName = "@kel"
let usrMsg = `Hello ${userName}!"
```

it's like doing that `print(f"")` trick on python.