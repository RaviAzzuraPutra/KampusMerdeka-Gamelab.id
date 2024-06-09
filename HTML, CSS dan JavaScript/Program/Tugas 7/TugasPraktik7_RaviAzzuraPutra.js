function modulus(jumlah) {
    let hasil = '';
    for (let i = 1; i <= jumlah; i++) {
        if (i % 15 === 0) {
            hasil += 'gamelab indonesia ';
        } else if (i % 3 === 0) {
            hasil += 'game ';
        } else if (i % 5 === 0) {
            hasil += 'gamelab ';
        } else {
            hasil += i + ' ';
        }
    }
    return hasil;
}

console.log('Hasil uji pertama:');
console.log(modulus(4));


console.log('Hasil uji kedua:');
console.log(modulus(10));


console.log('Hasil uji ketiga:');
console.log(modulus(15));
