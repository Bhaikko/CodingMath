let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let centerX = width / 2;
let centerY = height / 2;
let radius = 200;
let angle = 0;
let speed = 0.1;
let x, y;

// const renderCircle = () => {
//     context.clearRect(0, 0, width, height);
//     x = centerX + Math.cos(angle) * radius;
//     y = centerY + Math.sin(angle) * radius;

//     context.beginPath();
//     context.arc(x, y, 10, 0, Math.PI * 2, false);
//     context.fill();

//     angle += speed;
//     // speed += 0.001;
//     requestAnimationFrame(renderCircle);
// }

// renderCircle();

// let xRadius = 200;
// let yRadius = 300;

// const renderEllipse = () => {
//     context.clearRect(0, 0, width, height);
//     x = centerX + Math.cos(angle) * xRadius;
//     y = centerY + Math.sin(angle) * yRadius;

//     context.beginPath();
//     context.arc(x, y, 10, 0, Math.PI * 2, false);
//     context.fill();

//     angle += speed;
//     // speed += 0.001;
//     requestAnimationFrame(renderEllipse);
// }

// renderEllipse();