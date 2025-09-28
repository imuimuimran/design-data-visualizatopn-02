
import axios from 'axios'
import './App.css'
import BubbleChart from './components/BubbleChart'
import ResultChart from './components/ResultChart'
import StackedAreaChart from './components/StackedAreaChart'
import { Suspense } from 'react'
import MarksChart from './components/MarksChart'

const marksPromise = axios.get('marksData.json');

function App() {
  
  return (
    <>
      
      <main>
        <h1 className='text-2xl text-center'>Data Vizualization</h1>
        <ResultChart></ResultChart>
        <StackedAreaChart></StackedAreaChart>
        <BubbleChart></BubbleChart>

        <Suspense fallback={"Data Loading..."}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  )
}

export default App
