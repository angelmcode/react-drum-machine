// import { useState } from 'react'
import './App.css';
import DrumMachine from './components/drum_machine';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container_app'>
      <h1>Drum Machine</h1>
      <DrumMachine />
    </div>
  )
}

export default App
