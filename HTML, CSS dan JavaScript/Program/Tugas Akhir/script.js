const MenambahkanPasien = (event) => {
    event.preventDefault();

    let id = document.getElementById("id").value;
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let penyakit = document.getElementById("penyakit").value;
    let NoRuang = document.getElementById("noRuang").value;
    let BPJS = document.getElementById("bpjs").value;
    let dateIn = document.getElementById("dateIn").value;
    let dateOut = document.getElementById("dateOut").value;

    let pasienBaru = {
        id: id,
        nama: nama,
        alamat: alamat,
        penyakit: penyakit,
        NoRuang: NoRuang,
        BPJS: BPJS,
        dateIn: dateIn,
        dateOut: dateOut,
    };

    const DataPasien = JSON.parse(localStorage.getItem('data pasien')) || [];

    DataPasien.push(pasienBaru);

    localStorage.setItem('data pasien', JSON.stringify(DataPasien));

    document.getElementById("FormMenambahkanPasien").reset();

    TampilaknDataPasien();
}

const TampilaknDataPasien = () => {
    let dataPasien = JSON.parse(localStorage.getItem('data pasien')) || [];

    let output = document.getElementById("output");

    output.innerHTML = "";

    dataPasien.forEach(function (pasien) {
        output.innerHTML += '<p><strong>ID Pasien:</strong> ' + pasien.id + '<br>' +
            '<strong>Nama:</strong> ' + pasien.nama + '<br>' +
            '<strong>Alamat:</strong> ' + pasien.alamat + '<br>' +
            '<strong>Penyakit:</strong> ' + pasien.penyakit + '<br>' +
            '<strong>No Ruang:</strong> ' + pasien.NoRuang + '<br>' +
            '<strong>BPJS:</strong> ' + pasien.BPJS + '<br>' +
            '<strong>Tanggal Masuk:</strong> ' + pasien.dateIn + '<br>' +
            '<strong>Tanggal Keluar:</strong> ' + pasien.dateOut + '</p>';
    });
}

TampilaknDataPasien();

const CariPasien = () => {
    let idCari = document.getElementById("cariPasienInput").value;
    let dataPasien = JSON.parse(localStorage.getItem('data pasien')) || [];
    let hasilPencarianDiv = document.getElementById("hasilPencarianPasien");

    let pasienDitemukan = dataPasien.find(pasien => pasien.id === idCari);

    if (pasienDitemukan) {
        hasilPencarianDiv.innerHTML = `
            <p><strong>Data Pasien Ditemukan:</strong></p>
            <p><strong>Nama:</strong> ${pasienDitemukan.nama}</p>
            <p><strong>Alamat:</strong> ${pasienDitemukan.alamat}</p>
            <p><strong>Penyakit:</strong> ${pasienDitemukan.penyakit}</p>
            <button onclick="EditPasien('${pasienDitemukan.id}')">Edit</button>
            <button onclick="HapusPasien('${pasienDitemukan.id}')">Delete</button>
        `;
    } else {
        hasilPencarianDiv.innerHTML = "<p>Data pasien tidak ditemukan.</p>";
    }

    hasilPencarianDiv.style.display = "block";
}

const EditPasien = (id) => {
    let dataPasien = JSON.parse(localStorage.getItem('data pasien')) || [];
    let pasien = dataPasien.find(pasien => pasien.id === id);

    if (pasien) {
        let newData = prompt("Masukkan data pasien baru:", JSON.stringify(pasien));

        if (newData !== null) {
            try {
                newData = JSON.parse(newData);

                Object.assign(pasien, newData);

                localStorage.setItem('data pasien', JSON.stringify(dataPasien));

                alert(`Data pasien dengan ID ${id} berhasil diubah.`);

                TampilkanDaftarPasien();
            } catch (error) {
                alert("Format data tidak valid!");
            }
        }
    } else {
        alert(`Data pasien dengan ID ${id} tidak ditemukan.`);
    }
}

const HapusPasien = (id) => {
    let konfirmasi = confirm("Apakah Anda yakin ingin menghapus pasien ini?");

    if (konfirmasi) {
        let dataPasien = JSON.parse(localStorage.getItem('data pasien')) || [];
        let index = dataPasien.findIndex(pasien => pasien.id === id);

        if (index !== -1) {
            dataPasien.splice(index, 1);

            localStorage.setItem('data pasien', JSON.stringify(dataPasien));

            alert(`Data pasien dengan ID ${id} berhasil dihapus.`);

            TampilkanDaftarPasien();

            let hasilPencarianDiv = document.getElementById("hasilPencarianPasien");
            hasilPencarianDiv.style.display = "none";
        } else {
            alert(`Data pasien dengan ID ${id} tidak ditemukan.`);
        }
    }
}

