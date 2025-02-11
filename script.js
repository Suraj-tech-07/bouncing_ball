console.log("Hello World");

const outerCircle = document.querySelector(".box1");
const innerBall = document.querySelector(".box2");
const styleValue = window.getComputedStyle(innerBall).getPropertyValue('top');
console.log(styleValue);
