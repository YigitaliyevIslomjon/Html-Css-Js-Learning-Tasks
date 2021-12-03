var massiv = [];
var a = Math.random()*10;
 a  = parseInt(a);

 for(var i = 0; i < a; i++){
 	let b = Math.random()*10;
 	b = parseInt(b);
 	massiv[i] = b;
 }

 	console.log(massiv);

var j=0, s=0;
 while(j<a){
 	if(massiv[j]%2 == 0){
 		console.log( "2 ga bo'linadi = " + massiv[j]);
 	}
 	j++;
 }	

