let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;


context.translate(0, height / 2);
context.scale(1, -1);

for (let angle = 0; angle <= 2 * Math.PI; angle += 0.01) {
    let x = angle * 100;
    let y = Math.sin(angle) * 100;

    context.fillRect(x, y, 5, 5);
}


for (let angle = 0; angle <= 2 * Math.PI; angle += 0.01) {
    let x = angle * 100;
    let y = Math.cos(angle) * 100;

    context.fillRect(x, y - 300, 5, 5);
}

// for (let angle = 0; angle <= 2 * Math.PI; angle += 0.01) {
//     let x = angle * 100;
//     let y = Math.tan(angle) * 100;

//     context.fillRect(x, y + 300, 5, 5);
// }