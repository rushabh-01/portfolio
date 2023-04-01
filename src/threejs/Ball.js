import React,{Suspense,useMemo } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Decal,Float,Preload } from '@react-three/drei';
import CanvasLoader from '../components/Loader';
import * as THREE from 'three';

const Ball = ({imgUrl}) => {
    const [decalTexture] = useMemo(() => {
        const loader = new THREE.TextureLoader();
        const texture = loader.load(imgUrl);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        return [texture];
    }, [imgUrl]);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <directionalLight position={[0,0,0.25]}>
                <mesh castShadow receiveShadow scale={2.75}>
                    <sphereGeometry />
                    <Decal 
                        rotation={[2 * Math.PI, 0, 6.25]}
                        scale={1}
                        position={[0,0,1]}
                        map={decalTexture}
                    />
                </mesh>
            </directionalLight>
        </Float>
    )
}

const BallCanvas = ({icon}) => {
    const maxWebGLContexts = navigator.maxHardwareConcurrency || 4; // default to 4
    return (
        <Canvas
            gl={{
                maxContexts: maxWebGLContexts
            }}
        >
            <OrbitControls enableZoom={false} />
            <Suspense fallback={<CanvasLoader />}>
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default BallCanvas
