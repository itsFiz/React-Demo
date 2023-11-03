import { useRef } from 'react'
function Login2() {
  let userid = useRef('')
  let password = useRef('')

  function doSubmit() {
    console.log(userid.current.value)
  }
  return (
    <div>
      <input ref={userid} type="text" className="form-control" />
      <br />
      <input ref={password} type="password" className="form-control" />
      <br />
      <button className="btn btn-primary" onClick={doSubmit}></button>
    </div>
  )
}

export default Login2
