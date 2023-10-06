

function App() {
  const nameHello = (name) =>{
    return <h1>Hello, {name} </h1>
  } 
  return (
    <>
      {nameHello("Jonh")}
    </>
  )
}

export default App
