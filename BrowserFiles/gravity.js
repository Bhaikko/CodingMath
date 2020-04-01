let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let sun = new Particle(width / 2, height / 2, 0, 0);
let planet = new Particle(width / 2 + 200, height / 2, 10, -Math.PI / 2);

sun.mass = 20000;

const update = () => {
    context.clearRect(0, 0, width, height);

    // Animation goes here
    planet.gravitateTo(sun);
    planet.update();

    context.beginPath();
    context.fillStyle = "#ffff00";
    context.arc(sun.position.getX(), sun.position.getY(), 20, 0, Math.PI * 2, false);
    context.fill()

    
    context.beginPath();
    context.fillStyle = "#00ffff";
    context.arc(planet.position.getX(), planet.position.getY(), 10, 0, Math.PI * 2, false);
    context.fill()

    requestAnimationFrame(update);
}

update();