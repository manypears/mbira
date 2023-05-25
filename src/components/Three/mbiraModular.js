import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Define the highlighted material
const highlightedMaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000, // Red color for highlighted effect
  roughness: 0.5,
  metalness: 0.5,
  emissive: 0xff0000, // Set emissive color to red for extra visibility
  emissiveIntensity: 4, // Increase the intensity of the emissive color
});

// SoundFiles
const SoundFiles = require.context('../../assets/sound', false, /\.wav$/);

export function Model(props) {
  const { nodes, materials } = useGLTF('../../../MBIRA_Modular.glb');
 
// State to keep track of the highlighted mesh
  const [highlightedMesh, setHighlightedMesh] = useState(null);

  
  // keybind function
  useEffect(() => {
      const handleKeyDown = (event) => {
      
        // Map keyboard keys to meshes
      const keyMeshMap = {
        KeyY: { mesh: nodes.RI_1, sound: SoundFiles('./RI1.wav') },
        KeyU: { mesh: nodes.RI_2, sound: SoundFiles('./RI2.wav') },
        KeyI: { mesh: nodes.RI_3, sound: SoundFiles('./RI3.wav') },
        KeyO: { mesh: nodes.RI_4, sound: SoundFiles('./RI4.wav') },
        KeyP: { mesh: nodes.RI_5, sound: SoundFiles('./RI5.wav') },
        KeyR: { mesh: nodes.RI_6, sound: SoundFiles('./RI6.wav') },
        KeyT: { mesh: nodes.RI_7, sound: SoundFiles('./RI7.wav') },
        KeyN: { mesh: nodes.RT_1, sound: SoundFiles('./RT1.wav') },
        KeyM: { mesh: nodes.RT_2, sound: SoundFiles('./RT2.wav') },
        KeyJ: { mesh: nodes.RT_3, sound: SoundFiles('./RT3.wav') },
        KeyK: { mesh: nodes.RT_4, sound: SoundFiles('./RT4.wav') },
        KeyL: { mesh: nodes.RT_5, sound: SoundFiles('./RT5.wav') },
        KeyG: { mesh: nodes.RT_6, sound: SoundFiles('./RT6.wav') },
        KeyH: { mesh: nodes.RT_7, sound: SoundFiles('./RT7.wav') },
        KeyD: { mesh: nodes.L_1, sound: SoundFiles('./L1.wav') },
        KeyA: { mesh: nodes.L_4, sound: SoundFiles('./L4.wav') },
        KeyS: { mesh: nodes.L_5, sound: SoundFiles('./L5.wav') },
        KeyF: { mesh: nodes.L_5x, sound: SoundFiles('./L5x.wav') },
        KeyQ: { mesh: nodes.LI_1, sound: SoundFiles('./LI1.wav') },
        KeyE: { mesh: nodes.LI_6, sound: SoundFiles('./LI6.wav') },
        KeyW: { mesh: nodes.LI_7, sound: SoundFiles('./LI7.wav') },
        KeyX: { mesh: nodes.B_2, sound: SoundFiles('./B2.wav') },
        KeyZ: { mesh: nodes.B_3, sound: SoundFiles('./B3.wav') },
        KeyB: { mesh: nodes.B_4, sound: SoundFiles('./B4.wav') },
        KeyV: { mesh: nodes.B_6, sound: SoundFiles('./B6.wav') },
        KeyC: { mesh: nodes.B_7, sound: SoundFiles('./B7.wav') },
        // Add more mappings for other meshes
      };

      // Check if the pressed key is mapped to a mesh
      const mesh = keyMeshMap[event.code];
      if (mesh) {
        // Play sound corresponding to the mesh
        playSound(mesh.sound);
        setHighlightedMesh(mesh.mesh);

        // Remove highlight after 1 second
        setTimeout(() => {
          setHighlightedMesh(null);
        }, 200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nodes]);


  // Play sound and highlight the mesh
  const playSound = (file) => {
        new Audio(file).play();
   
  };

  // Event handler for clicking on a mesh
const handleClick = (mesh) => {
  playSound(mesh.sound);
  setHighlightedMesh(mesh.mesh);

  setTimeout(() => {
    setHighlightedMesh(null);
  }, 200);
};

  return (
    <group {...props} dispose={null}>
    <group rotation={[0, 180, 100]} position={[0, 0.5, 0]}>
    <mesh geometry={nodes.BSurfaceMesh.geometry} material={materials['mbira 269 texture']} />
   
   
    <mesh onClick={() => handleClick({ mesh: nodes.LI_1, sound: SoundFiles('./LI1.wav') })}
    geometry={nodes.LI_1.geometry} material={highlightedMesh === nodes.LI_1 ?  highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.LI_7, sound: SoundFiles('./LI7.wav') })} geometry={nodes.LI_7.geometry} material={ highlightedMesh === nodes.LI_7 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.LI_6, sound: SoundFiles('./LI6.wav') })} geometry={nodes.LI_6.geometry} material={ highlightedMesh === nodes.LI_6 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.B_3, sound: SoundFiles('./B3.wav') })} geometry={nodes.B_3.geometry}    material={ highlightedMesh === nodes.B_3 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.L_4, sound: SoundFiles('./L4.wav') })} geometry={nodes.L_4.geometry}    material={ highlightedMesh === nodes.L_4 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.B_2, sound: SoundFiles('./B2.wav') })} geometry={nodes.B_2.geometry}    material={ highlightedMesh === nodes.B_2 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.L_5, sound: SoundFiles('./L5.wav') })} geometry={nodes.L_5.geometry}    material={ highlightedMesh === nodes.L_5 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.B_7, sound: SoundFiles('./B7.wav') })} geometry={nodes.B_7.geometry}    material={ highlightedMesh === nodes.B_7 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.L_1, sound: SoundFiles('./L1.wav') })} geometry={nodes.L_1.geometry}    material={ highlightedMesh === nodes.L_1 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.B_6, sound: SoundFiles('./B6.wav') })} geometry={nodes.B_6.geometry}    material={ highlightedMesh === nodes.B_6 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.L_5x, sound: SoundFiles('./L5x.wav') })} geometry={nodes.L_5x.geometry} material={ highlightedMesh === nodes.L_5x ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.B_4, sound: SoundFiles('./B4.wav') })} geometry={nodes.B_4.geometry}    material={ highlightedMesh === nodes.B_4 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RT_1, sound: SoundFiles('./RT1.wav') })} geometry={nodes.RT_1.geometry} material={ highlightedMesh === nodes.RT_1 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RT_6, sound: SoundFiles('./RT6.wav') })} geometry={nodes.RT_6.geometry} material={ highlightedMesh === nodes.RT_6 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RT_2, sound: SoundFiles('./RT2.wav') })} geometry={nodes.RT_2.geometry} material={ highlightedMesh === nodes.RT_2 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RT_7, sound: SoundFiles('./RT7.wav') })} geometry={nodes.RT_7.geometry} material={ highlightedMesh === nodes.RT_7 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RT_3, sound: SoundFiles('./RT3.wav') })} geometry={nodes.RT_3.geometry} material={ highlightedMesh === nodes.RT_3 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RT_4, sound: SoundFiles('./RT4.wav') })} geometry={nodes.RT_4.geometry} material={ highlightedMesh === nodes.RT_4 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RT_5, sound: SoundFiles('./RT5.wav') })} geometry={nodes.RT_5.geometry} material={ highlightedMesh === nodes.RT_5 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RI_6, sound: SoundFiles('./RI6.wav') })} geometry={nodes.RI_6.geometry} material={ highlightedMesh === nodes.RI_6 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RI_7, sound: SoundFiles('./RI7.wav') })} geometry={nodes.RI_7.geometry} material={ highlightedMesh === nodes.RI_7 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RI_1, sound: SoundFiles('./RI1.wav') })} geometry={nodes.RI_1.geometry} material={ highlightedMesh === nodes.RI_1 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RI_2, sound: SoundFiles('./RI2.wav') })} geometry={nodes.RI_2.geometry} material={ highlightedMesh === nodes.RI_2 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RI_3, sound: SoundFiles('./RI3.wav') })} geometry={nodes.RI_3.geometry} material={ highlightedMesh === nodes.RI_3 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RI_4, sound: SoundFiles('./RI4.wav') })} geometry={nodes.RI_4.geometry} material={ highlightedMesh === nodes.RI_4 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick({ mesh: nodes.RI_5, sound: SoundFiles('./RI5.wav') })} geometry={nodes.RI_5.geometry} material={ highlightedMesh === nodes.RI_5 ? highlightedMaterial : materials['mbira 269 texture']} />
    
   
    </group>
  </group>
);
}

useGLTF.preload('../../../MBIRA_Modular.glb')