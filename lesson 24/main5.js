

/*var massiv = [4,8,25,4,78,96,58,25,41,8,78,63,57,85,96,41,4,78,63,36,54];	*/

var massiv = [4,4,5,4,4];

console.log("dastlabki massiv qiymati =", massiv );


var j = Math.random()*massiv.length;
j = parseInt(j);
let e = massiv[j];
	

console.log("ixtiyoriy tanlangan son = " + e);
var s = 0;
for (var d in massiv){

	if(massiv[d] == e){
		
		s++;
		

		
		}			
}



console.log( e + " soni " + s + " ta bor massiv ichida")


for (var d in massiv){

	if(massiv[d] == 4){
		
		massiv.splice(d,1);
		

		
		}			
}
for (var d in massiv){

	if(massiv[d] == 4){
		
		massiv.splice(d,1);

		
		}			
}

console.log("o'zgargan massiv = ",massiv);


