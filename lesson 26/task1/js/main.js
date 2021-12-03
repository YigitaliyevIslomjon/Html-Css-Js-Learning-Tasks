function fun(){
	var value1 = document.getElementById("pas").getAttribute("type");
	

	if (value1 === "password"){
		document.getElementById("pas").setAttribute("type","text");
	}
	else{
		document.getElementById("pas").setAttribute("type","password");
	}

}