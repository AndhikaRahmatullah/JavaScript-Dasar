// Menggunakan arrow function untuk menulis sintak dengan lebih pendek
// hanya berlaku untuk function yang dimasukan kedalam variabel

// Tanpa arrow function
let hello = function() {
	return "Hello World!";
}
// dengan arrow function
// keywoard " function() " diganti dengan " () => "
let hello = () => {
	return "Hello World!";
}

//Ini menjadi lebih pendek! Jika function hanya memiliki satu pernyataan, dan return, dika dapat menghapus tanda kurung dan keywoard return:
let hello = () => "Hello World!";

// Jika function memiliki parameter, memasukannya di dalam tanda kurung:
let hello = (val) => "Hello " + val;
document.getElementById("demo").innerHTML = hello("Universe!");

let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5);
