var jmlAngkot = 10;
    angkotBeroperasi = 6;
    noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
        
    if(noAngkot <= 6) {
        console.log('Angkot No. '+ noAngkot +' beroperasi dengan baik.');
        } else if(noAngkot === 8 ) {
            console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
        } else {
            console.log('Angkot No. '+ noAngkot +' tidak beroperasi dengan baik.');
        }
}