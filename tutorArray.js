// Array
/* array adalah variabel
 yang dapat menampung lebih dari 1 nilai*/
// Array adalah kumpulan pasangan key dan nilai. Key aalah nilai pada array dengan tipe integer yang dimulai dari 0.

// penulisan :
// dibungkus menggunakan [] dan tanda kutip
var namaVariabel = ['nilai1','nilai2', 'nilai3'];
console.log(namaVariabel[2]);
// outputnya : nilai nilai3

// penulisan array bersarang atau array di salam array
var myArr = ['text',2,false,[3,4,5]];
console.log(myArr[3][1]);
//outpunya : 4

///////////////////////////////////////////////////////////

// Manipulasi array
// 1. Menambah isi array
var arr = [];
arr[0] = 'Andhika';
arr[1] = 'Rahmatullah';
arr[2] = 'Tambah Array';
console.log(arr);

//2. Menghapus isi array (dengan cara manual)
var arr = ['Andhika', 'Rahmatullah', 'Tampan'];
arr[2] = undefined;
console.log(arr); 

//3. Menampilkan isi array
var arr = ['Andhika', 'Rahmatullah', 'Tampan'];

for (var i = 0; i < 3; i++) 
{
    console.log(arr[i]);
}

// 3.2
var arr = ['Andhika', 'Rahmatullah', 'Tampan'];

for (var i = 0; i < arr.length; i++) 
{
    console.log('Mahasiswa ke - '+(i+1)+ arr[i]);
}
// menggunakan method .length agar mengitung otomatis.
// menggunakan (i+1) agar pengulangan mulai dari nomor 1 bukan 0, karena var i = 0 yang artinya mulai dari 0.


////////////////////////////////////////////////////////////

// array method atau method pada array
/* (1) .length 
        untuk mengetahui jumlah elemen pada array.*/

/* (2) .join
        untuk menggabungkan seluruh isi array dan mengubahnya menjadi string.*/
        var arr = ['Andhika','Rahmatullah','Tampan'];
        console.log(arr.join());
        
        
/* (3) .push, .pop, .shift, .unshift */
        //      push untuk menambahkan elemen array di akhir arraynya.  Bisa juga menambah langsung 2 elemen.
        var arr = ['Andhika','Rahmatullah','Tampan'];
        arr.push('Banget');
        console.log(arr.join());
        //      pop untuk menghilangkan elemen terakhir dari array.
        var arr = ['Andhika','Rahmatullah','Tampan'];
        arr.pop();
        console.log(arr.join());
        //      unshift untuk menambahkan elemen baru pada array. 
        var arr = ['Andhika','Rahmatullah','Tampan'];
        arr.unshift('Nama');
        console.loh(arr.join());
        //     shift untuk menghilangkan elemen pertama pada array.
        
/* (4) .slice, .splice */
        //      splice untuk menambahkan elemen baru di "tengah-tengah" pada array.
        //      splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...);
        var arr = ['Andhika','Rahmatullah','Tampan'];
        arr.splice(2, 0, 'Lala');
        console.log(arr.join());
        //      contoh (2)
        var arr = ['Andhika','Rahmatullah','Tampan'];
        arr.splice(1, 2, 'Lala');
        console.log(arr.join());
        //      slice untuk mengiris sebuah array menjadi array yang baru.
        //      slice(awal,akhir);
        //      index akhir dikurangi 1.
        var arr = ['Andhika', 'Rahmatullah', 'Tampan', 'Banget', 'hehe'];
        var arr2 = arr.slice(1,4);
        console.log(arr2.join());
/* (5) .forEach, .map*/
        //      forEach untuk melakukan looping pada array.
        var angka = [1,2,3,4,5,6,7,8];
        angka.forEach(function(e) {
            console.log(e);
        });
        //      forEach 2
        //      menampilkan indeksnya. i untuk indeks, e untuk elemen.
        var nama = ['Andhika','Rahmatullah', 'Tampan'];
        nama.forEach(function(e, i){
            console.log('Mahasiswa ke '+i+' adalah : '+e)
        });
        //      map sama dengan forEach namun mengembalikan array.
        var angka = [1,2,3,4,5,6];
        var angka2 = angka.map(function(e){
            return e*2;
        });
        console.log(angka2.join());
/* (6) .sort 
        untuk mengurutkan isi array.*/
        var angka = [1,4,6,7,3,9];
        angka.sort();
        console.log(angka.join);
        /* (7) .filter, .find */
        //      filter untuk mencari elemen pada array dan mengembalikan banyak nilai.
        var angka = [1,4,6,7,3,9];
        var angka2 = angka.filter(function(e){
            return e == 5;
            // boleh e > 5 untuk menghasilkan angka yang lebih besar dari 5.
        });
        console.log(angka2.join());
        //      find untuk mencari elemen pada array dan mengembalikan hanya 1 nilai. 
        var angka = [1,4,6,7,3,9];
        var angka2 = angka.find(function(e){
            return e > 5;
        });
        console.log(angka2);