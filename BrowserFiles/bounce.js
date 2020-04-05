let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let p = new Particle(width / 2, height / 2, 5, Math.random() * Math.PI * 2, 1);

p.radius = 40;
// p.bounce = -1; // for perfect collision
p.bounce = -0.9;    // lose 10% of energy 

const update = () => {
    context.clearRect(0, 0, width, height);
    // Animation goes here

    p.update();
    context.beginPath();
    context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
    context.fill();

    if(p.position.getX() + p.radius > width) {
        p.position.setX(width - p.radius);
        p.velocity.setX(p.velocity.getX() * p.bounce);
    }
    if(p.position.getX() - p.radius < 0) {
        p.position.setX(p.radius);
        p.velocity.setX(p.velocity.getX() * p.bounce);
    }
    if(p.position.getY() + p.radius > height) {
        p.position.setY(height - p.radius);
        p.velocity.setY(p.velocity.getY() * p.bounce);
    }
    if(p.position.getY() - p.radius < 0) {
        p.position.setY(p.radius);
        p.velocity.setY(p.velocity.getY() * p.bounce);
    }


    requestAnimationFrame(update);
}

update();