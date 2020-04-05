let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let particle = new Particle(width / 2, height / 2, 10, Math.random() * Math.PI * 2);

particle.radius = 50;

const update = () => {
    context.clearRect(0, 0, width, height);
    // Animation goes here
    particle.update();
    context.beginPath();
    context.arc(particle.position.getX(), particle.position.getY(), particle.radius, 0, Math.PI * 2);
    context.fill();

    if (particle.position.getX() - particle.radius > width) {
        particle.position.setX(-particle.radius);
    }
    
    if (particle.position.getX() + particle.radius < 0) {
        particle.position.setX(width + particle.radius);
    }
    
    if (particle.position.getY() - particle.radius > height) {
        particle.position.setY(-particle.radius);
    }
    
    if (particle.position.getY() + particle.radius < 0) {
        particle.position.setY(height + particle.radius);
    }

    requestAnimationFrame(update);
}

update();