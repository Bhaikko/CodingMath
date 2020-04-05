class Particle {
    constructor(x, y, speed, direction, grav) {
        this.x = x;
        this.y = y;
        this.vx = Math.cos(direction) * speed;
        this.vy = Math.sin(direction) * speed;

        this.gravity = grav || 0;

        this.mass =  1;
        this.radius = 2;
        this.bounce = -1;
        this.friction = 1;
    }

    update = () => {
        // this.velocity.multiplyBy(this.friction);
        // this.velocity.addTo(this.gravity);
        // this.position.addTo(this.velocity);
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;
    }

    accelerate = (ax, ay) => {
        // this.velocity.addTo(accelration);
        this.vx += ax;
        this.vy += ay;
    }

    angleTo = (p2) => {
        return Math.atan2(
            p2.y - this.y,
            p2.x - this.x
        );
    }

    distanceTo = (p2) => {
        let dx = p2.position.getX() - this.position.getX();
        let dy = p2.position.getY() - this.position.getY();

        return Math.sqrt(dx * dx + dy * dy);
    }

    gravitateTo = p2 => {
        // let grav = new Vector(0, 0);
        // let dist = this.distanceTo(p2);

        // grav.setLength(p2.mass / (dist * dist));
        // grav.setAngle(this.angleTo(p2));

        // this.velocity.addTo(grav);

        let dx = p2.x - this.x,
            dy = p2.y - this.y,
            distSQ = dx * dx + dy * dy;
            dist = Math.sqrt(distSQ);
            force = p2.mass / distSQ,
            ax = dx / dist * force,
            ay = dy / dist * force;

        this.vy += ay;
        this.vx += ax;

    }

    getSpeed = () => {
        return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    }

    setSpeed = speed => {
        let heading = this.getHeading();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
    }

    getHeading = () => {
        return Math.atan2(this.vy, this.vx);
    }

    setHeading = heading => {
        let speed = this.getSpeed();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
    }
}
