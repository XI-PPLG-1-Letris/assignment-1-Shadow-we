let a = 10; //ES6
let b = 20; 
console.log("----------")

// tambah
const tambah = (a,b) => a+b;  //INI ARROW FUNGSI
console.log("tambah(a, b)")
console.log("perjumlahan 10 + 20 =",tambah(a, b))
console.log("----------")

// kurang
const kurang = (a,b) => a-b;
console.log("kurang(a, b)")
console.log("perkurangan 10 + 20 =",kurang(a, b))
console.log("----------")

// kali
const kali = (a,b) => a*b;
console.log("kali(a, b)")
console.log("perkalian 10 + 20 =",kali(a, b))
console.log("----------")

// bagi
const bagi = (a,b) => a/b;
console.log("bagi(a, b)")
console.log("pembagian 10 + 20 =",bagi(a, b))
console.log("----------")

// modulus
const modulus = (a,b) => a%b;
console.log("modulus(a, b)")
console.log("modulus 10 + 20 =",modulus(a, b))