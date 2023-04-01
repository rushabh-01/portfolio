import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Decal, Float, Preload } from '@react-three/drei'
import CanvasLoader from '../components/Loader'

const Ball = (props) => {
  const decal = useLoader('texture', props.imgUrl)
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}>
        <directionalLight position={[0, 0, 0.25]}>
          <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
            <Decal rotation={[2 * Math.PI, 0, 6.25]} scale={1} flatShading position={[0, 0, 1]} map={decal} />
          </mesh>
        </directionalLight>
      </ambientLight>
    </Float>
  )
}

const Cors = (props) => {
  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
      <Decal rotation={[2 * Math.PI, 0, 6.25]} scale={1} flatShading position={[0, 0, 1]} map={props.corsUrl} />
    </mesh>
  )
}

const BallCanvas = ({ icon, cors }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  useEffect(() => {
    const image = new Image()
    image.onload = () => setImageLoaded(true)
    image.src = icon
  }, [icon])

  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {!imageLoaded && <Cors corsUrl={cors} />}
        {imageLoaded && <Ball imgUrl={icon} />}
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
