import { useState } from "react"

function App() {

  const [state, setState] = useState(
    {
      bettedAmount: 100,
      bettedOdd: 2.4,
      protectionOdd: 2.05,
    }
  )

  function handleState(event) {
    const { target: { name, value } } = event;
    setState({...state, [name]: value})
  }

  function calculateProtectionAmount() {
    const { bettedAmount, bettedOdd, protectionOdd } = state;
    return (bettedAmount * bettedOdd) / protectionOdd
  }

  return (
    <div className="App">
      <label>
        Insira o montante apostado:
        <input
          type="number"
          name="bettedAmount"
          onChange={handleState}
        />
      </label>
      <label>
        Insira a odd:
        <input
          type="number"
          name="bettedOdd"
          onChange={handleState}
        />
      </label>
      <label>
        Insira a odd da proteção:
        <input
          type="number"
          name="protectionOdd"
          onChange={handleState}
        />
      </label>
      <span></span>
    </div>
  )
}

export default App
