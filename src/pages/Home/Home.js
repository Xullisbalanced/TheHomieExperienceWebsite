import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import MountainScene from './MountainScene';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Canvas camera={{ fov: 30, position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <MountainScene />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Home;
