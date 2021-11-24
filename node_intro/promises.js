const promise1 = new Promise((resolve, reject)=> {
    resolve('Veriler alındı');
    reject('Bağlantı Hatası')
})

//console.log(promise1)

promise1
    .then(value => console.log(value))
    .catch(err => console.log(err))

    const books = [
        {name : 'Kitap 1', author: 'Yazar 1'},
        {name : 'Kitap 2', author: 'Yazar 2'},
        {name : 'Kitap 3', author: 'Yazar 3'},
    ];
    
    const listBooks = () =>{
        books.map(book => {
            console.log(book.name);
        });
    }
     
    const addBook = (newBook)=> {
        const promise2 = new Promise((resolve, reject)=> {
            books.push(newBook);
            //resolve('books');
            reject('BIR HATA OLUŞTU')
        });
        return promise2;
    }
    
    addBook({name: 'Kitap 5', author: 'Yazar 5'})
        .then(()=>{
            console.log('YENI LISTE');
            listBooks();
        }).catch((error)=> {
            console.log(error)
        })
     