
export const LearnJSX = () => {
    let model = "BMW"
  return (
    <>
       <h1>Learn JSX 1</h1>
       <h1>Learn JSX 2</h1>
       <h1>Corolla {model}</h1>
       <h2>Price: {10+20+30} </h2>

       <h1 className="bg-primary">LearnJSX 3</h1>
       <h1 className={model}>LearnJSX 4</h1>
    </>
  )
}
