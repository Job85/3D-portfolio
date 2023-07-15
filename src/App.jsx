import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import MyScene from './components/MyScene';

function App() {

  return (

    <div id='App'>
      <Canvas className='canvas'>
        <MyScene />
      </Canvas>
    </div>
  )
}

export default App
