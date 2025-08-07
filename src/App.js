import React, {Suspense } from "react";
//Styles
import "./assets/styles/App.scss"
//Three
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Three/lights";
import { OrbitControls, Loader } from "@react-three/drei";

//Model
import { Model } from "./components/Three/mbiraModular";




const App = () => {

  
   return (
    <>
    <Canvas
        camera={{position: [-5, 4, 4], fov: 40}}
    >
      <Lights />
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
      </Suspense>

    </Canvas>
    <Loader/>
    
    </>
  );
};

export default App;