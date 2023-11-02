import React, { useState } from 'react'

function NumberArray() {
  const [number, setNumber] = useState('')
  const [numberArray, setNumberArray] = useState([])

  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }

  const addNumberToArray = () => {
    if (number !== '') {
      setNumberArray([...numberArray, String(number)])
      setNumber('')
    }
  }

  const deleteNumberFromArray = (index) => {
    const newArray = [...numberArray]
    newArray.splice(index, 1)
    setNumberArray(newArray)
  }

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter a number"
      />
      <button onClick={addNumberToArray}>Add to Array</button>
      <ul>
        {numberArray.map((item, index) => (
          <li key={index} onDoubleClick={() => deleteNumberFromArray(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NumberArray
