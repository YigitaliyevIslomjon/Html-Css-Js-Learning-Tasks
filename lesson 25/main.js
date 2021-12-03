let massiv = [];
var a = Math.random()*10;
a = parseInt(a);
if(a < 2){
	a = a + 2;
}

for(var i=0; i < a; i++){
	var b = Math.random()*10;
	b = parseInt(b);
	massiv[i] = b;
}

console.log("ixtyoriy massiv = ",massiv);
console.log("qiymatni kiriting !! funksiya nomi = findvalue()");
var sum = 0;
function findvalue(c){
	for(var i of massiv){
		if( i === c){
			sum++;
		}
	}

		if(sum > 0){
		console.log(sum +" ta bor array ichida parametr qiymati");
			sum = 0;
		}
		else{
		console.log("bunday qiymat yuq arrayda");
			sum = 0;
		}
}

