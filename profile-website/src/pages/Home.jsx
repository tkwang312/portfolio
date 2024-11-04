/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import * as THREE from 'three';
import Loader from '../components/Loader'
import Dog from '../models/Dog'
import Computer from '../models/Computer'
import Ski from '../models/Ski'
import Basketball from '../models/Basketball'
import HomeInfo from '../components/HomeInfo'
import Sky from '../models/Sky'

const Home = () => {
  const [onSkis, setOnSkis] = useState(false);
  const [onComputer, setOnComputer] = useState(false);
  const [onDog, setOnDog] = useState(false);
  const [onBall, setOnBall] = useState(false);
  const [onSky, setOnSky] = useState(false);
  const [hoverAnything, setHoverAnything] = useState(false)
  const [hoveredCloud, setHovered] = useState(5);

  console.log(hoveredCloud)

  const adjustPochitaForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [5, 6 , -11.5];
    let rotation = [0, -1.2, .1];

    if ( window.innerWidth < 768 ) {
      screenScale = [1, 1, 1]
    } else {
      screenScale = [1, 1, 1]   
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustComputerForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [-3.5, 6 , -11];
    let rotation = [0, -1.2, 0.1];

    if ( window.innerWidth < 768 ) {
      screenScale = [1, 1, 1]
    } else {
      screenScale = [1, 1, 1]   
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustSkiForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [-8, 9 , -13];
    let rotation = [0, 2.2, 0]

    if ( window.innerWidth < 768 ) {
      screenScale = [.5, .5, .5]
    } else {
      screenScale = [1, 1, 1]   
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustBasketballForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [3, 8, -24];
    let rotation = [0, -.8, .1]

    if ( window.innerWidth < 768 ) {
      screenScale = [1, 1, 1]
    } else {
      screenScale = [1.5, 1.5, 1.5]   
    }
    return [screenScale, screenPosition, rotation];
  }

  const [pochitaScene, pochitaPosition, pochitaRotation] = adjustPochitaForScreenSize();
  const [computerScale, computerPosition, computerRotation] = adjustComputerForScreenSize();
  const [skiScale, skiPosition, skiRotation] = adjustSkiForScreenSize();
  const [basketballScale, basketballPosition, basketballRotation] = adjustBasketballForScreenSize();

  return (
    <section className="w-full h-screen relative bg-blue-200">
      
      <div className="absolute top-28 left-0 right-0 z-10 flex item-center justify-center">
        {hoveredCloud === 5 ? null :     
        <div className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg text-center">
          <HomeInfo hoveredCloud={hoveredCloud} />
        </div>}
      </div>


      <Canvas 
        className="w-full h-screen bg-transparent"
        camera={{near:0.1, far:1000, rotation:[-0.5, 0, 0], position:[0,16,0]}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[0, 16, 0]} intensity={2}/>
          <ambientLight />
          <pointLight position={[0, 16, 0]}/>
          <spotLight />
          <hemisphereLight />
          <Sky
            onSky = { onSky }
            setOnSky = { setOnSky }
            setHovered = {setHovered}
          />
          <Dog 
            scale = { pochitaScene }
            position = { pochitaPosition }
            rotation = { pochitaRotation }
            onDog = { onDog }
            setOnDog = { setOnDog }
            setHovered = { setHovered }
            hoverAnything = { hoverAnything }
            setHoverAnything = { setHoverAnything }
          />
          <Computer 
            scale = { computerScale }
            position = { computerPosition }
            rotation = { computerRotation }
            onComputer = { onComputer }
            setOnComputer = { setOnComputer }
            setHovered = { setHovered }
            hoverAnything = { hoverAnything }
            setHoverAnything = { setHoverAnything }
          />
          <Ski
            scale = { skiScale }
            position = { skiPosition }
            rotation = { skiRotation }
            onSkis = { onSkis }
            setOnSkis = { setOnSkis }
            setHovered = { setHovered }
            hoverAnything = { hoverAnything }
            setHoverAnything = { setHoverAnything }
          />

          <Basketball
            scale = { basketballScale }
            position = { basketballPosition }
            rotation = { basketballRotation }
            onBall = { onBall }
            setOnBall = { setOnBall }
            setHovered = { setHovered }
            hoverAnything = { hoverAnything }
            setHoverAnything = { setHoverAnything }
          />
        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home