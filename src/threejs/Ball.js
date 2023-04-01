import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Preload,Decal, useTexture } from '@react-three/drei';
import CanvasLoader from '../components/Loader';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        {/* <meshBasicMaterial  /> */}
        <Decal 
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    flatShading
                    position={[0,0,1]}
                    map={decal}
                    />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [0, 0, 4], fov: 50 }}
            style={{ height: '100%', width: '100%' }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <ambientLight intensity={0.15} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />

            <Preload all />
        </Canvas>
    )
}

export default BallCanvas
