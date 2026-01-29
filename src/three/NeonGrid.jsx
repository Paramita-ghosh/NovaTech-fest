import { useEffect } from "react"
import * as THREE from "three"

export default function NeonGrid(scene) {
  useEffect(() => {
    const grid = new THREE.GridHelper(100, 50, 0x00f5ff, 0x00f5ff)
    grid.material.opacity = 0.2
    grid.material.transparent = true
    scene.add(grid)
  }, [])

  return null
}
