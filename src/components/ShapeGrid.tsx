"use client";

import React, { useRef, useEffect, useState } from 'react';

interface ShapeGridProps {
  speed?: number;
  squareSize?: number;
  direction?: 'diagonal' | 'up' | 'down' | 'left' | 'right';
  borderColor?: string;
  hoverFillColor?: string;
  shape?: 'hexagon' | 'square' | 'circle';
  hoverTrailAmount?: number;
}

const ShapeGrid: React.FC<ShapeGridProps> = ({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = '#7854b6',
  hoverFillColor = '#222222',
  shape = 'hexagon',
  hoverTrailAmount = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
    };

    const drawShape = (x: number, y: number, size: number) => {
      if (shape === 'hexagon') {
        drawHexagon(x, y, size / 1.5);
      } else if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(x, y, size / 2.5, 0, Math.PI * 2);
        ctx.closePath();
      } else {
        ctx.rect(x - size / 2, y - size / 2, size, size);
      }
    };

    const trail: { x: number; y: number; opacity: number }[] = [];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      offset += speed;
      const effectiveOffset = offset % squareSize;

      const cols = Math.ceil(canvas.width / squareSize) + 2;
      const rows = Math.ceil(canvas.height / squareSize) + 2;

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 0.5;

      // Update trail
      if (hoverTrailAmount > 0) {
        trail.push({ ...mouseRef.current, opacity: 1 });
        if (trail.length > hoverTrailAmount * 10) trail.shift();
        trail.forEach(p => p.opacity *= 0.95);
      }

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          let x = i * squareSize;
          let y = j * squareSize;

          if (direction === 'diagonal') {
            x += effectiveOffset;
            y += effectiveOffset;
          } else if (direction === 'up') {
            y -= effectiveOffset;
          } else if (direction === 'down') {
            y += effectiveOffset;
          } else if (direction === 'left') {
            x -= effectiveOffset;
          } else if (direction === 'right') {
            x += effectiveOffset;
          }

          const dist = Math.sqrt(
            Math.pow(x - mouseRef.current.x, 2) + Math.pow(y - mouseRef.current.y, 2)
          );

          ctx.beginPath();
          drawShape(x, y, squareSize);
          
          let fillOpacity = 0;
          if (dist < 100) {
            fillOpacity = 1 - dist / 100;
          }

          // Check trail
          if (hoverTrailAmount > 0) {
            trail.forEach(tp => {
              const tDist = Math.sqrt(Math.pow(x - tp.x, 2) + Math.pow(y - tp.y, 2));
              if (tDist < 50) {
                fillOpacity = Math.max(fillOpacity, tp.opacity * (1 - tDist / 50));
              }
            });
          }
          
          if (fillOpacity > 0) {
            ctx.fillStyle = hoverFillColor;
            ctx.globalAlpha = fillOpacity;
            ctx.fill();
            ctx.globalAlpha = 1;
          }
          
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, speed, squareSize, direction, borderColor, hoverFillColor, shape, hoverTrailAmount]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-1000"
      style={{ opacity: 0.25 }}
    />
  );
};

export default ShapeGrid;
