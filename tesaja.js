// alert(
// 	"hallo dika"
// )

var y = document.querySelector('#example');
y.style.backgroundColor = "red";
console.log(y);

let klik = document.querySelector("#klik");
klik.addEventListener('click', myFunction);

function myFunction() {
	alert("makasih ya")
}

let m = myFunction2 = () => {
	alert('makasih dika');
}

let klik2 = document.querySelector("#klik2");
klik2.addEventListener('click', m);

let x = 4;
console.log(x);