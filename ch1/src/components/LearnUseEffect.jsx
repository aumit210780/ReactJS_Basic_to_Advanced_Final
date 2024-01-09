import { useEffect, useState } from "react"


export const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const handleCount = () =>{
        setCount(count + 1)
    }

    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRandomNumber);
    };

    //useEffect(() => {
     //   console.log("useEffect Called");
   // })

    //useEffect(() => {
    //   console.log("useEffect Called");
    //}, [])

    //useEffect(() => {
    //    console.log("useEffect Called");
    // }, [count])

    useEffect(() => {
        console.log("useEffect Called");
        return () => {
            console.log("Component will unmount !!");
        }
     }, [count])
  return (
    <>
       <h1>Count: {count}</h1>
       <button onClick={handleCount}>Increase Count</button>
       <hr />
       <h2>Random Number: {randomNumber}</h2>
       <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}
