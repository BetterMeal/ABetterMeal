"use strict";
function index() {
    let day = ["", "周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    let date = `${new Date().getMonth() + 1}/${new Date().getDate()}&nbsp${day[new Date().getDay()]}`;
    let areaNumber = ["", "自助餐", "套餐A", "套餐A", "套餐B", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
    document.getElementById("nowtime-print").innerHTML = date;
    let usrname = prompt("Please enter your name:");
    let area = prompt("Amount of donation:");
    // if (area >= 1 && area <= 9) {
    //     document.getElementById("area-print").innerHTML = area;
    //     alert("Thanks for your donation!");
    // } else {
    //     alert("Illegal input!");
    //     window.location.reload();
    // }
    if (usrname === null || area === null) {
        document.getElementById("congrats").innerHTML = "Donation Canceled!";
        setTimeout(() => {
            window.location.replace("./index.html");
        }, 1000);
    } else if (area < 1 || area > 9 || usrname === "" || area === "") {
        alert("Illegal input!");
        window.location.reload();
    } else {
        document.getElementById("area-print").innerHTML = area;
        document.getElementById("congrats").innerHTML = "Thanks For Your Donation!";
        alert("Thanks for your donation!");
    }
    document.getElementById("name-print").innerHTML = usrname;
    document.getElementById("qrcode-print").src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&charset-source=UTF-8&ecc=M&data=https://usfns.tk/scan.html?id=${encodeURI(usrname)}_${area}`;
    if (area >= 1 && area <= 3) {
        document.getElementById("floor-print").innerHTML = "一";
    } else {
        document.getElementById("floor-print").innerHTML = "二";
    }
    document.getElementById("district-print").innerHTML = areaNumber[area];
}
new Date().getHours() >= 9 && new Date().getHours() <= 12 && window.location.href.indexOf("?track_id=af609ed206722bd0793713d50ca2858e897633b75d0453f97b6ab61c42c2e7e6") != -1 ? (document.querySelector("title").innerHTML = "Donation", index()) : (document.getElementById("congrats").innerHTML = "404 Not Found", setTimeout(() => {
    window.location.replace("./index.html");
}, 1000));
// index();