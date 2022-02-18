// object {}
// di dalam propreti menggunakan titik dua (:) BUKAN sama dengan (=).

// dalam object mahasiswa terdapat properti yaitu "nama", "umur" dan "semester".
var mahasiswa = {
    nama : "Andhika Rahmatullah",
    umur : 20,
    semester : 6,
    // dan ada juga method yaitu "sapa"
    sapa : function() {
        return 'Hi nama saya '+ this.nama + ' usia saya ' + this.umur + ' tahun, sekarang saya semester '+ thid.semester; 
    }
}

// contoh 1 menggunakan object literal
var mhs = {
    nama : "Andhika Rahmatullah",
    umur : 20,
    semester : 6,
    ips : [3.00, 3.50, 4.00],
    // membuat object didalam object
    alamat : {
        jalan : "Tentara Pelajar",
        kelurahan : "Kedung Jaya",
        Kecamatan : "Tanah Sareal" 
    }
}

// cara 2 menggunakan function declaraton
// lebih ringkas, functionnya dibuat hanya sekali tapi objeknya dapat di buat berulang ulang.
function buatObjectMahasiswa(nama, umur, semester) {
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.semester = semester;
    return mhs; 
}

var mhs1 = buatObjectMahasiswa('Andhika Rahmatullah', 20, 6);

var mhs2 = buatObjectMahasiswa('Olivia', 19, 6);


// cara 3 menggunakan function constuctor
// nama function diawali huruf besar(opsional) hanya untuk membedakan bahwa ini constructor. 
function Mahasiswa(nama, umur, semester) {
    this.nama = nama;
    this.umur = umur;
    this.semester = semester;
}

var mhs4 = new Mahasiswa ("Syifa", 20, 6);

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// this

// cara 1 - funciton declaration
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
// this mengembalikan object global

// cara 2 - object literal
var obj = {a: 10, nama : 'andhika'};
obj.halo = function() {
    console.log(this);
    console.log('halo');
}
obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constuctor
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// contoh kasus
// method adalah function didalam construktor


function Angkot (sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // menambahkan penumpang yang naik
    // method
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // mengurangi penumpang yang turun dan bayar
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            console.log('angkot masih kosong.');
            // menggunakan false agar keluar dari methodnya
            return false;
        }

        for (var i = 0; i < penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Andhika', ['Cimanggu', 'PS Anyar'], [], 0);