var jmlAngkot = 10;
    angkotBeroperasi = 6;
    noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
        
    if(noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot No. '+ noAngkot +' beroperasi dengan baik.');
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log('Angkot No. '+ noAngkot +' tidak beroperasi dengan baik.');
        }
}

// nomor angkot 5, 8 dan 10 sedang lembur, mengunakaan operasi logika "or" ( || )
// baris else if bacanya, angkot nomor 8 atau angkot nomor 10 sedang lembur atau angkot nomor 5 ( baca peke logika dik !)

// nomor angkot 1, 2, 3, 4, dan 6 beroperasi dengan baik, mengunakaan operasi logika "an" ( && )
// kenapa pakai and? karena selama nilai setelah 'and' masih masuk dalah nilai variabel noAngkot (yaitu 6), operasi logika menghasilkan 2 true (5 adalah angka 1<=6).
// baris if bacanya, angkot nomor 1 sampai kurang dari sama dengan 6 dan angkot nomor tidak sama dengan 5 (atau noAngkot 1 - 6 , kecuali 5) beroperasi dengan baik. ( baca peke logika dik !) 

 