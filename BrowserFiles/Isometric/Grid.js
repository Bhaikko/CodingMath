var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    tileWidth = 60,
    tileHeight = 30;

    context.translate(width / 2, 150);


function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function drawBlock(x, y, z) {
    var top = "#eeeeee",
        right = "#cccccc",
        left = "#999999";

    context.save();
    context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2);

    // draw top
    context.beginPath();
    context.moveTo(0, -z * tileHeight);
    context.lineTo(tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.closePath();
    context.fillStyle = top;
    context.fill();

    // draw left
    context.beginPath();
    context.moveTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(0, tileHeight);
    context.lineTo(-tileWidth / 2, tileHeight / 2);
    context.closePath();
    context.fillStyle = left;
    context.fill();

    // // draw right
    context.beginPath();
    context.moveTo(tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(0, tileHeight);
    context.lineTo(tileWidth / 2, tileHeight / 2);
    context.closePath();
    context.fillStyle = right;
    context.fill();


    context.restore();		
}

const drawTile = (x, y, color) => {
    context.save();
    context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(tileWidth / 2, tileHeight / 2);
    context.lineTo(0, tileHeight);
    context.lineTo(-tileWidth / 2, tileHeight / 2);
    context.closePath();
    context.fillStyle = color;
    context.fill();

    context.restore();
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        // drawTile(i, j, randomColor());
        drawBlock(i, j, Math.floor(Math.random() * 4));
    }
}