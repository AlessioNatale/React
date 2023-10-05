

function App() {
  const name = "Jonh"
  return (
    <>
    <h1>Hello, {name}</h1>
    </>
  )
}

export default App

// Esercizio 03
// Cosa succede se la variabile name non viene passata alla funzione?
// il risultato dovrebbe essere undefined, quindi vedremo solo Hello

// Esercizio 04
// Cosa succede se la name variabile contiene un'espressione JSX invece di una stringa?
//verra renderizzata in codice html e javascript