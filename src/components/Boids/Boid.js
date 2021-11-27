import { Vector2 } from "./Utils";
import { Circle, map, drawLine } from "./Utils";

export default class Boid {
    constructor(x, y, domain, drawingCtx) {
        this.pos = new Vector2(x, y);
        this.prePos = new Vector2(this.pos.x, this.pos.y);
        this.vel = Vector2.randomV(20, 10);
        this.acc = new Vector2(0, 0);
        this.wanderVel = Vector2.randomV(20, 10);
        this.localMates = [];
        this.desiredNeighbors = 10;
        this.senseRadius = 20;
        this.FOV = 120 * Math.PI / 180;
        this.sense = new Circle(this.pos.x, this.pos.y, this.senseRadius);
        this.maxforce = 0.3125;
        this.maxspeed = 8;
        this.minspeed = this.maxspeed / 2;
        this.alFac = 1;
        this.cohFac = 1;
        this.sepFac = 1;
        this.wanFac = .3;
        this.color = '';
        this.domain = domain;
        this.drawingCtx = drawingCtx;
    }
    pushLocalMates(qtree, range) {

        this.localMates = qtree.query(range);
        this.localMates.filter((otherBoid) => {
            let d = this.pos.dist(otherBoid.pos);
            if (otherBoid !== this &&
                (Vector2.angleBetween(Vector2.subvu(otherBoid.pos, this.pos), this.vel) < this.FOV ||
                    d <= this.senseRadius / 2)
            ) {
                return true;
            } else {
                return false;
            }
        });
        if (this.localMates.length >= this.desiredNeighbors && this.senseRadius > 3) {
            this.senseRadius -= 2;
        } else {
            this.senseRadius += 1;
        }
        let red = map(this.senseRadius, 100, 0, 0, 255);
        let green = map(this.senseRadius, 60, 0, 100, 0);
        let blue = map(this.senseRadius, 60, 0, 255, 50);
        this.color = 'rgb( ' + red + ', ' + green + ', ' + blue + ')'
    }
    popLocalMates() {
        this.localMates.splice(0, this.localMates.length);
    }
    align() {
        let tmpD = new Vector2(0, 0);

        let total = 0;
        for (let i = this.localMates.length - 1; i >= 0; i--) {
            tmpD.add(this.localMates[i].vel);
            total++;
        }
        if (total !== 0) {
            tmpD.div(total);
            if (this.alFac < 0.4) {
                this.alFac = 0.4
            }
            this.seek(tmpD, this.alFac);
        }
    }
    cohesion() {
        let tmpD = new Vector2(0, 0);

        let total = 0;
        for (let i = this.localMates.length - 1; i >= 0; i--) {
            tmpD.add(this.localMates[i].pos);
            total++;
        }

        if (total !== 0) {
            tmpD.div(total);
            let d = this.pos.dist(tmpD);

            let arrival = 1;
            if (d < this.senseRadius)
                arrival = map(d, 0, this.senseRadius, 0.5, 1.6);

            tmpD.sub(this.pos);
            this.seek(tmpD, this.cohFac * arrival);
        }
    }
    separate() {
        let tmpD = new Vector2(0, 0);
        let total = 0;
        for (let i = this.localMates.length - 1; i >= 0; i--) {
            let diff = Vector2.subvu(this.pos, this.localMates[i].pos);
            let d = this.pos.dist(this.localMates[i].pos);
            if (d === 0) {
                d = 0.01;
            }
            diff.div(d);
            tmpD.add(diff);
            total++;
        }
        if (total !== 0) {
            tmpD.div(total);
            this.seek(tmpD, this.sepFac);
        }
    }
    wander() {
        this.wanderVel.add(Vector2.randomV(1, 0.5));
        this.wanderVel.limit(this.maxspeed);
        let diff = Vector2.subvu(this.vel, this.wanderVel);
        this.seek(diff, this.wanFac);
    }
    interest(v, i) {
        let tmpD = new Vector2(v.x, v.y);
        let diff = Vector2.subvu(tmpD, this.pos);
        let d = this.pos.dist(tmpD);
        if (d < i) {
            d = 0;
        }
        diff.mult(d);
        diff.sub(this.pos);
        this.seek(diff, 0.00005 * (d * i));
    }
    seek(target, fac) {
        target.setMag(this.maxspeed);
        target.sub(this.vel);
        target.limit(this.maxforce * fac);
        this.acc.add(target);
    }
    update() {
        let center = new Vector2(this.domain.width / 2, this.domain.height / 2);
        let slack = 20;
        if (this.pos.x > this.domain.width + slack) {
            this.pos.x = -slack;
        }
        if (this.pos.x < -slack) {
            this.pos.x = this.domain.width + slack;
        }

        if (this.pos.y > this.domain.height + slack) {
            this.pos.y = -slack;
        }
        if (this.pos.y < -slack) {
            this.pos.y = this.domain.height + slack;
        }
        this.prePos = new Vector2(this.pos.x, this.pos.y);

        // slightly seek center

        this.seek(Vector2.subvu(center, this.pos), 0.1);

        // wander about
        this.wander();

        this.vel.add(this.acc);
        if (this.vel.mag() <= this.minspeed) {
            this.vel.setMag(this.minspeed);
        }
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    draw() {
        this.update();
        drawLine(this.drawingCtx, this.prePos, this.pos, 1, this.color);
    }
}