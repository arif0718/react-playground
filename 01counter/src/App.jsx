import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(15)

  const addValue = () => {
    setCount(count+1);
  }

  const removeValue = () => {
    setCount(count-1);
  }

  const resetValue = () => {
    setCount(0);
  }

  return (
    <div className='border bg-amber-100 p-4 justify-between items-center'>
      <h1 className='font-bold text-2xl'>Counter</h1>
      <h2 className='text-2xl'>counter value: {count}</h2>
      <br />

      <div className="flex gap-4 justify-center">
    <Button onClick={addValue} className="bg-blue-500 text-white px-4 py-2 cursor-pointer">Increment</Button>
    <Button onClick={removeValue} className="bg-blue-500 text-white px-4 py-2 cursor-pointer">Decrement</Button>
    </div>
    <br />
    <Button onClick={resetValue} className="cursor-pointer">Reset</Button>
  </div>
  )
}

export default App
