//'use strict'
//Set the timer interval (number of hours)
let date = new Date('Jan 31 2022 17:42:31')

function counts() {
    let now = new Date();
    gap = date - now;
    console.log(gap);

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    console.log(days);

    if (gap < 0) {
        //tGroup - Pluggable class (<div id="tGroup"> in html)
        document.getElementById('tGroup').innerText = "Promotion ended";
    } else {
        document.getElementById('d').innerText = days + ' Days';
        document.getElementById('h').innerText = hours + ' Hours';
        document.getElementById('m').innerText = minutes + ' Minutes';
        document.getElementById('s').innerText = seconds + ' Seconds';
    }

    document.getElementById('d').innerText = days + ' Days';
    document.getElementById('h').innerText = hours + ' Hours';
    document.getElementById('m').innerText = minutes + ' Minutes';
    document.getElementById('s').innerText = seconds + ' Seconds';
}
counts();

setInterval(counts, 1000);
