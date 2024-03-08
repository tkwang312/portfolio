/* eslint-disable react/no-unknown-property */

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import {useNavigate} from 'react-router-dom'

import cloudScene from '../assets/cloud.glb';


const Cloud = ({isHover, setHover, ...props}) => {
  const { gl } = useThree();
  const cloudRef = useRef();
  const { nodes, materials } = useGLTF(cloudScene);


  const handleClick = (e) => {
    e.stopPropagation();
    
    window.location.replace("/about");
  }

  useEffect(() => {
    document.body.style.cursor = isHover ? 'pointer' : 'auto';
  }, [isHover])


  return (
    <a.group ref={cloudRef} {...props}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={ handleClick }
      />
    </a.group>
  );
}

export default Cloud;