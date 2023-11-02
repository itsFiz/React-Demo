import { useState } from 'react'

function Counter() {
  let [no, setNo] = useState(0)

  function increment() {
    no++
    setNo(no)
    console.log(no)
  }
  function decrement() {
    no--
    setNo(no)
    console.log(no)
  }

  return (
    <div>
      No: {no}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>+</button>
    </div>
  )
}

export default Counter
