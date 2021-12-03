var massiv = [4,4,5,4,4];
for(let i=0; i<massiv.length;i++){
	if(massiv[i]===4){
		massiv.splice(i,1)
		i--
	}
}

console.log("o'zgargan massiv = ",massiv);