/* eslint-disable react/no-unknown-property */

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import {useNavigate} from 'react-router-dom'

import pochitaScene from '../assets/models/pochita-cloud-colour.glb';


const Cloud = ({onDog, setOnDog, setHovered, hoverAnything, setHoverAnything, ...props}) => {
  const { gl } = useThree();
  const dogRef = useRef();
  const navigate = useNavigate()
  const { nodes, materials } = useGLTF(pochitaScene);

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/projects')
  }

  useEffect(() => {
    if (onDog) {
      document.body.style.cursor = 'pointer';
      setHovered(4);
      setHoverAnything(true);
    } else {
      document.body.style.cursor = 'auto';
    }
  }, [onDog, setHovered, setHoverAnything])


  return (
    <a.group ref={dogRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group 
        position={[-228.141, -280.375, -22.734]}
        onPointerOver={() => setOnDog(true)}
        onPointerOut={() => setOnDog(false)}
        onClick={ handleClick }
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.DEFAULT}
            position={[231.164, 276.764, 24.181]}
            rotation={[-Math.PI, 0.007, -Math.PI]}
            scale={0.012}
          />
        </group>
      </group>
      <group
        position={[-0.036, 0.638, -1.334]}
        rotation={[-1.467, 0.162, 0.904]}
        onPointerOver={() => setOnDog(true)}
        onPointerOut={() => setOnDog(false)}
        onClick={ handleClick }
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[31.884, 141.923, 2.315]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.326}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pochita_Remesh001_Material001_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pochita_Remesh001_Material003_0.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pochita_Remesh001_Material_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_Material001_0.geometry}
            material={materials["Material.002"]}
            position={[32.891, 262.855, -23.26]}
            rotation={[-2.094, 0, 0]}
            scale={71.985}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_Material001_0.geometry}
            material={materials["Material.002"]}
            position={[31.884, 100.141, -118.636]}
            rotation={[-Math.PI / 4, 0, 0]}
            scale={7.774}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_Material002_0.geometry}
            material={materials["Material.004"]}
            position={[31.884, 207.194, 55.27]}
            rotation={[-2.094, 0, 0]}
            scale={[42.09, 100, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath004_Material001_0.geometry}
            material={materials["Material.002"]}
            position={[31.884, 77.157, -127.576]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[23.64, 100, 100]}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Cloud;