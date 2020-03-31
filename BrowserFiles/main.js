let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// context.fillRect(0, 0, width, height);

for (let i = 1; i <= 100; i++) {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
}

// let v1 = new Vector(10, 5);
// console.log(v1.getX());
// console.log(v1.getY());
// console.log(v1.getAngle());
// console.log(v1.getLength());