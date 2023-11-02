function LoopDemo() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function doInput(event) {
    let value = event.target.value
    arr.push(value)
    console.log(arr)
  }
  return (
    <div>
      <input type="text" onBlur={doInput}></input>
      <button></button>
      {arr.map((item, index) => (
        <li key={index}>
          {index}
          {item}
        </li>
      ))}
    </div>
  )
}

export default LoopDemo
