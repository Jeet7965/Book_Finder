import { useEffect, useState } from 'react'

import Navbar from './Component/Navbar';
import './App.css'

import HomePage from './HomePage';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray">
        <Navbar></Navbar>
        <HomePage></HomePage>
      </div>

    </>
  )
}

export default App
