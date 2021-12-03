let a = Math.random()*100;
let c = Math.random()*100;
let j = Math.random()*100;
let s = Math.random()*100;
let g = Math.random()*100;

a = parseInt(a);
c = parseInt(c);
j = parseInt(j);
s = parseInt(s);
g = parseInt(g);

var massiv = [a,c,j,s,g];
console.log(massiv);
var r = massiv.shift();
var h = massiv.pop();


console.log("0 - index va oxirgi - indexlar yig'indisi = " + (r + h));
