function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler alınmaya çalışılıyor...')

        if (data) {
            resolve('Veriler alındı')
        } else {
            reject('Veriler alınamadı')
        }
    })
}

function cleanData(receiveData) {
    return new Promise((resolve, reject) => {
        console.log('Veriler düzenleniyor...')

        if (receiveData) {
            resolve('Veriler düzenendi')
        } else {
            reject('Veriler düzenlenemedi')
        }
    })
}

// getData(true)
//     .then(result => {
//         console.log(result)
//         return cleanData(false)
//     })
//     .then(result => {
//         console.log(result)
//     }).catch(error => {
//         console.log(error)
//     })

// Async - Await

// async function processData() {
//     try {
//         const receivedData = await getData(true);
//         console.log(receivedData);
//         const cleanedData = await cleanData(false);
//         console.log(cleanedData)
//     } catch (error) {
//         console.log(error)
//     }

// }

// processData();


const books = [
    { name: 'Kitap 1', author: 'Yazar 1' },
    { name: 'Kitap 2', author: 'Yazar 2' },
    { name: 'Kitap 3', author: 'Yazar 3' },
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    });
}

const addBook = (newBook) => {
    const promise2 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve('books');
        reject('BIR HATA OLUŞTU')
    });
    return promise2;
}

// addBook({ name: 'Kitap 5', author: 'Yazar 5' })
//     .then(() => {
//         console.log('YENI LISTE');
//         listBooks();
//     }).catch((error) => {
//         console.log(error)
//     })

async function showBooks() {
    try {
        await addBook({ name: 'Kitap 12', author: 'Yazar 12' })
        listBooks();
    } catch (error) {
        console.log(error)
    }

}

showBooks()