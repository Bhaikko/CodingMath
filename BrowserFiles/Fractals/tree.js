var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let p0 = {
    x: width / 2,
    y: height / 2
},
p1 = {
    x: width / 2,
    y: 50
},
branchAngle = Math.PI / 4,
trunkRatio = 0.5;

const tree = (p0, p1, limit) => {
    let dx = p1.x - p0.x,
        dy = p1.y - p0.y,
        dist = Math.sqrt(dx * dx + dy * dy),
        angle = Math.atan2(dy, dx),
        branchLength = dist * (1 - trunkRatio),
        pA = {
            x: p0.x + dx * trunkRatio,
            y: p0.y + dy * trunkRatio
        },
        pB = {
            x: pA.x + Math.cos(angle + branchAngle) * branchLength,
            y: pA.y + Math.sin(angle + branchAngle) * branchLength
        },
        pC = {
            x: pA.x + Math.cos(angle - branchAngle) * branchLength,
            y: pA.y + Math.sin(angle - branchAngle) * branchLength
        };

    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.lineTo(pA.x, pA.y);
    context.stroke();

    if(limit > 0) {
        tree(pA, pC, limit - 1);
        tree(pA, pB, limit - 1);
    }
    else {
        context.beginPath();
        context.moveTo(pB.x, pB.y);
        context.lineTo(pA.x, pA.y);
        context.lineTo(pC.x, pC.y);
        context.stroke();
    }
};

tree(p0, p1, 4);