// Pengulangan while dan for

// (while) 1
var nilaiAwal = 1;
while(nilaiAwal <= 5) {
    console.log('Halo Dika');
    nilaiAwal++;
}
// ++ disini artinya incemernt atau penambahan
//      ++ artinya nilaiAwal ditambah 1 setiap pengulangan
// -- artinya decrement atau pengurangan
// console.log artinya menampilkan di Console Log pada Chrome

// (while) 1.2
// function dengan pengulangan while
var inName = prompt('Hai, masukan nama kamu ! ');
alert('Terimakasih '+inName +', kamu telah masuk ke aplikasi kami.' );

var start = function() {

    if(b === '+') {
        total = a + c;
        alert(a+' + '+c+' = '+total);
        return;
    } else if (b === '-') {
        total = a - c;
        alert(a+' - '+c+' = '+total);
        return;
    } else if (b === ':') {
        total = a / c;
        alert(a+' : '+c+' = '+total);
        return;
    } else if (b === 'x') {
        total = a * c;
        alert(a+' x '+c+' = '+total);
        return;
    } else {
        alert('Masukan Operasi dengan benar');
        return; 
    }
}

alert('Selamat datang di kalkulator sederhana!');
// disini terjadi pengulangan
var again = true;
while(again) { 
    var a = Number(prompt('Masukan nilai pertama'));
    var b = prompt('Pilih operasi ( + / - / : / x )');
    var c = Number(prompt('Masukan nilai kedua:'));
    start();

    again = confirm('ingin meghitung lagi?');
}


// (for)

for (nilaiAwal = 1; nilaiAwal <= 5; nilaiAwal++){
    console.log('Halo Dika')
}

// (for) cara 2

var string = '';
for (var i = 0; i < 10; i++ ) {
    for (var j = 0; j < 7; j++){
        s += '*';
    }
    s += '\n';
}
console.log(string);

