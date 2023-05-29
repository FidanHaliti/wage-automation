
import './App.css'
import WorkerList from './assets/components/Workers/WorkerList'
import Workers from './assets/components/Workers/Workers'
import { useState } from 'react'

function App() {
const [workers, setWorkers] = useState([])

  return (
    <div className="">  
    <h1 className='mt-6 text-center text-white text-3xl'>Automation salary</h1>
      <Workers setWorkers={setWorkers}/>
      <WorkerList workers={workers} setWorkers={setWorkers}/>
    </div>
  )
}

export default App
