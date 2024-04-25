'use strict';

let isim = prompt("Adınız Nedir?")

let greeting = document.getElementById('name')

greeting.innerHTML = `Merhaba, ${isim}! Hoşgeldin!`

setInterval(function(){
    let suan = new Date()
    let options = {hour: 'numeric', minute: 'numeric', second: 'numeric', weekday: 'long'};
    let formattedTimeAndDay = suan.toLocaleDateString('tr-TR', options);

    let date = document.querySelector("#myClock")

    date.innerHTML = formattedTimeAndDay
},1000)