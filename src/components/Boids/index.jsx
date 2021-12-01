import './style.css';
import { useEffect, useRef } from 'react';
import Boid from './Boid';
import quadTree from './Quadtree';
import { Vector2, Rect, Circle, drawCircle } from './Utils';

export default function Boids() {

    const canvasRef = useRef();

    function isScrolledIntoView(el) {
        let rect = el.getBoundingClientRect();
        return (rect.top >= (0 - rect.height)) && (rect.bottom <= (window.innerHeight + rect.height));
    }

    useEffect(() => {

        const canvas = canvasRef.current;
        const c = canvas.getContext("2d");

        let width = canvas.clientWidth;
        let height = canvas.clientHeight;

        const offCanvas = document.createElement('canvas');
        offCanvas.width = width;
        offCanvas.height = height;
        const offCtx = offCanvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        let flock = [];
        let trail = 33;
        let quadCap = 32;
        let intX = canvas.width / 2;
        let intY = canvas.height / 2;
        let interest = 0;
        let intFac = 0;
        let nBoids = 512;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            nBoids = 128;
        }
        for (var i = 0; i < nBoids; i++) {
            flock.push(new Boid(Math.random() * canvas.width, Math.random() * canvas.height, canvas, offCtx));
        }

        let animReq;
        function animate() {
            if (isScrolledIntoView(canvas)) {
                let qtree = new quadTree(quadCap, new Rect(0, 0, width, height));

                for (let i = 0; i < flock.length; i++) {
                    qtree.insert(flock[i]);
                }
                c.fillStyle = '#000000' + trail
                c.fillRect(0, 0, canvas.width, canvas.height);

                offCtx.clearRect(0, 0, canvas.width, canvas.height);

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
                    drawCircle(offCtx, new Vector2(intX, intY), interest, '#55555522');
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
            animReq = requestAnimationFrame(animate);
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

        window.addEventListener("resize", () => {

            width = canvas.clientWidth;
            height = canvas.clientHeight;

            canvas.width = width;
            canvas.height = height;
            offCanvas.width = width;
            offCanvas.height = height;
        });
        function process_touchstart(event) {
            event.preventDefault();
            intX = event.touches[0].clientX;
            intY = event.touches[0].clientY;
            interest = 50;
            intFac = 5;
        }
        function process_touchmove(event) {
            event.preventDefault();
            if (interest >= 1) {
                var rect = event.target.getBoundingClientRect();
                intX = event.touches[0].pageX - rect.left;
                intY = event.touches[0].pageY - rect.top;
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
        <canvas width="100%" ref={canvasRef}></canvas>
    );
}
