/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/models/sky.glb'

const Sky = ({ onSky, setOnSky, setHovered}) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useEffect(() => {
    if (onSky) {
      setHovered(5);
    }
  })

  return (
    <mesh ref={skyRef} 
    onPointerOver={() => setOnSky(true)}
    onPointerOut={() => setOnSky(false)}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky