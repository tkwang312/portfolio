/* eslint-disable react/no-unknown-property */

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import {useNavigate} from 'react-router-dom'

import skiScene from '../assets/models/ski-coloured.glb';


const Ski = ({onSkis, setOnSkis, setHovered, hoverAnything, setHoverAnything, ...props}) => {
  const { gl } = useThree();
  const skiRef = useRef();
  const { nodes, materials } = useGLTF(skiScene);


  const handleClick = (e) => {
    e.stopPropagation();
    
    window.location.replace("/experience");
  }

  useEffect(() => {
    // document.body.style.cursor = isHover ? 'pointer' : 'auto';
    // console.log(onSkis)
    if (onSkis) {
      document.body.style.cursor = 'pointer';
      setHovered(2);
      setHoverAnything(true);

    } else {
      document.body.style.cursor = 'auto';
    }

  })


  return (
    <a.group ref={skiRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}
              onPointerOver={() => setOnSkis(true)}
              onPointerOut={() => setOnSkis(false)}
              onClick={ handleClick }>
        <group position={[-228.141, -280.375, -22.734]}>
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.DEFAULT}
            position={[231.164, 276.764, 24.181]}
            rotation={[-Math.PI, 0.007, -Math.PI]}
            scale={0.012}
          />
        </group>
      </group>
      <group
        position={[-0.696, -0.039, -0.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.ski1_initialShadingGroup1_0.geometry}
            material={materials.initialShadingGroup1}
            position={[1.773, 0.882, -1.202]}
            rotation={[-1.075, -1.403, -1.081]}
            scale={0.027}
          />
        </group>
      </group>
      <group
        position={[0.662, 1.94, 0.276]}
        rotation={[-Math.PI / 2, 0, 1.586]}
        scale={0.307}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
            scale={[1.335, 2.364, 1]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.001"]}
            position={[0, 1.306, 0.039]}
            rotation={[-0.11, 0, -Math.PI / 2]}
            scale={[0.255, 1, 0.023]}
          />
        </group>
      </group>
      <group
        position={[-0.788, 1.543, 1.332]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.DefaultMaterial}
            position={[2.317, -0.149, -1.287]}
          />
        </group>
      </group>
      <group position={[-0.696, -0.039, 0.428]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.ski1_initialShadingGroup1_0001.geometry}
            material={materials["initialShadingGroup1.001"]}
            position={[1.773, 0.882, -1.202]}
            rotation={[-1.075, -1.403, -1.081]}
            scale={0.027}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Ski;