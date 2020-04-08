let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 300,
    points = [],
    numPoints = 200,
    centerZ = 3000,
    radius = 1000,
    baseAngle = 0,
    rotationSpeed = 0.01;

for (let i = 0; i < numPoints; i++) {
    let point = {
        angle: 0.2 * i,
        // y: 2000 - 4000 / numPoints * i + Math.random() * 500
        y: 2000 - 4000 / numPoints * i
    };

    point.x = Math.cos(point.angle + baseAngle) * radius;
    point.z = Math.sin(point.angle + baseAngle) * radius + centerZ;
    points.push(point);
}

context.translate(width / 2, height / 2);

document.body.addEventListener("mousemove", event => {
    rotationSpeed = (event.clientX - width / 2) * 0.00005;
    ypos = (event.clientX - height / 2) * 2;
});

const update = () => {
    baseAngle += rotationSpeed;
    context.clearRect(-width / 2, -height / 2, width, height);

    context.beginPath();

    for (let i = 0; i < numPoints; i++) {
        let point = points[i];
        let perspective = fl / (fl + point.z);

        context.save();
        context.scale(perspective, perspective)
        context.translate(point.x, point.y);

        // if (i == 0) {
        //     context.moveTo(0, 0);
        // } else {
        //     context.lineTo(0, 0);
        // }
        context.beginPath();
        context.arc(0, 0, 40, 0, Math.PI * 2, false);
        context.fill();

        context.restore();

        point.x = Math.cos(point.angle + baseAngle) * radius;
        point.z = centerZ + Math.sin(point.angle + baseAngle) * radius;
    }

    context.stroke();
    requestAnimationFrame(update);
}

update();