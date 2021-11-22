# NODE.js

## Promises
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

