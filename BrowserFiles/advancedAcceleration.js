let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let ship = new Particle(width / 2, height / 2, 0, 0);
let thrust = new Vector(0, 0);
let angle = 0;

let turningLeft = false;
let turningRight = false;
let thrusting = false;

document.body.addEventListener("keydown", event => {
    switch(event.keyCode) {
        case 38:
            // thrust.setY(-0.1);
            thrusting = true;
            break;
            
        case 40:
            // thrust.setY(0.1);
            turningLeft = true;
            break;
            
        case 37:
            // thrust.setX(-0.1);
            turningRight = true;
            break;
            
        case 39:
            thrust.setX(0.1);
            break;

        default:
            break;
    }
});


document.body.addEventListener("keyup", event => {
    switch(event.keyCode) {
        case 38:
            thrusting = false;
            // thrust.setY(0);
            break;
            
        case 40:
            turningLeft = false;
            // thrust.setY(0);
            break;
            
        case 37:
            turningRight = false;
            // thrust.setX(0);
            break;
            
        case 39:
            thrust.setX(0);
            break;

            
        default:
            break;
    }
});

const update = () => {
    // Animation goes here
    context.clearRect(0 ,0, width, height);

    if (turningLeft) {
        angle -= 0.05;
    }

    if (turningRight) {
        angle += 0.05;
    }

    thrust.setAngle(angle);

    if (thrusting) {
        thrust.setLength(0.1);
    } else {
        thrust.setLength(0);
    }

    ship.accelerate(thrust);
    ship.update();

    context.save();
    context.translate(ship.position.getX(), ship.position.getY());
    context.rotate(angle);

    context.beginPath();
    context.moveTo(10, 0);
    context.lineTo(-10, -7);
    context.lineTo(-10, 7);
    context.lineTo(10, 0);
    if (thrusting) {
        context.moveTo(-10, 0);
        context.lineTo(-18, 0);
    }
    context.stroke();
    context.restore();

    // context.beginPath();
    // context.arc(ship.position.getX(), ship.position.getY(), 10, 0, Math.PI * 2, false);
    // context.fill();

    if (ship.position.getX() > width) {
        ship.position.setX(0);
    }
    
    if (ship.position.getX() < 0) {
        ship.position.setX(width);
    }

    if (ship.position.getY() > height) {
        ship.position.setY(0);
    }

    if (ship.position.getY() < 0) {
        ship.position.setY(height);
    }

    requestAnimationFrame(update);
}

update();