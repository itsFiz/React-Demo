const Greeting2 = (props) => {
  return (
    <div>
      <button onClick={() => alert('Hello ' + props.name)}>Click me</button>
    </div>
  )
}

export default Greeting2
