import { useEffect } from "react"
import * as THREE from "three"

export default function Particles(scene) {
  useEffect(() => {
    const geo = new THREE.BufferGeometry()
    const count = 1500
    const pos = new Float32Array(count * 3)

    for (let i = 0; i < pos.length; i++) {
      pos[i] = (Math.random() - 0.5) * 80
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))

    const mat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.1
    })

    const mesh = new THREE.Points(geo, mat)
    scene.add(mesh)
  }, [])

  return null
}
