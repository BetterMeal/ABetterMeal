new Date().getHours() >= 9 && new Date().getHours() <= 11 ? document.getElementById("home").addEventListener("dblclick", () => { window.location.replace("./donation.html?track_id=af609ed206722bd0793713d50ca2858e897633b75d0453f97b6ab61c42c2e7e6"); }) : document.getElementById("home").href = "../";
