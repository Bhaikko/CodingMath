let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let springPoint = new Vector(width / 2, height / 2);
let weight = new Particle(Math.random() * width, Math.random() * height, 0, 0);
weight.radius = 10;
weight.friction = 0.9;
let k = 0.1;

document.addEventListener("mousemove", event => {
    springPoint.setX(event.clientX);
    springPoint.setY(event.clientY);
});

const update = () => {
    context.clearRect(0, 0, width, height);
    // Animation goes here

    let distance = springPoint.subtract(weight.position);
    let springForce = distance.multiply(k); // Hooke's Law

    weight.velocity.addTo(springForce);
    weight.update();

    context.beginPath();
    context.arc(weight.position.getX(), weight.position.getY(), weight.radius, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.arc(springPoint.getX(), springPoint.getY(), 4, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.moveTo(weight.position.getX(), weight.position.getY());
    context.lineTo(springPoint.getX(), springPoint.getY());
    context.stroke();

    requestAnimationFrame(update);
}

update();