"use strict";

function index() {
    let day = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    let date = `${new Date().getMonth() + 1}/${new Date().getDate()} ${day[new Date().getDay()]}`;
    let areaNumber = ["", "自助餐", "套餐A", "套餐A", "套餐B", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
    document.getElementById("nowtime-print").innerHTML = date;
    let usrname = prompt("姓名：");
    let area = prompt("就餐区域:");
    if (usrname === null || area === null || !(area >= 1 && area <= 9) || usrname === "" || area === "") {
        alert("非法输入，页面将刷新！请确保输入姓名和在1-9之间的就餐区域！");
        location.reload();
    } else {
        document.getElementById("area-print").innerHTML = area;
    }
    document.getElementById("name-print").innerHTML = usrname;
    document.getElementById("qrcode-print").src = `https://wenhairu.com/static/api/qr/?size=300&text=${window.location.host}/scan.html?id=${encodeURI(usrname)}_${area}`;
    if (area >= 1 && area <= 3) {
        document.getElementById("floor-print").innerHTML = "一";
    } else {
        document.getElementById("floor-print").innerHTML = "二";
    }
    document.getElementById("district-print").innerHTML = areaNumber[area];
}

index();