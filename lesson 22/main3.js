var a = Math.random()*10;
var b = Math.random()*10;

a = parseInt(a);
b = parseInt(b);

console.log("a ning qiymati = " + a);
console.log("b ning qiymati = " + b);

if (Math.abs(5-a) > Math.abs(5-b)){
	console.log( "5 ga eng yaqini bu "+b);
}
else if(Math.abs(5-a) < Math.abs(5-b)){
	console.log("5 ga eng yaqini bu "+a);
}
else if(Math.abs(5-a) == Math.abs(5-b)){
	console.log(b+" "+a + " teng uzoqlikda");
}
