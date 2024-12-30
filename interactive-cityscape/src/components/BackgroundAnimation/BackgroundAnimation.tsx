import React, { useEffect, useRef } from 'react';
import './BackgroundAnimation.scss';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  color: string;
  angle: number;
  speed: number;
}

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles: Particle[] = [];
    const particleCount = 200;

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: getRandomColor(),
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 0.5 + 0.5,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true);
        ctx.fill();
      }

      drawConnections();
      updateParticles();
    };

    const drawConnections = () => {
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt(
            (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2
          );
          if (distance < 100) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    const updateParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.angle += p.speed * 0.02;
        p.x += Math.cos(p.angle) * p.speedX;
        p.y += Math.sin(p.angle) * p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
};

export default BackgroundAnimation;
