new Date().getHours() >= 9 && new Date().getHours() <= 11 ? document.getElementById("home").href="./service.html" : document.getElementById("home").href="https://usfns.tk/";
document.getElementById("home").addEventListener("dblclick",function(){
	window.location.replace("./service.html");
})