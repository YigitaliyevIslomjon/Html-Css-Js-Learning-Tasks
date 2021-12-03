var  a = Math.random()*10;
a = parseInt(a);
console.log(a + " ta sondan iborat array");
var ar = [];
let t=0, j=0;
for(var i = 0; i < a; i++){
	var  b = Math.random()*10;
    b = parseInt(b);
    ar [i] = b; 
}
console.log( "arraymiz = " + "["+ ar +"]");
for (var i = 0; i < a; i++){
	if (ar[i]%2==0){
		t++;
	}
	else{
		j++;
	}
}

console.log("toq sonlar soni = " + j);
console.log("juft sonlar soni = " + t);

