import { useState } from 'react'

function Login() {
  let [username, setUsername] = useState('')
  function doBlur(event) {
    console.log(event)
    setUsername(event.target.value)
  }

  return (
    <div>
      <input type="text" onBlur={doBlur} />
      <div>{username}</div>
    </div>
  )
}
export default Login
