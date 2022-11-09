import React from 'react'
import ItemListContainer from "./components/ItemListContainer"
import Navegacion from './components/NavBar'


function App() {
  return (

    <div className="App">
      <main>
         <Navegacion className="navbar"/>
         <ItemListContainer  greeting={"Hola, ¿que estas buscando?"}/>
      </main>
    </div>
  
  )
}

export default App