setInterval("NowTime()", 1000);
    function NowTime() {
        var time = new Date()
            mo = time.getMonth() + 1,
            d = time.getDate(),
        document.getElementById("nowtime").innerHTML =  mo + "/" + d + " 周";
    }
    var d = new Date();
    var days = ["日","一","二","三","四","五","六"];
    document.getElementById("days").innerHTML = days[d.getDay()];
    //出日期
let id = getParameter('id') 
//样本：https://coxine.github.io/sesfanka/scan?id=yxj_6
// 获取H5参数 函数
function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}
    var id_array = new Array();
    var id_array = id.split('_')
    var name = id_array[0]
	var area = id_array[1]
    document.getElementById("name").innerHTML = name;
if (area >= 1 &&area <= 9 ) {
document.getElementById("area").innerHTML = area;
} else {
alert("输入非法！");
location.reload();
}

if (area >= 1 &&area <= 3 ) {
document.getElementById("floor").innerHTML = "一";
} else {
document.getElementById("floor").innerHTML = "二";
}

if (area == 1) {
document.getElementById("district").innerHTML = "自助餐";
} else if (area == 6) {
document.getElementById("district").innerHTML = "盖浇饭";
} else if (area == 8) {
document.getElementById("district").innerHTML = "面档";
} else if (area == 2 || area == 3) {
document.getElementById("district").innerHTML = "套餐A";
} else if (area == 7) {
document.getElementById("district").innerHTML = "套餐C";
} else {
document.getElementById("district").innerHTML = "套餐B";
}