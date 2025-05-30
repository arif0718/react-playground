import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJAKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "@#$%&*";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 51);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, setPassword])

  return (
    <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className='text-white text-2xl text-center'>Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden my-4">
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          value={numberAllowed}
          className='cursor-pointer'
          onChange={()=> {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          value={charAllowed}
          className='cursor-pointer'
          onChange={()=> {
            setCharAllowed((prev) => !prev);
          }}
          />
          <label>Characters</label>
        </div>
        
      </div>

    </div>
  )
}

export default App