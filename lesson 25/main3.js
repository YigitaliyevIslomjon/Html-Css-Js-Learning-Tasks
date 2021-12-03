var massiv = ["olma","davlat","xalq","dasturchi","dasturlash","xalq","google","boolean"];

console.log(massiv);
console.log("qiymatni kiriting !! funksiyanomi = findword() ");

var s = 0;
var findword = function(a){
	for(var i in massiv){

		if( massiv[i] === a){
			console.log(a);
			console.log(i + " - chi indeksdagi");
			s++;		
		}				
	}

	if( s===0 ){
		console.log("bunday qiymat yo'q");
	}
	s = 0;
	
}