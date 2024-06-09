let kawasan = "perumahan";//gunakan huruf krcul
let luasTanah = 900;//gunakan number
let luasBangunan = 900;//gunakan number
let fasilitas = "parkir luas";//gunakan huruf kecil

if (kawasan == "banjir" || kawasan == "longsor" || kawasan == "pabrik") {
    console.log("kawasan rumah tidak memenuhi kriteria");
} else {
    console.log("kawasan rumah memenuhi kriteria");
}

if (luasTanah >= 800 && luasBangunan >= 400) {
    console.log("luas rumah memenuhi kriteria");
} else {
    console.log("luas rumah tidak memenuhi kriteria");
}

if (fasilitas == "kolam renang" || fasilitas == "parkir luas" || fasilitas == "kebun") {
    console.log("fasilistas rumah memenuhi kriteria");
} else {
    console.log("fasilitas rumah tidak memenuhi kriteria");
}

