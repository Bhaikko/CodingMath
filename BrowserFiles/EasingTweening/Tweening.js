let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,

    start = {
        x: 100,
        y: 100,
    },
    target = {},
    change = {},
    startTime,
    duration = 1000;

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2, false);
    context.fill();
}

document.body.addEventListener("click", event => {
    target.x = event.clientX;
    target.y = event.clientY;

    change.x = target.x - start.x;
    change.y = target.y - start.y;

    startTime = new Date();
    update();
});

const update = () => {
    context.clearRect(0, 0, width, height);

    let time = new Date() - startTime;
    if (time < duration) {
        let x = easeInQuad(time, start.x, change.x, duration),
            y = easeInQuad(time, start.y, change.y, duration);

        drawCircle(x, y);
        requestAnimationFrame(update);
    } else {
        drawCircle(target.x, target.y);
        start.x = target.x;
        start.y = target.y;
    }
}

function linearTween(t, b, c, d) {
    return c * t / d + b;
}

function easeInQuad(t, b, c, d) {
    return c*(t/=d)*t + b;
};

function easeOutQuad(t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
};

function easeInOutQuad(t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
};