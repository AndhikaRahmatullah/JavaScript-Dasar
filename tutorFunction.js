// ADA DUA JENIS FUNCTION yaitu: function declaration dan function expression

// parameter boleh lebih dari 1.
// fungsinya return untuk mengembalikan hasil dari function yang dibuat. BOLEH JUGA JIKA TIDAK MENGGUNAKAN RETURN.
// setelah membuat function, kita membuat argument untuk menapilkan sekaligus mengirim nilai kepada parameter sebelumnya. 

// function expression
// mengunakan function expression lebih powerfull dan untuk function yang lebih kompleks.

// 2.1 function exprssion

var tampilPesan = function(nama) {
    alert('halo '+ nama);
}
tampilPesan('andhika');

// 2.2 function exprssion
var nama = function(n) {
    alert('nama kamu adalah '+n);
}
nama(prompt('Nama kamu adalah: '));
/* artinya variabel function 'nama' mencari nilai parameter 'n', 
dan untuk memasukan nilai serta memunculkannya 
kita hanya perlu menulis nama variabel functionnya DILUAR BLOK "{ }" functionnya itu sendiri*/
// wajib akhir dengan memanggil variabel function agar code berjalan dengan sempurna.  

// 2.3 function expression
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
var a = Number(prompt('Masukan nilai pertama'));
var b = prompt('Pilih operasi (+ / - / : / x)');
var c = Number(prompt('Masukan nilai kedua:'));
start();
// wajib akhir dengan memanggil variabel function agar code berjalan dengan sempurna. 

//===========================================================================================//

// function declaration

// contoh 2.1 membuat funtion declaration
function namaFunction(parameter) {
    alert('halo ' + parameter);
}
namaFunction('andhika');


// contoh 2.2 membuat function declaration 
function jumlahVolumeDuaKubus(a,b) {
    
    var volumeA,
        volumeB,
        total;
        
        volumeA = a * a * a;
        volumeB = b * b * b;
    
        total = volumeA + volumeB;
    
    return total;
}

jumlahVolumeDuaKubus(8, 3);

// contoh 2.3 membuat function declaration
function jumlah(a, b) {
    
    return a + b;
}

var a = Number(prompt('Masukan nilai 1 :'));
var b = Number(prompt('Masukan nilai 2 :'));
var hasil = jumlah(a, b);

console.log(hasil);
Number(alert(a+' + '+b+' = '+hasil))

// contoh 2.4 membuat function declaration 
function tambah (a, b) {
    return a + b;
}
function kali (a, b) {
    return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);


// contoh 2.5 membuat function declaration
function tambah() {
    
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4,5);
console.log(coba);
// menggunakan variabel arguments.
// lebih fleksibel agar tidak perlu mengubah2 functionnya
// variabel arguments akan mengabaikan parameter.


// kali ini menggunakan rekursif untuk menggantikan looping

// contoh 2.6 membuat function declaration
// loopingnya
function cetakAngka(n) {
    for (var i = n; i >= 1; i--) {
        console.log(i);
    }
}
// rekursifnya
function cetakAngka(n) {
    if (n === 0) return;
    console.log(n);
    cetakAngka(n-1);
}

// loopingnya
function faktorial(n){
    var hasil = 1;
    for (var i = n; i > 0; i--){
        hasil *= i
    }
    return hasil;
}
// rekursifnya
function faktorial(n){
    if (n === 0) return 1;
    return n * faktorial(n-1);
}