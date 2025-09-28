
import './App.css'
import BubbleChart from './components/BubbleChart'
import ResultChart from './components/ResultChart'
import StackedAreaChart from './components/StackedAreaChart'

function App() {
  

  return (
    <>
      
      <main>
        <h1 className='text-2xl text-center'>Data Vizualization</h1>
        <ResultChart></ResultChart>
        <StackedAreaChart></StackedAreaChart>
        <BubbleChart></BubbleChart>
      </main>
    </>
  )
}

export default App
