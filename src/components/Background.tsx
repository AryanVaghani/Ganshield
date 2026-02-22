import React, { useEffect, useRef } from 'react';

const WARM_COLORS = [
  { r: 231, g: 138, b: 83 },   // primary orange
  { r: 212, g: 160, b: 96 },   // warm amber
  { r: 200, g: 140, b: 80 },   // golden
  { r: 180, g: 120, b: 70 },   // deep warm
  { r: 245, g: 180, b: 120 },  // light peach
];

export const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const particles: Particle[] = [];
        const particleCount = 70;
        const connectionDistance = 150;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: typeof WARM_COLORS[0];

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.35;
                this.vy = (Math.random() - 0.5) * 0.35;
                this.size = Math.random() * 2 + 0.5;
                this.color = WARM_COLORS[Math.floor(Math.random() * WARM_COLORS.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.5)`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, index) => {
                p.update();
                p.draw();

                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const alpha = (1 - distance / connectionDistance) * 0.3;
                        const r = Math.round((p.color.r + p2.color.r) / 2);
                        const g = Math.round((p.color.g + p2.color.g) / 2);
                        const b = Math.round((p.color.b + p2.color.b) / 2);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 bg-background"
        />
    );
};
