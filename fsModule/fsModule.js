const fs = require('fs');


//DOSYA OKUMAK
fs.readFile('password.txt', 'utf8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
})

// DOSYA YAZMAK
fs.writeFile('example.json', '{"name": "Ali", "age": "13B"}', "utf-8", (err) => {
    if (err) console.log(err);
    console.log('File created succesfully')
})

// VERİ EKLEMEK 
fs.appendFile('example.txt', '\nKodluyoruz 2', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('Yeni veri eklendi.')
})

// Dosya Silmek
setTimeout(() => {
    fs.unlink('example.json', (err) => {
        if (err) console.log(err);
        console.log('Dosya silindi.')
    })
}, 2000);

fs.mkdir('uploads/img', { recursive: true }, (err) => {
    if (err) console.log(err)
    console.log('Klasör oluşturuldu')
})

setTimeout(() => {
    fs.rmdir('uploads', { recursive: true }, (err) => {
        if (err) console.log(err);
        console.log('Klasör silindi.')
    })
}, 2500);
