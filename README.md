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
Async functions wait till funcion is executed. Async functions are used on time demanding tasks. So program will stop untill async. We cas use either .catch/.error or async/await to execute async functions. With async/await keywords it is good to use try&catch blocks to catch errors.

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
Above function does the same job but with better readibility. 