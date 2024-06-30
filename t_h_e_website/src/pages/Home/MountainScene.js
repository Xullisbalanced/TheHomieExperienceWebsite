import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Html } from '@react-three/drei';

const MountainScene = () => {
  // Load textures or models as needed
  const mountainTexture = useLoader(TextureLoader, '/path/to/mountain/texture.jpg');
  const skiLiftTexture = useLoader(TextureLoader, '/path/to/skilift/texture.jpg');

  return (
    <>
      {/* Mountain */}
      <mesh position={[0, -5, -20]}>
        <boxGeometry args={[20, 10, 20]} />
        <meshStandardMaterial map={mountainTexture} />
      </mesh>

      {/* Ski Lift */}
      <mesh position={[5, 0, -10]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial map={skiLiftTexture} />
      </mesh>

      {/* Sign */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[5, 3]} />
        <meshStandardMaterial color="white" />
        <Html scale={10} position={[0, 0, 0.1]} transform>
          <div className="menu-sign">
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/instructors">Instructors</a></li>
              <li><a href="/shop">Shop</a></li>
            </ul>
          </div>
        </Html>
      </mesh>
    </>
  );
};

export default MountainScene;
