import React from "react";

const Lights = () => {
    return (
        <>
  
        <ambientLight intensity={0.4}/>
        <directionalLight
          position={[-8, 16, -8]}
          intensity={6}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}/>
          <pointLight position={[0, 50, 0]} intensity={1.5}/>
          <pointLight position={[0, -50, 0]} intensity={2}/>

        </>
    )
}

export default Lights