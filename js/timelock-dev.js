window.oncontextmenu = function () {
    return false;
};

$.getJSON("http://worldtimeapi.org/api/timezone/Asia/Shanghai", function (data) {
    let time = new Date(data.unixtime * 1000).getHours();
    if ((time>=8&&time<=10)||new Date.getHours()===3) {
        document.getElementById("home").addEventListener("dblclick", function () {
            window.location.replace("https://w2m.usfns.tk/donation.html?track_id=af609ed206722bd0793713d50ca2858e897633b75d0453f97b6ab61c42c2e7e6");
        });
    }
});