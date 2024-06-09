const modulus = (jumlah) => {
    let output = " ";
    for (let i = 1; i <= jumlah; i++) {
        if (i % 15 === 0) {
            output += " Morata ";
        }
        else if (i % 3 === 0) {
            output += " Anos ";
        }
        else if (i % 5 === 0) {
            output += " Entar ";
        } else {
            output += i + " "
        }
    }
    return output.trim();
}

console.log(modulus(20));