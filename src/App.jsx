import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import CartWidget from './componentes/CartWidget/CartWidget.jsx'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx'
import './App.css'



const App = () => {
  return (
    <>  
      <NavBar/>   
      <ItemListContainer greeting='Buenos días, buenas tardes'/>

    </>
  )
}

export default App