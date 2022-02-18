/* 
Ada 3 jenis pop up box yaitu : 
- alert
- prompt
- confirm
*/

// alert
alert('hello dika !');

// prompt
prompt('masukan nama !');

// confirm
confirm('kamu yakin ?');

// menjadikan prompt sebagai variabel
var nama = prompt('masukan nama !');
alert('nama kamu adalah '+nama);

// interaksi confirm menggunakan if else
var tes = confirm('kamu yakin ?');
if(tes === true) {
    alert('Kamu menekan OK');
} else {
    alert('Kamu mekean CANCEL');
}

// pengulangan pop up box
alert('Selamat Datang !');
var lagi = true;

while(lagi) {
    var nama = prompt('Masuka nama:');
    alert('halo '+nama);

    lagi = confirm('coba lagi ?');
}

alert('Terima Kasih !')