import React,{Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../components/Loader.js';

const Computer = ({isMobile}) => {
    const computerModel = useGLTF('./desktop_pc/scene.gltf',true)
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor="black"/>
        <pointLight intensity={1}/>
        <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
        <primitive 
        object={computerModel.scene}
        scale={isMobile ? 2 : 2.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        />
    </mesh>
  )
}

const ComputerCanvas = () => {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

    return (
        <Canvas 
        frameloop='demand' 
        shadows 
        camera={{position:[0, 0, 22],fov:25}}
        gl={{preserveDrawingBuffer: true}}
        >
            <Suspense 
            fallback={<CanvasLoader/>}
            >
                <OrbitControls 
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
                />
                <Computer isMobile={isMobile}/>
                <Preload all />
            </Suspense>
        </Canvas>
    )
}

export default ComputerCanvas