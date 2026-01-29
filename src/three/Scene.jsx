import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function Scene({ children }) {
  const mount = useRef()

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(innerWidth, innerHeight)
    mount.current.appendChild(renderer.domElement)

    camera.position.z = 25

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return <div ref={mount} className="fixed inset-0 -z-10" />
}
