
//print a value---decreasing order


var a=prompt("Enter a value you want to decrease from");

document.write("Print from "+ a+"<br>");

var x=setInterval(function(){
	
	document.write((a--)+"<br>");
	if (a<=0){
		clearInterval(x);
	}
	
},1000);
