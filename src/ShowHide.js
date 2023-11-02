function ShowHide() {
  let [showMessage, setShowMessage] = useState(false)

  function doClick() {
    showMessage = !showMessage
    setShowMessage(showMessage)
    console.log(showMessage)
  }

  return (
    <div>
      {showMessage && <p>Hello World</p>}
      <button onClick={doClick} classname="btn btn-primary">
        Show/Hide
      </button>
    </div>
  )
}
