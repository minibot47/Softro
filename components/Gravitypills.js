'use client'

import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

const PILLS = [
  { label: 'User-First Approach', color: '#2d6e4a' },
  { label: 'On-Time Delivery', color: '#4a7c59' },
  { label: 'Creative Excellence', color: '#6aaa7a' },
  { label: 'Human-Centered Design', color: '#e07050' },
  { label: 'Scalable & Flexible', color: '#6a8ae0' },
  { label: 'Global Perspective', color: '#2d5a8a' },
]

const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter

function pillSize(label) {
  const h = 36
  const w = Math.min(320, Math.max(120, label.length * 8 + 32))
  return { w, h }
}

function createWalls(W, H) {
  const thick = 80
  return [
    // Ground
    Bodies.rectangle(W / 2, H + thick / 2, W + thick * 2, thick, {
      isStatic: true,
      render: { visible: false },
    }),
    // Left wall
    Bodies.rectangle(-thick / 2, H / 2, thick, H * 2, {
      isStatic: true,
      render: { visible: false },
    }),
    // Right wall
    Bodies.rectangle(W + thick / 2, H / 2, thick, H * 2, {
      isStatic: true,
      render: { visible: false },
    }),
    // ← roof removed
  ]
}

function createPillBodies(W, pillDefs) {
  return pillDefs.map((pill, i) => {
    const { w, h } = pillSize(pill.label)
    const x = w / 2 + Math.random() * Math.max(8, W - w - 16)
    const y = -h - i * (h + 8)
    return Bodies.rectangle(x, y, w, h, {
      chamfer: { radius: h / 2 },
      restitution: 0.25,
      friction: 0.8,
      frictionStatic: 0.9,
      density: 0.002,
      label: pill.label,
      render: {
        fillStyle: pill.color,
        strokeStyle: 'rgba(0,0,0,0.15)',
        lineWidth: 1,
      },
    })
  })
}

export default function GravityPills() {
  const matterRef = useRef(null)

  useEffect(() => {
    const element = matterRef.current
    if (!element) return

    let engine = null
    let render = null
    let runner = null
    let afterRenderHandler = null
    let intersectionObserver = null
    let wheelHandler = null
    let pillsAdded = false

    const getSize = () => {
      const rect = element.getBoundingClientRect()
      return {
        W: Math.max(Math.floor(rect.width), 100),
        H: Math.max(Math.floor(rect.height), 160),
      }
    }

    const teardown = () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect()
        intersectionObserver = null
      }
      if (afterRenderHandler && render) {
        Events.off(render, 'afterRender', afterRenderHandler)
        afterRenderHandler = null
      }
      // Clean up the wheel listener we added
      if (wheelHandler && render?.canvas) {
        render.canvas.removeEventListener('wheel', wheelHandler)
        wheelHandler = null
      }
      if (runner) {
        Runner.stop(runner)
        runner = null
      }
      if (render) {
        Render.stop(render)
        render.canvas?.remove()
        render = null
      }
      if (engine) {
        Engine.clear(engine)
        engine = null
      }
    }

    const setupMatter = () => {
      const { W, H } = getSize()
      if (W < 80 || H < 80) return

      engine = Engine.create({ enableSleeping: false })

      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

      render = Render.create({
        element,
        engine,
        options: {
          width: W,
          height: H,
          wireframes: false,
          background: 'transparent',
        },
      })

      // Fix blurry rendering on retina/high-DPI screens
      Render.setPixelRatio(render, dpr)

      // Add walls using the container's actual dimensions
      const walls = createWalls(W, H)
      Composite.add(engine.world, walls)

      // Set up mouse interaction
      const mouse = Mouse.create(render.canvas)
      mouse.pixelRatio = dpr
      render.mouse = mouse

      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      })

      // Remove Matter's own mousewheel listeners (they interfere with page scroll)
      const mouseEl = mouseConstraint.mouse.element
      if (mouseConstraint.mouse.mousewheel) {
        mouseEl.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel)
        mouseEl.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel)
      }

      // Add our own wheel listener that we can properly clean up
      wheelHandler = (e) => e.preventDefault()
      render.canvas.addEventListener('wheel', wheelHandler, { passive: false })

      Composite.add(engine.world, mouseConstraint)

      // Draw pill labels on the canvas after each render
      afterRenderHandler = () => {
        const ctx = render.context
        ctx.save()
        ctx.font = 'bold 11px system-ui, -apple-system, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#ffffff'

        const bodies = Composite.allBodies(engine.world)
        for (const body of bodies) {
          if (body.isStatic) continue
          if (!body.label || body.label === 'Rectangle Body') continue

          const { x, y } = body.position
          ctx.save()
          ctx.translate(x, y)
          ctx.rotate(body.angle)
          ctx.fillText(body.label, 0, 1)
          ctx.restore()
        }
        ctx.restore()
      }

      Events.on(render, 'afterRender', afterRenderHandler)

      runner = Runner.create()
      Render.run(render)
      Runner.run(runner, engine)
      const addPills = () => {
        if (pillsAdded || !engine) return
        pillsAdded = true
        const pills = createPillBodies(W, PILLS)
        Composite.add(engine.world, pills)
      }

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.target === element) {
              addPills()
              break
            }
          }
        },
        { root: null, threshold: 0.1 }
      )

      intersectionObserver.observe(element)
    }

    // Defer setup by one frame so the element has real dimensions
    const frameId = requestAnimationFrame(() => {
      setupMatter()
    })

    return () => {
      cancelAnimationFrame(frameId)
      teardown()
    }
  }, [])

  return (
    <div
      ref={matterRef}
      className="w-full h-[398px] rounded-b-[10px] overflow-hidden touch-none"
      style={{ cursor: 'grab' }}
    />
  )
}