let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let targetCanvas = document.getElementById("target");
let targetContext = targetCanvas.getContext("2d");
let width = canvas.width = targetCanvas.width = window.innerWidth;
let height = canvas.height = targetCanvas.height = window.innerHeight;

let particle = new Particle(0, height / 2, 10, 0);
targetContext.beginPath();
targetContext.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false);
targetContext.fill();

const resetParticle = () => {   
    particle.x = 0;
    particle.y = height / 2;
    particle.setHeading(utils.randomRange(-0.1, 0.1));
}

const update = () => {
    context.clearRect(0, 0, width, height);
    // Animation goes here

    particle.update();
    context.beginPath();
    context.arc(particle.x, particle.y, 4, 0, Math.PI * 2, false);
    context.fill();

    let imageData = targetContext.getImageData(particle.x, particle.y, 1, 1);
    if (imageData.data[3] > 0) { // Accessing Aplha value of pixel
        targetContext.globalCompositeOperation = "destination-out";
        targetContext.beginPath();
        targetContext.arc(particle.x, particle.y, 20, 0, Math.PI * 2, false);
        targetContext.fill();

        resetParticle();
    } else if (particle.x > width) {
        resetParticle();
    }

    requestAnimationFrame(update);
}

update();