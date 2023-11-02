import './App.css'
import Greeting from './Greeting'
import Greeting2 from './Greeting2'
import Home from './Home'

function App() {
  //var, let, const
  const name = 'Hasbullah'

  return (
    <div className="App">
      <h1>Hello World {name}</h1>
      <Home />
      <Greeting name="Fiz" age="23"></Greeting>
      <Greeting2 name="Fiz"></Greeting2>
      <Greeting2 name="Loki" />
    </div>
  )
}

export default App
