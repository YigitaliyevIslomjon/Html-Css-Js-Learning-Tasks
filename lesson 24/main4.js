var massiv = [];
a = Math.random()*15;
while( a <=3 ){
	a++;
}


for(var i = 0; i < a; i++){
	var res = String.fromCharCode(parseInt(Math.random()*(122-97+1)) + 97);
	massiv[i] = res;
}
var s = "";
for(var i = 0; i < a; i++){
	
	s = s + massiv[i];

}

console.log("ixtiyoriy matin = " + s);

var g = 0;
for (var f of s){
	if((f == "a") || (f == "e") || (f == "i") || (f == "o") || (f == "u")){
		g++;
	}
	if(f == "a"){
		console.log("unli harf = "+f);
	}
	if(f == "e"){
		console.log("unli harf = "+f);
	}
	if(f == "i"){
		console.log("unli harf = "+f);
	}
	if(f == "o"){
		console.log("unli harf = "+f);
	}
	if(f == "u"){
		console.log("unli harf = "+f);
	}
}	

console.log("unli harflar son = " + g);
	