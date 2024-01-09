import { useState } from "react"


export const CounterApp = () => {

    const [count, setCount] = useState(0)
    console.log(count);

    const handleCount = () => {
        setCount(count + 1)
        //setCount((prevCount) => (prevCount + 1))
    }
    const resetCount1 = () => {
        setCount(0)
    }


  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increase Count</button>
      <button onClick={resetCount1}>Reset Count</button>
    </>
  )
}
