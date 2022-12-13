import { formatPrice } from "../components/utils/Utils.js"
import ListadoCarrito from "../components/ListadoCarrito.jsx"
import { useContext } from "react"
import Context from "../context/context.js"


const Carrito = ()=> {
 const { cart } = useContext(Context)
  return(
    <div className="carrito">

       <h3>detalle de la compra</h3>
       {
        cart.length !== 0 ? <ListadoCarrito cart={cart} ></ListadoCarrito>: <p>no hay elementos</p>
       }
       
    </div>
    
  )



}

export default Carrito