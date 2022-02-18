var jmlAngkot = 10;
    angkotBeroperasi = 6;
    noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
        
    if(noAngkot <= 6) {
        console.log('Angkot No. '+ noAngkot +' beroperasi dengan baik.');
    } else if(noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log('Angkot No. '+ noAngkot +' tidak beroperasi dengan baik.');
        }
}

// nomor angkot 8 dan 10 sedang lembur, mengunakaan operasi logika "or" ( || )
// baris else if bacanya, angkot nomor 8 atau angkot nomor 10 sedang lembur ( baca peke logika dik !) 