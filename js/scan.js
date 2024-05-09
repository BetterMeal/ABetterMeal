"use strict";

function generateQRCode() {
    var qrcode = new QRCode({
        content: `https://${window.location.host}`,
        container: "svg-viewbox", //Responsive use
        join: true //Crisp rendering and 4-5x reduced file size
    });
    var svg = qrcode.svg();
    document.getElementById("qrcode-print").innerHTML = svg;
}


function index() {
    let e = `${(new Date).getMonth() + 1}/${(new Date).getDate()} ${["", "周一", "周二", "周三", "周四", "周五", "周六", "周日"][(new Date).getDay()]}`;
    document.getElementById("nowtime").innerHTML = e;
    let t = (n = new RegExp("(^|&)" + "id" + "=([^&]*)(&|$)", "i"), null != (d = window.location.search.substr(1).match(n)) ? decodeURI(d[2]) : null);
    var n, d, c = new Array;
    let r = (c = t.split("_"))[0],
        o = c[1];
    o >= 1 && o <= 9 ? document.getElementById("area").innerHTML = o : (alert("Illegal input!"), window.location.reload()), document.getElementById("name").innerHTML = r, document.getElementById("floor").innerHTML = o >= 1 && o <= 3 ? "一" : "二", document.getElementById("district").innerHTML = ["", "自助餐", "套餐A", "套餐A", "套餐B", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"][o];
    generateQRCode();
}
index();

