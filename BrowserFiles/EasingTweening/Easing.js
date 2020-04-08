let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,

    target = {
        x: width,
        y: Math.random() * height
    },

    position = {
        x: 0, 
        y: Math.random() * height
    },
    ease = 0.1;

document.body.addEventListener("mousemove", event => {
    target.x = event.clientX;
    target.y = event.clientY;
});

// Standard Easing
const update = () => {
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.arc(position.x, position.y, 10, 0, Math.PI * 2, false);
    context.fill();


    position.x += (target.x - position.x) * ease;
    position.y += (target.y - position.y) * ease;

    requestAnimationFrame(update);
}

update();