/*

1. (if else)

if (kondisi) {
    aksi 1
} else {
    aksi 2
}

if (kondisi 1) {
    aksi 1
} else if (kondisi 2) {
    aksi 2
} else {
    aksi 3
}

2. (switch)

switch(ekspresi){
    case "nilai 1":
        aksi 1
    [break;]
    case "nilai 2":
        aksi 2
    [break;]
    case "nilai n":
        aksi n
    [break;]
    default:
        aksi default
    [break]
}

*/

// Contoh 1
var angka = 1;
if(angka === 1) {
    alert('anda memasukan angka 1');
}

// Contoh 2
var angka = 2;
if(angka < 5) {
    alert(angka + ' lebih kecil dari 5');
}

// Contoh 3 
var angka = prompt('Masukan angka : ');

if(angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP.');
} else {
    alert(angka +' adalah bilangan GANJIL');
}

// Contoh 4
var angka = prompt('Masukan angka : ');

if (angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP.');
} else if (angka % 2 == 1){
    alert(angka +' adalah bilangan GANJIL');
} else {
    alert('Yang anda masukan bukan angka.')
} 

// Contoh Switch 1
    var item = prompt('masukan nama makanan / minuman : (cth: nasi, daging, susu, hamburger, softdrink)');
    
    switch(item) {
        case 'nasi' :
            alert('makanan / minuman SEHAT!');
            break;
            case 'daging' :
            alert('makanan / minuman SEHAT!');
            break;
            case 'daging' :
            alert('makanan / minuman SEHAT!');
            break;
            case 'susu' :
            alert('makanan / minuman SEHAT!');
            break;
            case 'hamburger' :
            alert('makanan / minuman TIDAK SEHAT!');
            break;
            case 'softdrik' :
            alert('makanan / minuman TIDAK SEHAT!');
            break;
            default :
            alert('anda memasukan nama makanan / minuman yang salah!');
        }
        
        // Jika mengguanakan switch, case-nya harus diisi dengan nilai variabel yang tepat.
        
        
        // Contoh Switch 2
            var item = prompt('masukan nama makanan / minuman : (cth: nasi, daging, susu, hamburger, softdrink)');
        
        switch(item) {
            case 'nasi' :
            case 'daging' :
            case 'daging' :
            case 'susu' :
            alert('makanan / minuman SEHAT!');
            break;
            case 'hamburger' :
            case 'softdrik' :
            alert('makanan / minuman TIDAK SEHAT!');
            break;
            default :
            alert('anda memasukan nama makanan / minuman yang salah!');
        }