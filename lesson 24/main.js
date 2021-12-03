var a = Math.random()*10;
a = parseInt(a);

if(a<1){
	a++;
}
console.log("ixtiyoriy sonimiz = " + a);
let sum1 = 0;
let sum2 = 1; 
for(var i=1; i<=a;  i++){
	if(i%2==0){
		
		for( var j=1; j<=i; j++){
			if(j%2==0){
				sum1 = sum1 + j;
			}
		}
				
	}

	else{

		for( var g=1; g <= i; g++){
			if( g%2 != 0){
				sum2 = sum2 * g;
			}
		}

		 
		
			
	}
}

console.log(sum1);
console.log(sum2);

