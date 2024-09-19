/* eslint-disable react/no-unknown-property */

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import {useNavigate} from 'react-router-dom'

import computerScene from '../assets/models/computer-coloured.glb';


const Computer = ({onComputer, setOnComputer, setHovered, hoverAnything, setHoverAnything, ...props}) => {
  const { gl } = useThree();
  const computerRef = useRef();
  const { nodes, materials } = useGLTF(computerScene);
 const navigate = useNavigate()

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/skills')
    // window.location.replace("/skills");
  }

  useEffect(() => {
    if (onComputer) {
      document.body.style.cursor = 'pointer';
      setHovered(3);
      setHoverAnything(false);
    } else {
      document.body.style.cursor = 'auto';
    }
  })

  return (
    <a.group ref={computerRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group 
          position={[-228.141, -280.375, -22.734]}
          onPointerOver={() => setOnComputer(true)}
          onPointerOut={() => setOnComputer(false)}
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
        position={[0.424, 1.315, -0.002]}
        rotation={[-1.557, 0.015, 1.153]}
        scale={0.037}
        onPointerOver={() => setOnComputer(true)}
        onPointerOut={() => setOnComputer(false)}
        onClick={ handleClick }
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[3.126, 28.473, 6.891]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["computer_computer-hdd-led_0"].geometry}
              material={materials["computer-hdd-led"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["computer_computer-power-led_0"].geometry}
              material={materials["computer-power-led"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["computer_computer-screen_0"].geometry}
              material={materials["computer-screen"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["computer_connector-female_0"].geometry}
              material={materials["connector-female"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.computer_plastic_0.geometry}
              material={materials.plastic}
            />
          </group>
          <group
            position={[30.139, 3.6, 8.295]}
            rotation={[-Math.PI / 2, 0, -0.311]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["floppy_drive_connector-female_0"].geometry}
              material={materials["connector-female"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["floppy_drive_floppy-drive-led_0"].geometry}
              material={materials["floppy-drive-led"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.floppy_drive_plastic_0.geometry}
              material={materials.plastic}
            />
          </group>
          <group
            position={[3.205, -0.381, 40.706]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <group
              position={[-0.153, 0.044, 0.05]}
              rotation={[0.175, 0, 0]}
              scale={0.235}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["keyboard-keys_keyboard-keys_0"].geometry}
                material={materials["keyboard-keys"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["keyboard-keys_plastic_0"].geometry}
                material={materials.plastic}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.keyboard_plastic_0.geometry}
              material={materials.plastic}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve_plastic_0.geometry}
            material={materials.plastic}
            position={[-26.02, 0.489, 36.853]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["keyboard-pc-plug_plastic_0"].geometry}
            material={materials.plastic}
            position={[6.638, 5.045, -7.711]}
            rotation={[-Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ribbon_ribbon_0.geometry}
            material={materials.ribbon}
            position={[10.602, 3.701, -18.854]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ribbon_connector_1_connector_0.geometry}
            material={materials.connector}
            position={[-4.188, 5.039, -8.684]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ribbon_connector_2_connector_0.geometry}
            material={materials.connector}
            position={[41.604, 1.456, -4.2]}
            rotation={[-Math.PI / 2, 0, 1.105]}
            scale={100}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Computer;