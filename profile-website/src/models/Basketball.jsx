/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import {useNavigate} from 'react-router-dom'

import basketballScene from '../assets/models/basketball-coloured.glb';

const Basketball = ({onBall, setOnBall, setHovered, hoverAnything, setHoverAnything, ...props}) => {
    const { gl } = useThree();
    const basketballRef = useRef();
    const { nodes, materials } = useGLTF(basketballScene);
    const navigate = useNavigate();
    
    const handleHover = () => {
      setOnBall(true)
    }


    const handleClick = (e) => {
      e.stopPropagation();
      navigate('/about');
      // window.location.replace("/about");
    }
  
    useEffect(() => {
      if (onBall) {
        document.body.style.cursor = 'pointer';
        setHovered(1);
        setHoverAnything(true);
      } else {
        document.body.style.cursor = 'auto';
      }
    })
  
    return (
    <a.group ref={basketballRef} {...props} >
      <group position={[-0.715, 0, 0.44]} rotation={[-Math.PI / 2, 0, 0.288]}
              onPointerOver={ handleHover }
              onPointerOut={() => setOnBall(false)}
              onClick={ handleClick }>
        <group position={[-228.141, -280.375, -22.734]}>
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.DEFAULT}
            position={[234.541, 288.142, 24.407]}
            scale={-0.024}
          />
        </group>
      </group>
      <group
        position={[-0.056, 0.074, -5.396]}
        rotation={[-Math.PI / 2, 0, 0.01]}
        scale={1.605}
        onPointerOver={() => setOnBall(true)}
        onPointerOut={() => setOnBall(false)}
        onClick={ handleClick }
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, 76.613, 38.561]} rotation={[-Math.PI / 2, 0, 0]}>
            <group
              position={[0, -12.863, 38.936]}
              scale={[1.281, 0.525, 1.281]}
            >
              <mesh
                geometry={nodes.Box002__0.geometry}
                material={materials["Scene_-_Root"]}
                position={[0, 0, -5.5]}
              />
            </group>
            <group position={[0, 38.561, -76.613]} rotation={[0, -1.571, 0]}>
              <mesh
                geometry={nodes.Line001__0.geometry}
                material={materials["Scene_-_Root"]}
                position={[94.191, -19.02, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Torus001__0.geometry}
              material={materials["Scene_-_Root"]}
              position={[0, -30.498, 43.154]}
              scale={[1, 1, 1.203]}
            />
          </group>
        </group>
      </group>
      <group
        position={[0.066, 1.825, 4.535]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.016}
        onPointerOver={() => setOnBall(true)}
        onPointerOut={() => setOnBall(false)}
        onClick={ handleClick }
      >
        <group scale={100}>
          <mesh
            geometry={nodes.BasketballBall_Lines_0.geometry}
            material={materials["Lines.001"]}
          />
          <mesh
            geometry={nodes.BasketballBall_MainColor_0.geometry}
            material={materials["MainColor.001"]}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Basketball;

