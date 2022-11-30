import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import NavBar from './components/Navbar.jsx'
import Context from './context/context.js'
import Carrito from './views/Carrito.jsx'
import Bordados from './views/Bordados.jsx'
import CasaPajaros from './views/Casapajaros.jsx'
import Home from './views/Home.jsx'
import Lamparas from './views/Lamparas.jsx'
import NotFound from './views/Notfound.jsx'
import QuienesSomos from './views/QuienesSomos.jsx'
import Contactanos from './views/Contactanos.jsx'
import Detail from './views/detail.jsx';


function App() {

    const [casas, setCasas ] = useState([])
    const [lamparas, setLamparas] = useState([])
    const [bordados, setBordados] = useState([])

    const dataProductos = "/productos.json";
  
    useEffect(() => {
        fetch(dataProductos)
          .then((res) => res.json())
          .then((json) => {         
            setCasas(json.casasnido)
            setLamparas(json.lamparas)
            setBordados(json.bordados)
            
            
          })
          .catch((e) => console.log(e))
      }, []);

      const globalState = { casas, lamparas, bordados }
      
    

    return (
        <div className="App">
        <Context.Provider value={globalState}>
            <BrowserRouter>
                <NavBar></NavBar>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/carrito' element={<Carrito />}></Route>
                        <Route path='/bordados' element={<Bordados />}></Route>
                        <Route path='/casapajaros' element={<CasaPajaros />} ></Route>
                        <Route path='/lamparas' element={<Lamparas />} ></Route>
                        <Route path='/quienessomos' element={<QuienesSomos />}></Route>
                        <Route path='/contactanos' element={<Contactanos />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                        <Route path='/detalle/:id' element={ <Detail />}></Route>
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
            
        </div>
    )
}

export default App
