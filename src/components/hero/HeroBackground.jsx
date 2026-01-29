import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroBackground() {
  const mount = useRef()

  useEffect(() => {
    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.current.appendChild(renderer.domElement)

    const geo = new THREE.BufferGeometry()
    const count = 3000 
    const pos = new Float32Array(count * 3)

    for (let i = 0; i < pos.length; i++) {
      pos[i] = (Math.random() - 0.5) * 80 
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    
    const mat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const mesh = new THREE.Points(geo, mat)
    scene.add(mesh)
    cam.position.z = 30

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      mesh.rotation.y += 0.0005
      mesh.rotation.x += 0.0002
      mesh.position.y = Math.sin(frame * 0.001) * 0.5
      
      renderer.render(scene, cam)
    }
    animate()

    const handleResize = () => {
      cam.aspect = window.innerWidth / window.innerHeight
      cam.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      mount.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mount} className="absolute inset-0 z-0 pointer-events-none" />
}