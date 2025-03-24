const numeros = [1,2,3,4,5];
const num1 = numeros.map((numeros)=> (numeros)*2);
const num2 = numeros.filter((numeros)=> (numeros)%2==1);
const num3 = numeros.find((numeros)=> (numeros)%2==1);
const num4 = numeros.findIndex((numeros)=> (numeros)%2==1);
const sorteio1 = numeros[Math.floor(Math.random()*5)]; //ou numeros.len()
const sorteio2 = num1[Math.floor(Math.random()*5)]; //ou numeros.len()
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(sorteio1);
console.log(sorteio2);