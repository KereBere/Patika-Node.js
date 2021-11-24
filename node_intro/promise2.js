const func = async () => {
    return 10 // Buradaki ifade  return Promise.resolve(10) ile aynıdır. Buradaki 10 Promise yapısındadır.
}

func().then(console.log) // Sonucu yakalamak için .then() yapısı kullanılmaktadır.

const funcAsync = async () => {
    let promise = new Promise((resolve, reject) => {
        //setTimeout(() => resolve("Tamamlandı!"), 2000);
        setTimeout(() => reject('Reddedildin!'), 2000);
    });

    try {
        let result = await promise; // Promise dönene kadar sonuç bekleniyor.
        console.log(result); // "Tamamlandı!" 
    } catch (error) {
        console.log(error)
    }
}
funcAsync();