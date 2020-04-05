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

for (let i = 0; i < numParticles; i++) {
    let p = new Particle(width / 2, height / 2, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1);
	p.radius = 10;
	particles.push(p);

}

const removeDeadParticles = () => {
    for (let i = particles.length - 1; i >= 0; i--) {
        let current = particles[i];
        if (current.position.getX() - current.radius > width ||
            current.position.getX() + current.radius < 0 || 
            current.position.getY() - current.radius > height ||
            current.position.getY() + current.radius < 0
        ) {
            particles.splice(i, 1);
        }
    }
    
}

const update = () => {
    context.clearRect(0, 0, width, height);

    // console.log(particles);
    // p.accelerate(acceleration);
    // p.update();
    // context.beginPath();
    // context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
    // context.fill();

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        context.fill();

        // Regenration logic
        if (p.position.getY() - p.radius > height) {
            p.position.setX(width / 2);
            p.position.setY(height);
            p.velocity.setLength(Math.random() * 8 + 5);
            p.velocity.setAngle(-Math.PI / 2 + (Math.random() * 0.2 - 0.1));
        }
    }

    // removeDeadParticles();  // Avoid rendering when out of screen

    requestAnimationFrame(update);
}



update();