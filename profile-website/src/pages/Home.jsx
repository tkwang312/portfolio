import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Cloud from '../models/cloud'
import Cloud2 from '../models/Could2'
import Cloud3 from '../models/Cloud3'

const Home = () => {
  const [isHover, setHover] = useState(false);

  const adjustCloudForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [-200, -250 , -950];

    if ( window.innerWidth < 768 ) {
      screenScale = [1, 1, 1]
    } else {
      screenScale = [0.5, 0.5, 0.5]   
    }
    return [screenScale, screenPosition];
  }

  const adjustCloud2ForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [-600, -200 , -950];

    if ( window.innerWidth < 768 ) {
      screenScale = [1, 1, 1]
    } else {
      screenScale = [0.5, 0.5, 0.5]   
    }
    return [screenScale, screenPosition];
  }

  const adjustCloud3ForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [200, -200 , -950];

    if ( window.innerWidth < 768 ) {
      screenScale = [1, 1, 1]
    } else {
      screenScale = [0.5, 0.5, 0.5]   
    }
    return [screenScale, screenPosition];
  }
  const [cloudScale, cloudPosition] = adjustCloudForScreenSize();
  const [cloud2Scale, cloud2Position] = adjustCloud2ForScreenSize();
  const [cloud3Scale, cloud3Position] = adjustCloud3ForScreenSize();

  return (
    <section className="w-full h-screen relative bg-blue-200">
      <Canvas 
        className="w-full h-screen bg-transparent"
        camera={{near:0.1, far:1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Cloud 
            scale = { cloudScale }
            position = { cloudPosition }
            isHover = { isHover }
            setHover = { setHover }
          />

          <Cloud2 
            scale = { cloud2Scale }
            position = { cloud2Position }
            isHover = { isHover }
            setHover = { setHover }
          />
          <Cloud3
            scale = { cloud3Scale }
            position = { cloud3Position }
            isHover = { isHover }
            setHover = { setHover }
          />
        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home