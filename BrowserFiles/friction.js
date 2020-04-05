let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// let friction = new Vector(0.15, 0);
// let friction = 0.97;
let p = new Particle(width / 2, height / 2, 10, Math.random() * Math.PI * 2);

p.friction = 0.97;

const update = () => {
    context.clearRect(0, 0, width, height);
    // Animation goes here

    // The below method has 6 trigo calls so is optimised
    // friction.setAngle(p.velocity.getAngle());

    // if (p.velocity.getLength () > friction.getLength()) {
    //     p.velocity.subtractFrom(friction);
    // } else {
    //     p.velocity.setLength(0);
    // }


    // p.velocity.multiplyBy(p.friction);   // Added as class method
    
    
    p.update();

    context.beginPath();
    context.arc(p.position.getX(), p.position.getY(), p.radius * 10, 0, Math.PI * 2, false);
    context.fill();


    requestAnimationFrame(update);
}

update();