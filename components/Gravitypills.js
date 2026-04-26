"use client"
import { useEffect, useRef } from "react"

const PILLS = [
  { label: 'User-First Approach',   color: '#2d6e4a' },
  { label: 'On-Time Delivery',      color: '#4a7c59' },
  { label: 'Creative Excellence',   color: '#6aaa7a' },
  { label: 'Human-Centered Design', color: '#e07050' },
  { label: 'Scalable & Flexible',   color: '#6a8ae0' },
  { label: 'Global Perspective',    color: '#2d5a8a' },
]

export default function GravityPills() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Match internal resolution to actual rendered size
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const W = canvas.width
    const H = canvas.height

    const ctx = canvas.getContext('2d')

    ctx.font = 'bold 13px sans-serif'
    const bodies = PILLS.map((p, i) => {
      const tw = ctx.measureText(p.label).width
      const w = tw + 28, h = 30
      return {
        x: w/2 + Math.random() * (W - w),
        y: -50 - i * 60,
        vx: (Math.random() - 0.5) * 1.5,
        vy: 0,
        angle: (Math.random() - 0.5) * 0.25,
        av: 0,
        w, h,
        label: p.label,
        color: p.color,
        sleeping: false,
        sleepTimer: 0,
      }
    })

    let drag = null, mouse = { x: 0, y: 0 }

    function wallExtent(b) {
      const cos = Math.abs(Math.cos(b.angle)), sin = Math.abs(Math.sin(b.angle))
      return { hw: b.w/2*cos + b.h/2*sin, hh: b.w/2*sin + b.h/2*cos }
    }

    function resolveWalls(b) {
      const { hw, hh } = wallExtent(b)
      if (b.x - hw < 0)  { b.x = hw;   b.vx =  Math.abs(b.vx) * 0.1; b.av *= 0.3 }
      if (b.x + hw > W)  { b.x = W-hw; b.vx = -Math.abs(b.vx) * 0.1; b.av *= 0.3 }
      if (b.y - hh < 0)  { b.y = hh;   b.vy =  Math.abs(b.vy) * 0.1 }
      if (b.y + hh > H)  {
        b.y = H - hh
        b.vy = 0        // hard stop — no bounce
        b.vx *= 0.7
        b.av *= 0.3
      }
    }

    function closestSegmentPoints(a1x,a1y,a2x,a2y,b1x,b1y,b2x,b2y) {
      const d1x=a2x-a1x, d1y=a2y-a1y
      const d2x=b2x-b1x, d2y=b2y-b1y
      const rx=a1x-b1x, ry=a1y-b1y
      const aa=d1x*d1x+d1y*d1y, bb=d2x*d2x+d2y*d2y
      const e=d1x*d2x+d1y*d2y
      const c=d1x*rx+d1y*ry, f=d2x*rx+d2y*ry
      const det=aa*bb-e*e
      let s=0, t=0
      if (det>1e-6) s=Math.min(1,Math.max(0,(e*f-bb*c)/det))
      t=(e*s+f)/(bb||1)
      if (t<0) { t=0; s=Math.max(0,Math.min(1,-c/(aa||1))) }
      else if (t>1) { t=1; s=Math.max(0,Math.min(1,(e-c)/(aa||1))) }
      return { ax:a1x+d1x*s, ay:a1y+d1y*s, bx:b1x+d2x*t, by:b1y+d2y*t }
    }

    function pillSegment(b) {
      const r = b.h/2, half = b.w/2 - r
      const cos=Math.cos(b.angle), sin=Math.sin(b.angle)
      return { x1:b.x-cos*half, y1:b.y-sin*half, x2:b.x+cos*half, y2:b.y+sin*half, r }
    }

    function capsuleCollide(a, b) {
      const sa=pillSegment(a), sb=pillSegment(b)
      const {ax,ay,bx,by}=closestSegmentPoints(
        sa.x1,sa.y1,sa.x2,sa.y2,
        sb.x1,sb.y1,sb.x2,sb.y2
      )
      const dx=ax-bx, dy=ay-by
      const dist=Math.sqrt(dx*dx+dy*dy)||0.001
      const minDist=sa.r+sb.r
      if (dist>=minDist) return

      const nx=dx/dist, ny=dy/dist
      const overlap=minDist-dist

      a.x+=nx*overlap*0.5; a.y+=ny*overlap*0.5
      b.x-=nx*overlap*0.5; b.y-=ny*overlap*0.5

      const relVel=(a.vx-b.vx)*nx+(a.vy-b.vy)*ny
      if (relVel<=0) return

      const imp=relVel*0.5
      a.vx-=imp*nx; a.vy-=imp*ny
      b.vx+=imp*nx; b.vy+=imp*ny

      // Heavy damping = no bouncing between pills
      a.vx*=0.3; a.vy*=0.3
      b.vx*=0.3; b.vy*=0.3
      a.av*=0.3; b.av*=0.3
    }

    function maybeSleep(b) {
      const speed=Math.abs(b.vx)+Math.abs(b.vy)+Math.abs(b.av)*10
      if (speed<0.08) {
        b.sleepTimer++
        if (b.sleepTimer>20) { b.sleeping=true; b.vx=0; b.vy=0; b.av=0 }
      } else {
        b.sleepTimer=0; b.sleeping=false
      }
    }

    function drawPill(b) {
      ctx.save()
      ctx.translate(b.x, b.y)
      ctx.rotate(b.angle)
      const r=b.h/2, hw=b.w/2
      ctx.beginPath()
      ctx.moveTo(-hw+r,-r)
      ctx.lineTo(hw-r,-r)
      ctx.arc(hw-r,0,r,-Math.PI/2,Math.PI/2)
      ctx.lineTo(-hw+r,r)
      ctx.arc(-hw+r,0,r,Math.PI/2,3*Math.PI/2)
      ctx.closePath()
      ctx.fillStyle=b.color
      ctx.fill()
      ctx.fillStyle='#fff'
      ctx.font='bold 13px sans-serif'
      ctx.textAlign='center'
      ctx.textBaseline='middle'
      ctx.fillText(b.label,0,0.5)
      ctx.restore()
    }

    function update() {
      bodies.forEach(b => {
        if (drag?.body===b) {
          b.sleeping=false; b.sleepTimer=0
          b.vx=(mouse.x-drag.ox-b.x)*0.35
          b.vy=(mouse.y-drag.oy-b.y)*0.35
          b.x=mouse.x-drag.ox
          b.y=mouse.y-drag.oy
          b.av*=0.7
          return
        }
        if (b.sleeping) return
        b.vy+=0.5
        b.vx*=0.99
        b.x+=b.vx; b.y+=b.vy
        b.angle+=b.av
        b.av*=0.95
        resolveWalls(b)
        maybeSleep(b)
      })

      for (let pass=0; pass<5; pass++) {
        for (let i=0; i<bodies.length; i++) {
          for (let j=i+1; j<bodies.length; j++) {
            const a=bodies[i], b=bodies[j]
            if (a.sleeping&&b.sleeping) continue
            if (a.sleeping) { a.sleeping=false; a.sleepTimer=0 }
            if (b.sleeping) { b.sleeping=false; b.sleepTimer=0 }
            capsuleCollide(a,b)
          }
        }
      }
    }

    let raf
    const loop = () => {
      ctx.clearRect(0,0,W,H)
      update()
      bodies.forEach(drawPill)
      raf=requestAnimationFrame(loop)
    }
    loop()

    function getPos(e) {
      const r=canvas.getBoundingClientRect()
      const cx=e.touches?e.touches[0].clientX:e.clientX
      const cy=e.touches?e.touches[0].clientY:e.clientY
      return {x:(cx-r.left)*(W/r.width),y:(cy-r.top)*(H/r.height)}
    }

    const onDown=e=>{
      const p=getPos(e); mouse=p
      for (const b of [...bodies].reverse()) {
        const {hw,hh}=wallExtent(b)
        if (Math.abs(p.x-b.x)<hw&&Math.abs(p.y-b.y)<hh) {
          drag={body:b,ox:p.x-b.x,oy:p.y-b.y}; break
        }
      }
    }
    const onMove=e=>{ mouse=getPos(e) }
    const onUp=()=>{ drag=null }

    canvas.addEventListener('mousedown',  onDown)
    canvas.addEventListener('mousemove',  onMove)
    canvas.addEventListener('mouseup',    onUp)
    canvas.addEventListener('mouseleave', onUp)
    canvas.addEventListener('touchstart', e=>{ e.preventDefault(); onDown(e) }, { passive:false })
    canvas.addEventListener('touchmove',  e=>{ e.preventDefault(); onMove(e) }, { passive:false })
    canvas.addEventListener('touchend',   onUp)

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('mousedown',  onDown)
      canvas.removeEventListener('mousemove',  onMove)
      canvas.removeEventListener('mouseup',    onUp)
      canvas.removeEventListener('mouseleave', onUp)
      canvas.removeEventListener('touchstart', onDown)
      canvas.removeEventListener('touchmove',  onMove)
      canvas.removeEventListener('touchend',   onUp)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '85%',
        cursor: 'grab',
        borderRadius: '12px',
      }}
    />
  )
}