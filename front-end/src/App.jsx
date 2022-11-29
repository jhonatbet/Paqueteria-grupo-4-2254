import Login from './components/Login'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Registro } from './components/Registro'
import { Ordenes } from './components/Ordenes'
import { RouterPrincipal } from './routers/RouterPrincipal'



function App() { 

  return (
      <div>
        <RouterPrincipal/>
      </div>
  )
}

export default App
