import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Define the highlighted material
const highlightedMaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  roughness: 0.5,
  metalness: 0.5,
  emissive: 0xff0000,
  emissiveIntensity: 4,
});

export function Model(props) {
  const { nodes, materials } = useGLTF('/MBIRA_Modular.glb');

  const [highlightedMesh, setHighlightedMesh] = useState(null);
  const [preloadedSounds, setPreloadedSounds] = useState({});

  // Preload sounds
  useEffect(() => {
    const soundFilenames = [
      'RI1', 'RI2', 'RI3', 'RI4', 'RI5', 'RI6', 'RI7',
      'RT1', 'RT2', 'RT3', 'RT4', 'RT5', 'RT6', 'RT7',
      'L1', 'L4', 'L5', 'L5x', 'LI1', 'LI6', 'LI7',
      'B2', 'B3', 'B4', 'B6', 'B7'
    ];

    const sounds = {};
    soundFilenames.forEach(name => {
      const audio = new Audio(`/assets/sound/${name}.mp3`);
      audio.load();
      sounds[`${name}.mp3`] = audio;
    });

    setPreloadedSounds(sounds);
  }, []);

  // Key bindings for playing sounds and highlighting meshes
  useEffect(() => {
    const keyMeshMap = {
      KeyY: { mesh: nodes.RI_1, sound: './RI1.mp3' },
      KeyU: { mesh: nodes.RI_2, sound: './RI2.mp3' },
      KeyI: { mesh: nodes.RI_3, sound: './RI3.mp3' },
      KeyO: { mesh: nodes.RI_4, sound: './RI4.mp3' },
      KeyP: { mesh: nodes.RI_5, sound: './RI5.mp3' },
      KeyR: { mesh: nodes.RI_6, sound: './RI6.mp3' },
      KeyT: { mesh: nodes.RI_7, sound: './RI7.mp3' },
      KeyN: { mesh: nodes.RT_1, sound: './RT1.mp3' },
      KeyM: { mesh: nodes.RT_2, sound: './RT2.mp3' },
      KeyJ: { mesh: nodes.RT_3, sound: './RT3.mp3' },
      KeyK: { mesh: nodes.RT_4, sound: './RT4.mp3' },
      KeyL: { mesh: nodes.RT_5, sound: './RT5.mp3' },
      KeyG: { mesh: nodes.RT_6, sound: './RT6.mp3' },
      KeyH: { mesh: nodes.RT_7, sound: './RT7.mp3' },
      KeyD: { mesh: nodes.L_1, sound: './L1.mp3' },
      KeyA: { mesh: nodes.L_4, sound: './L4.mp3' },
      KeyS: { mesh: nodes.L_5, sound: './L5.mp3' },
      KeyF: { mesh: nodes.L_5x, sound: './L5x.mp3' },
      KeyQ: { mesh: nodes.LI_1, sound: './LI1.mp3' },
      KeyE: { mesh: nodes.LI_6, sound: './LI6.mp3' },
      KeyW: { mesh: nodes.LI_7, sound: './LI7.mp3' },
      KeyX: { mesh: nodes.B_2, sound: './B2.mp3' },
      KeyZ: { mesh: nodes.B_3, sound: './B3.mp3' },
      KeyB: { mesh: nodes.B_4, sound: './B4.mp3' },
      KeyV: { mesh: nodes.B_6, sound: './B6.mp3' },
      KeyC: { mesh: nodes.B_7, sound: './B7.mp3' },
    };

    const handleKeyDown = (event) => {
      const keyInfo = keyMeshMap[event.code];
      if (keyInfo) {
        playSound(keyInfo.sound);
        setHighlightedMesh(keyInfo.mesh);
        setTimeout(() => setHighlightedMesh(null), 200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nodes, preloadedSounds]);

  // Play sound function
  const playSound = (filename) => {
    const sound = preloadedSounds[filename];
    if (sound) {
      sound.cloneNode().play();
    }
  };

  // Click handler for meshes
  const handleClick = (mesh, sound) => {
    playSound(sound);
    setHighlightedMesh(mesh);
    setTimeout(() => setHighlightedMesh(null), 200);
  };

  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 180, 100]} position={[0, 0.5, 0]}>
        <mesh geometry={nodes.BSurfaceMesh.geometry} material={materials['mbira 269 texture']} />

        <mesh
          onClick={() => handleClick(nodes.LI_1, 'LI1.mp3')}
          geometry={nodes.LI_1.geometry}
          material={highlightedMesh === nodes.LI_1 ? highlightedMaterial : materials['mbira 269 texture']}
        />
    <mesh onClick={() => handleClick(nodes.LI_7, './LI7.mp3')} geometry={nodes.LI_7.geometry} material={ highlightedMesh === nodes.LI_7 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.LI_6, './LI6.mp3')} geometry={nodes.LI_6.geometry} material={ highlightedMesh === nodes.LI_6 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.B_3, './B3.mp3')} geometry={nodes.B_3.geometry}    material={ highlightedMesh === nodes.B_3 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.L_4, './L4.mp3')} geometry={nodes.L_4.geometry}    material={ highlightedMesh === nodes.L_4 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.B_2, './B2.mp3')} geometry={nodes.B_2.geometry}    material={ highlightedMesh === nodes.B_2 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.L_5, './L5.mp3')} geometry={nodes.L_5.geometry}    material={ highlightedMesh === nodes.L_5 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.B_7, './B7.mp3')} geometry={nodes.B_7.geometry}    material={ highlightedMesh === nodes.B_7 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.L_1, './L1.mp3')} geometry={nodes.L_1.geometry}    material={ highlightedMesh === nodes.L_1 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.B_6, './B6.mp3')} geometry={nodes.B_6.geometry}    material={ highlightedMesh === nodes.B_6 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.L_5x, './L5x.mp3')} geometry={nodes.L_5x.geometry} material={ highlightedMesh === nodes.L_5x ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.B_4, './B4.mp3')} geometry={nodes.B_4.geometry}    material={ highlightedMesh === nodes.B_4 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RT_1, './RT1.mp3')} geometry={nodes.RT_1.geometry} material={ highlightedMesh === nodes.RT_1 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RT_6, './RT6.mp3')} geometry={nodes.RT_6.geometry} material={ highlightedMesh === nodes.RT_6 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RT_2, './RT2.mp3')} geometry={nodes.RT_2.geometry} material={ highlightedMesh === nodes.RT_2 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RT_7, './RT7.mp3')} geometry={nodes.RT_7.geometry} material={ highlightedMesh === nodes.RT_7 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RT_3, './RT3.mp3')} geometry={nodes.RT_3.geometry} material={ highlightedMesh === nodes.RT_3 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RT_4, './RT4.mp3')} geometry={nodes.RT_4.geometry} material={ highlightedMesh === nodes.RT_4 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RT_5, './RT5.mp3')} geometry={nodes.RT_5.geometry} material={ highlightedMesh === nodes.RT_5 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RI_6, './RI6.mp3')} geometry={nodes.RI_6.geometry} material={ highlightedMesh === nodes.RI_6 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RI_7, './RI7.mp3')} geometry={nodes.RI_7.geometry} material={ highlightedMesh === nodes.RI_7 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RI_1, './RI1.mp3')} geometry={nodes.RI_1.geometry} material={ highlightedMesh === nodes.RI_1 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RI_2, './RI2.mp3')} geometry={nodes.RI_2.geometry} material={ highlightedMesh === nodes.RI_2 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RI_3, './RI3.mp3')} geometry={nodes.RI_3.geometry} material={ highlightedMesh === nodes.RI_3 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RI_4, './RI4.mp3')} geometry={nodes.RI_4.geometry} material={ highlightedMesh === nodes.RI_4 ? highlightedMaterial : materials['mbira 269 texture']} />
    <mesh onClick={() => handleClick(nodes.RI_5, './RI5.mp3')} geometry={nodes.RI_5.geometry} material={ highlightedMesh === nodes.RI_5 ? highlightedMaterial : materials['mbira 269 texture']} />
    
   
    </group>
  </group>
);
}

useGLTF.preload('/MBIRA_Modular.glb')