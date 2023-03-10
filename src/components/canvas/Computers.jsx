import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControl, Preload, useGLTF } from '@react-three/drei';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
    </mesh>
  )
}

export default Computers