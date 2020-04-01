class Particle {
    constructor(x, y, speed, direction, gravity, mass) {
        this.position = new Vector(x, y);
        this.velocity = new Vector(0, 0);

        this.velocity.setLength(speed);
        this.velocity.setAngle(direction);
        this.gravity = new Vector(0, gravity || 0);
        this.mass = mass || 1;
    }

    update = () => {
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    }

    accelerate = (accelration) => {
        this.velocity.addTo(accelration);
    }

    angleTo = (p2) => {
        return Math.atan2(
            p2.position.getY() - this.position.getY(),
            p2.position.getX() - this.position.getX()
        );
    }

    distanceTo = (p2) => {
        let dx = p2.position.getX() - this.position.getX();
        let dy = p2.position.getY() - this.position.getY();

        return Math.sqrt(dx * dx + dy * dy);
    }

    gravitateTo = p2 => {
        let grav = new Vector(0, 0);
        let dist = this.distanceTo(p2);

        grav.setLength(p2.mass / (dist * dist));
        grav.setAngle(this.angleTo(p2));

        this.velocity.addTo(grav);
    }
}
