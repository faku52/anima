import React from 'react'
import ItemListContainer from "./components/ItemListContainer"
import Navegacion from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (

    <div className="App">
      <main>
         <Navegacion className="navbar"/>
         <ItemListContainer  greeting={"Hola, ¿que estas buscando?"}/>
         <ItemDetailContainer/>
      </main>
    </div>
  
  )
}

export default App