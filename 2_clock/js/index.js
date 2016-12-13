"use strict";

var seconds = undefined,
    minutes = undefined,
    hours = undefined;

function runTime() {
  setInterval(function () {
    var time = new Date();
    seconds = time.getSeconds();
    console.log(seconds);
    minutes = time.getMinutes();
    hours = time.getHours();

    document.getElementById('second').style.transform = "rotate(" + (seconds * 6 + 270) + "deg)";
    document.getElementById('minute').style.transform = "rotate(" + (minutes * 6 + 270) + "deg)";
    document.getElementById('hour').style.transform = "rotate(" + (hours * 6 + 270) + "deg)";
  }, 1000);
}

runTime();