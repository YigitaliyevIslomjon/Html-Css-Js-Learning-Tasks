var a = Math.random()*100;
a = parseInt(a);
console.log("a soning qiymati = " + a);

if (a%5 == 0){
	if (a%3==0){
		console.log("a soni 3 va 5 ga bo'linadi")
	}
	
	else{
	console.log("a soni 5 ga bo'linadi")
	}
}
else if(a%3==0){
	console.log("a soni 3 ga bo'linadi")
}
else if(a%3 != 0){
	if (a%5 != 0) {
		console.log("a soni 3 va 5 ga bo'linmaydi")
	}
}
