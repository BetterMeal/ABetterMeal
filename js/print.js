setInterval("NowTime()", 1000);
function NowTime() {
var time = new Date()
mo = time.getMonth() + 1,
d = time.getDate(),
document.getElementById("nowtime-print").innerHTML =mo + "/" + d + " 周";
}
var d = new Date();
var days = ["日","一","二","三","四","五","六"];
document.getElementById("days-print").innerHTML = days[d.getDay()];
//出日期
var name = prompt("Name");
var area = prompt("Amount of Donation");
var name_utf = encodeURI(name);
var id = name_utf + "_" + area;
document.getElementById("name-print").innerHTML = name;
document.getElementById('qrcode-print').src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&charset-source=UTF-8&ecc=M&data=https://usfns.tk/scan.html?id=" + id;

if (area >= 1 &&area <= 9 ) {
document.getElementById("area-print").innerHTML = area;
alert("Thank you for your donation!")
} else {
alert("Illegal input!");
location.reload();
}

if (area >= 1 &&area <= 3 ) {
document.getElementById("floor-print").innerHTML = "一";
} else {
document.getElementById("floor-print").innerHTML = "二"	;
}

if (area == 1) {
document.getElementById("district-print").innerHTML = "自助餐";
} else if (area == 6) {
document.getElementById("district-print").innerHTML = "盖浇饭";
} else if (area == 8) {
document.getElementById("district-print").innerHTML = "面档";
} else if (area == 2 || area == 3) {
document.getElementById("district-print").innerHTML = "套餐A";
} else if (area == 7) {
document.getElementById("district-print").innerHTML = "套餐C";
} else {
document.getElementById("district-print").innerHTML = "套餐B";
}
