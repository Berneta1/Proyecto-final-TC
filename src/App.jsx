import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
//views
import Carrito from "./views/Carrito.jsx";
import Bordados from "./views/Bordados.jsx";
import CasaPajaros from "./views/Casapajaros.jsx";
import Home from "./views/Home.jsx";
import Lamparas from "./views/Lamparas.jsx";
import NotFound from "./views/Notfound.jsx";
import QuienesSomos from "./views/QuienesSomos.jsx";
import Contactanos from "./views/Contactanos.jsx";
import Detail from "./views/detail.jsx";
import Buscar from "./views/Buscar.jsx";
import Login from "./views/Login";
import Admin from "./views/Admin";
import Checkout from "./views/Checkout.jsx";

import Context from "./context/context.js";

function App() {
  //creamos los estados, solicitamos la data a la api, clasificamos por tipo de producto y la pasamos a un estado global.
  const [casas, setCasas] = useState([]);
  const [lamparas, setLamparas] = useState([]);
  const [bordados, setBordados] = useState([]);
  const [todos, setTodos] = useState([]);
  const [cart, setCart] = useState([]);
  const dataProductos = "/productos.json";

  useEffect(() => {
    fetch(dataProductos)
      .then((res) => res.json())
      .then((json) => {
        setCasas(json.casasnido);
        setLamparas(json.lamparas);
        setBordados(json.bordados);
        setTodos(json.todos);
      })
      .catch((e) => console.log(e));
  }, []);

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((product) => product.id == item.id);
    const updateCart = [...cart];
    if (itemIndex === -1) {
      const product = {
        id: item.id,
        count: 1,
        price: item.price,
        img1: item.img1,
        name: item.name,
      };
      updateCart.push(product);
    } else {
      updateCart[itemIndex].count += 1;
    }
    setCart(updateCart);
  };

  const removeFromCart = (item) => {
    const itemIndex = cart.findIndex((product) => product.id === item.id);
    const updateCart = [...cart];

    updateCart[itemIndex].count -= 1;
    if (updateCart[itemIndex].count <= 0) {
      updateCart.splice(itemIndex, 1);
    }
    setCart(updateCart);
  };

  const cartTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.count * item.price));

    return total;
  };

  const globalState = {
    todos,
    casas,
    lamparas,
    bordados,
    cart,
    addToCart,
    removeFromCart,
    cartTotal,
  };

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
            <Route path="/bordados" element={<Bordados />}></Route>
            <Route path="/casapajaros" element={<CasaPajaros />}></Route>
            <Route path="/lamparas" element={<Lamparas />}></Route>
            <Route path="/quienessomos" element={<QuienesSomos />}></Route>
            <Route path="/contactanos" element={<Contactanos />}></Route>
            <Route path="/buscar" element={<Buscar />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/:category/:name" element={<Detail />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin></Admin>
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
