import React,{Suspense,useMemo } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Decal,Float,Preload } from '@react-three/drei';
import CanvasLoader from '../components/Loader';
import * as THREE from 'three';

const Ball = ({imgUrl}) => {
    // const [decal] = useTexture([props.imgUrl]);
    const decalTexture = useMemo(() => new THREE.TextureLoader().load(imgUrl), [imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        {/* <ambientLight intensity={0.25}> */}
            <directionalLight position={[0,0,0.25]}>
                <mesh castShadow receiveShadow scale={2.75}>
                    {/* <icosahedronGeometry args={[1,1,]} /> */}
                    <sphereGeometry />
                    {/* <meshStandardMaterial 
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                    /> */}
                    <Decal 
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    // flatShading
                    position={[0,0,1]}
                    map={decalTexture}
                    />
                </mesh>
            </directionalLight>
        {/* </ambientLight> */}
    </Float>
  )
}

const BallCanvas = ({icon}) => {
    return (
        <Canvas
      // frameloop='demand'
      // dpr={[1, 2]}
      // gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} />
      <Suspense fallback={<CanvasLoader />}>
      <React.Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls enableZoom={false} /> */}
        <Ball imgUrl={icon} />
        </React.Suspense>
      </Suspense>

      <Preload all />
    </Canvas>
    )
}

export default BallCanvas