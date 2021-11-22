// let x = 5;
// console.log(5);

// setTimeout(() => {
//     x += 5
//     console.log(x); 
// }, 3000);

// x += 5;
// console.log(x)

const books = [
    {name : 'Kitap 1', author: 'Yazar 1'},
    {name : 'Kitap 2', author: 'Yazar 2'},
    {name : 'Kitap 3', author: 'Yazar 3'},
    {name : 'Kitap 4', author: 'Yazar 4'}
];

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
 