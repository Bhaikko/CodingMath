let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 300,
    shapes = [],
    numShapes = 100;

for (let i = 0; i < numShapes; i++) {
    shapes[i] = {
        x: utils.randomRange(-1000, 1000),
        y: utils.randomRange(-1000, 1000),
        z: utils.randomRange(0, 10000)
    }
}

context.translate(width / 2, height / 2);

const update = () => {
    context.clearRect(-width / 2, -height / 2, width, height);
    for (let i = 0; i < numShapes; i += 2) {
        let shape = shapes[i];

        let perspective = fl / (fl + shape.z);

        context.save();
        context.scale(perspective, perspective);
        context.translate(shape.x, shape.y);
        context.fillRect(-100, -100, 200, 200);

        // context.fillText(shape.char, -100, -100)

        context.restore();

        shape.z += 5;
        if (shape.z > 10000) {
            shape.z = 0;
        }
    }

    requestAnimationFrame(update);
}

update();