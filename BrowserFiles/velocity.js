let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// let position = new Vector(100, 100);
// let velocity = new Vector(0, 0);


// velocity.setLength(3);
// velocity.setAngle(Math.PI / 6);

let p = new Particle(100, height, 10, -Math.PI / 2);

let particles = [];
let numParticles = 100;

let acceleration = new Vector(0.1, 0.1);

for (let i = 0; i < 100; i++) {
    particles.push(new Particle(
        width / 2,
        height / 3,
        Math.random() * 4 + 1,
        Math.random() * Math.PI * 2,
        0.1
    ));
}

const update = () => {
    context.clearRect(0, 0, width, height);

    // p.accelerate(acceleration);
    // p.update();
    // context.beginPath();
    // context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
    // context.fill();

    for (let i = 0; i < 100; i++) {
        particles[i].update();
        context.beginPath();
        context.arc(particles[i].position.getX(), particles[i].position.getY(), 4, 0, Math.PI * 2, false);
        context.fill();
    }

    requestAnimationFrame(update);
}

update();