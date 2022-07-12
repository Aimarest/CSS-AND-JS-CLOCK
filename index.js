'use strict';

//Variables:
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

//Funciones:
function setDate(){
    const now = new Date();
    const hour = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds/60)*360) + 90;
    const minsDeg = ((mins/60)*360) + ((seconds/60)*6) + 90;
    const hourDeg = ((hour/12)*360) + ((mins/60)*30) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minHand.style.transform = `rotate(${minsDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate,1000);
setDate();
