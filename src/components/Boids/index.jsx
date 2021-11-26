import './style.css';
import { useEffect } from 'react';

export default function Boids(props) {

    useEffect(() => {


        class Circle {
            constructor(x, y, r) {
                this.x = x;
                this.y = y;
                this.r = r;
                this.rr = r * r;
            }
            containsPoint(point) {
                if (Vector2.distvu(point.pos, new Vector2(this.x, this.y)) <= this.r)
                    return true;
                return false;
            }
            intersectsBox(rect) {
                let circleDistance = new Vector2();

                circleDistance.x = this.x - rect.x;
                circleDistance.y = this.y - rect.y;

                if (circleDistance.x > (rect.w + this.r) || circleDistance.x + this.r < 0) { return false; }
                if (circleDistance.y > (rect.h + this.r) || circleDistance.y + this.r < 0) { return false; }

                if (circleDistance.x <= (rect.w)) { return true; }
                if (circleDistance.y <= (rect.h)) { return true; }

                let cornerDistance_sq = (circleDistance.x - rect.x) * (circleDistance.x - rect.x) +
                    (circleDistance.y - rect.y) * (circleDistance.y - rect.y);

                return (cornerDistance_sq >= (this.rr));
            }
        }

        class Rect {
            constructor(x, y, w, h) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
            }

            containsPoint(point) {
                if (point.pos.x > this.x && point.pos.x <= this.x + this.w &&
                    point.pos.y > this.y && point.pos.y <= this.y + this.h)
                    return true;
                return false;
            }
            intersectsBox(other) {
                if (other.x >= this.x + this.w ||
                    other.x + other.w < this.x ||
                    other.y >= this.y + this.h ||
                    other.y + other.h < this.y)
                    return false;
                return true;
            }
            intersectsCircle(circle) {
                return circle.intersectsBox(this);
            }
            show(color, quad) {

                offCtx.lineWidth = 1;
                offCtx.rect(this.x, this.y, this.w, this.h);
                if (quad) {
                    offCtx.strokeStyle = color;
                    offCtx.stroke();
                } else {
                    offCtx.fillStyle = color;
                    offCtx.fill();
                }

            }
        }
        class Vector2 {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            add(v) {
                this.x = this.x + v.x;
                this.y = this.y + v.y;
                return this
            }
            static addvu(v, u) {
                return new Vector2((v.x + u.x), (v.y + u.y));
            }
            sub(v) {
                this.x = (this.x - v.x);
                this.y = (this.y - v.y);
                return this
            }
            static subvu(v, u) {
                return new Vector2((v.x - u.x), (v.y - u.y));
            }
            mult(k) {
                this.x = this.x * k;
                this.y = this.y * k;
                return this
            }
            static multvk(v, k) {
                return new Vector2(v.x * k, v.y * k);
            }
            div(k) {
                this.x = this.x / k;
                this.y = this.y / k;
                return this;
            }
            dist(v) {
                return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
            }
            static distvu(v, u) {
                return Math.sqrt((v.x - u.x) * (v.x - u.x) + (v.y - u.y) * (v.y - u.y));
            }
            magSq() {
                const x = this.x;
                const y = this.y;
                return x * x + y * y;
            };
            mag() {
                return Math.sqrt(this.magSq());
            }
            normalize() {
                const len = this.mag();
                if (len !== 0) this.mult(1 / len);
                return this;
            }
            setMag(k) {
                return this.normalize().mult(k);
            }
            limit(max) {
                const mSq = this.magSq();
                if (mSq > max * max) {
                    this.div(Math.sqrt(mSq)).mult(max);
                }
                return this;
            };
            dot(v) {
                return this.x * v.x + this.y * v.y;
            };
            static angleBetween(v1, v2) {
                return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
            }
            angle() {
                return (this.y < 0) ? -Vector2.angleBetween(this, new Vector2(1, 0)) : Vector2.angleBetween(this, new Vector2(1, 0));
            }
            static fromVAngle(v, angle) {
                let u = new Vector2(0, 0);
                u.x = v.x * Math.cos(angle) - v.y * Math.sin(angle);
                u.y = v.x * Math.sin(angle) + v.y * Math.cos(angle);
                u.setMag(1);
                return u;
            }
            static randomV(amp, off) {
                return new Vector2((Math.random() * amp - off), (Math.random() * amp - off));
            }
        }

        function map(n, start1, stop1, start2, stop2, withinBounds) {
            const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
            if (!withinBounds) {
                return newval;
            }
            if (start2 < stop2) {
                return this.constrain(newval, start2, stop2);
            } else {
                return this.constrain(newval, stop2, start2);
            }
        };

        var canvas = document.querySelector('canvas');
        var c = canvas.getContext("2d");

        var height = 500;
        var width = 500;

        var offCanvas = new OffscreenCanvas(width, height);
        var offCtx = offCanvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        c.lineWidth = 10;

        function drawLine(a, b, s, color) {
            offCtx.strokeStyle = color;
            offCtx.lineWidth = s;
            offCtx.lineCap = 'round';
            offCtx.beginPath();
            offCtx.moveTo(a.x, a.y);
            offCtx.lineTo(b.x, b.y);
            offCtx.stroke();
        }
        function drawCircle(pos, r, color) {
            offCtx.beginPath();
            offCtx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
            offCtx.fillStyle = color;
            offCtx.fill();
            offCtx.strokeStyle = '#00000033';
            offCtx.stroke();
        }

        class quadTree {
            constructor(cap, bound) {
                this.cap = cap;
                this.bound = bound;

                this.points = [];

                this.quad1 = null;
                this.quad2 = null;
                this.quad3 = null;
                this.quad4 = null;
            }

            subdivide() {
                let quad1Box = new Rect(
                    this.bound.x + this.bound.w / 2,
                    this.bound.y,
                    this.bound.w / 2,
                    this.bound.h / 2
                );
                let quad2Box = new Rect(this.bound.x,
                    this.bound.y,
                    this.bound.w / 2,
                    this.bound.h / 2
                );
                let quad3Box = new Rect(this.bound.x,
                    this.bound.y + this.bound.h / 2,
                    this.bound.w / 2,
                    this.bound.h / 2
                );
                let quad4Box = new Rect(this.bound.x + this.bound.w / 2,
                    this.bound.y + this.bound.h / 2,
                    this.bound.w / 2,
                    this.bound.h / 2
                );

                this.quad1 = new quadTree(this.cap, quad1Box);
                this.quad2 = new quadTree(this.cap, quad2Box);
                this.quad3 = new quadTree(this.cap, quad3Box);
                this.quad4 = new quadTree(this.cap, quad4Box);
            }

            insert(point) {
                if (!this.bound.containsPoint(point)) {
                    return false;
                }
                if (this.points.length < this.cap && this.quad1 == null) {
                    this.points.push(point);
                    return true;
                }
                if (this.quad1 == null) {
                    this.subdivide();
                }

                for (let i = 0; i < this.points.length; i++) {
                    this.insert(this.points.pop());
                }

                if (this.quad1.insert(point)) return true;
                if (this.quad2.insert(point)) return true;
                if (this.quad3.insert(point)) return true;
                if (this.quad4.insert(point)) return true;

                return false;
            }

            query(range, result, show) {
                if (!result) {
                    result = [];
                }

                if (!range.intersectsBox(this.bound)) {
                    return result;
                }

                this.points.forEach(p => {
                    if (range.containsPoint(p))
                        result.push(p);
                });

                if (this.quad1 == null) {
                    if (show !== undefined) {
                        this.bound.show('#55555555');
                    }
                    return result;
                }

                this.quad1.query(range, result, show);
                this.quad2.query(range, result, show);
                this.quad3.query(range, result, show);
                this.quad4.query(range, result, show);

                return result;
            }
        }
        class Boid {
            constructor(x, y) {
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
                let center = new Vector2(width / 2, height / 2);
                let slack = 20;
                if (this.pos.x > canvas.width + slack) {
                    this.pos.x = -slack;
                }
                if (this.pos.x < -slack) {
                    this.pos.x = canvas.width + slack;
                }

                if (this.pos.y > canvas.height + slack) {
                    this.pos.y = -slack;
                }
                if (this.pos.y < -slack) {
                    this.pos.y = canvas.height + slack;
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
                drawLine(this.prePos, this.pos, 1, this.color);
            }
        }
        let flock = [];
        let trail = 33;
        let quadCap = 32;
        let intX = canvas.width / 2;
        let intY = canvas.height / 2;
        let interest = 0;
        let intFac = 0;

        for (var i = 0; i < 512; i++) {
            flock.push(new Boid(Math.random() * canvas.width, Math.random() * canvas.height));
        }
        let animReq;
        function animate() {
            let qtree = new quadTree(quadCap, new Rect(0, 0, width, height));

            for (let i = 0; i < flock.length; i++) {
                qtree.insert(flock[i]);
            }
            c.fillStyle = '#000000' + trail
            c.fillRect(0, 0, canvas.width, canvas.height);

            offCtx.clearRect(0, 0, canvas.width, canvas.height);
            animReq = requestAnimationFrame(animate);

            if (interest > 0) {
                interest += intFac;
                if (intFac > 0.5) {
                    intFac = intFac - 0.5;
                } else if (intFac > 0 && intFac <= 0.5) {
                    intFac = 0;
                }
            } else {
                interest = 0;
            }
            if (interest >= 1) {
                drawCircle(new Vector2(intX, intY), interest, '#55555522');
            }

            for (let i = 0; i < flock.length; i++) {
                let range = new Circle(flock[i].pos.x, flock[i].pos.y, flock[i].senseRadius)
                flock[i].pushLocalMates(qtree, range);
                flock[i].align();
                flock[i].cohesion();
                flock[i].separate();
                if (interest >= 5) {
                    flock[i].interest(new Vector2(intX, intY), interest);
                }
                flock[i].popLocalMates();
            }

            for (let i = 0; i < flock.length; i++) {
                flock[i].draw();
            }
            c.drawImage(offCanvas, 0, 0);
        }
        animate();


        canvas.addEventListener('mousedown', (event) => {
            intX = event.offsetX;
            intY = event.offsetY;
            interest += 50;
            intFac = 5;

        });
        canvas.addEventListener('mousemove', (event) => {
            intX = event.offsetX;
            intY = event.offsetY;
        });
        canvas.addEventListener('mouseup', (event) => {
            intFac = -4;
        });

        canvas.addEventListener('touchstart', process_touchstart, false);
        canvas.addEventListener('touchmove', process_touchmove, false);
        canvas.addEventListener('touchend', process_touchend, false);

        function process_touchstart(event) {
            event.preventDefault();
            intX = event.touches[0].clientX;
            intY = event.touches[0].clientY;
            interest = 50;
            intFac = 5;
        }
        // touchmove handler
        function process_touchmove(event) {
            event.preventDefault();
            if (interest >= 1) {
                intX = event.touches[0].clientX;
                intY = event.touches[0].clientY;
            }
        }
        function process_touchend(event) {
            event.preventDefault();
            intFac = -4;
        }
        return () => {
            flock = [];
            cancelAnimationFrame(animReq);
        }
    }, []);


    return (
        <canvas width="100%"></canvas>
    );
}
