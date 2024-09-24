import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './style.css';
import MacContainer from './components/MacContainer';

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <MacContainer />

    </Canvas>
  );
}

export default App;
