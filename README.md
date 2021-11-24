# NODE.js

### Promises
Promise başarı ve ya hata durumuna göre iki durum çevirir. 
Resolve => then
Rehect => catch

``` js
const promise1 = new Promise((resolve, reject)=> {
    resolve('Veriler alındı');
    reject('Bağlantı Hatası')
}) 

promise1
    .then(value => console.log(value))
    .catch(err => console.log(err))
```

### Callbacks
Callback is a calling a function inside a function
``` js
const listBooks = () =>{
    books.map(book => {
        console.log(book.name);
    });
}
 
const addBook = (newBook, callback)=> {
    books.push(newBook);
    callback();
}

addBook({name: 'Kitap 5', author: 'Yazar 5'}, listBooks);
```
### Async 
Async functions wait till funcion is executed. Async functions are used on time demanding tasks. So program will stop untill async. We cas use either .then/.error or async/await to execute async functions. With async/await keywords it is good to use try&catch blocks to catch errors.

``` js
getData(true)
    .then(result => {
        console.log(result)
        return cleanData(false)
    })
    .then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
```
Above we have a async function sequence. They will be triggered respectivey. and we catch error with .catch. 

``` js
async function processData() {
    try {
        const receivedData = await getData(true);
        console.log(receivedData);
        const cleanedData = await cleanData(false);
        console.log(cleanedData)
    } catch (error) {
        console.log(error)
    }
}
```
Above function does the same job but with better readibility than .then/.catch

### Event-loop

![plot](./images/JSarchitecture.png)


### Modül
``` js
function showPrimeNumbers(lownumber, highNumber) {
    for (let i =lownumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j ++) {
            if( i % j ===0 && j !==i) {
                isPrime = false
            }
        }

        if(isPrime) {
            console.log(i);
        }
    }
}

module.exports = showPrimeNumbers 
```
Burada fonksiyonu diğer dosyaların kullanımına açıyoruz.

``` js
import {showPrimeNumbers, showFivePrimes } from './primeNumbers.js';

showPrimeNumbers(14, 28);
showFivePrimes();
```
Burada export edilen modül imort ediliyor. 

### FS(file system) Module

```js
fs.readFile('password.txt', 'utf8', (err, data) =>
fs.writeFile('example.json', '{"name": "Ali", "age": "13B"}', "utf-8", (err) =>
fs.appendFile('example.txt', '\nKodluyoruz 2', 'utf8', (err) =>
fs.unlink('example.json', (err) =>
fs.mkdir('uploads/img', { recursive: true }, (err) =>
fs.rmdir('uploads', { recursive: true }, (err) =>

DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true 
}) instead
```

### Node Modules
`npm init` create a new node module
`npm i packageName`
`npm i` install dependencies in package.json
``` js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index"
  },
```
Add your own scripts and use it like 
`npm start` It triggers "node index.js"