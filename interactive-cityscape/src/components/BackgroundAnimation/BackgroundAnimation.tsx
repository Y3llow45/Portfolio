import { useEffect, useRef } from 'react'
import './BackgroundAnimation.scss'

type Particle = { x: number; y: number; vx: number; vy: number }

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let width = 0
    let height = 0
    let requestId = 0
    const count = 75
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .32,
      vy: (Math.random() - .5) * .32
    }))

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      context.clearRect(0, 0, width, height)
      context.fillStyle = 'rgba(255,184,106,.48)'
      for (let i = 0; i < count; i++) {
        const a = particles[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > width) a.vx *= -1
        if (a.y < 0 || a.y > height) a.vy *= -1
        context.beginPath()
        context.arc(a.x, a.y, 1.3, 0, Math.PI * 2)
        context.fill()

        for (let j = i + 1; j < count; j++) {
          const b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          if (dx * dx + dy * dy > 110 * 110) continue
          context.strokeStyle = 'rgba(255,184,106,.08)'
          context.beginPath()
          context.moveTo(a.x, a.y)
          context.lineTo(b.x, b.y)
          context.stroke()
        }
      }
      requestId = window.requestAnimationFrame(draw)
    }
    draw()
    return () => {
      window.cancelAnimationFrame(requestId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="background-animation" aria-hidden="true" />
}
