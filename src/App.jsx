import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a nuestra tienda de repuestos Apple!" />
    </>
  )
}

export default App

