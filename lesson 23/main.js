let a = Math.random()*100;
let b = Math.random()*100;
let c = Math.random()*100;
let j = Math.random()*100;
let s = Math.random()*100;
let g = Math.random()*100;
 

 a = parseInt(a);
 b = parseInt(b);
 c = parseInt(c);
 j = parseInt(j);
 s = parseInt(s); 
 g = parseInt(g);


 var massiv1 = [a,b,c,j,s,g];
 
 console.log("dastlabki massiv = ", massiv1);
 

 if (massiv1[0]%2 == 1){
 	massiv1.shift();
 	massiv1.unshift(a+1);
 }
 else{
 	massiv1.shift();
 	massiv1.unshift(a+1);
 }
console.log("o'zgargan massiv = ", massiv1);
