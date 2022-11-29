const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClockFace(){
    //now const variable is not global its local to the method
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds /60) * 360) + 90;
    secondHand.style.transform = 'rotate(${secondsDegrees}deg)';

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes /60) * 360) + 90;
    minuteHand.style.transform = 'rotate(${minutesDegrees}deg)';

    const hours = now.getHours();
    const hoursDegrees = ((hours /60) * 360) + 90;
    hourHand.style.transform = 'rotate(${hoursDegrees}deg)';
}
//1000 milliseconds is one second
setInterval(setClockFace,1000);