console.log("qiymatni kiriting !! funksiyanomi = fun(a,b,c,d);");


var fun = function(...massiv){
	var s = 0;
	for(var sum of massiv){
		s = s + sum;
	}
	console.log("argumentlar  yig'indisi = ",s);
}