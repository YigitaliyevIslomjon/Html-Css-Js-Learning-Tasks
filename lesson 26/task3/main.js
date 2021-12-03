function fuu(){
	var a = document.getElementById("input1").value; // value = 10  teng
	var b = document.getElementById("input2").value; // value = 20  teng
	var c = '"' + a + 'px"'; // => "10px"
	var d = '"'+ b + 'px"'; // => "20px"
	document.getElementById("bk1").style.width = c;
	document.getElementById("bk1").style.height = d;
	//shu ko'rinishda ishlamaybdi.
	// shuni qanday qilib ishlatsam bo'ladi. 
	
	// lekin bunday yozsam ishlayabdi..
	c = "10px";
	d = "20px";
	document.getElementById("bk1").style.width = c;
	document.getElementById("bk1").style.height = d;
	 

}