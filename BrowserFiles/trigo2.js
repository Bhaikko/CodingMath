let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let centerY = height * 0.5;
let centerX = width * 0.5;
let offset = 50;
let speed = 0.1;
let angle = 0;
let size = 50;
let alpha = 1;

const renderPath = () => {
    let y = centerY + Math.sin(angle) * offset;

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(centerX, y, 50, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;
    requestAnimationFrame(renderPath);  // Browser API to sync windows refresh rate with next function call
}

// renderPath();

const renderSize = () => {
    let newSize = size + Math.sin(size) * offset;
    let newAlpha = alpha - Math.sin(size) * 0.01 * offset;

    context.clearRect(0, 0, width, height);
    context.fillStyle = `rgba(0, 0, 0, ${newAlpha})`;
    context.beginPath();
    context.arc(centerX, centerY, newSize, 0, Math.PI * 2, false);
    context.fill();

    size += speed;
    requestAnimationFrame(renderSize);  // Browser API to sync windows refresh rate with next function call
}

renderSize();


