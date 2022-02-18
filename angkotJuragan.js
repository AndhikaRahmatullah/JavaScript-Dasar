var penumpang = [];
var tambahPenumpang = function(namapenumpang, penumpang){
// jika pemumpang kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namapenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for ( var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namapenumpang
                // kembalikan isi aray & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namapenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namapenumpang + ' sudah ada di dalam angkot.');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
                // jika seluruh kursi terisi
            else if ( i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namapenumpang);
                // kembalikan isi array & keluar dari function 
                return penumpang;
            }
        }
    }

}
var hapusPenumpang = function(namapenumpang, penumpang) {
    // jika angkot kosong 
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan
        console.log('Angkot masih kosong.');  
        // tidak mungkin ada penumpang turun
        // kembalikan isi array dan keluar dari function
        return penumpang;
    // else
    } else {
    // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {    
            // jika nama penumpang sesuai
            if (penumpang[i] == namapenumpang) {
                // hapus penumpang dengan mengubah namanya, menjadi undefined
                penumpang[i] = undefined;   
                // kembalikan isi array dan keluar dari function
                return penumpang;
            // jika tidak ada nama yang sesuai
            } else if ( i == penumpang.length-1) {
            // kembalikan pesan kesalahannya
            console.log(namapenumpang+' tidak ada di dalam angkot');
            }            
        }
    }
// kembalikan isi array dan keluar dari function
return penumpang;
}
