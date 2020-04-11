var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let points = [];
let bounce = 0.8,
    gravity = 0.5,
    friction = 0.99;

points.push({
    x: 100,
    y: 100,
    oldx: 95,
    oldy: 95
});

const updatePoints = () => {
    for (let i = 0; i < points.length; i++) {
        let p = points[i],
            vx = (p.x - p.oldx) * friction,
            vy = (p.y - p.oldy) * friction;

        p.oldx = p.x;
        p.oldy = p.y;
        p.x += vx;
        p.y += vy;
        p.y += gravity;

        if (p.x > width) {
            p.x = width;
            p.oldx = p.x + vx * bounce;
        } else if (p.x < 0) {
            p.x = 0;
            p.oldx = p.x + vx * bounce;
        } else if (p.y > height) {
            p.y = height;
            p.oldy = p.y + vy * bounce;
        } else if (p.y < 0) {
            p.y = 0;
            p.oldy = p.y + vy * bounce;
        }
    }
}

const renderPoints = () => {
    context.clearRect(0, 0, width, height);
    for (let i = 0; i < points.length; i++) {
        let p = points[i];
        context.beginPath();
        context.arc(p.x, p.y, 5, 0, Math.PI * 2, false);
        context.fill();
    }
}

const update = () => {
    updatePoints();
    renderPoints();
    requestAnimationFrame(update);
}

update();